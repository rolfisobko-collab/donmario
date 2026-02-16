"use server"

import { createBooking, createGuest, getRoomBySlug, getAllRooms, updateGuestStats } from "@/lib/db"
import { generateBookingCode, calculateNights, calculateTotalPrice } from "@/lib/booking-utils"

export type BookingFormData = {
  roomSlug: string
  checkIn: string
  checkOut: string
  guestsCount: number
  guestInfo: {
    firstName: string
    lastName: string
    email: string
    phone?: string
    country?: string
    documentType?: string
    documentNumber?: string
    notes?: string
  }
}

export type BookingResult = {
  success: boolean
  error?: string
  booking?: {
    code: string
    id: number
    total: number
    nights: number
  }
}

export async function submitBooking(data: BookingFormData): Promise<BookingResult> {
  try {
    const { roomSlug, checkIn, checkOut, guestsCount, guestInfo } = data

    // Get room details
    const room = await getRoomBySlug(roomSlug)
    if (!room) {
      return { success: false, error: "Habitación no encontrada" }
    }

    // Check room capacity
    if (guestsCount > room.max_guests) {
      return {
        success: false,
        error: `Esta habitación tiene capacidad máxima para ${room.max_guests} personas`,
      }
    }

    // Create or find guest
    let guest
    try {
      guest = await createGuest({
        first_name: guestInfo.firstName,
        last_name: guestInfo.lastName,
        email: guestInfo.email,
        phone: guestInfo.phone || undefined,
        country: guestInfo.country || undefined,
        document_type: guestInfo.documentType || undefined,
        document_number: guestInfo.documentNumber || undefined,
      })
    } catch (error: any) {
      if (error.message?.includes("duplicate") || error.message?.includes("unique")) {
        return {
          success: false,
          error: "Este email ya está registrado. Por favor contactanos por WhatsApp.",
        }
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
      notes: guestInfo.notes || undefined,
    })

    // Update guest stats
    await updateGuestStats(guest.id, totalPrice)

    return {
      success: true,
      booking: {
        code: bookingCode,
        id: booking.id,
        total: totalPrice,
        nights: totalNights,
      },
    }
  } catch (error: any) {
    console.error("[v0] Error creating booking:", error)
    return {
      success: false,
      error: "Error al procesar la reserva. Por favor intenta nuevamente.",
    }
  }
}

export async function createBookingAction(formData: FormData): Promise<BookingResult> {
  try {
    const firstName = formData.get("first_name") as string
    const lastName = formData.get("last_name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const country = formData.get("country") as string
    const documentNumber = formData.get("document_number") as string
    const roomId = Number.parseInt(formData.get("room_id") as string)
    const checkIn = formData.get("check_in") as string
    const checkOut = formData.get("check_out") as string
    const guestsCount = Number.parseInt(formData.get("guests_count") as string)
    const notes = formData.get("notes") as string

    // Validate required fields
    if (!firstName || !lastName || !email || !roomId || !checkIn || !checkOut || !guestsCount) {
      return { success: false, error: "Todos los campos requeridos deben ser completados" }
    }

    // Get room details by ID
    const rooms = await getAllRooms()
    const room = rooms.find((r) => r.id === roomId)

    if (!room) {
      return { success: false, error: "Habitación no encontrada" }
    }

    // Check room capacity
    if (guestsCount > room.max_guests) {
      return {
        success: false,
        error: `Esta habitación tiene capacidad máxima para ${room.max_guests} personas`,
      }
    }

    // Create or find guest
    let guest
    try {
      guest = await createGuest({
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone || undefined,
        country: country || undefined,
        document_number: documentNumber || undefined,
      })
    } catch (error: any) {
      if (error.message?.includes("duplicate") || error.message?.includes("unique")) {
        return {
          success: false,
          error: "Este email ya está registrado. Por favor usa otro email.",
        }
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
      notes: notes || undefined,
    })

    // Update guest stats
    await updateGuestStats(guest.id, totalPrice)

    return {
      success: true,
      booking: {
        code: bookingCode,
        id: booking.id,
        total: totalPrice,
        nights: totalNights,
      },
    }
  } catch (error: any) {
    console.error("[v0] Error creating booking from admin:", error)
    return {
      success: false,
      error: "Error al procesar la reserva. Por favor intenta nuevamente.",
    }
  }
}
