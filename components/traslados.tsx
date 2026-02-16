import { Card, CardContent } from '@/components/ui/card'
import { Bus, Clock, MapPin } from 'lucide-react'
import trasladosData from "@/data/traslados.json"
import Image from 'next/image'

interface Tour {
  id: string
  slug: string
  title_es: string
  description_es: string
  short_description_es: string
  duration_es: string
  route_es: string
  whatsapp_message_es: string
  features_es: string[]
  image_url: string
  media_urls: string[]
  is_featured: boolean
  display_order: number
  country: string
}

export function Traslados() {
  const tours = trasladosData as Tour[]

  return (
    <section id="traslados" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-slate-900 flex items-center justify-center shadow-2xl">
              <Bus className="h-12 w-12 text-amber-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 text-balance">
            Traslados <span className="italic text-amber-600">Don Mario</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Descubre las maravillas de Iguazú con nuestros traslados privados y tours guiados. 
            Servicio exclusivo con guías locales y transporte cómodo.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-zinc-100">
              <Clock className="h-4 w-4 text-amber-600" />
              <span className="font-medium text-slate-700">Disponible 24/7</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-zinc-100">
              <Bus className="h-4 w-4 text-amber-600" />
              <span className="font-medium text-slate-700">Grupos pequeños</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tours.map((tour: Tour) => (
            <Card key={tour.id} className="group border-none bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-2xl border border-zinc-100">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={tour.image_url}
                  alt={tour.title_es}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              </div>
              
              <CardContent className="p-7 space-y-5">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-3">
                    {tour.title_es}
                  </h3>
                  <p className="text-slate-600 leading-relaxed line-clamp-3">
                    {tour.short_description_es}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="h-4 w-4 text-amber-600" />
                    <span className="font-medium text-slate-700">{tour.duration_es}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-amber-600" />
                    <span className="font-medium text-slate-700">{tour.route_es}</span>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href={`/traslados/${tour.slug}`}
                    className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 text-center shadow-md hover:shadow-lg"
                  >
                    Ver Detalles
                  </a>
                  <a
                    href={`https://wa.me/5491112345678?text=${encodeURIComponent(tour.whatsapp_message_es)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 text-center shadow-md hover:shadow-lg"
                  >
                    Reservar
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
