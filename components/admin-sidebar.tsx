"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, CalendarDays, BedDouble, Users, Settings, LogOut, ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Reservas",
    href: "/admin/reservas",
    icon: CalendarDays,
  },
  {
    title: "Habitaciones",
    href: "/admin/habitaciones",
    icon: BedDouble,
  },
  {
    title: "Huéspedes",
    href: "/admin/huespedes",
    icon: Users,
  },
  {
    title: "Galería",
    href: "/admin/galeria",
    icon: ImageIcon,
  },
  {
    title: "Configuración",
    href: "/admin/configuracion",
    icon: Settings,
  },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
      <div className="p-6 border-b border-gray-100">
        <h1 className="text-2xl font-serif font-bold text-primary">Don Mario</h1>
        <p className="text-xs text-muted-foreground mt-1">Panel de Administración</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {sidebarLinks.map((link) => {
          const Icon = link.icon
          const isActive = pathname === link.href

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                isActive ? "bg-primary/10 text-primary" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
              )}
            >
              <Icon className="w-5 h-5" />
              {link.title}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition-colors">
          <LogOut className="w-5 h-5" />
          Cerrar Sesión
        </button>
      </div>
    </aside>
  )
}
