-- Don Mario Hotel - Seed Bookings Data
-- Version: 004
-- Description: Insert sample booking data for testing

INSERT INTO bookings (booking_code, guest_id, room_id, check_in, check_out, guests_count, total_nights, price_per_night, total_price, status, notes) VALUES
('DM-2024-001', 1, 1, '2024-12-15', '2024-12-18', 4, 3, 15000.00, 45000.00, 'confirmed', 'Cliente VIP, solicita late check-out'),
('DM-2024-002', 2, 2, '2024-12-20', '2024-12-23', 2, 3, 8500.00, 25500.00, 'confirmed', NULL),
('DM-2024-003', 3, 5, '2024-12-18', '2024-12-21', 2, 3, 12000.00, 36000.00, 'confirmed', 'Aniversario de bodas'),
('DM-2024-004', 4, 4, '2024-12-22', '2024-12-26', 4, 4, 13500.00, 54000.00, 'pending', NULL),
('DM-2024-005', 5, 3, '2025-01-05', '2025-01-08', 3, 3, 11000.00, 33000.00, 'confirmed', NULL),
('DM-2024-006', 6, 6, '2025-01-10', '2025-01-12', 2, 2, 6500.00, 13000.00, 'pending', NULL);
