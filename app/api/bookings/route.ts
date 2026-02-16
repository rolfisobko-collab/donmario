import { type NextRequest, NextResponse } from "next/server"
import { createBooking, createGuest, getRoomBySlug, updateGuestStats } from "@/lib/db"
import { generateBookingCode, calculateNights, calculateTotalPrice } from "@/lib/booking-utils"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { roomSlug, checkIn, checkOut, guestsCount, guestInfo } = body

    // Validate required fields
    if (!roomSlug || !checkIn || !checkOut || !guestsCount || !guestInfo) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    // Get room details
    const room = await getRoomBySlug(roomSlug)
    if (!room) {
      return NextResponse.json({ error: "Habitación no encontrada" }, { status: 404 })
    }

    // Check room capacity
    if (guestsCount > room.max_guests) {
      return NextResponse.json(
        { error: `Esta habitación tiene capacidad máxima para ${room.max_guests} personas` },
        { status: 400 },
      )
    }

    // Create or find guest
    let guest
    try {
      // Try to create new guest
      guest = await createGuest({
        first_name: guestInfo.firstName,
        last_name: guestInfo.lastName,
        email: guestInfo.email,
        phone: guestInfo.phone || null,
        country: guestInfo.country || null,
        document_type: guestInfo.documentType || null,
        document_number: guestInfo.documentNumber || null,
      })
    } catch (error: any) {
      // If email already exists, we could fetch the existing guest here
      // For now, return error
      if (error.message?.includes("duplicate") || error.message?.includes("unique")) {
        return NextResponse.json(
          { error: "Este email ya está registrado. Por favor contactanos por WhatsApp." },
          { status: 409 },
        )
      }
      throw error
    }

    // Calculate booking details
    const totalNights = calculateNights(checkIn, checkOut)
    const pricePerNight = Number(room.base_price)
    const totalPrice = calculateTotalPrice(pricePerNight, totalNights)
    const bookingCode = generateBookingCode()

    // Create booking
    const booking = await createBooking({
      booking_code: bookingCode,
      guest_id: guest.id,
      room_id: room.id,
      check_in: checkIn,
      check_out: checkOut,
      guests_count: guestsCount,
      total_nights: totalNights,
      price_per_night: pricePerNight,
      total_price: totalPrice,
      notes: guestInfo.notes || null,
    })

    // Update guest stats
    await updateGuestStats(guest.id, totalPrice)

    return NextResponse.json({
      success: true,
      booking: {
        code: bookingCode,
        id: booking.id,
        total: totalPrice,
        nights: totalNights,
      },
    })
  } catch (error: any) {
    console.error("[v0] Error creating booking:", error)
    return NextResponse.json({ error: "Error al procesar la reserva. Por favor intenta nuevamente." }, { status: 500 })
  }
}
