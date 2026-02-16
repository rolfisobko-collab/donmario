import { mockSettings } from "./mock-data"

export async function getAllSettings() {
  return Promise.resolve(mockSettings)
}

export async function getSettingByKey(key: string) {
  return Promise.resolve(mockSettings.find(setting => setting.key === key) || null)
}

export async function getHotelInfo() {
  const settings = await getAllSettings()
  return {
    name: settings.find((s: any) => s.key === "hotel_name")?.value || "Hotel Mariox",
    address: settings.find((s: any) => s.key === "hotel_address")?.value || "Av. Principal 123, Centro, Ciudad",
    phone: settings.find((s: any) => s.key === "hotel_phone")?.value || "+54 9 11 1234-5678",
    email: settings.find((s: any) => s.key === "hotel_email")?.value || "info@hotelmariox.com",
    checkInTime: settings.find((s: any) => s.key === "check_in_time")?.value || "14:00",
    checkOutTime: settings.find((s: any) => s.key === "check_out_time")?.value || "11:00",
    cancellationPolicy: settings.find((s: any) => s.key === "cancellation_policy")?.value || "24 horas"
  }
}
