import { mockAmenities } from "./mock-data"

export async function getAllAmenities() {
  return Promise.resolve(mockAmenities)
}

export async function getAmenitiesByCategory(category: string) {
  return Promise.resolve(mockAmenities.filter(amenity => amenity.category === category))
}
