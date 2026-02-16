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
    slug: "habitacion-doble",
    name: "Habitación Doble",
    title: "Habitación Doble",
    description: "Habitación cómoda con cama matrimonial, ideal para parejas o viajeros de negocios. Incluye aire acondicionado, TV smart y baño privado.",
    price: 120000,
    capacity: 2,
    size: 25,
    beds: [{ type: "Matrimonial", count: 1 }],
    amenities: ["Aire Acondicionado", "WiFi Gratis", "TV Smart", "Baño Privado"],
    images: [
      "https://i.ibb.co/d41rZQfg/unnamed-1.webp"
    ],
    mainImage: "https://i.ibb.co/d41rZQfg/unnamed-1.webp",
  },
  {
    id: "2",
    slug: "habitacion-simple",
    name: "Habitación Simple",
    title: "Habitación Simple",
    description: "Habitación funcional con cama matrimonial, perfecta para viajeros solitarios o estancias cortas.",
    price: 80000,
    capacity: 1,
    size: 20,
    beds: [{ type: "Matrimonial", count: 1 }],
    amenities: ["Aire Acondicionado", "WiFi Gratis", "TV", "Baño Privado"],
    images: [
      "https://i.ibb.co/B25YQ2dp/unnamed-2.webp"
    ],
    mainImage: "https://i.ibb.co/B25YQ2dp/unnamed-2.webp",
  },
  {
    id: "3",
    slug: "habitacion-cuadruple",
    name: "Habitación Cuádruple",
    title: "Habitación Cuádruple",
    description: "Espaciosa habitación con dos camas matrimoniales, ideal para familias o grupos grandes.",
    price: 160000,
    capacity: 4,
    size: 35,
    beds: [{ type: "Matrimonial", count: 2 }],
    amenities: ["Aire Acondicionado", "WiFi Gratis", "TV Smart", "Baño Privado", "Escritorio"],
    images: [
      "https://i.ibb.co/C3gsRXKp/unnamed-4.webp"
    ],
    mainImage: "https://i.ibb.co/C3gsRXKp/unnamed-4.webp",
  },
  {
    id: "4",
    slug: "habitacion-triple",
    name: "Habitación Triple",
    title: "Habitación Triple",
    description: "Habitación versátil con cama matrimonial y cama individual, perfecta para familias pequeñas o grupos.",
    price: 140000,
    capacity: 3,
    size: 30,
    beds: [{ type: "Matrimonial", count: 1 }, { type: "Individual", count: 1 }],
    amenities: ["Aire Acondicionado", "WiFi Gratis", "TV Smart", "Baño Privado", "Escritorio"],
    images: [
      "https://i.ibb.co/Jj0Dv6fx/unnamed-5.webp"
    ],
    mainImage: "https://i.ibb.co/Jj0Dv6fx/unnamed-5.webp",
  },
  {
    id: "5",
    slug: "suite-deluxe",
    name: "Suite Deluxe",
    title: "Suite Deluxe",
    description: "Suite premium con cama matrimonial king size, sala de estar y amenities de lujo para estadías especiales.",
    price: 200000,
    capacity: 2,
    size: 45,
    beds: [{ type: "King", count: 1 }],
    amenities: ["Aire Acondicionado", "WiFi Gratis", "TV Smart 4K", "Baño Privado con Jacuzzi", "Sala de Estar", "Minibar", "Servicio de Habitación"],
    images: [
      "https://i.ibb.co/Jj0Dv6fx/unnamed-5.webp"
    ],
    mainImage: "https://i.ibb.co/Jj0Dv6fx/unnamed-5.webp",
  }
]
