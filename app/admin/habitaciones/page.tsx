import { AdminRoomsTable } from "@/components/admin-rooms-table"
import { CreateRoomDialog } from "@/components/create-room-dialog"
import { getAllRooms } from "@/lib/db"

export default async function AdminRoomsPage() {
  const rooms = await getAllRooms()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif font-bold text-primary">Gestión de Habitaciones</h1>
          <p className="text-muted-foreground">Administra el estado, precios y disponibilidad de las habitaciones.</p>
        </div>
        <CreateRoomDialog />
      </div>

      <AdminRoomsTable rooms={rooms} />
    </div>
  )
}
