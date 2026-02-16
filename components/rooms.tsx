"use client"
import { Users, Maximize, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface Room {
  id: number
  name: string
  slug: string
  description?: string
  base_price: number
  max_guests: number
  beds_info?: any
  amenities?: any
  images?: any
  status: string
}

interface RoomsProps {
  rooms: Room[]
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function Rooms({ rooms }: RoomsProps) {
  const displayRooms = rooms.slice(0, 6).map((room) => {
    const amenitiesList = Array.isArray(room.amenities)
      ? room.amenities.filter((amenity: string) => !amenity.toLowerCase().includes("ropa de cama")).slice(0, 5)
      : []

    const imagesList = Array.isArray(room.images) ? room.images : []

    const firstImage = imagesList[0] || "/comfortable-hotel-room.png"

    return {
      title: room.name,
      capacity: `Hasta ${room.max_guests} ${room.max_guests === 1 ? "persona" : "personas"}`,
      size: room.beds_info?.beds || (typeof room.beds_info === "string" ? room.beds_info : ""),
      price: formatPrice(room.base_price),
      image: firstImage,
      features: amenitiesList,
      slug: room.slug,
    }
  })

  return (
    <section id="rooms" className="py-32 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">Descanso Garantizado</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900">Nuestras Habitaciones</h2>
            <p className="text-lg text-slate-600">
              Espacios amplios y luminosos diseñados para el confort de toda la familia.
            </p>
          </div>
          <div className="hidden md:block">
            <Button variant="outline" className="gap-2 bg-white border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white" asChild>
              <Link href="/habitaciones">
                Ver todas las opciones <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {displayRooms.map((room, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden rounded-2xl border border-zinc-100 bg-white">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={room.image || "/placeholder.svg"}
                        alt={room.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-amber-600 shadow-lg border border-zinc-100">
                        {room.price} <span className="text-xs font-normal text-slate-600">/ noche</span>
                      </div>
                    </div>
                    <CardContent className="p-6 space-y-6">
                      <div>
                        <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-amber-600 transition-colors text-slate-900">
                          {room.title}
                        </h3>
                        <div className="space-y-2 text-sm text-slate-600">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-amber-600" />
                            <span>{room.capacity}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Maximize className="h-4 w-4 text-amber-600" />
                            <span>{room.size}</span>
                          </div>
                        </div>
                      </div>
                      
                      {room.features && room.features.length > 0 && (
                        <div className="space-y-3">
                          <h4 className="font-semibold text-slate-900">Comodidades</h4>
                          <div className="flex flex-wrap gap-2">
                            {room.features.slice(0, 3).map((feature, featureIndex) => (
                              <span
                                key={featureIndex}
                                className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-medium border border-amber-200"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="pt-4">
                        <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg" asChild>
                          <Link href={`/habitaciones/${room.slug}`}>
                            Ver Detalles
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="bg-white/90 backdrop-blur-sm text-slate-900 hover:bg-slate-100 -left-12" />
            <CarouselNext className="bg-white/90 backdrop-blur-sm text-slate-900 hover:bg-slate-100 -right-12" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
