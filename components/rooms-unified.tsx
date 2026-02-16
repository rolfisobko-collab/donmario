"use client"
import { Users, Maximize, ArrowRight, Wifi, Wind, Coffee, Tv, Waves, Dumbbell, Utensils, Clock, Bell, Shirt, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { getAllAmenities } from "@/lib/amenities"
import { useEffect, useState } from "react"
import Image from 'next/image'

const iconMap: { [key: string]: React.ComponentType<any> } = {
  wifi: Wifi,
  wind: Wind,
  coffee: Coffee,
  tv: Tv,
  waves: Waves,
  dumbbell: Dumbbell,
  utensils: Utensils,
  clock: Clock,
  bell: Bell,
  shirt: Shirt,
  briefcase: Briefcase,
}

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

interface Amenity {
  id: number
  name: string
  description: string
  icon: string
  category: string
}

interface RoomsUnifiedProps {
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

export function RoomsUnified({ rooms }: RoomsUnifiedProps) {
  const [amenities, setAmenities] = useState<Amenity[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadAmenities = async () => {
      try {
        const data = await getAllAmenities()
        setAmenities(data)
      } catch (error) {
        console.error("Error loading amenities:", error)
      } finally {
        setLoading(false)
      }
    }
    loadAmenities()
  }, [])

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
    <section id="rooms" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: "radial-gradient(rgb(71, 85, 105) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-600/20 blur-2xl rounded-full"></div>
              <Image 
                alt="Alojamiento Don Mario Logo" 
                width={120} 
                height={120} 
                className="relative h-24 w-24 md:h-28 md:w-28 rounded-full border-4 border-white/20 shadow-2xl object-cover" 
                src="https://i.ibb.co/fdyP72yr/469511863-17948267576910760-160937566039743134-n-1.jpg"
              />
            </div>
          </div>
          <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">Alojamiento Don Mario</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 text-balance">
            Comodidades Pensadas <br /> <span className="italic text-amber-600">Para Vos</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Cada detalle ha sido cuidado para que tu estadía sea inolvidable. Disfruta del equilibrio perfecto entre naturaleza y confort.
          </p>
        </div>

        {/* Amenities Grid */}
        {!loading && amenities.length > 0 && (
          <div className="mb-24">
            <div className="relative w-full overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
              
              <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-4">
                {amenities.map((amenity, index) => {
                  const IconComponent = iconMap[amenity.icon] || Coffee
                  return (
                    <div key={amenity.id} className="flex-shrink-0 group">
                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50">
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                            <IconComponent className="h-8 w-8 text-amber-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-900 mb-1">{amenity.name}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">{amenity.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* Rooms Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">Descanso Garantizado</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900">Nuestras Habitaciones</h2>
            <p className="text-lg text-slate-600">Espacios amplios y luminosos diseñados para el confort de toda la familia.</p>
          </div>
          <div className="hidden md:block">
            <Button variant="outline" className="bg-white border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white" asChild>
              <Link href="/habitaciones">Ver todas las opciones <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>

        {/* Rooms Carousel */}
        <div className="relative w-full">
          <Carousel className="w-full" opts={{ align: "start" }}>
            <CarouselContent className="-ml-6">
              {displayRooms.map((room, index) => (
                <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden rounded-2xl border border-zinc-100 bg-white h-full flex flex-col">
                    <CardContent className="p-0 flex-1 flex flex-col">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={room.image}
                          alt={room.title}
                          fill
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold text-amber-600 shadow-lg border border-zinc-100">
                          {room.price}
                        </div>
                      </div>
                      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-serif font-semibold text-slate-900 mb-2">{room.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-slate-600">
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              <span>{room.capacity}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Maximize className="h-4 w-4" />
                              <span>{room.size}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {room.features.map((feature: string, idx: number) => (
                            <span key={idx} className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                        <Button variant="outline" className="w-full border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white mt-auto" asChild>
                          <Link href={`/habitaciones/${room.slug}`}>Ver habitación</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
