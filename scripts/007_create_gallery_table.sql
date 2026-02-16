-- Gallery Table
-- Version: 007
-- Description: Create gallery table for hotel images and videos

CREATE TABLE IF NOT EXISTS gallery (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  media_url TEXT NOT NULL, -- Renamed from image_url to media_url to support videos
  media_type VARCHAR(20) DEFAULT 'image', -- Added media_type: 'image' or 'video'
  thumbnail_url TEXT, -- Added thumbnail for videos
  category VARCHAR(100), -- rooms, facilities, surroundings, events, food
  display_order INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  status VARCHAR(50) DEFAULT 'active', -- active, archived
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_gallery_category ON gallery(category);
CREATE INDEX IF NOT EXISTS idx_gallery_status ON gallery(status);
CREATE INDEX IF NOT EXISTS idx_gallery_featured ON gallery(is_featured);
CREATE INDEX IF NOT EXISTS idx_gallery_display_order ON gallery(display_order);
CREATE INDEX IF NOT EXISTS idx_gallery_media_type ON gallery(media_type);

-- Insert some initial gallery images
INSERT INTO gallery (title, description, media_url, media_type, category, display_order, is_featured) VALUES
('Cataratas del Iguazú', 'Vista espectacular de las Cataratas del Iguazú, una de las maravillas naturales del mundo', '/iguazu-falls-waterfall-lush-green-nature.jpg', 'image', 'surroundings', 1, true),
('Habitación Confortable', 'Nuestras habitaciones equipadas con todas las comodidades', '/modern-hotel-room-comfortable-bed.jpg', 'image', 'rooms', 2, true),
('Habitación Familiar', 'Espaciosa habitación perfecta para familias', '/spacious-family-hotel-room-multiple-beds.jpg', 'image', 'rooms', 3, true),
('Habitación Quíntuple', 'Nuestra habitación más amplia para grupos grandes', '/images/cb01a24b-c895-4f7a-8be9.jpeg', 'image', 'rooms', 4, true);
