'use client'

import { Clock, MapPin } from 'lucide-react'
import Image from 'next/image'

export function Parrilla() {
  return (
    <section id="parrilla" className="py-24 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#dc2626 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 flex items-center justify-center">
              <Image 
                src="https://instagram.fcnq2-2.fna.fbcdn.net/v/t51.2885-19/454197632_1205924547218194_7952387976563658738_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby41MDAuYzIifQ&_nc_ht=instagram.fcnq2-2.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QGb-cXWdyHCc1XhSw7WSVg28tjjtPQ5RySbsVDDRQN0DSv-VXv6z2P9z-vx1giGRvg&_nc_ohc=EiOVP-3zd2IQ7kNvwGpcZ6W&_nc_gid=hBW1cFA26JglEf17AM4hFA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfvjpTglYxbOJbLWScmmaL7Cb93S8wnpCYW_Ibm9-aRxPg&oe=6997D8D8&_nc_sid=7a9f4b"
                alt="Parrilla Don Mario Logo"
                width={96}
                height={96}
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground text-balance">
            Parrilla <span className="italic text-red-600">Don Mario</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Sabores auténticos de la tierra, leña y tradición. Nuestra parrilla ofrece los mejores cortes 
            argentinos preparados con el arte de siempre.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
              <Clock className="h-5 w-5 text-red-600" />
              <span className="font-medium">12:00 - 23:00</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
              <MapPin className="h-5 w-5 text-red-600" />
              <span className="font-medium">Puerto Iguazú</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Experimenta la Mejor Carne Argentina
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Cortes premium, vinos seleccionados y un ambiente inolvidable te esperan.
            </p>
            <a 
              href="/restaurante"
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Explorar Restaurante</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
