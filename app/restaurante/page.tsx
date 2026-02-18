'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Clock, MapPin, Phone, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export default function RestaurantePage() {
  const handleWhatsAppReservation = () => {
    const message = encodeURIComponent("¡Hola! Quiero hacer una reserva en el Restaurante Don Mario 🥩🍷")
    window.open(`https://wa.me/5493757671408?text=${message}`, '_blank')
  }

  const handlePhoneReservation = () => {
    window.open('tel:+5493757671408')
  }

  const galleryImages = [
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoA4TX4AMBmcyErhuSwpy6BN9NUePDk-UDGVy7RBCL5a7R9dnmrQw939towOvU1tGq7SBlqK57eN9bynYViAbFBP--xB1qu2Hp-zOmSrPPLh-sNwZapaHinzEqX3aKcqkUd3yC4Dg=w243-h406-n-k-no-nu",
      alt: "Restaurante Don Mario - Fachada principal"
    },
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerJi7c9z6uRlDtvbQFkbGY5m-qwBthV4uQ-8yenD6beDv9ZUpvhV8DaatMw_FjbylMXH00PC51CXoDSDTIOicKsEkNoK2BUwhQeVVRxS7rJ4rZPF8mK9MqFdARNHFNK76xlzlMp=w243-h406-n-k-no-nu",
      alt: "Restaurante Don Mario - Interior del comedor"
    },
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqTLLZSxVQrfkI2FaqYBg8f-O9XSJagr8N0X-flZGld28sZAeNuGqVJq5dnbEHtwKEcR4ECNLDN4Q4K-eFHpBIsGw27rvS-BItfsmrKwVB91YSascf7woVXPbUt5BGYZhOEPu3F=s1360-w1360-h1020-rw",
      alt: "Restaurante Don Mario - Área de parrilla"
    },
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep4Y0IwIAW5mVGHSZalb0urad5M-D34WUBuDwAiEuXHzBLQ-UzOEtiNf5KMO35dcWW8xCSVu1rcPFE4cxduMfLfvWCq4RMmQEqY3tcZmU84-F-SEwCPOG7Dpe3n9hnTWd3w9v7eLQ=s1360-w1360-h1020-rw",
      alt: "Restaurante Don Mario - Bar y vinos"
    },
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepoJGO81jVHRywqqXKyaltE_qu5qvC-y2KepuZjGLU7iuWA5PIGm0rxGIPhrQN_EOVing7CvaMnoscDmdX0U1SSdYPj_uwITFLHAYQhyQvEPBNo2_8VFxYKVHIBDJlniq5nNa82=s1360-w1360-h1020-rw",
      alt: "Restaurante Don Mario - Detalles del ambiente"
    },
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoOLam0gxchjQ5xqYWwXQSY_bDjNzQ7uEgga9eSAwHwEbK_BuALi2RToKG5Iy7KoFTgLyAgrpSmBknV-mEnAfQlaXz7uTJQc44pA4duwIpuMMPC9UhdShoGAlKFhQN6Y7FpvSZ4og=s1360-w1360-h1020-rw",
      alt: "Restaurante Don Mario - Vista general del local"
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-slate-900 via-slate-800 to-zinc-900 pt-24">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20" />
        
        <div className="relative z-10 h-full flex items-start justify-center text-center text-white pt-8">
          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 rounded-full bg-amber-600/20 backdrop-blur-sm flex items-center justify-center border border-amber-500/30">
                <Image 
                  src="https://instagram.fcnq2-2.fna.fbcdn.net/v/t51.2885-19/454197632_1205924547218194_7952387976563658738_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby41MDAuYzIifQ&_nc_ht=instagram.fcnq2-2.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QGb-cXWdyHCc1XhSw7WSVg28tjjtPQ5RySbsVDDRQN0DSv-VXv6z2P9z-vx1giGRvg&_nc_ohc=EiOVP-3zd2IQ7kNvwGpcZ6W&_nc_gid=hBW1cFA26JglEf17AM4hFA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfvjpTglYxbOJbLWScmmaL7Cb93S8wnpCYW_Ibm9-aRxPg&oe=6997D8D8&_nc_sid=7a9f4b"
                  alt="Restaurante Don Mario Logo"
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold">
              Restaurante <span className="italic text-amber-400">Don Mario</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto text-zinc-200">
              Carne argentina premium y vinos seleccionados. La experiencia gastronómica definitiva en Puerto Iguazú.
            </p>
          </div>
        </div>
      </section>

      {/* Horarios y Ubicación */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 gap-12 max-w-4xl mx-auto">
            
            {/* Horarios */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-zinc-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-slate-900">Horarios</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-zinc-100">
                  <span className="font-medium text-slate-700">Lunes</span>
                  <span className="text-amber-600 font-bold">17:00 - 23:30</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-100">
                  <span className="font-medium text-slate-700">Martes</span>
                  <span className="text-amber-600 font-bold">17:00 - 23:30</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-100">
                  <span className="font-medium text-slate-700">Miércoles</span>
                  <span className="text-amber-600 font-bold">17:00 - 23:30</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-100">
                  <span className="font-medium text-slate-700">Jueves</span>
                  <div className="text-right">
                    <div className="text-amber-600 font-bold text-sm">11:00 - 15:00</div>
                    <div className="text-amber-600 font-bold text-sm">18:00 - 23:30</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-100">
                  <span className="font-medium text-slate-700">Viernes</span>
                  <div className="text-right">
                    <div className="text-amber-600 font-bold text-sm">11:00 - 15:00</div>
                    <div className="text-amber-600 font-bold text-sm">18:00 - 23:30</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-100">
                  <span className="font-medium text-slate-700">Sábado</span>
                  <div className="text-right">
                    <div className="text-amber-600 font-bold text-sm">11:00 - 15:00</div>
                    <div className="text-amber-600 font-bold text-sm">18:00 - 23:30</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-slate-700">Domingo</span>
                  <div className="text-right">
                    <div className="text-amber-600 font-bold text-sm">11:00 - 15:00</div>
                    <div className="text-amber-600 font-bold text-sm">18:00 - 23:30</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Encuéntranos</h2>
            <p className="text-lg text-slate-600">
              Ubicados en el corazón de Puerto Iguazú, cerca de las principales atracciones turísticas
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-zinc-100">
              <div className="relative h-96 bg-zinc-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46411.701548857534!2d-54.632407880689705!3d-25.59478091095761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f6923035b415f1%3A0x5289775ffd2ddfa1!2sParrilla%20Don%20Mario!5e1!3m2!1sen!2sar!4v1771453639496!5m2!1sen!2sar"
                  width="600" 
                  height="450" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Nuestro Ambiente</h2>
            <p className="text-lg text-slate-600">
              Un espacio elegante y acogedor donde la tradición argentina se encuentra con la pasión por la buena mesa
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg border border-zinc-100">
                <div className="relative h-64">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservas */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: "radial-gradient(rgb(239, 68, 68) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Logo decorativo */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-200 to-orange-100 rounded-full scale-110 opacity-60"></div>
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-red-100 to-orange-50 flex items-center justify-center shadow-xl border-4 border-red-200/30">
                  <MessageCircle className="h-8 w-8 text-red-600" />
                </div>
              </div>
            </div>
            
            <span className="text-red-600 font-bold tracking-widest uppercase text-sm">Reservas</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Reserva tu Mesa</h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Disfruta de la mejor experiencia gastronómica en Puerto Iguazú. 
              Te esperamos con los mejores cortes y un ambiente inolvidable.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center pt-8">
              <button
                onClick={handleWhatsAppReservation}
                className="group relative flex items-center gap-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <MessageCircle className="h-5 w-5 relative z-10" />
                <span className="relative z-10">Reservar por WhatsApp</span>
              </button>
              
              <button
                onClick={handlePhoneReservation}
                className="group relative flex items-center gap-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <Phone className="h-5 w-5 relative z-10" />
                <span className="relative z-10">Llamar Ahora</span>
              </button>
            </div>
            
            {/* Info adicional */}
            <div className="mt-12 flex flex-col md:flex-row gap-8 justify-center items-center text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-red-600" />
                <span>Lun a Mié: 17:00 - 23:30 | Jue a Dom: 11:00-15:00 y 18:00-23:30</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-red-600" />
                <span>Puerto Iguazú, Misiones</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
