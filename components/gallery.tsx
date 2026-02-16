import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { getAllGalleryImages } from "@/lib/db"

function isVideoUrl(url: string): boolean {
  return /\.(mp4|webm|mov|avi)$/i.test(url)
}

export async function Gallery() {
  const images = await getAllGalleryImages() // Traer todas las imágenes

  const displayImages =
    images.length > 0
      ? images.map((img) => ({
          src: img.image_url,
          alt: img.title,
          isVideo: isVideoUrl(img.image_url),
          className: img.display_order === 1 ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1",
        }))
      : [
          {
            src: "/iguazu-falls-waterfall-lush-green-nature.jpg",
            alt: "Cataratas del Iguazú",
            isVideo: false,
            className: "md:col-span-2 md:row-span-2",
          },
          {
            src: "/modern-hotel-room-comfortable-bed.jpg",
            alt: "Habitación Confortable",
            isVideo: false,
            className: "",
          },
          {
            src: "/spacious-family-hotel-room-multiple-beds.jpg",
            alt: "Habitación Familiar",
            isVideo: false,
            className: "",
          },
          { src: "/iguazu-falls-waterfall-lush-green-nature.jpg", alt: "Naturaleza", isVideo: false, className: "" },
          { src: "/modern-hotel-room-comfortable-bed.jpg", alt: "Detalles", isVideo: false, className: "" },
        ]

  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary text-balance">Galería de Fotos</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Descubre los rincones de nuestro hotel y la belleza que nos rodea
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto h-auto md:h-[600px]">
          {displayImages.map((img, index) => (
            <div key={index} className={`relative group overflow-hidden rounded-xl ${img.className}`}>
              {img.isVideo ? (
                <>
                  <video
                    src={img.src}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white/90 rounded-full p-3 opacity-80 group-hover:opacity-100 transition-opacity">
                      <Play className="h-6 w-6 text-primary fill-primary" />
                    </div>
                  </div>
                </>
              ) : (
                <img
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif text-xl font-medium tracking-wide">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/galeria">
            <Button size="lg" variant="outline" className="group bg-transparent">
              Ver Galería Completa
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
