export interface Room {
  id: string
  slug: string
  title: string
  description: string
  capacity: string
  size: string
  price: number
  image: string
  gallery: string[]
  features: string[]
  amenities: string[]
}

export const rooms: Room[] = [
  {
    id: "1",
    slug: "suite-familiar-premium",
    title: "Suite Familiar Premium",
    description:
      "Nuestra suite más exclusiva, diseñada para familias que buscan el máximo confort. Cuenta con amplios espacios, decoración moderna y vistas privilegiadas al jardín tropical.",
    capacity: "Hasta 5 personas",
    size: "45 m²",
    price: 80,
    image: "/luxury-hotel-room-family.jpg",
    gallery: [
      "/luxury-hotel-room-family-1.jpg",
      "/luxury-hotel-room-family-2.jpg",
      "/luxury-hotel-bathroom.jpg",
      "/luxury-hotel-balcony.jpg",
    ],
    features: ["Cama King Size", "3 Camas Individuales", "Baño Privado", "Vista al Jardín", 'Smart TV 50"'],
    amenities: [
      "Wifi de alta velocidad",
      "Aire Acondicionado",
      "Frigobar",
      "Caja fuerte",
      "Secador de pelo",
      "Amenities de baño premium",
      "Servicio de limpieza diario",
    ],
  },
  {
    id: "2",
    slug: "habitacion-triple-deluxe",
    title: "Habitación Triple Deluxe",
    description:
      "Ideal para grupos pequeños o familias. Combina funcionalidad y estilo con todas las comodidades necesarias para una estancia relajante.",
    capacity: "Hasta 3 personas",
    size: "30 m²",
    price: 60,
    image: "/luxury-hotel-room-triple.jpg",
    gallery: ["/luxury-hotel-room-triple-1.jpg", "/luxury-hotel-room-triple-2.jpg", "/luxury-hotel-bathroom-modern.jpg"],
    features: ["Cama Queen", "Cama Individual", "Frigobar", "Escritorio", "Balcón Privado"],
    amenities: [
      "Wifi de alta velocidad",
      "Aire Acondicionado",
      "TV Cable",
      "Escritorio de trabajo",
      "Ducha con efecto lluvia",
    ],
  },
  {
    id: "3",
    slug: "doble-matrimonial",
    title: "Doble Matrimonial",
    description:
      "Un refugio romántico perfecto para parejas. Decoración cálida, iluminación suave y todo lo necesario para una escapada inolvidable.",
    capacity: "2 personas",
    size: "25 m²",
    price: 50,
    image: "/luxury-hotel-room-couple.jpg",
    gallery: ["/luxury-hotel-room-couple-1.jpg", "/luxury-hotel-room-couple-2.jpg"],
    features: ["Cama King Size", "Baño con Bañera", "Amenities Premium", "Caja Fuerte", "Room Service"],
    amenities: ["Wifi de alta velocidad", "Aire Acondicionado", "Smart TV", "Minibar", "Batas y pantuflas"],
  },
  {
    id: "4",
    slug: "suite-ejecutiva",
    title: "Suite Ejecutiva",
    description:
      "Diseñada para el viajero de negocios o quien busca un extra de privacidad. Cuenta con área de trabajo dedicada y conexión a internet de alta velocidad.",
    capacity: "2 personas",
    size: "35 m²",
    price: 70,
    image: "/luxury-hotel-room-executive.jpg",
    gallery: ["/luxury-hotel-room-executive-1.jpg", "/luxury-hotel-room-executive-2.jpg"],
    features: ["Cama Queen", "Escritorio Ergonómico", "Cafetera Nespresso", "Insonorización", "Vista a la Ciudad"],
    amenities: ["Wifi Fibra Óptica", "Aire Acondicionado", "Plancha y tabla", "Servicio de lavandería", "Smart TV"],
  },
]

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((room) => room.slug === slug)
}
