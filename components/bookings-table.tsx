"use client"

import { useState } from "react"
import { Search, Filter, MoreVertical, Eye, Edit, Trash2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { getBookingStatusColor, getBookingStatusLabel } from "@/lib/booking-utils"

type BookingsTableProps = {
  bookings: Array<{
    id: number
    booking_code: string
    guest_name: string
    guest_email: string
    room_name: string
    check_in: Date | string
    check_out: Date | string
    guests_count: number
    total_price: number
    status: string
  }>
}

export function BookingsTable({ bookings }: BookingsTableProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.guest_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.booking_code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.room_name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const formatDate = (date: Date | string) => {
    const d = typeof date === "string" ? new Date(date) : date
    return d.toLocaleDateString("es-AR")
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Buscar por huésped, código o habitación..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="h-4 w-4" />
            Filtros
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Código</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Huésped
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Habitación
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Check-in
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Check-out
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Huéspedes
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {filteredBookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {booking.booking_code}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.guest_name}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{booking.room_name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{formatDate(booking.check_in)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{formatDate(booking.check_out)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{booking.guests_count}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  ${booking.total_price.toLocaleString("es-AR")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge className={getBookingStatusColor(booking.status)}>
                    {getBookingStatusLabel(booking.status)}
                  </Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        Ver Detalles
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Cancelar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredBookings.length === 0 && (
        <div className="p-12 text-center text-muted-foreground">
          No se encontraron reservas que coincidan con tu búsqueda.
        </div>
      )}
    </div>
  )
}
