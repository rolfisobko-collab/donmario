import { getAllGalleryImages } from "@/lib/db"
import { GalleryImagesList } from "@/components/admin-gallery-list"
import { AddGalleryImageDialog } from "@/components/add-gallery-image-dialog"

export default async function AdminGalleryPage() {
  const images = await getAllGalleryImages()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-serif font-bold text-gray-900">Galería</h2>
          <p className="text-muted-foreground">Gestiona las imágenes de la galería del hotel.</p>
        </div>
        <AddGalleryImageDialog />
      </div>

      <GalleryImagesList images={images} />
    </div>
  )
}
