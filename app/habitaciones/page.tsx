import { RoomsListClient } from "@/components/rooms-list-client"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getAllRooms } from "@/lib/db"

export const metadata: Metadata = {
  title: "Habitaciones | Don Mario Alojamiento",
  description:
    "Explora nuestras habitaciones en Puerto Iguazú. Desde suites familiares hasta habitaciones económicas, todas con las comodidades que necesitas.",
}

export default async function HabitacionesPage() {
  const roomsFromDb = await getAllRooms()

  console.log("[v0] Rooms from DB:", roomsFromDb.length, roomsFromDb)

  const rooms = roomsFromDb.map((room: any) => {
    // Parse images from JSONB
    const images = Array.isArray(room.images)
      ? room.images
      : typeof room.images === "string"
        ? JSON.parse(room.images)
        : []

    // Parse amenities from JSONB and convert to expected format
    const amenitiesRaw = Array.isArray(room.amenities)
      ? room.amenities
      : typeof room.amenities === "string"
        ? JSON.parse(room.amenities)
        : []

    const amenities = amenitiesRaw.map((amenity: string) => ({
      name: amenity,
      icon: "coffee", // Default icon
    }))

    return {
      id: room.id,
      name: room.name,
      title: room.name,
      slug: room.slug,
      description: room.description,
      mainImage: images[0] || "/comfortable-hotel-room.png",
      images: images,
      capacity: room.max_guests,
      guests: room.max_guests,
      size: 25,
      price: Number(room.base_price),
      amenities: amenities,
      beds: [{ type: "1 cama King", count: 1 }], // Default beds
    }
  })

  console.log("[v0] Mapped rooms for display:", rooms.length, rooms)

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <Navigation />

      {/* Hero Section Compact */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white pt-32 pb-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.1]" 
             style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-amber-100 font-bold tracking-widest uppercase text-sm drop-shadow-lg">Don Mario Alojamiento</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-2xl">
              Nuestras Habitaciones
            </h1>
            <p className="text-xl text-amber-50 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
              Encuentra tu refugio ideal en la selva. Espacios diseñados con lujo y confort para tu estadía perfecta.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar Layout */}
      <div className="container mx-auto px-4 py-12">
        <RoomsListClient rooms={rooms} />
      </div>

      <Footer />
    </div>
  )
}
