import { Parrilla } from "@/components/parrilla"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ParrillaPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Parrilla />
      <Footer />
    </main>
  )
}
