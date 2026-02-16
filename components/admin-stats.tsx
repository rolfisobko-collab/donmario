import { DollarSign, Users, CalendarCheck, BedDouble } from "lucide-react"

type AdminStatsProps = {
  stats: {
    totalRevenue: number
    totalBookings: number
    occupancyRate: number
    checkInsToday: number
  }
}

export function AdminStats({ stats }: AdminStatsProps) {
  const statsConfig = [
    {
      title: "Ingresos Totales",
      value: `$${stats.totalRevenue.toLocaleString("es-AR")}`,
      change: "Total acumulado",
      icon: DollarSign,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: "Reservas Activas",
      value: stats.totalBookings.toString(),
      change: "Total de reservas",
      icon: CalendarCheck,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Huéspedes Check-in Hoy",
      value: stats.checkInsToday.toString(),
      change: "Llegadas esperadas",
      icon: Users,
      color: "text-orange-600",
      bg: "bg-orange-100",
    },
    {
      title: "Ocupación",
      value: `${stats.occupancyRate}%`,
      change: "Habitaciones ocupadas",
      icon: BedDouble,
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statsConfig.map((stat) => {
        const Icon = stat.icon
        return (
          <div key={stat.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
              <div className={`p-2 rounded-full ${stat.bg}`}>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </div>
            <div className="mt-2">
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
