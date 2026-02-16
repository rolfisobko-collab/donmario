'use client'

import { Wifi, Wind, Coffee, Tv, Waves, Dumbbell, Utensils, Clock, Bell, Shirt, Briefcase } from 'lucide-react'
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

interface Amenity {
  id: number
  name: string
  description: string
  icon: string
  category: string
}

export function Amenities() {
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

  if (loading) {
    return (
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900">Cargando comodidades...</h2>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="amenities" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      {/* CSS for carousel animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-600/20 blur-2xl rounded-full" />
              <Image
                src="https://i.ibb.co/fdyP72yr/469511863-17948267576910760-160937566039743134-n-1.jpg"
                alt="Alojamiento Don Mario Logo"
                width={120}
                height={120}
                className="relative h-24 w-24 md:h-28 md:w-28 rounded-full border-4 border-white/20 shadow-2xl object-cover"
              />
            </div>
          </div>
          <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">Alojamiento Don Mario</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 text-balance">
            Comodidades Pensadas <br/> <span className="italic text-amber-600">Para Vos</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Cada detalle ha sido cuidado para que tu estadía sea inolvidable. 
            Disfruta del equilibrio perfecto entre naturaleza y confort.
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          {/* Bordes degradados para efecto infinito */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
          
          <div className="flex animate-scroll gap-6 py-8">
            {amenities.concat(amenities).map((amenity, index) => {
              const Icon = iconMap[amenity.icon] || Coffee
              return (
                <div key={`${amenity.id}-${index}`} className="flex-shrink-0 w-80">
                  <div className="bg-gradient-to-br from-white to-slate-50 shadow-xl overflow-hidden rounded-3xl border border-slate-200/50 h-full p-8">
                    <div className="flex flex-col items-center text-center gap-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center shadow-lg">
                        <Icon className="h-10 w-10 text-amber-600" strokeWidth={1.5} />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-serif font-bold text-slate-900">{amenity.name}</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">
                          {amenity.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
