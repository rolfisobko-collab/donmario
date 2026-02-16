"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { MoreHorizontal, Search, Trash2, CheckCircle, XCircle, AlertCircle, Clock } from "lucide-react"
import { EditRoomDialog } from "@/components/edit-room-dialog"
import { deleteRoomAction } from "@/lib/actions/room-actions"
import { useRouter } from "next/navigation"

type AdminRoomsTableProps = {
  rooms: Array<{
    id: number
    slug: string
    name: string
    description?: string
    max_guests: number
    base_price: number
    beds_info?: any
    amenities?: any
    images?: any
    status: string
  }>
}

export function AdminRoomsTable({ rooms }: AdminRoomsTableProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [roomToDelete, setRoomToDelete] = useState<number | null>(null)
  const [deleting, setDeleting] = useState(false)
  const router = useRouter()

  const filteredRooms = rooms.filter(
    (room) =>
      (room.name?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      (room.status?.toLowerCase() || "").includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "available":
      case "disponible":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "occupied":
      case "ocupada":
        return "bg-red-100 text-red-800 hover:bg-red-200"
      case "cleaning":
      case "limpieza":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      case "maintenance":
      case "mantenimiento":
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "available":
      case "disponible":
        return <CheckCircle className="w-3 h-3 mr-1" />
      case "occupied":
      case "ocupada":
        return <XCircle className="w-3 h-3 mr-1" />
      case "cleaning":
      case "limpieza":
        return <Clock className="w-3 h-3 mr-1" />
      case "maintenance":
      case "mantenimiento":
        return <AlertCircle className="w-3 h-3 mr-1" />
      default:
        return null
    }
  }

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      available: "Disponible",
      disponible: "Disponible",
      occupied: "Ocupada",
      ocupada: "Ocupada",
      cleaning: "Limpieza",
      limpieza: "Limpieza",
      maintenance: "Mantenimiento",
      mantenimiento: "Mantenimiento",
    }
    return labels[status.toLowerCase()] || status
  }

  async function handleDelete() {
    if (!roomToDelete) return

    setDeleting(true)
    const result = await deleteRoomAction(roomToDelete)
    setDeleting(false)
    setDeleteDialogOpen(false)
    setRoomToDelete(null)

    if (result.success) {
      router.refresh()
    } else {
      alert(result.message)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por nombre o estado..."
            className="pl-8 bg-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Habitación</TableHead>
              <TableHead>Capacidad</TableHead>
              <TableHead>Precio / Noche</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRooms.map((room) => (
              <TableRow key={room.id}>
                <TableCell className="font-medium">
                  <div className="flex flex-col">
                    <span className="font-bold text-primary">{room.name}</span>
                    <span className="text-xs text-muted-foreground">ID: {room.id}</span>
                  </div>
                </TableCell>
                <TableCell>{room.max_guests} Personas</TableCell>
                <TableCell className="font-medium">${room.base_price.toLocaleString("es-AR")}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={`border-0 ${getStatusColor(room.status)}`}>
                    {getStatusIcon(room.status)}
                    {getStatusLabel(room.status)}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Abrir menú</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                      <EditRoomDialog room={room} />
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="text-red-600"
                        onSelect={() => {
                          setRoomToDelete(room.id)
                          setDeleteDialogOpen(true)
                        }}
                      >
                        <Trash2 className="mr-2 h-4 w-4" /> Eliminar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. Esto eliminará permanentemente la habitación del sistema.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleting}>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} disabled={deleting} className="bg-red-600 hover:bg-red-700">
              {deleting ? "Eliminando..." : "Eliminar"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
