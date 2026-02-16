"use client"

import * as React from "react"
import type { Room } from "@/lib/rooms-data"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
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
  Star,
  MapPin,
} from "lucide-react"
import Link from "next/link"

interface RoomsListClientProps {
  rooms: Room[]
}

const iconMap: Record<string, React.ElementType> = {
  wifi: Wifi,
  tv: Tv,
  snowflake: Snowflake,
  coffee: Coffee,
  shield: Shield,
  wind: Wind,
  briefcase: Briefcase,
  sun: Sun,
  utensils: Utensils,
}

export function RoomsListClient({ rooms }: RoomsListClientProps) {
  const [filteredRooms, setFilteredRooms] = React.useState(rooms)
  const [filters, setFilters] = React.useState({
    guests: [] as number[],
    maxPrice: 150000, // Updated default max price to handle ARS prices
  })

  React.useEffect(() => {
    console.log("[v0] Filtering rooms. Total rooms:", rooms.length)
    console.log("[v0] Current filters:", filters)

    let result = [...rooms]

    // Filter by guests
    if (filters.guests.length > 0) {
      result = result.filter((room) => filters.guests.some((g) => room.capacity >= g))
      console.log("[v0] After guest filter:", result.length)
    }

    // Filter by price
    result = result.filter((room) => room.price <= filters.maxPrice)
    console.log("[v0] After price filter:", result.length, "Max price:", filters.maxPrice)

    setFilteredRooms(result)
  }, [filters, rooms])

  const toggleGuestFilter = (guests: number) => {
    setFilters((prev) => {
      const newGuests = prev.guests.includes(guests)
        ? prev.guests.filter((g) => g !== guests)
        : [...prev.guests, guests]
      return { ...prev, guests: newGuests }
    })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Sidebar Filters - Sticky on Desktop */}
      <div className="lg:col-span-1">
        <div className="bg-card rounded-xl shadow-sm border p-6 sticky top-24 space-y-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Filtrar por:</h3>

            {/* Price Filter */}
            <div className="space-y-4 pb-6 border-b">
              <label className="text-sm font-medium">Precio máx. por noche</label>
              <Slider
                value={[filters.maxPrice]}
                onValueChange={(value) => setFilters({ ...filters, maxPrice: value[0] })}
                min={30000} // Updated min/max for ARS currency
                max={200000}
                step={10000}
                className="py-4"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>$30k</span>
                <span className="font-bold text-primary">${(filters.maxPrice / 1000).toFixed(0)}k</span>
                <span>$200k+</span>
              </div>
            </div>

            {/* Guests Filter */}
            <div className="space-y-3 py-6 border-b">
              <label className="text-sm font-medium mb-2 block">Capacidad</label>
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="flex items-center space-x-2">
                  <Checkbox
                    id={`guest-${num}`}
                    checked={filters.guests.includes(num)}
                    onCheckedChange={() => toggleGuestFilter(num)}
                  />
                  <label
                    htmlFor={`guest-${num}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {num === 5 ? "5+ personas" : `${num} persona${num > 1 ? "s" : ""}`}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Rooms List */}
      <div className="lg:col-span-3 space-y-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-foreground">
            Puerto Iguazú: {filteredRooms.length} alojamientos encontrados
          </h2>
        </div>

        {filteredRooms.length === 0 ? (
          <div className="bg-card rounded-xl p-12 text-center border border-dashed">
            <p className="text-xl text-muted-foreground mb-4">No hay habitaciones disponibles con estos filtros.</p>
            <Button onClick={() => setFilters({ guests: [], maxPrice: 200000 })} variant="outline">
              Limpiar todos los filtros
            </Button>
          </div>
        ) : (
          filteredRooms.map((room) => (
            <Card
              key={room.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border group p-0"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="md:w-1/3 relative aspect-[4/3] md:aspect-auto overflow-hidden md:rounded-l-xl">
                  <img
                    src={room.mainImage || "/placeholder.svg"}
                    alt={room.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold shadow-sm">
                      Destacado
                    </Badge>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-2/3 p-5 flex flex-col justify-between">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <div className="flex items-center gap-1 text-primary mb-1">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-2 group-hover:underline decoration-2 underline-offset-4">
                        {room.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Link href="/#location" className="text-primary hover:underline flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          Puerto Iguazú
                        </Link>
                        <span>•</span>
                        <span>A 15km de las Cataratas</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-1 mb-1">
                        <span className="text-sm text-muted-foreground">Excelente</span>
                        <Badge variant="secondary" className="rounded-md px-1.5 py-0.5 text-xs font-bold">
                          9.2
                        </Badge>
                      </div>
                      <span className="text-xs text-muted-foreground">52 comentarios</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 my-4">
                    <div className="space-y-2 border-l-2 border-muted pl-3">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span>Capacidad: {room.capacity} personas</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <Maximize className="w-4 h-4 text-muted-foreground" />
                        <span>{room.size} m²</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                        <Check className="w-4 h-4" />
                        <span>Cancelación GRATIS</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap content-start gap-2">
                      {room.amenities.slice(0, 4).map((amenity: any, idx: number) => {
                        const amenityName = typeof amenity === "string" ? amenity : amenity.name || amenity
                        const Icon = iconMap[amenityName.toLowerCase()] || Coffee
                        return (
                          <Badge key={idx} variant="outline" className="bg-muted/50 font-normal gap-1">
                            <Icon className="w-3 h-3" />
                            <span>{amenityName}</span>
                          </Badge>
                        )
                      })}
                      {room.amenities.length > 4 && (
                        <span className="text-xs text-muted-foreground self-center">
                          +{room.amenities.length - 4} más
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-end gap-4 mt-auto pt-4 border-t border-dashed">
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground">1 noche, 2 adultos</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-foreground">${room.price.toLocaleString()} ARS</span>
                        <span className="text-sm text-muted-foreground line-through">
                          ${Math.round(room.price * 1.2).toLocaleString()}
                        </span>
                      </div>
                      <p className="text-xs text-green-600 font-medium">Incluye impuestos y cargos</p>
                    </div>
                    <Button asChild size="lg" className="w-full md:w-auto shadow-md hover:shadow-lg transition-all">
                      <Link href={`/habitaciones/${room.slug}`}>
                        Ver disponibilidad
                        <Check className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
