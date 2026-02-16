'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { getAllTestimonials } from "@/lib/testimonials"
import { useEffect, useState } from "react"

interface Testimonial {
  id: number
  guest_name: string
  rating: number
  comment: string
  room_type: string
  date: string
}

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const data = await getAllTestimonials()
        setTestimonials(data)
      } catch (error) {
        console.error("Error loading testimonials:", error)
      } finally {
        setLoading(false)
      }
    }
    loadTestimonials()
  }, [])

  if (loading) {
    return (
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Cargando testimonios...</h2>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/subtle-pattern.png')] opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white text-balance">
            Lo que dicen nuestros huéspedes
          </h2>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="bg-white/10 border-none text-white backdrop-blur-sm">
                  <CardContent className="p-8 md:p-12 text-center space-y-6">
                    <Quote className="h-12 w-12 mx-auto text-white/40" />
                    <p className="text-xl md:text-2xl font-serif italic leading-relaxed">
                      &ldquo;{testimonial.comment}&rdquo;
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <h4 className="font-bold text-lg">{testimonial.guest_name}</h4>
                      <p className="text-white/70 text-sm">{testimonial.room_type}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white -left-12" />
            <CarouselNext className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white -right-12" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
