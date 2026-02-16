"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Users,
  Maximize,
  Wifi,
  Tv,
  Snowflake,
  Coffee,
  Shield,
  Wind,
  Briefcase,
  Sun,
  Utensils,
  Check,
  ArrowLeft,
  Calendar,
  MessageCircle,
  Share2,
  Heart,
  BedDouble,
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface RoomProp {
  id: number | string
  name: string
  title?: string
  slug: string
  description: string
  mainImage?: string
  images: string[]
  capacity: number
  guests?: number
  size: number
  price: number
  amenities: string[]
  beds: { type: string; count: number }[]
}

interface RoomDetailClientProps {
  room: RoomProp
}

const iconMap: Record<string, React.ElementType> = {
  "Aire Acondicionado": Snowflake,
  "WiFi Gratis": Wifi,
  "WiFi Alta Velocidad": Wifi,
  "TV Smart": Tv,
  "TV Cable": Tv,
  "Baño Privado": Shield,
  Frigobar: Coffee,
  "Desayuno Incluido": Utensils,
  Balcón: Sun,
  "Caja Fuerte": Shield,
  Escritorio: Briefcase,
  Jacuzzi: Wind,
  "Champagne de Bienvenida": Utensils,
  "Room Service": Utensils,
  "Limpieza Diaria": Check,
  Cafetera: Coffee,
}

