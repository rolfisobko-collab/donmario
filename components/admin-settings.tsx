"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Save, Building2, Mail, Phone, MapPin, Globe, Bell, Shield, CreditCard } from "lucide-react"

export function AdminSettings() {
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = () => {
    setIsSaving(true)
    // Simulate save
    setTimeout(() => {
      setIsSaving(false)
    }, 1000)
  }

  return (
    <Tabs defaultValue="general" className="space-y-6">
      <TabsList className="bg-white border">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
        <TabsTrigger value="payments">Pagos</TabsTrigger>
        <TabsTrigger value="security">Seguridad</TabsTrigger>
      </TabsList>

      <TabsContent value="general" className="space-y-6">
        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              Información del Hotel
            </CardTitle>
            <CardDescription>Actualiza la información básica de tu establecimiento.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="hotel-name">Nombre del Hotel</Label>
                <Input id="hotel-name" defaultValue="Don Mario Alojamiento" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hotel-email">Email de Contacto</Label>
                <div className="relative">
                  <Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input id="hotel-email" className="pl-8" defaultValue="Donmario.alojamiento@gmail.com" />
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="hotel-phone">Teléfono</Label>
                <div className="relative">
                  <Phone className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input id="hotel-phone" className="pl-8" defaultValue="+54 3757 123456" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="hotel-website">Sitio Web</Label>
                <div className="relative">
                  <Globe className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input id="hotel-website" className="pl-8" defaultValue="www.donmarioalojamiento.com" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="hotel-address">Dirección</Label>
              <div className="relative">
                <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="hotel-address"
                  className="pl-8"
                  defaultValue="Av. Republica Argentina 451, Puerto Iguazú 3370"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="hotel-description">Descripción</Label>
              <Textarea
                id="hotel-description"
                rows={4}
                defaultValue="Alojamiento familiar en Puerto Iguazú, Misiones. Habitaciones cómodas para hasta 5 personas, cerca de las Cataratas del Iguazú."
              />
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Horarios</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="checkin-time">Check-in</Label>
                  <Input id="checkin-time" type="time" defaultValue="14:00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="checkout-time">Check-out</Label>
                  <Input id="checkout-time" type="time" defaultValue="10:00" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="notifications" className="space-y-6">
        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-primary" />
              Preferencias de Notificaciones
            </CardTitle>
            <CardDescription>Configura cómo y cuándo recibir notificaciones.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Nuevas Reservas</Label>
                <p className="text-sm text-muted-foreground">Recibe notificaciones cuando haya una nueva reserva.</p>
              </div>
              <Switch defaultChecked />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Cancelaciones</Label>
                <p className="text-sm text-muted-foreground">Notificaciones de cancelaciones de reservas.</p>
              </div>
              <Switch defaultChecked />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Check-in Próximo</Label>
                <p className="text-sm text-muted-foreground">Recordatorio 24 horas antes del check-in.</p>
              </div>
              <Switch defaultChecked />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Mensajes de Huéspedes</Label>
                <p className="text-sm text-muted-foreground">Notificaciones de mensajes de huéspedes.</p>
              </div>
              <Switch defaultChecked />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Reportes Semanales</Label>
                <p className="text-sm text-muted-foreground">Resumen semanal de ocupación y ventas.</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="payments" className="space-y-6">
        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-primary" />
              Configuración de Pagos
            </CardTitle>
            <CardDescription>Administra los métodos de pago y políticas de cancelación.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Métodos de Pago Aceptados</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Efectivo</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Tarjeta de Crédito/Débito</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Transferencia Bancaria</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>MercadoPago</Label>
                  <Switch />
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Políticas de Cancelación</h3>
              <div className="space-y-2">
                <Label htmlFor="cancellation-hours">Horas antes para cancelación gratuita</Label>
                <Input id="cancellation-hours" type="number" defaultValue="24" />
                <p className="text-sm text-muted-foreground">
                  Los huéspedes pueden cancelar sin cargo hasta este tiempo antes del check-in.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="deposit-percentage">Porcentaje de depósito requerido (%)</Label>
                <Input id="deposit-percentage" type="number" defaultValue="30" />
                <p className="text-sm text-muted-foreground">Porcentaje del total a pagar como depósito.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="security" className="space-y-6">
        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Seguridad
            </CardTitle>
            <CardDescription>Administra la seguridad de tu cuenta y del sistema.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Cambiar Contraseña</h3>
              <div className="space-y-2">
                <Label htmlFor="current-password">Contraseña Actual</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">Nueva Contraseña</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmar Nueva Contraseña</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <Button variant="outline">Actualizar Contraseña</Button>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Autenticación de Dos Factores</h3>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Habilitar 2FA</Label>
                  <p className="text-sm text-muted-foreground">Agrega una capa extra de seguridad a tu cuenta.</p>
                </div>
                <Switch />
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Sesiones Activas</h3>
              <p className="text-sm text-muted-foreground">
                Actualmente tienes 2 sesiones activas en diferentes dispositivos.
              </p>
              <Button variant="outline" className="text-red-600 hover:text-red-700 bg-transparent">
                Cerrar Todas las Sesiones
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <div className="flex justify-end">
        <Button onClick={handleSave} disabled={isSaving} className="bg-primary hover:bg-primary/90 text-white">
          <Save className="w-4 h-4 mr-2" />
          {isSaving ? "Guardando..." : "Guardar Cambios"}
        </Button>
      </div>
    </Tabs>
  )
}
