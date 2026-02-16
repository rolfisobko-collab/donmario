import { AdminGuestsTable } from "@/components/admin-guests-table"
import { Button } from "@/components/ui/button"
import { UserPlus } from "lucide-react"
import { getAllGuests } from "@/lib/db"

export default async function AdminGuestsPage() {
  const guests = await getAllGuests()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif font-bold text-primary">Gestión de Huéspedes</h1>
          <p className="text-muted-foreground">
            Administra la información de los huéspedes y su historial de reservas.
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white">
          <UserPlus className="w-4 h-4 mr-2" />
          Nuevo Huésped
        </Button>
      </div>

      <AdminGuestsTable guests={guests} />
    </div>
  )
}
