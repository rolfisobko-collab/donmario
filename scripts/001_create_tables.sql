-- Don Mario Hotel Database Schema
-- Version: 001
-- Description: Create base tables for hotel management system

-- Table: rooms
-- Stores information about hotel rooms
CREATE TABLE IF NOT EXISTS rooms (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(100) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  max_guests INTEGER NOT NULL,
  base_price DECIMAL(10, 2) NOT NULL,
  beds_info JSONB, -- Store bed configuration as JSON
  amenities JSONB, -- Store amenities as JSON array
  image_url TEXT,
  images JSONB, -- Store multiple images as JSON array
  status VARCHAR(50) DEFAULT 'available', -- available, occupied, maintenance
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: guests
-- Stores guest information
CREATE TABLE IF NOT EXISTS guests (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(50),
  country VARCHAR(100),
  document_type VARCHAR(50),
  document_number VARCHAR(100),
  status VARCHAR(50) DEFAULT 'active', -- active, vip, blocked
  total_spent DECIMAL(10, 2) DEFAULT 0,
  total_bookings INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: bookings
-- Stores reservation information
CREATE TABLE IF NOT EXISTS bookings (
  id SERIAL PRIMARY KEY,
  booking_code VARCHAR(50) UNIQUE NOT NULL,
  guest_id INTEGER REFERENCES guests(id) ON DELETE CASCADE,
  room_id INTEGER REFERENCES rooms(id) ON DELETE CASCADE,
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  guests_count INTEGER NOT NULL,
  total_nights INTEGER NOT NULL,
  price_per_night DECIMAL(10, 2) NOT NULL,
  total_price DECIMAL(10, 2) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending', -- pending, confirmed, checked_in, checked_out, cancelled
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: settings
-- Stores hotel configuration
CREATE TABLE IF NOT EXISTS settings (
  id SERIAL PRIMARY KEY,
  key VARCHAR(100) UNIQUE NOT NULL,
  value TEXT,
  category VARCHAR(50), -- general, notifications, payments, security
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_bookings_guest_id ON bookings(guest_id);
CREATE INDEX IF NOT EXISTS idx_bookings_room_id ON bookings(room_id);
CREATE INDEX IF NOT EXISTS idx_bookings_dates ON bookings(check_in, check_out);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_rooms_status ON rooms(status);
CREATE INDEX IF NOT EXISTS idx_guests_email ON guests(email);
