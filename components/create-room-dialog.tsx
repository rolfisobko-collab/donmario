"use client"

import type React from "react"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Loader2, X, ImageIcon, Video } from "lucide-react"
import { createRoomAction } from "@/lib/actions/room-actions"
import { useRouter } from "next/navigation"

export function CreateRoomDialog() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const [mediaList, setMediaList] = useState<Array<{ url: string; type: "image" | "video" }>>([])
  const [newMediaUrl, setNewMediaUrl] = useState("")
  const [newMediaType, setNewMediaType] = useState<"image" | "video">("image")

  function addMedia() {
    if (newMediaUrl.trim()) {
      setMediaList([...mediaList, { url: newMediaUrl.trim(), type: newMediaType }])
      setNewMediaUrl("")
    }
  }

  function removeMedia(index: number) {
    setMediaList(mediaList.filter((_, i) => i !== index))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)

    // Generate slug from name
    const name = formData.get("name") as string
    const slug = name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")
    formData.set("slug", slug)

    formData.set("mediaList", JSON.stringify(mediaList))

    const result = await createRoomAction(formData)

    setLoading(false)

    if (result.success) {
      setOpen(false)
      setMediaList([])
      router.refresh()
    } else {
      alert(result.message)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary hover:bg-primary/90 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Nueva Habitación
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Crear Nueva Habitación</DialogTitle>
          <DialogDescription>Completa la información para agregar una nueva habitación al sistema.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre *</Label>
              <Input id="name" name="name" required placeholder="Ej: Habitación Simple" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Estado *</Label>
              <Select name="status" defaultValue="disponible" required>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="disponible">Disponible</SelectItem>
                  <SelectItem value="ocupada">Ocupada</SelectItem>
                  <SelectItem value="limpieza">Limpieza</SelectItem>
                  <SelectItem value="mantenimiento">Mantenimiento</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descripción *</Label>
            <Textarea id="description" name="description" required placeholder="Describe la habitación..." rows={3} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="maxGuests">Capacidad (personas) *</Label>
              <Input id="maxGuests" name="maxGuests" type="number" min="1" required placeholder="Ej: 2" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="basePrice">Precio por Noche *</Label>
              <Input
                id="basePrice"
                name="basePrice"
                type="number"
                min="0"
                step="1000"
                required
                placeholder="Ej: 50000"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bedsInfo">Información de Camas *</Label>
            <Input id="bedsInfo" name="bedsInfo" required placeholder="Ej: 1 cama matrimonial o 2 camas individuales" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="amenities">Amenidades (separadas por coma) *</Label>
            <Textarea
              id="amenities"
              name="amenities"
              required
              placeholder="Ej: Aire Acondicionado, TV LED, WiFi Gratis, Baño Privado"
              rows={2}
            />
          </div>

          <div className="space-y-3">
            <Label>Imágenes y Videos *</Label>

            {/* Media list */}
            {mediaList.length > 0 && (
              <div className="space-y-2 border rounded-lg p-3 bg-muted/30">
                {mediaList.map((media, index) => (
                  <div key={index} className="flex items-center gap-2 bg-background p-2 rounded border">
                    {media.type === "image" ? (
                      <ImageIcon className="h-4 w-4 text-primary" />
                    ) : (
                      <Video className="h-4 w-4 text-primary" />
                    )}
                    <span className="text-xs flex-1 truncate">{media.url}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeMedia(index)}
                      className="h-7 w-7 p-0"
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            )}

            {/* Add new media */}
            <div className="flex gap-2">
              <Select value={newMediaType} onValueChange={(value: "image" | "video") => setNewMediaType(value)}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="image">Imagen</SelectItem>
                  <SelectItem value="video">Video</SelectItem>
                </SelectContent>
              </Select>
              <Input
                type="url"
                placeholder="URL de imagen o video"
                value={newMediaUrl}
                onChange={(e) => setNewMediaUrl(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    addMedia()
                  }
                }}
              />
              <Button type="button" variant="outline" size="sm" onClick={addMedia}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Agrega al menos una imagen. La primera será la imagen principal.
            </p>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)} disabled={loading}>
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Crear Habitación
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
