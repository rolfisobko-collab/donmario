"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Play } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent } from "@/components/ui/dialog"

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

interface GalleryGridProps {
  images: GalleryImage[]
}

function isVideoUrl(url: string): boolean {
  return /\.(mp4|webm|mov|avi)$/i.test(url)
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = [
    { value: "all", label: "Todas" },
    { value: "rooms", label: "Habitaciones" },
    { value: "hotel", label: "Hotel" },
    { value: "facilities", label: "Instalaciones" },
    { value: "surroundings", label: "Alrededores" },
    { value: "events", label: "Eventos" },
    { value: "food", label: "Gastronomía" },
  ]

  const filteredImages =
    selectedCategory && selectedCategory !== "all"
      ? images.filter((img) => img.category === selectedCategory && img.status === "active")
      : images.filter((img) => img.status === "active")

  return (
    <>
      {/* Category Filter */}
      <div className="hidden flex-wrap gap-2 mb-8 justify-center">
        {categories.map((cat) => (
          <Badge
            key={cat.value}
            variant={
              selectedCategory === cat.value || (selectedCategory === null && cat.value === "all")
                ? "default"
                : "outline"
            }
            className="cursor-pointer px-4 py-2 text-sm"
            onClick={() => setSelectedCategory(cat.value === "all" ? null : cat.value)}
          >
            {cat.label}
          </Badge>
        ))}
      </div>

      {/* Images Grid */}
      {filteredImages.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No hay imágenes disponibles en esta categoría.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredImages.map((image) => {
            const isVideo = isVideoUrl(image.image_url)

            return (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-muted"
                onClick={() => setSelectedImage(image)}
              >
                {isVideo ? (
                  <>
                    <video
                      src={image.image_url}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      muted
                      playsInline
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                      <div className="bg-white/90 rounded-full p-4">
                        <Play className="h-8 w-8 text-primary fill-primary" />
                      </div>
                    </div>
                  </>
                ) : (
                  <Image
                    src={image.image_url || "/placeholder.svg"}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?height=400&width=400"
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg line-clamp-1">{image.title}</h3>
                    {image.description && (
                      <p className="text-white/90 text-sm line-clamp-2 mt-1">{image.description}</p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Image/Video Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl w-full p-0 bg-black/95 border-0">
          <div className="relative w-full h-[80vh]">
            {selectedImage && (
              <>
                {isVideoUrl(selectedImage.image_url) ? (
                  <video
                    src={selectedImage.image_url}
                    className="w-full h-full object-contain"
                    controls
                    autoPlay
                    playsInline
                  />
                ) : (
                  <Image
                    src={selectedImage.image_url || "/placeholder.svg"}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?height=800&width=1200"
                    }}
                  />
                )}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors z-10"
                >
                  <X className="h-6 w-6" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <h2 className="text-white text-2xl font-serif font-bold mb-2">{selectedImage.title}</h2>
                  {selectedImage.description && <p className="text-white/90 text-base">{selectedImage.description}</p>}
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
