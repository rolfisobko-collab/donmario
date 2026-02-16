"use server"

import { revalidatePath } from "next/cache"
import { createGalleryImage, deleteGalleryImage, updateGalleryImage } from "@/lib/db"

export async function createGalleryImageAction(formData: FormData) {
  try {
    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const image_url = formData.get("image_url") as string
    const category = formData.get("category") as string
    const display_order = Number.parseInt(formData.get("display_order") as string) || 0
    const is_featured = formData.get("is_featured") === "true"

    if (!title || !image_url) {
      return { success: false, error: "Título e imagen son requeridos" }
    }

    await createGalleryImage({
      title,
      description,
      image_url,
      category,
      display_order,
      is_featured,
    })

    revalidatePath("/admin/galeria")
    revalidatePath("/galeria")
    revalidatePath("/")

    return { success: true }
  } catch (error) {
    console.error("[v0] Error creating gallery image:", error)
    return { success: false, error: "Error al crear la imagen" }
  }
}

export async function updateGalleryImageAction(id: number, formData: FormData) {
  try {
    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const category = formData.get("category") as string
    const display_order = Number.parseInt(formData.get("display_order") as string) || 0
    const is_featured = formData.get("is_featured") === "true"

    await updateGalleryImage(id, {
      title,
      description,
      category,
      display_order,
      is_featured,
    })

    revalidatePath("/admin/galeria")
    revalidatePath("/galeria")
    revalidatePath("/")

    return { success: true }
  } catch (error) {
    console.error("[v0] Error updating gallery image:", error)
    return { success: false, error: "Error al actualizar la imagen" }
  }
}

export async function deleteGalleryImageAction(id: number) {
  try {
    await deleteGalleryImage(id)

    revalidatePath("/admin/galeria")
    revalidatePath("/galeria")
    revalidatePath("/")

    return { success: true }
  } catch (error) {
    console.error("[v0] Error deleting gallery image:", error)
    return { success: false, error: "Error al eliminar la imagen" }
  }
}
