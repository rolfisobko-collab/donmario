"use client"

import { MessageCircle, Phone } from "lucide-react"
import Image from 'next/image'

export function Contact() {
  const handleWhatsAppContact = (business: string) => {
    const messages = {
      hotel: "¡Hola! Quiero información sobre alojamiento en Don Mario Turismo 🏨✨",
      restaurante: "¡Hola! Quiero hacer una reserva en Don Mario Restaurante 🍽️✨",
      traslados: "¡Hola! Quiero información sobre traslados con Don Mario 🚗✨"
    }
    
    const message = encodeURIComponent(messages[business as keyof typeof messages])
    window.open(`https://wa.me/5493757671408?text=${message}`, '_blank')
  }

  const handlePhoneCall = () => {
    window.open('tel:+5493757671408')
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 via-amber-50 to-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: "radial-gradient(rgb(251, 191, 36) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-6 mb-16">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">Contacto Directo</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Hablanos cuando quieras</h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Atención personalizada para tus vacaciones en Puerto Iguazú. 
            Alojamiento, gastronomía y traslados con la calidad Don Mario.
          </p>
        </div>

        {/* Tarjetas de Negocios */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Hotel */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-xl p-8 border-2 border-amber-200/50 hover:shadow-2xl transition-all duration-300">
            <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 p-2">
              <Image
                src="https://i.ibb.co/fdyP72yr/469511863-17948267576910760-160937566039743134-n-1.jpg"
                alt="Don Mario Turismo Logo"
                width={80}
                height={80}
                className="object-contain rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">Don Mario Turismo</h3>
            <p className="text-slate-600 mb-6">Habitaciones confortables con atención personalizada en Puerto Iguazú</p>
            
            <div className="space-y-3">
              <button
                onClick={() => handleWhatsAppContact('hotel')}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </button>
              <button
                onClick={handlePhoneCall}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Phone className="h-5 w-5" />
                Llamar
              </button>
            </div>
          </div>

          {/* Restaurante */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-xl p-8 border-2 border-red-200/50 hover:shadow-2xl transition-all duration-300">
            <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 p-2">
              <Image
                src="https://instagram.fcnq2-2.fna.fbcdn.net/v/t51.2885-19/454197632_1205924547218194_7952387976563658738_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby41MDAuYzIifQ&_nc_ht=instagram.fcnq2-2.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QGb-cXWdyHCc1XhSw7WSVg28tjjtPQ5RySbsVDDRQN0DSv-VXv6z2P9z-vx1giGRvg&_nc_ohc=EiOVP-3zd2IQ7kNvwGpcZ6W&_nc_gid=hBW1cFA26JglEf17AM4hFA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfvjpTglYxbOJbLWScmmaL7Cb93S8wnpCYW_Ibm9-aRxPg&oe=6997D8D8&_nc_sid=7a9f4b"
                alt="Don Mario Restaurante Logo"
                width={80}
                height={80}
                className="object-contain rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">Don Mario Restaurante</h3>
            <p className="text-slate-600 mb-6">La mejor parrilla argentina y cocina tradicional en Puerto Iguazú</p>
            
            <div className="space-y-3">
              <button
                onClick={() => handleWhatsAppContact('restaurante')}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </button>
              <button
                onClick={handlePhoneCall}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Phone className="h-5 w-5" />
                Llamar
              </button>
            </div>
          </div>

          {/* Traslados */}
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl shadow-xl p-8 border-2 border-blue-200/50 hover:shadow-2xl transition-all duration-300">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
              <div className="text-center">
                <div className="text-white font-bold text-lg">DON</div>
                <div className="text-white font-bold text-lg">MARIO</div>
                <div className="text-blue-200 text-xs font-medium">TRASLADOS</div>
              </div>
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">Don Mario Traslados</h3>
            <p className="text-slate-600 mb-6">Transporte seguro y cómodo desde el aeropuerto a tu destino</p>
            
            <div className="space-y-3">
              <button
                onClick={() => handleWhatsAppContact('traslados')}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-slate-600 hover:from-blue-700 hover:to-slate-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </button>
              <button
                onClick={handlePhoneCall}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-slate-600 to-blue-600 hover:from-slate-700 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Phone className="h-5 w-5" />
                Llamar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
