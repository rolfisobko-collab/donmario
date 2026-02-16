'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Clock, Star, Phone, MessageCircle, MapPin, Calendar, Heart } from 'lucide-react'
import trasladosData from "@/data/traslados.json"
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

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
}

export default function TourDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const tours = trasladosData as Tour[]
  const tour = tours.find(t => t.slug === slug)

  if (!tour) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Tour no encontrado</h1>
          <p className="text-lg text-muted-foreground mb-8">
            El tour que buscas no existe o ha sido eliminado.
          </p>
          <a href="/traslados" className="text-blue-600 hover:text-blue-700 underline">
            Volver a todos los tours
          </a>
        </div>
        <Footer />
      </main>
    )
  }

  const handleWhatsAppReservation = () => {
    const message = encodeURIComponent(tour.whatsapp_message_es)
    window.open(`https://wa.me/5493757671408?text=${message}`, '_blank')
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="relative min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <Image
            src={tour.image_url}
            alt={tour.title_es}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
          <div className="absolute bottom-0 left-0 right-0 z-10 p-8">
            <div className="container mx-auto">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                  {tour.title_es}
                </h1>
                <div className="flex flex-wrap gap-4 text-white/90">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>{tour.duration_es}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span>{tour.route_es}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-current text-yellow-400" />
                    <span>4.9 (256 reseñas)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Descripción del Tour</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {tour.description_es}
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Actividades y Atractivos</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {tour.features_es.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                      <Star className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Services */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6 text-slate-900">Servicios Recomendados</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(trasladosData as Tour[])
                    .filter((t: Tour) => t.id !== tour.id)
                    .slice(0, 6)
                    .map((recommendedTour: Tour) => (
                      <Card key={recommendedTour.id} className="group border-none bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-2xl border border-zinc-100">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={recommendedTour.image_url}
                            alt={recommendedTour.title_es}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-white font-bold text-lg line-clamp-2 mb-2">
                              {recommendedTour.title_es}
                            </h3>
                            <div className="flex items-center gap-2 text-white/90 text-sm">
                              <Clock className="h-4 w-4 text-amber-400" />
                              <span>{recommendedTour.duration_es}</span>
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-5 space-y-4">
                          <p className="text-slate-600 leading-relaxed line-clamp-3">
                            {recommendedTour.short_description_es}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-slate-700">
                            <MapPin className="h-4 w-4 text-amber-600" />
                            <span>{recommendedTour.route_es}</span>
                          </div>
                          <a
                            href={`/traslados/${recommendedTour.slug}`}
                            className="block w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 text-center shadow-md hover:shadow-lg"
                          >
                            Ver Detalles
                          </a>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Booking Card */}
              <Card className="sticky top-8 border-none shadow-xl">
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <span>{tour.duration_es}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                      <span>{tour.route_es}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Heart className="h-5 w-5 text-muted-foreground" />
                      <span>Apto para todas las edades</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      size="lg" 
                      onClick={handleWhatsAppReservation}
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Reservar por WhatsApp
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="w-full"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      Llamar ahora
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Includes */}
              <Card className="border-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-4">¿Qué incluye?</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Traslado hotel-destino-hotel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Guía bilingüe especializado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Entradas a los parques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Agua y refrigerios</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Not Includes */}
              <Card className="border-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-4">¿Qué no incluye?</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Almuerzo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Compras en souvenirs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Propinas</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
