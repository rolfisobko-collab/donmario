-- Remove "Ropa de Cama" and "Ropa de Cama Premium" from all rooms

UPDATE rooms SET amenities = '["Aire Acondicionado", "TV LED", "WiFi Gratis", "Baño Privado"]'::jsonb 
WHERE slug = 'habitacion-simple';

UPDATE rooms SET amenities = '["Aire Acondicionado", "TV LED", "WiFi Gratis", "Baño Privado", "Armario"]'::jsonb 
WHERE slug = 'habitacion-doble';

UPDATE rooms SET amenities = '["Aire Acondicionado", "TV LED", "WiFi Gratis", "Baño Privado", "Armario", "Ventilador"]'::jsonb 
WHERE slug = 'habitacion-triple';

UPDATE rooms SET amenities = '["Aire Acondicionado", "TV LED", "WiFi Gratis", "Baño Privado", "Armario Grande", "Ventilador", "Mesa de Trabajo"]'::jsonb 
WHERE slug = 'habitacion-cuadruple';

UPDATE rooms SET amenities = '["Aire Acondicionado", "TV LED", "WiFi Gratis", "Baño Privado", "Armario Grande", "Ventilador", "Mesa de Trabajo", "Espejo de Cuerpo Completo"]'::jsonb 
WHERE slug = 'habitacion-quintuple';
