import { Traslados } from "@/components/traslados"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TrasladosPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Traslados />
      <Footer />
    </main>
  )
}
