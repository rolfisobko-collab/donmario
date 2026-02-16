import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Location() {
  return (
    <section id="location" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary text-balance">
            Ubicación Privilegiada
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            En el corazón de Puerto Iguazú, cerca de todo lo que necesitas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-none shadow-lg h-full">
            <CardContent className="p-6 md:p-8 space-y-8">
              <h3 className="text-2xl font-serif font-semibold">Información de Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">Dirección</p>
                    <p className="text-muted-foreground text-sm md:text-base">
                      Av. República Argentina 451
                      <br />
                      Puerto Iguazú 3370, Misiones
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-lg">Email</p>
                    <a
                      href="mailto:Donmario.alojamiento@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base break-all"
                    >
                      Donmario.alojamiento@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">Teléfono</p>
                    <p className="text-muted-foreground text-sm md:text-base">
                      Contáctanos por email para más información
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Clock className="h-5 w-5 md:h-6 md:w-6 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">Horario de Atención</p>
                    <p className="text-muted-foreground text-sm md:text-base">
                      Check-in: 14:00 hs
                      <br />
                      Check-out: 10:00 hs
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg overflow-hidden h-[400px] lg:h-auto">
            <CardContent className="p-0 h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.7156!2d-54.5763!3d-25.5967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f69229db456789%3A0xabcdef1234567890!2sAv.%20Rep%C3%BAblica%20Argentina%20451%2C%20Puerto%20Iguaz%C3%BA%2C%20Misiones!5e0!3m2!1ses!2sar!4v1640000000000!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
