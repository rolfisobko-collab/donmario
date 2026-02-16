import { mockTestimonials } from "./mock-data"

export async function getAllTestimonials() {
  return Promise.resolve(mockTestimonials)
}

export async function getFeaturedTestimonials(limit = 6) {
  return Promise.resolve(mockTestimonials.slice(0, limit))
}
