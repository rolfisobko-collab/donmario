"use client"

import { MessageCircle, Phone, Hotel, Utensils, Car } from "lucide-react"

export function Contact() {
  const handleWhatsAppContact = (business: string) => {
    const messages = {
      hotel: "¡Hola! Quiero información sobre alojamiento en Don Mario Turismo 🏨✨",
      restaurante: "¡Hola! Quiero hacer una reserva en Don Mario Restaurante 🍽️✨",
      traslados: "¡Hola! Quiero información sobre traslados con Don Mario 🚗✨"
    }
    
    const message = encodeURIComponent(messages[business as keyof typeof messages])
    window.open(`https://wa.me/5493757123456?text=${message}`, '_blank')
  }

  const handlePhoneCall = () => {
    window.open('tel:+5493757123456')
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
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100/50 hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Hotel className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">Don Mario Turismo</h3>
            <p className="text-slate-600 mb-6">Habitaciones confortables con atención personalizada en Puerto Iguazú</p>
            
            <div className="space-y-3">
              <button
                onClick={() => handleWhatsAppContact('hotel')}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-xl transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </button>
              <button
                onClick={handlePhoneCall}
                className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-4 rounded-xl transition-colors"
              >
                <Phone className="h-5 w-5" />
                Llamar
              </button>
            </div>
          </div>

          {/* Restaurante */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-red-100/50 hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Utensils className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">Don Mario Restaurante</h3>
            <p className="text-slate-600 mb-6">La mejor parrilla argentina y cocina tradicional en Puerto Iguazú</p>
            
            <div className="space-y-3">
              <button
                onClick={() => handleWhatsAppContact('restaurante')}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-xl transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </button>
              <button
                onClick={handlePhoneCall}
                className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-4 rounded-xl transition-colors"
              >
                <Phone className="h-5 w-5" />
                Llamar
              </button>
            </div>
          </div>

          {/* Traslados */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100/50 hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Car className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">Don Mario Traslados</h3>
            <p className="text-slate-600 mb-6">Transporte seguro y cómodo desde el aeropuerto a tu destino</p>
            
            <div className="space-y-3">
              <button
                onClick={() => handleWhatsAppContact('traslados')}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-xl transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </button>
              <button
                onClick={handlePhoneCall}
                className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-4 rounded-xl transition-colors"
              >
                <Phone className="h-5 w-5" />
                Llamar
              </button>
            </div>
          </div>
        </div>

        {/* Información Central */}
        <div className="bg-gradient-to-r from-amber-50 to-slate-50 rounded-2xl p-8 border border-amber-200/30">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold text-slate-900">Un solo contacto para todo</h3>
            <p className="text-slate-600">
              <strong>WhatsApp:</strong> +54 9 3757 123456<br />
              <strong>Teléfono:</strong> +54 9 3757 123456<br />
              <strong>Atención:</strong> Lunes a Domingo • 8:00 a 22:00
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
