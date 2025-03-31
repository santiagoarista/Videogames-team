-- Nineshions Database Testing Script - Simplified Version
-- Version 1.1

USE nineshions;

-- Clear existing data (for testing purposes)
TRUNCATE TABLE Partida;
TRUNCATE TABLE Usuario;

-- Insert dummy users
INSERT INTO Usuario (correo, monstruos_eliminados, partidas_jugadas, partidas_ganadas, experiencia) VALUES
('player1@nineshions.com', 150, 20, 15, 4500),
('player2@nineshions.com', 80, 15, 5, 2200),
('pro_gamer@nineshions.com', 500, 50, 45, 15000),
('newbie@nineshions.com', 10, 2, 0, 100),
('tester@nineshions.com', 30, 8, 3, 800);

-- Insert dummy game sessions with simplified JSON
INSERT INTO Partida (id_usuario, monstruos_eliminados, puntuacion, llaves_encontradas, items_encontrados, mapa) VALUES
(1, 15, 1200, 
 JSON_ARRAY(true, false, true, false, false, false, true, false, false), 
 JSON_ARRAY(true, false, true),
 JSON_OBJECT()),
 
(1, 8, 800, 
 JSON_ARRAY(false, false, true, false, false, false, false, false, false),
 JSON_ARRAY(false, true, false),
 JSON_OBJECT()),
 
(2, 5, 500, 
 JSON_ARRAY(false, false, false, false, false, false, false, false, false),
 JSON_ARRAY(false, false, false),
 JSON_OBJECT()),
 
(3, 25, 2500, 
 JSON_ARRAY(true, true, true, true, true, false, false, false, false),
 JSON_ARRAY(true, true, true),
 JSON_OBJECT()),
 
(5, 3, 300, 
 JSON_ARRAY(false, false, false, false, false, false, false, false, false),
 JSON_ARRAY(false, false, false),
 JSON_OBJECT());

-- TEST QUERIES --

-- 1. Basic data verification
SELECT 'Users' as table_name, COUNT(*) as record_count FROM Usuario
UNION ALL
SELECT 'Partidas', COUNT(*) FROM Partida;

-- 2. Find games where specific keys were found (e.g., first key)
SELECT p.id_partida, u.correo
FROM Partida p
JOIN Usuario u ON p.id_usuario = u.id_usuario
WHERE JSON_EXTRACT(p.llaves_encontradas, '$[0]') = true;

-- 3. Find games where any items were found
SELECT p.id_partida, u.correo
FROM Partida p
JOIN Usuario u ON p.id_usuario = u.id_usuario
WHERE JSON_CONTAINS(p.items_encontrados, 'true');

-- 4. Count found keys per game
SELECT 
  p.id_partida,
  u.correo,
  (SELECT COUNT(*) FROM JSON_TABLE(p.llaves_encontradas, '$[*]' COLUMNS(
    key_found BOOLEAN PATH '$'
  )) AS k WHERE key_found = true) AS keys_found,
  (SELECT COUNT(*) FROM JSON_TABLE(p.items_encontrados, '$[*]' COLUMNS(
    item_found BOOLEAN PATH '$'
  )) AS i WHERE item_found = true) AS items_found
FROM Partida p
JOIN Usuario u ON p.id_usuario = u.id_usuario;

-- 5. Update a game's key status (mark 3rd key as found)
UPDATE Partida
SET llaves_encontradas = JSON_SET(llaves_encontradas, '$[2]', true)
WHERE id_partida = 5;

-- Verify the update
SELECT id_partida, llaves_encontradas FROM Partida WHERE id_partida = 5;