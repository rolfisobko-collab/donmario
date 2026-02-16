"use server"

import { revalidatePath } from "next/cache"
import { createRoom, updateRoom, deleteRoom } from "@/lib/db"

export async function createRoomAction(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const slug = formData.get("slug") as string
    const description = formData.get("description") as string
    const maxGuests = Number.parseInt(formData.get("maxGuests") as string)
    const basePrice = Number.parseFloat(formData.get("basePrice") as string)
    const bedsInfo = formData.get("bedsInfo") as string
    const amenities = formData.get("amenities") as string
    const status = formData.get("status") as string

    const mediaListStr = formData.get("mediaList") as string
    const mediaList = mediaListStr ? JSON.parse(mediaListStr) : []
    const imageUrls = mediaList.map((m: any) => m.url)

    // Parse amenities from comma-separated string to JSON array
    const amenitiesArray = amenities
      .split(",")
      .map((a) => a.trim())
      .filter(Boolean)

    await createRoom({
      name,
      slug,
      description,
      max_guests: maxGuests,
      base_price: basePrice,
      beds_info: { beds: bedsInfo },
      amenities: amenitiesArray,
      images: imageUrls,
      status
    })

    revalidatePath("/admin/habitaciones")
    revalidatePath("/habitaciones")
    return { success: true, message: "Habitación creada exitosamente" }
  } catch (error) {
    console.error("[v0] Error creating room:", error)
    return { success: false, message: "Error al crear la habitación" }
  }
}

export async function updateRoomAction(formData: FormData) {
  try {
    const id = Number.parseInt(formData.get("id") as string)
    const name = formData.get("name") as string
    const description = formData.get("description") as string
    const maxGuests = Number.parseInt(formData.get("maxGuests") as string)
    const basePrice = Number.parseFloat(formData.get("basePrice") as string)
    const bedsInfo = formData.get("bedsInfo") as string
    const amenities = formData.get("amenities") as string
    const status = formData.get("status") as string

    const mediaListStr = formData.get("mediaList") as string
    const mediaList = mediaListStr ? JSON.parse(mediaListStr) : []
    const imageUrls = mediaList.map((m: any) => m.url)

    // Parse amenities from comma-separated string to JSON array
    const amenitiesArray = amenities
      .split(",")
      .map((a) => a.trim())
      .filter(Boolean)

    await updateRoom(id, {
      name,
      description,
      max_guests: maxGuests,
      base_price: basePrice,
      beds_info: { beds: bedsInfo },
      amenities: amenitiesArray,
      images: imageUrls,
      status
    })

    revalidatePath("/admin/habitaciones")
    revalidatePath("/habitaciones")
    revalidatePath(`/habitaciones/${formData.get("slug")}`)
    return { success: true, message: "Habitación actualizada exitosamente" }
  } catch (error) {
    console.error("[v0] Error updating room:", error)
    return { success: false, message: "Error al actualizar la habitación" }
  }
}

export async function deleteRoomAction(id: number) {
  try {
    await deleteRoom(id)

    revalidatePath("/admin/habitaciones")
    revalidatePath("/habitaciones")
    return { success: true, message: "Habitación eliminada exitosamente" }
  } catch (error) {
    console.error("[v0] Error deleting room:", error)
    return { success: false, message: "Error al eliminar la habitación" }
  }
}
