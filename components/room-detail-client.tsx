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
    const whatsappUrl = `https://wa.me/5493757000000?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" asChild className="gap-2">
            <Link href="/habitaciones">
              <ArrowLeft className="w-4 h-4" />
              Volver a Habitaciones
            </Link>
          </Button>
        </div>
      </div>

      {/* Header */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2 text-primary">{room.name}</h1>
              <div className="flex items-center gap-2 text-xl text-muted-foreground">
                <Badge variant="outline" className="text-lg px-3 py-1 border-primary/20 text-primary">
                  {room.size} m²
                </Badge>
                <span>•</span>
                <span>Capacidad: {room.capacity} personas</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Share2 className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Main Image */}
            <div className="md:col-span-3">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-muted shadow-lg">
                <img
                  src={allImages[selectedImage] || "/placeholder.svg"}
                  alt={`${room.name} - Imagen ${selectedImage + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 md:grid-cols-1 gap-2">
              {allImages.slice(0, 4).map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={cn(
                    "relative aspect-square rounded-lg overflow-hidden bg-muted transition-all shadow-sm",
                    selectedImage === idx ? "ring-4 ring-primary" : "hover:ring-2 ring-primary/50",
                  )}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${idx + 1}`}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Room Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Info */}
              <Card className="border-2 border-primary/10 shadow-sm">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <p className="text-sm text-muted-foreground">Capacidad</p>
                      <p className="font-bold text-lg text-foreground">{room.capacity} personas</p>
                    </div>
                    <div className="text-center">
                      <Maximize className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <p className="text-sm text-muted-foreground">Tamaño</p>
                      <p className="font-bold text-lg text-foreground">{room.size} m²</p>
                    </div>
                    <div className="text-center">
                      <Calendar className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <p className="text-sm text-muted-foreground">Precio</p>
                      <p className="font-bold text-lg text-foreground">${room.price.toLocaleString("es-AR")}</p>
                    </div>
                    <div className="text-center">
                      <Check className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <p className="text-sm text-muted-foreground">Estado</p>
                      <p className="font-bold text-lg text-green-600">Disponible</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Description */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-4 text-primary">Descripción</h2>
                <p className="text-lg text-foreground/80 leading-relaxed">{room.description}</p>
              </div>

              <Separator className="bg-primary/10" />

              {/* Bed Configuration - Using safeBeds instead of room.beds */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-4 text-primary">Configuración de Camas</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {safeBeds.map((bed, idx) => (
                    <Card key={idx} className="border-2 border-primary/10">
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <BedDouble className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-lg text-foreground">{bed.type}</p>
                          <p className="text-sm text-muted-foreground">Cantidad: {bed.count}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Separator className="bg-primary/10" />

              {/* Amenities - Using safeAmenities instead of room.amenities */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6 text-primary">Comodidades</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {safeAmenities.map((amenity, idx) => {
                    const Icon = iconMap[amenity] || Check
                    return (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">{amenity}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <Card className="border-2 border-primary/10 shadow-lg sticky top-24">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-primary">${room.price.toLocaleString("es-AR")}</span>
                      <span className="text-muted-foreground">/ noche</span>
                    </div>
                    <Badge variant="secondary" className="text-sm bg-primary/10 text-primary hover:bg-primary/20">
                      Cancelación Gratis
                    </Badge>
                  </div>

                  <Separator className="bg-primary/10" />

                  {/* Booking Form */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="check-in">Fecha de Entrada</Label>
                      <Input
                        id="check-in"
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="check-out">Fecha de Salida</Label>
                      <Input
                        id="check-out"
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        min={checkIn || new Date().toISOString().split("T")[0]}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="guests">Número de Huéspedes</Label>
                      <Select value={guests} onValueChange={setGuests}>
                        <SelectTrigger id="guests">
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

                  <Separator className="bg-primary/10" />

                  {/* Price Breakdown */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        ${room.price.toLocaleString("es-AR")} x {nights} {nights === 1 ? "noche" : "noches"}
                      </span>
                      <span className="font-medium">${totalPrice.toLocaleString("es-AR")}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tarifa de servicio</span>
                      <span className="font-medium">$0</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">${totalPrice.toLocaleString("es-AR")}</span>
                    </div>
                  </div>

                  <Button size="lg" className="w-full" onClick={handleReservation} disabled={!checkIn || !checkOut}>
                    Reservar Ahora
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full gap-2 bg-transparent border-primary text-primary hover:bg-primary/5"
                    onClick={() => {
                      const message = `Hola! Tengo una consulta sobre la habitación "${room.name}"`
                      window.open(`https://wa.me/5493757000000?text=${encodeURIComponent(message)}`, "_blank")
                    }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Consultar por WhatsApp
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">No se realizará ningún cargo todavía</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
