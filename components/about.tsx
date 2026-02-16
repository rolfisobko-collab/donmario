import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="pt-40 pb-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/subtle-pattern.png')] opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 text-balance">
            Turismo Don Mario: Tu Experiencia Completa en Iguazú
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Descubre la oferta integral de Turismo Don Mario en Puerto Iguazú: alojamiento confortable, 
            gastronomía exquisita y traslados turísticos. Todo lo que necesitas para una 
            experiencia inolvidable en las Cataratas del Iguazú, bajo una misma calidad y servicio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white group rounded-2xl border border-zinc-100">
            <CardContent className="pt-8 text-center space-y-6 p-8">
              <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto group-hover:bg-amber-100 transition-colors">
                <Image 
                  src="https://instagram.fcnq2-2.fna.fbcdn.net/v/t51.2885-19/454197632_1205924547218194_7952387976563658738_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby41MDAuYzIifQ&_nc_ht=instagram.fcnq2-2.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QGb-cXWdyHCc1XhSw7WSVg28tjjtPQ5RySbsVDDRQN0DSv-VXv6z2P9z-vx1giGRvg&_nc_ohc=EiOVP-3zd2IQ7kNvwGpcZ6W&_nc_gid=hBW1cFA26JglEf17AM4hFA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfvjpTglYxbOJbLWScmmaL7Cb93S8wnpCYW_Ibm9-aRxPg&oe=6997D8D8&_nc_sid=7a9f4b"
                  alt="Alojamiento Don Mario Logo"
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-slate-900">Alojamiento Premium</h3>
              <p className="text-slate-600 leading-relaxed">
                Habitaciones espaciosas y confortables con todas las comodidades. 
                Ambiente familiar, atención personalizada y ubicación estratégica 
                para explorar las maravillas de Iguazú.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white group transform md:-translate-y-4 rounded-2xl border border-zinc-100">
            <CardContent className="pt-8 text-center space-y-6 p-8">
              <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto group-hover:bg-amber-100 transition-colors">
                <Image 
                  src="https://instagram.fcnq2-2.fna.fbcdn.net/v/t51.2885-19/454197632_1205924547218194_7952387976563658738_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby41MDAuYzIifQ&_nc_ht=instagram.fcnq2-2.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QGb-cXWdyHCc1XhSw7WSVg28tjjtPQ5RySbsVDDRQN0DSv-VXv6z2P9z-vx1giGRvg&_nc_ohc=EiOVP-3zd2IQ7kNvwGpcZ6W&_nc_gid=hBW1cFA26JglEf17AM4hFA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfvjpTglYxbOJbLWScmmaL7Cb93S8wnpCYW_Ibm9-aRxPg&oe=6997D8D8&_nc_sid=7a9f4b"
                  alt="Restaurante Don Mario Logo"
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-slate-900">Restaurante Don Mario</h3>
              <p className="text-slate-600 leading-relaxed">
                Disfruta de la mejor gastronomía local con nuestras especialidades 
                de parrilla y platos regionales. Un espacio ideal para compartir 
                momentos inolvidables con sabores auténticos.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white group rounded-2xl border border-zinc-100">
            <CardContent className="pt-8 text-center space-y-6 p-8">
              <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto group-hover:bg-amber-100 transition-colors">
                <Image 
                  src="https://instagram.fcnq2-2.fna.fbcdn.net/v/t51.2885-19/454197632_1205924547218194_7952387976563658738_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby41MDAuYzIifQ&_nc_ht=instagram.fcnq2-2.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QGb-cXWdyHCc1XhSw7WSVg28tjjtPQ5RySbsVDDRQN0DSv-VXv6z2P9z-vx1giGRvg&_nc_ohc=EiOVP-3zd2IQ7kNvwGpcZ6W&_nc_gid=hBW1cFA26JglEf17AM4hFA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfvjpTglYxbOJbLWScmmaL7Cb93S8wnpCYW_Ibm9-aRxPg&oe=6997D8D8&_nc_sid=7a9f4b"
                  alt="Traslados Don Mario Logo"
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-slate-900">Traslados Turísticos</h3>
              <p className="text-slate-600 leading-relaxed">
                Explora Iguazú con nuestros traslados privados y tours guiados. 
                Servicio exclusivo con guías locales y transporte cómodo 
                para una experiencia inolvidable.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
