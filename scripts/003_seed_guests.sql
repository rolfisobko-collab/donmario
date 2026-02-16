-- Don Mario Hotel - Seed Guests Data
-- Version: 003
-- Description: Insert sample guest data for testing

INSERT INTO guests (first_name, last_name, email, phone, country, document_type, document_number, status, total_spent, total_bookings) VALUES
('María', 'González', 'maria.gonzalez@email.com', '+54 11 5555-1234', 'Argentina', 'DNI', '35123456', 'vip', 45000.00, 3),
('Carlos', 'Rodríguez', 'carlos.rodriguez@email.com', '+54 11 5555-5678', 'Argentina', 'DNI', '28456789', 'active', 17000.00, 1),
('Ana', 'Silva', 'ana.silva@email.com', '+55 11 98765-4321', 'Brasil', 'Passaporte', 'BR123456', 'active', 24500.00, 2),
('Pedro', 'Martínez', 'pedro.martinez@email.com', '+598 99 123 456', 'Uruguay', 'CI', '4.567.890-1', 'active', 13500.00, 1),
('Laura', 'Fernández', 'laura.fernandez@email.com', '+54 11 5555-9012', 'Argentina', 'DNI', '32789012', 'vip', 56000.00, 4),
('Juan', 'López', 'juan.lopez@email.com', '+56 9 8765 4321', 'Chile', 'RUT', '18.765.432-1', 'active', 8500.00, 1);
