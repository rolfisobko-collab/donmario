import { mockRooms, mockGallery, mockTestimonials, mockAmenities, mockSettings } from "./mock-data"

// Rooms
export async function getAllRooms() {
  return Promise.resolve(mockRooms)
}

export async function getRoomBySlug(slug: string) {
  return Promise.resolve(mockRooms.find(room => room.slug === slug) || null)
}

export async function updateRoomStatus(id: number, status: string) {
  console.log("[v0] Mock updateRoomStatus - not implemented")
  return Promise.resolve()
}

export async function updateRoomPrice(id: number, price: number) {
  console.log("[v0] Mock updateRoomPrice - not implemented")
  return Promise.resolve()
}

export async function createRoom(room: {
  name: string
  slug: string
  description?: string
  max_guests: number
  base_price: number
  beds_info?: any
  amenities?: any
  images?: any
  status?: string
}) {
  console.log("[v0] Mock createRoom - not implemented")
  return Promise.resolve({ ...room, id: Date.now() })
}

export async function updateRoom(
  id: number,
  updates: {
    name?: string
    description?: string
    max_guests?: number
    base_price?: number
    beds_info?: any
    amenities?: any
    images?: any
    status?: string
  },
) {
  console.log("[v0] Mock updateRoom - not implemented")
  return Promise.resolve()
}

export async function deleteRoom(id: number) {
  console.log("[v0] Mock deleteRoom - not implemented")
  return Promise.resolve()
}

// Guests
export async function getAllGuests() {
  return Promise.resolve([])
}

export async function getGuestById(id: number) {
  return Promise.resolve(null)
}

export async function createGuest(guest: {
  first_name: string
  last_name: string
  email: string
  phone?: string
  country?: string
  document_type?: string
  document_number?: string
}) {
  console.log("[v0] Mock createGuest - not implemented")
  return Promise.resolve({ ...guest, id: Date.now() })
}

export async function updateGuestStats(guestId: number, bookingTotal: number) {
  console.log("[v0] Mock updateGuestStats - not implemented")
  return Promise.resolve()
}

// Bookings
export async function getAllBookings() {
  return Promise.resolve([])
}

export async function getBookingById(id: number) {
  return Promise.resolve(null)
}

export async function getRecentBookings(limit = 5) {
  return Promise.resolve([])
}

export async function createBooking(booking: {
  booking_code: string
  guest_id: number
  room_id: number
  check_in: string
  check_out: string
  guests_count: number
  total_nights: number
  price_per_night: number
  total_price: number
  notes?: string
}) {
  console.log("[v0] Mock createBooking - not implemented")
  return Promise.resolve({ ...booking, id: Date.now() })
}

export async function updateBookingStatus(id: number, status: string) {
  console.log("[v0] Mock updateBookingStatus - not implemented")
  return Promise.resolve()
}

export async function deleteBooking(id: number) {
  console.log("[v0] Mock deleteBooking - not implemented")
  return Promise.resolve()
}

// Stats
export async function getDashboardStats() {
  return Promise.resolve({
    totalRevenue: 0,
    totalBookings: 0,
    occupancyRate: 0,
    checkInsToday: 0,
  })
}

// Settings
export async function getAllSettings() {
  return Promise.resolve(mockSettings)
}

export async function getSettingByKey(key: string) {
  return Promise.resolve(mockSettings.find(setting => setting.key === key) || null)
}

export async function updateSetting(key: string, value: string) {
  console.log("[v0] Mock updateSetting - not implemented")
  return Promise.resolve()
}

// Gallery
export async function getAllGalleryImages() {
  return Promise.resolve(mockGallery)
}

export async function getGalleryImageById(id: number) {
  return Promise.resolve(mockGallery.find(img => img.id === id) || null)
}

export async function createGalleryImage(image: {
  title: string
  description?: string
  image_url: string
  category?: string
  display_order?: number
  is_featured?: boolean
}) {
  console.log("[v0] Mock createGalleryImage - not implemented")
  return Promise.resolve({ ...image, id: Date.now() })
}

export async function updateGalleryImage(
  id: number,
  updates: {
    title?: string
    description?: string
    category?: string
    display_order?: number
    is_featured?: boolean
    status?: string
  },
) {
  console.log("[v0] Mock updateGalleryImage - not implemented")
  return Promise.resolve()
}

export async function deleteGalleryImage(id: number) {
  console.log("[v0] Mock deleteGalleryImage - not implemented")
  return Promise.resolve()
}

export async function getFeaturedGalleryImages(limit = 6) {
  return Promise.resolve(mockGallery.filter(img => img.is_featured).slice(0, limit))
}
