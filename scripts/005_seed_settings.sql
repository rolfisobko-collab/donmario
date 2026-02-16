-- Don Mario Hotel - Seed Settings Data
-- Version: 005
-- Description: Insert initial hotel settings

INSERT INTO settings (key, value, category) VALUES
('hotel_name', 'Don Mario Alojamiento', 'general'),
('hotel_email', 'donmario.alojamiento@gmail.com', 'general'),
('hotel_phone', '+54 3757 123456', 'general'),
('hotel_address', 'Av. Republica Argentina 451, Puerto Iguazú 3370', 'general'),
('check_in_time', '14:00', 'general'),
('check_out_time', '10:00', 'general'),
('currency', 'ARS', 'general'),
('timezone', 'America/Argentina/Buenos_Aires', 'general'),
('booking_notifications', 'true', 'notifications'),
('email_notifications', 'true', 'notifications'),
('whatsapp_notifications', 'true', 'notifications'),
('payment_methods', 'efectivo,transferencia,mercadopago', 'payments'),
('cancellation_policy', '48', 'general'),
('max_guests_per_room', '5', 'general');
