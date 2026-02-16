"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { createBookingAction } from "@/lib/actions/booking-actions"
import { useRouter } from "next/navigation"

interface Room {
  id: number
  name: string
  base_price: number
}

interface NewBookingDialogProps {
  rooms: Room[]
}

export function NewBookingDialog({ rooms }: NewBookingDialogProps) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)

    try {
      const result = await createBookingAction(formData)

      if (result.success) {
        setOpen(false)
        router.refresh()
        // Reset form
        e.currentTarget.reset()
      } else {
        setError(result.error || "Error al crear la reserva")
      }
    } catch (err) {
      setError("Error inesperado al crear la reserva")
      console.error("[v0] Error creating booking:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          Nueva Reserva
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Nueva Reserva</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Guest Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Información del Huésped</h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first_name">Nombre *</Label>
                <Input id="first_name" name="first_name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="last_name">Apellido *</Label>
                <Input id="last_name" name="last_name" required />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" name="phone" type="tel" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="country">País</Label>
                <Input id="country" name="country" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="document_number">Documento</Label>
                <Input id="document_number" name="document_number" />
              </div>
            </div>
          </div>

          {/* Booking Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Información de la Reserva</h3>

            <div className="space-y-2">
              <Label htmlFor="room_id">Habitación *</Label>
              <Select name="room_id" required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una habitación" />
                </SelectTrigger>
                <SelectContent>
                  {rooms.map((room) => (
                    <SelectItem key={room.id} value={room.id.toString()}>
                      {room.name} - ${room.base_price.toLocaleString()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="check_in">Check-in *</Label>
                <Input id="check_in" name="check_in" type="date" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="check_out">Check-out *</Label>
                <Input id="check_out" name="check_out" type="date" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="guests_count">Número de Huéspedes *</Label>
              <Input id="guests_count" name="guests_count" type="number" min="1" defaultValue="1" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notas (opcional)</Label>
              <Textarea
                id="notes"
                name="notes"
                placeholder="Agregar comentarios o solicitudes especiales..."
                rows={3}
              />
            </div>
          </div>

          {error && <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">{error}</div>}

          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={() => setOpen(false)} disabled={loading}>
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Creando..." : "Crear Reserva"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
