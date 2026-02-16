import { Hero } from "@/components/hero"
import { RoomsUnified } from "@/components/rooms-unified"
import { Parrilla } from "@/components/parrilla"
import { Traslados } from "@/components/traslados"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { getAllRooms } from "@/lib/db"

export default async function Home() {
  const rooms = await getAllRooms()

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <RoomsUnified rooms={rooms} />
      <Parrilla />
      <Traslados />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
