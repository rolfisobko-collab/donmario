import { AdminStats } from "@/components/admin-stats"
import { RecentBookings } from "@/components/recent-bookings"
import { getDashboardStats, getRecentBookings } from "@/lib/db"

export default async function AdminDashboard() {
  const stats = await getDashboardStats()
  const recentBookings = await getRecentBookings(5)

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-serif font-bold text-gray-900">Dashboard</h2>
        <p className="text-muted-foreground">Bienvenido al panel de control de Don Mario.</p>
      </div>

      <AdminStats stats={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Reservas Recientes</h3>
          <RecentBookings bookings={recentBookings} />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Estado de Habitaciones</h3>
          {/* Placeholder for room status chart or list */}
          <div className="flex items-center justify-center h-64 text-muted-foreground bg-gray-50 rounded-lg border border-dashed">
            Gráfico de Ocupación (Próximamente)
          </div>
        </div>
      </div>
    </div>
  )
}
