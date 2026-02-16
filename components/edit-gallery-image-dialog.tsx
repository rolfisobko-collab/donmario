"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { updateGalleryImageAction } from "@/lib/actions/gallery-actions"

interface EditGalleryImageDialogProps {
  image: {
    id: number
    title: string
    description: string | null
    category: string | null
    display_order: number
    is_featured: boolean
  }
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function EditGalleryImageDialog({ image, open, onOpenChange }: EditGalleryImageDialogProps) {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const result = await updateGalleryImageAction(image.id, formData)

    if (result.success) {
      onOpenChange(false)
    } else {
      alert(result.error || "Error al actualizar la imagen")
    }

    setLoading(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Editar Imagen</DialogTitle>
          <DialogDescription>Actualiza los datos de la imagen de la galería.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="edit-title">Título *</Label>
            <Input id="edit-title" name="title" defaultValue={image.title} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-description">Descripción</Label>
            <Textarea id="edit-description" name="description" defaultValue={image.description || ""} rows={3} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="edit-category">Categoría</Label>
              <Select name="category" defaultValue={image.category || undefined}>
                <SelectTrigger id="edit-category">
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
              <Label htmlFor="edit-display_order">Orden</Label>
              <Input
                id="edit-display_order"
                name="display_order"
                type="number"
                defaultValue={image.display_order}
                min="0"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="edit-is_featured" name="is_featured" value="true" defaultChecked={image.is_featured} />
            <Label htmlFor="edit-is_featured" className="text-sm font-normal cursor-pointer">
              Marcar como imagen destacada
            </Label>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1 bg-transparent"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button type="submit" className="flex-1" disabled={loading}>
              {loading ? "Guardando..." : "Guardar Cambios"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
