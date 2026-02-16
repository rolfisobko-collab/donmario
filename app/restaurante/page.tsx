'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Clock, MapPin, Phone, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export default function RestaurantePage() {
  const handleWhatsAppReservation = () => {
    const message = encodeURIComponent("¡Hola! Quiero hacer una reserva en el Restaurante Don Mario 🥩🍷")
    window.open(`https://wa.me/5491112345678?text=${message}`, '_blank')
  }

  const handlePhoneReservation = () => {
    window.open('tel:+5491112345678')
  }

  const galleryImages = [
    {
      src: "https://i.ibb.co/fdyP72yr/469511863-17948267576910760-160937566039743134-n-1.jpg",
      alt: "Restaurante Don Mario - Ambiente elegante"
    },
    {
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3",
      alt: "Cortes premium de carne argentina"
    },
    {
      src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3",
      alt: "Vinos argentinos seleccionados"
    },
    {
      src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3",
      alt: "Parrilla tradicional argentina"
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3",
      alt: "Ambiente acogedor del restaurante"
    },
    {
      src: "https://images.unsplash.com/photo-1577148611057-059d4a9cbb18?ixlib=rb-4.0.3",
      alt: "Chef preparando cortes premium"
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-slate-900 via-slate-800 to-zinc-900 pt-20">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20" />
        
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4 space-y-6">
            <div className="flex justify-center mb-6">
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
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
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
                  <span className="font-medium text-slate-700">Lunes a Viernes</span>
                  <span className="text-amber-600 font-bold">12:00 - 23:00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-100">
                  <span className="font-medium text-slate-700">Sábados</span>
                  <span className="text-amber-600 font-bold">12:00 - 24:00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-slate-700">Domingos</span>
                  <span className="text-amber-600 font-bold">12:00 - 23:00</span>
                </div>
              </div>
            </div>

            {/* Ubicación */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-zinc-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-amber-600" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-slate-900">Ubicación</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-slate-700">
                  <span className="font-medium">Dirección:</span><br />
                  Av. Iguazú 1234, Puerto Iguazú<br />
                  Misiones, Argentina
                </p>
                <p className="text-lg text-slate-700">
                  <span className="font-medium">Teléfono:</span><br />
                  +54 9 11 1234-5678
                </p>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.123456789!2d-54.5712345678!3d-25.5912345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM1JzMwLjAiTiA1NMKwMzQnMjUuNCJF!5e0!3m2!1sen!2sar!4v1234567890"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
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
              Un espacio elegante y acogedor donde la tradición argentina se encuentra con el lujo moderno
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
                <span>Lun a Dom: 12:00 - 23:00</span>
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
