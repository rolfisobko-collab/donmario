"use client"

import { useState } from "react"
import Image from "next/image"
import { Pencil, Trash2, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { deleteGalleryImageAction } from "@/lib/actions/gallery-actions"
import { EditGalleryImageDialog } from "./edit-gallery-image-dialog"

interface GalleryImage {
  id: number
  title: string
  description: string | null
  image_url: string
  category: string | null
  display_order: number
  is_featured: boolean
  status: string
  created_at?: string
}

interface GalleryImagesListProps {
  images: GalleryImage[]
}

export function GalleryImagesList({ images }: GalleryImagesListProps) {
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null)
  const [deleting, setDeleting] = useState<number | null>(null)

  const handleDelete = async (id: number) => {
    if (!confirm("¿Estás seguro de eliminar esta imagen?")) return

    setDeleting(id)
    await deleteGalleryImageAction(id)
    setDeleting(null)
  }

  const getCategoryLabel = (category: string | null) => {
    const labels: Record<string, string> = {
      rooms: "Habitaciones",
      facilities: "Instalaciones",
      surroundings: "Alrededores",
      events: "Eventos",
      food: "Gastronomía",
    }
    return category ? labels[category] || category : "Sin categoría"
  }

  if (images.length === 0) {
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <p className="text-muted-foreground">No hay imágenes en la galería. Agrega tu primera imagen.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <Card key={image.id} className="overflow-hidden">
            <div className="relative h-48 bg-muted">
              <Image
                src={image.image_url || "/placeholder.svg"}
                alt={image.title}
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg?height=200&width=300"
                }}
              />
              {image.is_featured && (
                <div className="absolute top-2 right-2">
                  <Badge className="bg-yellow-500 text-white">
                    <Star className="h-3 w-3 mr-1" />
                    Destacada
                  </Badge>
                </div>
              )}
            </div>
            <CardContent className="p-4 space-y-3">
              <div>
                <h3 className="font-semibold text-lg line-clamp-1">{image.title}</h3>
                {image.description && <p className="text-sm text-muted-foreground line-clamp-2">{image.description}</p>}
              </div>

              <div className="flex gap-2 flex-wrap">
                {image.category && (
                  <Badge variant="secondary" className="text-xs">
                    {getCategoryLabel(image.category)}
                  </Badge>
                )}
                <Badge variant="outline" className="text-xs">
                  Orden: {image.display_order}
                </Badge>
              </div>

              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-transparent"
                  onClick={() => setEditingImage(image)}
                >
                  <Pencil className="h-4 w-4 mr-1" />
                  Editar
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-600 hover:text-red-700 hover:bg-red-50 bg-transparent"
                  onClick={() => handleDelete(image.id)}
                  disabled={deleting === image.id}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {editingImage && (
        <EditGalleryImageDialog
          image={editingImage}
          open={!!editingImage}
          onOpenChange={(open) => !open && setEditingImage(null)}
        />
      )}
    </>
  )
}
