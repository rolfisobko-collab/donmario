import { Card, CardContent } from '@/components/ui/card'
import { Utensils, Flame, Clock, MapPin } from 'lucide-react'

export function Parrilla() {
  const menuItems = [
    {
      category: "Cortes Premium",
      items: [
        { name: "Ojo de Bife", description: "500g - Corte jugoso con hueso", price: "$12.500" },
        { name: "Cuadril", description: "400g - Tierno y sabroso", price: "$10.800" },
        { name: "Vacío", description: "350g - Tradicional argentino", price: "$9.500" },
        { name: "Costillar", description: "600g - Ahumado lentamente", price: "$14.200" }
      ]
    },
    {
      category: "Acompañamientos",
      items: [
        { name: "Papas Provenzales", description: "Hierbas aromáticas", price: "$3.800" },
        { name: "Ensalada Mixta", description: "Verde fresca con vinagreta", price: "$2.900" },
        { name: "Puré de Papas", description: "Crema y manteca", price: "$3.200" },
        { name: "Provoleta", description: "Grillada con hierbas", price: "$4.500" }
      ]
    },
    {
      category: "Bebidas",
      items: [
        { name: "Vino Tinto", description: "Malbec/Cabernet", price: "$4.800" },
        { name: "Cerveza Artesanal", description: "IPA/Lager local", price: "$2.200" },
        { name: "Limonada Fresca", description: "Natural o con menta", price: "$1.800" },
        { name: "Agua Mineral", description: "Con o sin gas", price: "$800" }
      ]
    }
  ]

  return (
    <section id="parrilla" className="py-24 bg-gradient-to-br from-red-50 to-orange-50 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#dc2626 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
              <Flame className="h-10 w-10 text-red-600" />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground text-balance">
            Parrilla <span className="italic text-red-600">Don Mario</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Sabores auténticos de la tierra, leña y tradición. Nuestra parrilla ofrece los mejores cortes 
            argentinos preparados con el arte de siempre.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full">
              <Clock className="h-4 w-4 text-red-600" />
              <span>12:00 - 23:00</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full">
              <MapPin className="h-4 w-4 text-red-600" />
              <span>Jardín del Hotel</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {menuItems.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-serif font-bold text-red-600 mb-2">{category.category}</h3>
                <div className="w-16 h-1 bg-red-600 mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="group border-none bg-white/80 hover:bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-serif font-bold text-foreground group-hover:text-red-600 transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xl font-bold text-red-600">{item.price}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 space-y-4">
          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
            <Utensils className="h-6 w-6 text-red-600" />
            <span className="text-lg font-serif text-foreground">
              Reservas: <span className="font-bold text-red-600">+54 9 11 1234-5678</span>
            </span>
          </div>
          <div className="flex justify-center gap-4">
            <a 
              href="/parrilla" 
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Ver Menú Completo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
