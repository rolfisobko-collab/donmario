import { getAllGalleryImages } from "@/lib/db"
import { GalleryGrid } from "@/components/gallery-grid"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Galería - Don Mario Alojamiento",
  description: "Descubre todos los rincones de nuestro hotel y la belleza que nos rodea en Iguazú",
}

export default async function GaleriaPage() {
  const images = await getAllGalleryImages()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary/5 border-b">
        <div className="container mx-auto px-4 py-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4 -ml-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Galería de Fotos</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explora todos los espacios de Don Mario Alojamiento y descubre la belleza de las Cataratas del Iguazú
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-12">
        <GalleryGrid images={images} />
      </div>
    </div>
  )
}
