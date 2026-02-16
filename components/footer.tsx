"use client"

import { MapPin, Mail, Instagram } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export function Footer() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentSection, setCurrentSection] = useState("")
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Detect current section on home page
      if (isHomePage) {
        const sections = ["about", "rooms", "parrilla", "traslados", "gallery", "contact"]
        const scrollPosition = window.scrollY + 100
        
        let detectedSection = ""
        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            const elementTop = rect.top + window.scrollY
            const elementHeight = rect.height
            
            if (scrollPosition >= elementTop && scrollPosition < elementTop + elementHeight) {
              detectedSection = section
              break
            }
          }
        }
        
        setCurrentSection(detectedSection)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial position
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])
  
  // Determinar estilo del footer según la página
  const getFooterStyle = () => {
    if (pathname.includes("restaurante")) {
      return "bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white border-t border-red-700/50"
    }
    if (pathname.includes("traslados")) {
      return "bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white border-t border-amber-700/50"
    }
    if (pathname.includes("habitaciones")) {
      return "bg-gradient-to-br from-amber-900 via-amber-800 to-yellow-900 text-white border-t border-amber-700/50"
    }
    if (pathname === "/") {
      if (isScrolled) {
        return "bg-transparent text-white border-t border-slate-200/20"
      }
      switch (currentSection) {
        case "parrilla":
          return "bg-transparent text-white border-t border-red-600/30"
        case "traslados":
          return "bg-transparent text-white border-t border-amber-600/30"
        case "rooms":
          return "bg-transparent text-white border-t border-amber-600/30"
        default:
          return "bg-transparent text-white border-t border-white/20"
      }
    }
    return "bg-slate-900 text-white border-t border-slate-700" // Default para otras páginas
  }
  
  const getAccentColor = () => {
    if (pathname.includes("restaurante")) return "text-red-400"
    if (pathname.includes("traslados")) return "text-amber-400"
    if (pathname.includes("habitaciones")) return "text-amber-400"
    if (pathname === "/") {
      if (isScrolled) return "text-foreground"
      switch (currentSection) {
        case "parrilla": return "text-red-200 drop-shadow-lg"
        case "traslados": return "text-amber-200 drop-shadow-lg"
        case "rooms": return "text-amber-200 drop-shadow-lg"
        default: return "text-white drop-shadow-lg"
      }
    }
    return "text-amber-400" // Default
  }

  const getSecondaryTextColor = () => {
    if (pathname.includes("restaurante")) return "text-red-200"
    if (pathname.includes("traslados")) return "text-amber-200"
    if (pathname.includes("habitaciones")) return "text-amber-200"
    if (pathname === "/") {
      if (isScrolled) return "text-muted-foreground"
      switch (currentSection) {
        case "parrilla": return "text-red-200 drop-shadow-md"
        case "traslados": return "text-amber-200 drop-shadow-md"
        case "rooms": return "text-amber-200 drop-shadow-md"
        default: return "text-white/90 drop-shadow-md"
      }
    }
    return "text-zinc-300" // Default
  }

  return (
    <footer className={`${getFooterStyle()} py-20 relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="text-center">
              <h3 className={`text-2xl font-serif font-bold tracking-wide ${getAccentColor()}`}>Don Mario Turismo</h3>
            </div>
            <p className={`${getSecondaryTextColor()} leading-relaxed font-light`}>
              Tu hogar cerca de las Cataratas del Iguazú. Hospitalidad familiar, confort y la mejor ubicación en Puerto
              Iguazú, Misiones.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className={`text-xl font-serif font-semibold ${getAccentColor()}`}>Contacto</h3>
            <div className={`space-y-4 ${getSecondaryTextColor()}`}>
              <div className="flex items-start gap-3">
                <MapPin className={`h-5 w-5 ${getAccentColor()} flex-shrink-0 mt-1`} />
                <span className="text-base">
                  Av. República Argentina 451<br />
                  Puerto Iguazú 3370, Misiones
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className={`h-5 w-5 ${getAccentColor()} flex-shrink-0 mt-1`} />
                <span className="text-base">info@donmarioturismo.com</span>
              </div>
              <div className="flex items-start gap-3">
                <div className={`h-5 w-5 ${getAccentColor()} flex-shrink-0 mt-1`}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <span className="text-base">+54 9 3757 123456</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className={`text-xl font-serif font-semibold ${getAccentColor()}`}>Seguinos</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/donmarioturismo"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full border-2 ${getAccentColor().replace('text-', 'border-')} ${getSecondaryTextColor()} hover:text-white transition-all duration-300 flex items-center justify-center hover:scale-110`}
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://wa.me/5493757123456"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full border-2 ${getAccentColor().replace('text-', 'border-')} ${getSecondaryTextColor()} hover:text-white transition-all duration-300 flex items-center justify-center hover:scale-110`}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
            <div className={`text-sm ${getSecondaryTextColor()}`}>
              <p>&copy; 2024 Don Mario Turismo. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
