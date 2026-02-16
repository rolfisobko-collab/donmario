"use client"

import type React from "react"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { createGalleryImageAction } from "@/lib/actions/gallery-actions"

export function AddGalleryImageDialog() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const result = await createGalleryImageAction(formData)

    if (result.success) {
      setOpen(false)
      ;(e.target as HTMLFormElement).reset()
    } else {
      alert(result.error || "Error al agregar la imagen")
    }

    setLoading(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Agregar Imagen
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Agregar Nueva Imagen</DialogTitle>
          <DialogDescription>Completa los datos para agregar una nueva imagen a la galería.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Título *</Label>
            <Input id="title" name="title" placeholder="Ej: Vista panorámica del hotel" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descripción</Label>
            <Textarea id="description" name="description" placeholder="Descripción de la imagen" rows={3} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image_url">URL de la Imagen *</Label>
            <Input id="image_url" name="image_url" type="url" placeholder="https://ejemplo.com/imagen.jpg" required />
            <p className="text-xs text-muted-foreground">Puedes subir la imagen a Vercel Blob o usar una URL externa</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Categoría</Label>
              <Select name="category">
                <SelectTrigger id="category">
                  <SelectValue placeholder="Selecciona una categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rooms">Habitaciones</SelectItem>
                  <SelectItem value="facilities">Instalaciones</SelectItem>
                  <SelectItem value="surroundings">Alrededores</SelectItem>
                  <SelectItem value="events">Eventos</SelectItem>
                  <SelectItem value="food">Gastronomía</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="display_order">Orden de Visualización</Label>
              <Input id="display_order" name="display_order" type="number" defaultValue="0" min="0" />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="is_featured" name="is_featured" value="true" />
            <Label htmlFor="is_featured" className="text-sm font-normal cursor-pointer">
              Marcar como imagen destacada (aparece en la página principal)
            </Label>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1 bg-transparent"
              onClick={() => setOpen(false)}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button type="submit" className="flex-1" disabled={loading}>
              {loading ? "Agregando..." : "Agregar Imagen"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
