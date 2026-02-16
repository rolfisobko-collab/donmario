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
    <div className="min-h-screen bg-muted/30">
      <Navigation />

      {/* Hero Section Compact */}
      <div className="bg-primary text-primary-foreground pt-32 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Nuestras Habitaciones</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Encuentra tu refugio ideal en la selva. Precios transparentes, sin cargos ocultos.
          </p>
        </div>
      </div>

      {/* Main Content with Sidebar Layout */}
      <div className="container mx-auto px-4 py-8">
        <RoomsListClient rooms={rooms} />
      </div>

      <Footer />
    </div>
  )
}
