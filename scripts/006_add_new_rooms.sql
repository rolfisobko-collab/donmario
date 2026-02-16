-- Don Mario Hotel - Add New Room Types
-- Version: 006
-- Description: Add Single, Double, Triple, Quadruple, and Quintuple rooms with real pricing

-- Delete existing rooms if they exist to avoid duplicates
DELETE FROM rooms WHERE slug IN ('habitacion-simple', 'habitacion-doble', 'habitacion-triple', 'habitacion-cuadruple', 'habitacion-quintuple');

INSERT INTO rooms (slug, name, description, max_guests, base_price, beds_info, amenities, image_url, images, status) VALUES
(
  'habitacion-simple',
  'Habitación Simple',
  'Habitación individual cómoda y funcional, ideal para viajeros solos. Equipada con todas las comodidades necesarias para una estadía placentera en Puerto Iguazú.',
  1,
  50000.00,
  '{"beds": "1 cama individual"}',
  '["WiFi gratis", "Aire acondicionado", "TV por cable", "Baño privado", "Escritorio", "Piscina compartida"]',
  '/placeholder.svg?height=400&width=600',
  '["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"]',
  'available'
),
(
  'habitacion-doble',
  'Habitación Doble',
  'Habitación doble amplia y luminosa, perfecta para parejas o dos personas. Cuenta con cama matrimonial y un ambiente acogedor cerca de las Cataratas.',
  2,
  70000.00,
  '{"beds": "1 cama matrimonial"}',
  '["WiFi gratis", "Aire acondicionado", "TV por cable", "Baño privado", "Mini refrigerador", "Piscina compartida"]',
  '/placeholder.svg?height=400&width=600',
  '["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"]',
  'available'
),
(
  'habitacion-triple',
  'Habitación Triple',
  'Habitación espaciosa para tres personas, ideal para familias pequeñas o grupos de amigos. Equipada con tres camas cómodas y todas las amenidades.',
  3,
  80000.00,
  '{"beds": "3 camas individuales"}',
  '["WiFi gratis", "Aire acondicionado", "TV por cable", "Baño privado", "Armario amplio", "Piscina compartida"]',
  '/placeholder.svg?height=400&width=600',
  '["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"]',
  'available'
),
(
  'habitacion-cuadruple',
  'Habitación Cuádruple',
  'Amplia habitación familiar para cuatro personas. Perfecta para familias que desean comodidad y espacio durante su visita a las Cataratas del Iguazú.',
  4,
  100000.00,
  '{"beds": "2 camas matrimoniales"}',
  '["WiFi gratis", "Aire acondicionado", "TV por cable", "Baño privado", "Armario grande", "Balcón", "Piscina compartida"]',
  '/placeholder.svg?height=400&width=600',
  '["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"]',
  'available'
),
(
  'habitacion-quintuple',
  'Habitación Quíntuple',
  'La habitación más espaciosa del hotel, diseñada para grupos grandes o familias numerosas. Con capacidad para 5 personas, ofrece máximo confort con múltiples camas, TV, aire acondicionado, armario amplio y todas las comodidades que necesitas para una estadía inolvidable.',
  5,
  140000.00,
  '{"beds": "1 cama matrimonial + 3 camas individuales"}',
  '["WiFi gratis", "Aire acondicionado", "TV por cable", "Baño privado", "Armario extra grande", "Espacio amplio", "Piscina compartida"]',
  '/images/cb01a24b-c895-4f7a-8be9.jpeg',
  '["/images/cb01a24b-c895-4f7a-8be9.jpeg"]',
  'available'
);
