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
    maxPrice: 150000,
  })

  React.useEffect(() => {
    console.log("[v0] Filtering rooms. Total rooms:", rooms.length)
    console.log("[v0] Current filters:", filters)

    let result = [...rooms]

    if (filters.guests.length > 0) {
      result = result.filter((room) => filters.guests.some((g) => room.capacity >= g))
      console.log("[v0] After guest filter:", result.length)
    }

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
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="hidden lg:block lg:col-span-1">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border-2 border-amber-200/50 p-6 sticky top-24 space-y-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-amber-700">Filtrar por:</h3>

              <div className="space-y-4 pb-6 border-b border-amber-200/30">
                <label className="text-sm font-medium text-slate-700">Precio máx. por noche</label>
                <Slider
                  value={[filters.maxPrice]}
                  onValueChange={(value) => setFilters({ ...filters, maxPrice: value[0] })}
                  min={30000}
                  max={200000}
                  step={10000}
                  className="py-4"
                />
                <div className="flex justify-between text-sm text-slate-600">
                  <span>$30k</span>
                  <span className="font-bold text-amber-600">${(filters.maxPrice / 1000).toFixed(0)}k</span>
                  <span>$200k+</span>
                </div>
              </div>

              <div className="space-y-3 py-6 border-b border-amber-200/30">
                <label className="text-sm font-medium mb-2 block text-slate-700">Capacidad</label>
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="flex items-center space-x-2">
                    <Checkbox
                      id={`guest-${num}`}
                      checked={filters.guests.includes(num)}
                      onCheckedChange={() => toggleGuestFilter(num)}
                    />
                    <label
                      htmlFor={`guest-${num}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-700"
                    >
                      {num === 5 ? "5+ personas" : `${num} persona${num > 1 ? "s" : ""}`}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Puerto Iguazú: {filteredRooms.length} alojamientos encontrados
            </h2>
          </div>

          {filteredRooms.length === 0 ? (
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 sm:p-12 text-center border-2 border-amber-200/50">
              <p className="text-lg sm:text-xl text-slate-700 mb-4">No hay habitaciones disponibles con estos filtros.</p>
              <Button onClick={() => setFilters({ guests: [], maxPrice: 200000 })} variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
                Limpiar todos los filtros
              </Button>
            </div>
          ) : (
            filteredRooms.map((room) => (
              <Card
                key={room.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-amber-200/50 bg-white/95 backdrop-blur-sm group p-0"
              >
                <div className="flex flex-col lg:flex-row h-full">
                  <div className="lg:w-1/3 relative aspect-[4/3] lg:aspect-auto overflow-hidden lg:rounded-l-xl">
                    <img
                      src={room.mainImage || "/placeholder.svg"}
                      alt={room.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700 font-bold shadow-lg border border-amber-200">
                        Destacado
                      </Badge>
                    </div>
                  </div>

                  <div className="lg:w-2/3 p-4 sm:p-5 flex flex-col justify-between">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-1 text-amber-600 mb-1">
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:underline decoration-2 underline-offset-4">
                          {room.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-slate-600 mb-3">
                          <Link href="/#location" className="text-amber-600 hover:text-amber-700 flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            Puerto Iguazú
                          </Link>
                          <span className="hidden sm:inline">•</span>
                          <span>A 15km de las Cataratas</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="flex items-center gap-1 mb-1">
                          <span className="text-sm text-slate-600">Excelente</span>
                          <Badge variant="secondary" className="rounded-md px-1.5 py-0.5 text-xs font-bold bg-amber-100 text-amber-700">
                            9.2
                          </Badge>
                        </div>
                        <span className="text-xs text-slate-600">52 comentarios</span>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 my-4">
                      <div className="space-y-2 border-l-2 border-amber-200 pl-3">
                        <div className="flex items-center gap-2 text-sm font-medium">
                          <Users className="w-4 h-4 text-amber-600" />
                          <span className="text-slate-700">Capacidad: {room.capacity} personas</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium">
                          <Maximize className="w-4 h-4 text-amber-600" />
                          <span className="text-slate-700">{room.size} m²</span>
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
                            <Badge key={idx} variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 font-normal gap-1">
                              <Icon className="w-3 h-3" />
                              <span>{amenityName}</span>
                            </Badge>
                          )
                        })}
                        {room.amenities.length > 4 && (
                          <span className="text-xs text-slate-600 self-center">
                            +{room.amenities.length - 4} más
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pt-4 border-t border-amber-200/30">
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl sm:text-3xl font-bold text-amber-600">
                            ${(room.price / 1000).toFixed(0)}k
                          </span>
                          <span className="text-sm text-slate-600">ARS</span>
                        </div>
                        <div className="text-xs text-slate-600">por noche</div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                        <Button variant="outline" className="w-full sm:w-auto border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white" asChild>
                          <Link href={`/habitaciones/${room.slug}`}>Ver detalles</Link>
                        </Button>
                        <Button className="w-full sm:w-auto bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
                          Reservar ahora
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
