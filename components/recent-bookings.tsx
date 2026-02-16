type RecentBookingsProps = {
  bookings: Array<{
    id: number
    booking_code: string
    guest_name: string
    guest_email: string
    total_price: number
    status: string
    created_at: Date | string
  }>
}

export function RecentBookings({ bookings }: RecentBookingsProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      pending: "Pendiente",
      confirmed: "Confirmado",
      checked_in: "En Curso",
      checked_out: "Finalizada",
      cancelled: "Cancelado",
    }
    return labels[status] || status
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "text-green-600"
      case "pending":
        return "text-yellow-600"
      case "cancelled":
        return "text-red-600"
      case "checked_in":
        return "text-blue-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="space-y-8">
      {bookings.length === 0 ? (
        <p className="text-sm text-muted-foreground text-center py-4">No hay reservas recientes</p>
      ) : (
        bookings.map((booking) => (
          <div key={booking.id} className="flex items-center">
            <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm mr-4">
              {getInitials(booking.guest_name)}
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">{booking.guest_name}</p>
              <p className="text-xs text-muted-foreground">{booking.guest_email}</p>
            </div>
            <div className="ml-auto font-medium text-sm">
              <div className="text-right">${booking.total_price.toLocaleString("es-AR")}</div>
              <div className={`text-xs text-right ${getStatusColor(booking.status)}`}>
                {getStatusLabel(booking.status)}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