export function RoomDetailClient({ room }: RoomDetailClientProps) {
  const [selectedImage, setSelectedImage] = React.useState(0)
  const [checkIn, setCheckIn] = React.useState("")
  const [checkOut, setCheckOut] = React.useState("")
  const [guests, setGuests] = React.useState("2")
  const [nights, setNights] = React.useState(1)
  const [totalPrice, setTotalPrice] = React.useState(room.price)

  const allImages =
    Array.isArray(room.images) && room.images.length > 0 ? room.images : [room.mainImage || "/placeholder.svg"]

  const safeBeds = React.useMemo(() => {
    if (!room.beds) return [{ type: "Cama", count: 1 }]
    if (!Array.isArray(room.beds)) return [{ type: "Cama", count: 1 }]
    if (room.beds.length === 0) return [{ type: "Cama", count: 1 }]
    return room.beds.map((bed) => ({
      type: typeof bed === "string" ? bed : bed.type || "Cama",
      count: typeof bed === "object" && bed.count ? bed.count : 1,
    }))
  }, [room.beds])

  const safeAmenities = Array.isArray(room.amenities) ? room.amenities : []

  React.useEffect(() => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn)
      const end = new Date(checkOut)
      const diffTime = Math.abs(end.getTime() - start.getTime())
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      setNights(diffDays > 0 ? diffDays : 1)
      setTotalPrice(room.price * (diffDays > 0 ? diffDays : 1))
    }
  }, [checkIn, checkOut, room.price])

  const handleReservation = () => {
    const formattedPrice = totalPrice.toLocaleString("es-AR")
    const message = `Hola! Me interesa reservar la habitación "${room.name}" del ${checkIn} al ${checkOut} para ${guests} personas. Total: $${formattedPrice} ARS`
    const whatsappUrl = `https://wa.me/5493757671408?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Back Button */}
      <div className="border-b border-amber-200/30 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" asChild className="gap-2 text-amber-600 hover:text-amber-700 hover:bg-amber-50">
            <Link href="/habitaciones">
              <ArrowLeft className="w-4 h-4" />
              Volver a Habitaciones
            </Link>
          </Button>
        </div>
      </div>

      {/* Header */}
      <section className="py-8 lg:py-12 bg-gradient-to-r from-amber-600 to-orange-600 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.1]" 
             style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-4 text-white drop-shadow-lg">{room.name}</h1>
              <div className="flex flex-col sm:flex-row items-center gap-3 text-lg text-amber-100">
                <Badge variant="outline" className="text-lg px-4 py-2 border-2 border-white/30 bg-white/10 text-white font-bold">
                  {room.size} m²
                </Badge>
                <span className="hidden sm:inline">•</span>
                <span>Capacidad: {room.capacity} personas</span>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20">
                <Share2 className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          {allImages.length === 1 ? (
            /* Single Image - Full Width */
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-[16/10] lg:aspect-[16/9] rounded-2xl overflow-hidden bg-white shadow-xl border-2 border-amber-200/50">
                <img
                  src={allImages[0]}
                  alt={`${room.name} - Imagen principal`}
                  className="object-cover w-full h-full scale-105"
                  style={{ imageRendering: 'crisp-edges' }}
                />
              </div>
            </div>
          ) : (
            /* Multiple Images - Grid Layout */
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Main Image */}
              <div className="lg:col-span-3">
                <div className="relative aspect-[16/10] lg:aspect-[16/9] rounded-2xl overflow-hidden bg-white shadow-xl border-2 border-amber-200/50">
                  <img
                    src={allImages[selectedImage] || "/placeholder.svg"}
                    alt={`${room.name} - Imagen ${selectedImage + 1}`}
                    className="object-cover w-full h-full scale-105"
                    style={{ imageRendering: 'crisp-edges' }}
                  />
                </div>
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                {allImages.slice(0, 4).map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={cn(
                      "relative aspect-square rounded-xl overflow-hidden bg-white shadow-lg border-2 transition-all duration-300",
                      selectedImage === idx 
                        ? "border-amber-600 ring-4 ring-amber-400/30 scale-105" 
                        : "border-amber-200/50 hover:border-amber-400 hover:scale-102"
                    )}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Thumbnail ${idx + 1}`}
                      className="object-cover w-full h-full scale-105"
                      style={{ imageRendering: 'crisp-edges' }}
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Room Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Info */}
              <Card className="border-2 border-amber-200/50 bg-white/95 backdrop-blur-sm shadow-lg">
                <CardContent className="p-6 lg:p-8">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <Users className="w-8 h-8 mx-auto mb-3 text-amber-600" />
                      <p className="text-sm text-slate-600 font-medium">Capacidad</p>
                      <p className="text-xl lg:text-2xl font-bold text-slate-900">{room.capacity} personas</p>
                    </div>
                    <div className="text-center">
                      <Maximize className="w-8 h-8 mx-auto mb-3 text-amber-600" />
                      <p className="text-sm text-slate-600 font-medium">Tamaño</p>
                      <p className="text-xl lg:text-2xl font-bold text-slate-900">{room.size} m²</p>
                    </div>
                    <div className="text-center">
                      <Calendar className="w-8 h-8 mx-auto mb-3 text-amber-600" />
                      <p className="text-sm text-slate-600 font-medium">Precio</p>
                      <p className="text-xl lg:text-2xl font-bold text-amber-600">${room.price.toLocaleString("es-AR")}</p>
                    </div>
                    <div className="text-center">
                      <Check className="w-8 h-8 mx-auto mb-3 text-green-600" />
                      <p className="text-sm text-slate-600 font-medium">Estado</p>
                      <p className="text-xl lg:text-2xl font-bold text-green-600">Disponible</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Description */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-slate-900">Descripción</h2>
                <p className="text-lg text-slate-700 leading-relaxed bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-amber-200/30">
                  {room.description}
                </p>
              </div>

              <Separator className="bg-amber-200/30" />

              {/* Bed Configuration */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-slate-900">Configuración de Camas</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {safeBeds.map((bed, idx) => (
                    <Card key={idx} className="border-2 border-amber-200/50 bg-white/95 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center flex-shrink-0">
                          <BedDouble className="w-8 h-8 text-amber-700" />
                        </div>
                        <div>
                          <p className="text-lg font-bold text-slate-900">{bed.type}</p>
                          <p className="text-sm text-slate-600">Cantidad: {bed.count}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Separator className="bg-amber-200/30" />

              {/* Amenities */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-8 text-slate-900">Comodidades</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {safeAmenities.map((amenity, idx) => {
                    const Icon = iconMap[amenity] || Check
                    return (
                      <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white/95 backdrop-blur-sm border border-amber-200/50 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-amber-700" />
                        </div>
                        <span className="font-medium text-slate-800">{amenity}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <Card className="border-2 border-amber-200/50 bg-white/95 backdrop-blur-sm shadow-2xl sticky top-24">
                <CardContent className="p-6 lg:p-8 space-y-6">
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl lg:text-4xl font-bold text-amber-600">${room.price.toLocaleString("es-AR")}</span>
                      <span className="text-lg text-slate-600">/ noche</span>
                    </div>
                    <Badge variant="secondary" className="text-sm bg-amber-100 text-amber-700 border border-amber-200 font-medium">
                      Cancelación Gratis
                    </Badge>
                  </div>

                  <Separator className="bg-amber-200/30" />

                  {/* Booking Form */}
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="check-in" className="text-slate-700 font-medium">Fecha de Entrada</Label>
                      <Input
                        id="check-in"
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className="border-amber-200/50 focus:border-amber-400 focus:ring-amber-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="check-out" className="text-slate-700 font-medium">Fecha de Salida</Label>
                      <Input
                        id="check-out"
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        min={checkIn || new Date().toISOString().split("T")[0]}
                        className="border-amber-200/50 focus:border-amber-400 focus:ring-amber-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="guests" className="text-slate-700 font-medium">Número de Huéspedes</Label>
                      <Select value={guests} onValueChange={setGuests}>
                        <SelectTrigger id="guests" className="border-amber-200/50 focus:border-amber-400 focus:ring-amber-400">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: room.capacity }, (_, i) => i + 1).map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "persona" : "personas"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Separator className="bg-amber-200/30" />

                  {/* Price Breakdown */}
                  <div className="space-y-4 bg-amber-50/50 rounded-xl p-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">
                        ${room.price.toLocaleString("es-AR")} x {nights} {nights === 1 ? "noche" : "noches"}
                      </span>
                      <span className="font-bold text-slate-900">${totalPrice.toLocaleString("es-AR")}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Tarifa de servicio</span>
                      <span className="font-bold text-slate-900">$0</span>
                    </div>
                    <Separator className="bg-amber-200/30" />
                    <div className="flex justify-between text-xl lg:text-2xl font-bold">
                      <span className="text-slate-900">Total</span>
                      <span className="text-amber-600">${totalPrice.toLocaleString("es-AR")}</span>
                    </div>
                  </div>

                  <Button size="lg" className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-4 text-lg" onClick={handleReservation} disabled={!checkIn || !checkOut}>
                    Reservar Ahora
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-medium"
                    onClick={() => {
                      const message = `Hola! Tengo una consulta sobre la habitación "${room.name}"`
                      window.open(`https://wa.me/5493757671408?text=${encodeURIComponent(message)}`, "_blank")
                    }}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Consultar por WhatsApp
                  </Button>

                  <p className="text-xs text-center text-slate-500">No se realizará ningún cargo todavía</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
