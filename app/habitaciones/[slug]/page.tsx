import { notFound } from "next/navigation"
import { RoomDetailClient } from "@/components/room-detail-client"
import type { Metadata } from "next"
import { getAllRooms, getRoomBySlug } from "@/lib/db"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const rooms = await getAllRooms()
  return rooms.map((room: any) => ({
    slug: room.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const room = await getRoomBySlug(slug)

  if (!room) {
    return {
      title: "Habitación no encontrada",
    }
  }

  return {
    title: `${room.name} | Don Mario Alojamiento`,
    description: room.description,
  }
}

function parseBeds(bedsInfo: any): { type: string; count: number }[] {
  // If it's already an array, return it
  if (Array.isArray(bedsInfo)) {
    return bedsInfo
  }

  // If it's an object with a 'beds' property (string), parse it
  if (bedsInfo && typeof bedsInfo === "object" && bedsInfo.beds) {
    return [{ type: bedsInfo.beds, count: 1 }]
  }

  // If it's a string, wrap it in an array
  if (typeof bedsInfo === "string") {
    return [{ type: bedsInfo, count: 1 }]
  }

  // Default fallback
  return [{ type: "1 cama King", count: 1 }]
}

export default async function RoomDetailPage({ params }: PageProps) {
  const { slug } = await params
  const roomFromDb = await getRoomBySlug(slug)

  if (!roomFromDb) {
    notFound()
  }

  const room = {
    id: roomFromDb.id,
    name: roomFromDb.name,
    title: roomFromDb.name,
    slug: roomFromDb.slug,
    description: roomFromDb.description,
    mainImage: Array.isArray(roomFromDb.images) && roomFromDb.images.length > 0 ? roomFromDb.images[0] : "/placeholder.svg",
    images: Array.isArray(roomFromDb.images) ? roomFromDb.images : ["/placeholder.svg"],
    capacity: roomFromDb.max_guests,
    guests: roomFromDb.max_guests,
    size: 25,
    price: Number(roomFromDb.base_price),
    amenities: Array.isArray(roomFromDb.amenities) ? roomFromDb.amenities : [],
    beds: parseBeds(roomFromDb.beds_info),
  }

  return <RoomDetailClient room={room} />
}
