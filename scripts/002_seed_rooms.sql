-- Don Mario Hotel - Seed Rooms Data
-- Version: 002
-- Description: Insert initial room data

INSERT INTO rooms (slug, name, description, max_guests, base_price, beds_info, amenities, image_url, images, status) VALUES
(
  'suite-familiar-deluxe',
  'Suite Familiar Deluxe',
  'Espaciosa suite perfecta para familias, con capacidad para hasta 5 personas. Cuenta con una cama king size y tres camas individuales, ideal para disfrutar de unas vacaciones cómodas cerca de las Cataratas.',
  5,
  15000.00,
  '{"beds": "1 cama King + 3 camas individuales"}',
  '["WiFi gratis", "Aire acondicionado", "TV por cable", "Baño privado", "Balcón", "Piscina compartida"]',
  '/luxury-family-suite-hotel-room-iguazu.jpg',
  '["/luxury-family-suite-hotel-room-iguazu.jpg", "/hotel-bathroom-luxury-marble.jpg", "/hotel-room-balcony-jungle-view.jpg"]',
  'available'
),
(
  'habitacion-doble-standard',
  'Habitación Doble Standard',
  'Habitación cómoda y acogedora con cama king size, perfecta para parejas. Incluye todas las comodidades necesarias para una estadía placentera.',
  2,
  8500.00,
  '{"beds": "1 cama King"}',
  '["WiFi gratis", "Aire acondicionado", "TV por cable", "Baño privado", "Piscina compartida"]',
  '/hotel-room-king-bed-modern.jpg',
  '["/hotel-room-king-bed-modern.jpg", "/hotel-bathroom-shower-modern.jpg"]',
  'available'
),
(
  'habitacion-triple-confort',
  'Habitación Triple Confort',
  'Ideal para grupos pequeños o familias de tres personas. Equipada con tres camas individuales y un ambiente acogedor.',
  3,
  11000.00,
  '{"beds": "3 camas individuales"}',
  '["WiFi gratis", "Aire acondicionado", "TV por cable", "Baño privado", "Piscina compartida"]',
  '/deluxe-triple-hotel-room-modern.jpg',
  '["/deluxe-triple-hotel-room-modern.jpg", "/hotel-bathroom-luxury-marble.jpg"]',
  'available'
),
(
  'habitacion-cuadruple-premium',
  'Habitación Cuádruple Premium',
  'Amplia habitación para cuatro personas con dos camas queen size. Perfecta para familias o grupos de amigos.',
  4,
  13500.00,
  '{"beds": "2 camas Queen"}',
  '["WiFi gratis", "Aire acondicionado", "TV por cable", "Baño privado", "Balcón", "Piscina compartida"]',
  '/hotel-room-queen-bed-elegant.jpg',
  '["/hotel-room-queen-bed-elegant.jpg", "/hotel-balcony-jungle-view-sunset.jpg", "/hotel-bathroom-shower-modern.jpg"]',
  'available'
),
(
  'suite-romantica',
  'Suite Romántica',
  'Suite especial para parejas que buscan privacidad y confort. Con una cama king size, bañera de hidromasaje y vista privilegiada.',
  2,
  12000.00,
  '{"beds": "1 cama King"}',
  '["WiFi gratis", "Aire acondicionado", "TV por cable", "Baño privado con hidromasaje", "Balcón privado", "Piscina compartida", "Desayuno incluido"]',
  '/romantic-hotel-room-couple-luxury.jpg',
  '["/romantic-hotel-room-couple-luxury.jpg", "/hotel-bathroom-luxury-marble.jpg", "/hotel-balcony-jungle-view-sunset.jpg"]',
  'available'
),
(
  'habitacion-economica',
  'Habitación Económica',
  'Opción perfecta para viajeros que buscan comodidad a un excelente precio. Habitación doble con todas las comodidades básicas.',
  2,
  6500.00,
  '{"beds": "1 cama Queen"}',
  '["WiFi gratis", "Aire acondicionado", "TV por cable", "Baño privado", "Piscina compartida"]',
  '/boutique-hotel-room-cozy.jpg',
  '["/boutique-hotel-room-cozy.jpg"]',
  'available'
);
