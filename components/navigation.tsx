"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentSection, setCurrentSection] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
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
        
        // Debug: ver qué sección detecta
        console.log("Scroll position:", scrollPosition, "Detected section:", detectedSection)
        setCurrentSection(detectedSection)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial position
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])

  // Determine navbar style based on current section/page
  const getNavbarStyle = () => {
    console.log("Getting navbar style for:", { currentSection, pathname, isHomePage, isScrolled })
    
    if (!isHomePage) {
      // Different pages
      if (pathname.includes("restaurante")) {
        return "bg-gradient-to-r from-red-50 to-orange-50 border-red-200"
      }
      if (pathname.includes("traslados")) {
        return "bg-gradient-to-r from-slate-50 to-amber-50 border-amber-200"
      }
      if (pathname.includes("habitaciones")) {
        return "bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200"
      }
      return "bg-background/95 border-slate-200"
    }
    
    // Home page - different sections
    if (isScrolled) {
      return "bg-background/95 border-slate-200"
    }
    
    switch (currentSection) {
      case "parrilla":
        return "bg-gradient-to-r from-red-900/90 to-orange-900/90 border-red-700/50"
      case "traslados":
        return "bg-gradient-to-r from-slate-900/90 to-amber-900/90 border-amber-700/50"
      case "rooms":
        return "bg-gradient-to-r from-amber-900/90 to-yellow-900/90 border-amber-700/50"
      default:
        return "bg-transparent"
    }
  }

  const getLinkStyle = (link: { href: string; label: string; isPage?: boolean }) => {
    console.log("Getting link style for:", link.href, "currentSection:", currentSection)
    
    if (!isHomePage) {
      // Different pages
      if (pathname.includes("restaurante")) {
        return link.href.includes("restaurante") 
          ? "text-red-600 font-semibold" 
          : "text-slate-600 hover:text-red-600"
      }
      if (pathname.includes("traslados")) {
        return link.href.includes("traslados") 
          ? "text-amber-600 font-semibold" 
          : "text-slate-600 hover:text-amber-600"
      }
      if (pathname.includes("habitaciones")) {
        return link.href.includes("habitaciones") 
          ? "text-amber-600 font-semibold" 
          : "text-slate-600 hover:text-amber-600"
      }
      return link.isPage ? 'text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground'
    }
    
    // Home page - different sections
    if (isScrolled) {
      return link.isPage ? 'text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground'
    }
    
    switch (currentSection) {
      case "parrilla":
        return link.href.includes("parrilla") 
          ? "text-red-200 font-semibold drop-shadow-lg" 
          : "text-white/90 hover:text-red-200 drop-shadow-md"
      case "traslados":
        return link.href.includes("traslados") 
          ? "text-amber-200 font-semibold drop-shadow-lg" 
          : "text-white/90 hover:text-amber-200 drop-shadow-md"
      case "rooms":
        return link.href.includes("habitaciones") 
          ? "text-amber-200 font-semibold drop-shadow-lg" 
          : "text-white/90 hover:text-amber-200 drop-shadow-md"
      default:
        return link.isPage ? 'text-white font-semibold drop-shadow-lg' : 'text-white/95 hover:text-white drop-shadow-md'
    }
  }

  const getButtonStyle = () => {
    if (!isHomePage) {
      // Different pages
      if (pathname.includes("restaurante")) {
        return "border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
      }
      if (pathname.includes("traslados")) {
        return "border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
      }
      if (pathname.includes("habitaciones")) {
        return "border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
      }
      return "border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
    }
    
    // Home page - different sections
    if (isScrolled) {
      return "border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
    }
    
    switch (currentSection) {
      case "parrilla":
        return "bg-red-600 border-red-600 text-white hover:bg-red-700 drop-shadow-lg"
      case "traslados":
        return "bg-amber-600 border-amber-600 text-white hover:bg-amber-700 drop-shadow-lg"
      case "rooms":
        return "bg-amber-600 border-amber-600 text-white hover:bg-amber-700 drop-shadow-lg"
      default:
        return "bg-green-600 border-green-600 text-white hover:bg-green-700 drop-shadow-lg"
    }
  }

  const getLogoStyle = () => {
    if (!isHomePage) {
      if (pathname.includes("restaurante")) return "text-red-600"
      if (pathname.includes("traslados")) return "text-amber-600"
      if (pathname.includes("habitaciones")) return "text-amber-600"
      return "text-foreground"
    }
    
    if (isScrolled) return "text-foreground"
    
    switch (currentSection) {
      case "parrilla": return "text-red-200 drop-shadow-lg"
      case "traslados": return "text-amber-200 drop-shadow-lg"
      case "rooms": return "text-amber-200 drop-shadow-lg"
      default: return "text-white drop-shadow-lg"
    }
  }

  const getMobileMenuStyle = () => {
    if (!isHomePage) {
      if (pathname.includes("restaurante")) {
        return "bg-gradient-to-br from-red-50 to-orange-50 border-red-200"
      }
      if (pathname.includes("traslados")) {
        return "bg-gradient-to-br from-slate-50 to-amber-50 border-amber-200"
      }
      if (pathname.includes("habitaciones")) {
        return "bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200"
      }
      return "bg-background border-slate-200"
    }
    
    if (isScrolled) {
      return "bg-background/95 backdrop-blur-md border-slate-200"
    }
    
    switch (currentSection) {
      case "parrilla":
        return "bg-gradient-to-br from-red-900/95 to-orange-900/95 border-red-700/50 backdrop-blur-md"
      case "traslados":
        return "bg-gradient-to-br from-slate-900/95 to-amber-900/95 border-amber-700/50 backdrop-blur-md"
      case "rooms":
        return "bg-gradient-to-br from-amber-900/95 to-yellow-900/95 border-amber-700/50 backdrop-blur-md"
      default:
        return "bg-gradient-to-br from-slate-900/95 to-slate-800/95 border-white/20 backdrop-blur-md"
    }
  }

  const getMobileLinkStyle = (link: { href: string; label: string; isPage?: boolean }) => {
    if (!isHomePage) {
      if (pathname.includes("restaurante")) {
        return link.href.includes("restaurante") 
          ? "text-red-600 font-semibold bg-red-50 border border-red-200" 
          : "text-slate-700 hover:text-red-600 hover:bg-red-50"
      }
      if (pathname.includes("traslados")) {
        return link.href.includes("traslados") 
          ? "text-amber-600 font-semibold bg-amber-50 border border-amber-200" 
          : "text-slate-700 hover:text-amber-600 hover:bg-amber-50"
      }
      if (pathname.includes("habitaciones")) {
        return link.href.includes("habitaciones") 
          ? "text-amber-600 font-semibold bg-amber-50 border border-amber-200" 
          : "text-slate-700 hover:text-amber-600 hover:bg-amber-50"
      }
      return link.isPage ? 'text-foreground font-semibold bg-muted border' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
    }
    
    if (isScrolled) {
      return link.isPage ? 'text-foreground font-semibold bg-muted border' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
    }
    
    switch (currentSection) {
      case "parrilla":
        return link.href.includes("parrilla") 
          ? "text-red-200 font-semibold bg-red-800/50 border border-red-700/50" 
          : "text-white/90 hover:text-red-200 hover:bg-red-800/30 border border-transparent"
      case "traslados":
        return link.href.includes("traslados") 
          ? "text-amber-200 font-semibold bg-amber-800/50 border border-amber-700/50" 
          : "text-white/90 hover:text-amber-200 hover:bg-amber-800/30 border border-transparent"
      case "rooms":
        return link.href.includes("habitaciones") 
          ? "text-amber-200 font-semibold bg-amber-800/50 border border-amber-700/50" 
          : "text-white/90 hover:text-amber-200 hover:bg-amber-800/30 border border-transparent"
      default:
        return link.isPage ? 'text-white font-semibold bg-white/10 border border-white/20' : 'text-white/90 hover:text-white hover:bg-white/10 border border-transparent'
    }
  }

  const navLinks = [
    { href: "/#about", label: "Nosotros" },
    { href: "/#rooms", label: "Habitaciones", isPage: true },
    { href: "/restaurante", label: "Restaurante", isPage: true },
    { href: "/traslados", label: "Traslados", isPage: true },
    { href: "/#gallery", label: "Galería" },
    { href: "/#contact", label: "Contacto" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${getNavbarStyle()}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span
              className={`font-serif text-xl font-bold ${getLogoStyle()}`}
            >
              Don Mario Turismo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${getLinkStyle(link)}`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="outline" size="sm" className={getButtonStyle()} asChild>
              <Link href="https://wa.me/5493757123456?text=Hola!%20Quiero%20hacer%20una%20reserva%20en%20Don%20Mario%20Turismo" target="_blank" rel="noopener noreferrer">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={isScrolled || !isHomePage ? "" : "text-white hover:text-white"}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className={`${getMobileMenuStyle()} border-0 shadow-2xl`}>
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
              
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                <Link 
                  href="/" 
                  className={`font-serif text-xl font-bold ${getLogoStyle()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Don Mario Turismo
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className={isScrolled || !isHomePage ? "text-foreground hover:text-foreground" : "text-white/80 hover:text-white"}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </Button>
              </div>

              {/* Mobile Menu Links */}
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  if (link.isPage) {
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 ${getMobileLinkStyle(link)}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )
                  } else {
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        className={`px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 ${getMobileLinkStyle(link)}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                    )
                  }
                })}
                
                {/* Mobile CTA Button */}
                <div className="pt-6 mt-4 border-t border-white/10">
                  <Button 
                    className={`w-full text-lg py-4 transition-all duration-300 transform hover:scale-105 ${getButtonStyle()}`}
                    asChild
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/habitaciones">Reservar Ahora</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
