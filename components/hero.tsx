"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(3) // Arranca con Don Mario Turismo (id: 3)

  const slides = [
    {
      id: 0,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      logo: "https://i.ibb.co/fdyP72yr/469511863-17948267576910760-160937566039743134-n-1.jpg",
      business: "hotel",
      title: "Don Mario Alojamiento",
      subtitle: "Experiencia Premium en Iguazú",
      description: "Descanso absoluto en el corazón de la selva. Habitaciones diseñadas para tu confort, con atención personalizada y la calidez que nos caracteriza. Tu oasis en Puerto Iguazú.",
      cta: "Ver Habitaciones",
      color: "from-slate-700 to-slate-900",
      bgGradient: "from-slate-900/80 via-slate-800/70 to-slate-900/80"
    },
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      logo: "https://instagram.fcnq2-2.fna.fbcdn.net/v/t51.2885-19/454197632_1205924547218194_7952387976563658738_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby41MDAuYzIifQ&_nc_ht=instagram.fcnq2-2.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QGb-cXWdyHCc1XhSw7WSVg28tjjtPQ5RySbsVDDRQN0DSv-VXv6z2P9z-vx1giGRvg&_nc_ohc=EiOVP-3zd2IQ7kNvwGpcZ6W&_nc_gid=hBW1cFA26JglEf17AM4hFA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfvjpTglYxbOJbLWScmmaL7Cb93S8wnpCYW_Ibm9-aRxPg&oe=6997D8D8&_nc_sid=7a9f4b",
      business: "restaurante",
      title: "Don Mario Restaurante",
      subtitle: "Sabor Auténtico Argentino",
      description: "La tradición de nuestra parrilla en cada bocado. Cortes selectos, recetas familiares y el ambiente perfecto para compartir. Donde el buen comer se convierte en arte.",
      cta: "Reservar Mesa",
      color: "from-stone-700 to-stone-900",
      bgGradient: "from-stone-900/80 via-stone-800/70 to-stone-900/80"
    },
    {
      id: 2,
      image: "https://www.argentina.gob.ar/sites/default/files/iguazu_1a.jpg",
      business: "traslados",
      title: "Don Mario Traslados",
      subtitle: "Movilidad Segura y Confiable",
      description: "Tu viaje sin preocupaciones. Servicio profesional desde el aeropuerto a cualquier destino. Conductores expertos, vehículos confortables y puntualidad garantizada.",
      cta: "Solicitar Traslado",
      color: "from-zinc-700 to-zinc-900",
      bgGradient: "from-zinc-900/80 via-zinc-800/70 to-zinc-900/80"
    },
    {
      id: 3,
      image: "https://i0.wp.com/iguazuargentinatours.com/wp-content/uploads/2020/05/Iguazu-Waterfalls-Awasi-Iguazu-PH-Miguel-Cesar-scaled.jpg?fit=1920%2C1275&ssl=1",
      business: "turismo",
      title: "Don Mario Turismo",
      subtitle: "Tu Experiencia Completa en Iguazú",
      description: "Descubre la oferta integral de Don Mario en Puerto Iguazú: alojamiento confortable, gastronomía exquisita y traslados turísticos. Todo lo que necesitas para una experiencia inolvidable en las Cataratas del Iguazú, bajo una misma calidad y servicio de excelencia.",
      cta: "Conocer Más",
      color: "from-gray-700 to-gray-900",
      bgGradient: "from-gray-900/80 via-gray-800/70 to-gray-900/80"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 12000) // 12 segundos por slide

    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Carrusel de Imágenes */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100' 
                : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={`${slide.title} - Background`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient}`} />
          </div>
        ))}
      </div>

      {/* Contenido Principal - Layout Profesional */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Texto a la izquierda */}
              <div className="text-left space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                    {currentSlideData.title}
                  </h1>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-white/90 leading-relaxed">
                    {currentSlideData.subtitle}
                  </h2>
                </div>
                
                <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-lg">
                  {currentSlideData.description}
                </p>

                <div className="pt-4">
                  <Link
                    href={
                      currentSlideData.business === 'hotel' ? '/#rooms' :
                      currentSlideData.business === 'restaurante' ? '/restaurante' :
                      '/traslados'
                    }
                    className={`inline-flex items-center gap-3 bg-gradient-to-r ${currentSlideData.color} hover:opacity-90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg`}
                  >
                    {currentSlideData.cta}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>

              {/* Logo a la derecha */}
              <div className="flex justify-center md:justify-end">
                <div className="relative">
                  {currentSlideData.business === 'hotel' && (
                    <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-xl shadow-2xl p-4">
                      <Image
                        src={currentSlideData.logo || ""}
                        alt="Don Mario Turismo Logo"
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                  )}
                  {currentSlideData.business === 'restaurante' && (
                    <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-xl shadow-2xl p-4">
                      <Image
                        src={currentSlideData.logo || ""}
                        alt="Don Mario Restaurante Logo"
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                  )}
                  {currentSlideData.business === 'traslados' && (
                    <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-xl shadow-2xl flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-lg flex items-center justify-center">
                          <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                          </svg>
                        </div>
                        <div className="text-zinc-800 font-semibold text-lg">Don Mario</div>
                        <div className="text-zinc-600">Traslados</div>
                      </div>
                    </div>
                  )}
                  {currentSlideData.business === 'turismo' && (
                    <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-xl shadow-2xl flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                          <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="text-gray-800 font-bold text-xl">Don Mario</div>
                        <div className="text-gray-600 font-medium">Turismo</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flechas de Navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 z-20 -translate-y-1/2 bg-black/30 backdrop-blur-sm p-3 rounded-full hover:bg-black/40 transition-all duration-300"
        aria-label="Anterior"
      >
        <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 z-20 -translate-y-1/2 bg-black/30 backdrop-blur-sm p-3 rounded-full hover:bg-black/40 transition-all duration-300"
        aria-label="Siguiente"
      >
        <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicadores del Carrusel */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Ir a ${slide.title}`}
          />
        ))}
      </div>
    </div>
  )
}
