"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Search, Edit, Trash2, Eye, Mail, Phone } from "lucide-react"

type AdminGuestsTableProps = {
  guests: Array<{
    id: number
    first_name: string
    last_name: string
    email: string
    phone: string | null
    country: string | null
    status: string
    total_spent: number
    total_bookings: number
    created_at: Date | string
  }>
}

export function AdminGuestsTable({ guests }: AdminGuestsTableProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredGuests = guests.filter(
    (guest) =>
      `${guest.first_name} ${guest.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guest.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (guest.country && guest.country.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "vip":
        return "bg-accent/20 text-accent border-accent/30"
      case "active":
      case "activo":
        return "bg-primary/20 text-primary border-primary/30"
      case "new":
      case "nuevo":
        return "bg-secondary/20 text-secondary border-secondary/30"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      vip: "VIP",
      active: "Activo",
      new: "Nuevo",
    }
    return labels[status.toLowerCase()] || status
  }

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName[0]}${lastName[0]}`.toUpperCase()
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por nombre, email o país..."
            className="pl-8 bg-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border bg-white shadow-sm overflow-x-auto">
        <Table className="min-w-[800px]">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Huésped</TableHead>
              <TableHead className="w-[200px]">Contacto</TableHead>
              <TableHead className="hidden md:table-cell">País</TableHead>
              <TableHead className="hidden lg:table-cell text-center">Reservas</TableHead>
              <TableHead className="hidden lg:table-cell">Total Gastado</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredGuests.map((guest) => (
              <TableRow key={guest.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {getInitials(guest.first_name, guest.last_name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-medium">
                        {guest.first_name} {guest.last_name}
                      </span>
                      <span className="text-xs text-muted-foreground">ID: {guest.id}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Mail className="w-3 h-3" />
                      <span className="text-xs truncate max-w-[150px]">{guest.email}</span>
                    </div>
                    {guest.phone && (
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Phone className="w-3 h-3" />
                        <span className="text-xs">{guest.phone}</span>
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">{guest.country || "-"}</TableCell>
                <TableCell className="hidden lg:table-cell text-center font-medium">{guest.total_bookings}</TableCell>
                <TableCell className="hidden lg:table-cell font-medium">
                  ${guest.total_spent.toLocaleString("es-AR")}
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={getStatusColor(guest.status)}>
                    {getStatusLabel(guest.status)}
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
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" /> Ver perfil
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" /> Editar
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
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
    </div>
  )
}
