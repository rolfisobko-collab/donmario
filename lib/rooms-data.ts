export type Room = {
  id: string
  slug: string
  name: string
  title: string
  description: string
  price: number
  capacity: number
  size: number
  beds: { type: string; count: number }[]
  amenities: string[]
  images: string[]
  mainImage: string
}

export const roomsData: Room[] = [
  {
    id: "1",
    slug: "suite-familiar-deluxe",
    name: "Suite Familiar Deluxe",
    title: "Suite Familiar Deluxe",
    description:
      "Espaciosa suite ideal para familias, con vistas a la selva y todas las comodidades para una estancia inolvidable.",
    price: 150,
    capacity: 5,
    size: 45,
    beds: [
      { type: "Queen", count: 1 },
      { type: "Individual", count: 3 },
    ],
    amenities: ["Aire Acondicionado", "WiFi Gratis", "TV Smart", "Baño Privado", "Frigobar", "Desayuno Incluido"],
    images: [
      "/luxury-family-suite-hotel-room-iguazu.jpg",
      "/modern-hotel-room-with-king-bed.jpg",
      "/spacious-hotel-suite-living-area.jpg",
    ],
    mainImage: "/luxury-family-suite-hotel-room-iguazu.jpg",
  },
  {
    id: "2",
    slug: "habitacion-doble-superior",
    name: "Habitación Doble Superior",
    title: "Habitación Doble Superior",
    description: "Elegante habitación para parejas con balcón privado y decoración moderna inspirada en la naturaleza.",
    price: 120,
    capacity: 2,
    size: 30,
    beds: [{ type: "King", count: 1 }],
    amenities: ["Aire Acondicionado", "WiFi Gratis", "TV Smart", "Baño Privado", "Balcón", "Caja Fuerte"],
    images: [
      "/hotel-room-king-bed-modern.jpg",
      "/hotel-balcony-jungle-view-sunset.jpg",
      "/hotel-bathroom-shower-modern.jpg",
    ],
    mainImage: "/hotel-room-king-bed-modern.jpg",
  },
  {
    id: "3",
    slug: "habitacion-economica",
    name: "Habitación Económica",
    title: "Habitación Económica",
    description: "Habitación cómoda y funcional con todo lo necesario para una estancia agradable sin gastar de más.",
    price: 85,
    capacity: 2,
    size: 20,
    beds: [{ type: "Doble", count: 1 }],
    amenities: ["Aire Acondicionado", "WiFi Gratis", "TV", "Baño Privado"],
    images: [
      "/comfortable-hotel-room-budget.jpg",
      "/cozy-hotel-room-simple.jpg",
      "/clean-hotel-bathroom-basic.jpg",
    ],
    mainImage: "/comfortable-hotel-room-budget.jpg",
  },
  {
    id: "4",
    slug: "suite-presidencial",
    name: "Suite Presidencial",
    title: "Suite Presidencial",
    description: "La suite más exclusiva del hotel, con sala de estar privada y amenities de lujo para estadías especiales.",
    price: 200,
    capacity: 4,
    size: 55,
    beds: [{ type: "King", count: 2 }],
    amenities: ["Aire Acondicionado", "WiFi Gratis", "TV Smart 4K", "Baño Privado con Jacuzzi", "Sala de Estar", "Minibar", "Servicio de Habitación"],
    images: [
      "/presidential-hotel-suite-luxury.jpg",
      "/luxury-hotel-living-room-suite.jpg",
      "/hotel-bathroom-jacuzzi-luxury.jpg",
    ],
    mainImage: "/presidential-hotel-suite-luxury.jpg",
  },
  {
    id: "5",
    slug: "habitacion-triple",
    name: "Habitación Triple",
    title: "Habitación Triple",
    description: "Perfecta para grupos pequeños o familias, con espacio suficiente para tres personas cómodamente.",
    price: 100,
    capacity: 3,
    size: 28,
    beds: [{ type: "Individual", count: 3 }],
    amenities: ["Aire Acondicionado", "WiFi Gratis", "TV Smart", "Baño Privado", "Escritorio"],
    images: [
      "/triple-hotel-room-three-beds.jpg",
      "/modern-hotel-room-desk.jpg",
      "/hotel-room-three-single-beds.jpg",
    ],
    mainImage: "/triple-hotel-room-three-beds.jpg",
  },
]
