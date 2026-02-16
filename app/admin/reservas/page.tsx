import { BookingsTable } from "@/components/bookings-table"
import { getAllBookings, getAllRooms } from "@/lib/db"
import { NewBookingDialog } from "@/components/new-booking-dialog"

export default async function ReservasPage() {
  const [bookings, rooms] = await Promise.all([getAllBookings(), getAllRooms()])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-serif font-bold text-gray-900">Reservas</h2>
          <p className="text-muted-foreground">Gestiona todas las reservas del hotel.</p>
        </div>
        <NewBookingDialog rooms={rooms} />
      </div>

      <BookingsTable bookings={bookings} />
    </div>
  )
}
