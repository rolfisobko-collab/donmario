import { AdminSettings } from "@/components/admin-settings"

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif font-bold text-primary">Configuración</h1>
        <p className="text-muted-foreground">Administra la configuración general del hotel y del sistema.</p>
      </div>

      <AdminSettings />
    </div>
  )
}
