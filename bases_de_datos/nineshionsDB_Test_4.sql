-- Nineshions Database Testing Script - Expanded Version
-- Version 1.3 with 30+ rows per table

USE nineshions;

-- Clear existing data (for testing purposes)
TRUNCATE TABLE Partida;
TRUNCATE TABLE Usuario;

-- Insert 30+ dummy users
INSERT INTO Usuario (correo, contrasena, monstruos_eliminados, partidas_jugadas, partidas_ganadas, experiencia) VALUES
('playernumber1@nineshions.com', 'password1', 0, 20, 15, 0),
('player2@nineshions.com', 'password2', 80, 15, 5, 2200),
('pro_gamer@nineshions.com', 'password3', 500, 50, 45, 15000),
('newbie@nineshions.com', 'password4', 10, 2, 0, 100),
('tester@nineshions.com', 'password5', 30, 8, 3, 800),
('speedrunner@nineshions.com', 'password6', 300, 100, 95, 20000),
('casual_player@nineshions.com', 'password7', 50, 10, 3, 1200),
('collector@nineshions.com', 'password8', 200, 30, 25, 8000),
('explorer@nineshions.com', 'password9', 180, 25, 18, 6000),
('noob_slayer@nineshions.com', 'password10', 400, 60, 55, 18000),
('night_owl@nineshions.com', 'password11', 120, 18, 12, 3500),
('weekend_warrior@nineshions.com', 'password12', 90, 12, 8, 2500),
('achievement_hunter@nineshions.com', 'password13', 250, 35, 30, 9000),
('lore_seeker@nineshions.com', 'password14', 160, 22, 16, 5000),
('boss_killer@nineshions.com', 'password15', 350, 45, 40, 12000),
('item_hoarder@nineshions.com', 'password16', 220, 28, 20, 7000),
('map_completer@nineshions.com', 'password17', 280, 40, 35, 11000),
('secret_finder@nineshions.com', 'password18', 190, 26, 19, 6500),
('puzzle_solver@nineshions.com', 'password19', 130, 15, 10, 3000),
('final_boss@nineshions.com', 'password20', 600, 80, 75, 25000),
('retired_champ@nineshions.com', 'password21', 1000, 200, 180, 50000),
('rising_star@nineshions.com', 'password22', 70, 8, 4, 1500),
('grinder@nineshions.com', 'password23', 450, 55, 50, 17000),
('strategist@nineshions.com', 'password24', 275, 38, 32, 10500),
('explosive@nineshions.com', 'password25', 500, 60, 55, 20000),
('tank@nineshions.com', 'password26', 320, 50, 40, 15000),
('shadow@nineshions.com', 'password27', 290, 42, 35, 12500),
('quickshot@nineshions.com', 'password28', 350, 48, 42, 14000),
('berserker@nineshions.com', 'password29', 500, 70, 65, 22000),
('guardian@nineshions.com', 'password30', 310, 46, 38, 13000),
('nightmare@nineshions.com', 'password31', 275, 37, 30, 11000),
('firestarter@nineshions.com', 'password32', 420, 56, 50, 18000),
('speedster@nineshions.com', 'password33', 390, 54, 48, 16000),
('legend@nineshions.com', 'password34', 750, 100, 90, 30000),
('rookie@nineshions.com', 'password35', 20, 5, 1, 300),
('mage@nineshions.com', 'password36', 200, 30, 25, 8000),
('healer@nineshions.com', 'password37', 220, 35, 28, 8500),
('santiagoaristav@outlook.com', '1234', 0, 0, 0, 0),
('a01029805@tec.mx', '1234', 0, 0, 0, 0);


-- Insert 30+ dummy game sessions with varied data
INSERT INTO Partida (id_usuario, monstruos_eliminados, puntuacion, vidas, llaves_encontradas, items_encontrados, mapa, terminada, ganada) VALUES
-- Player 1 games
(1, 15, 1200, 3, JSON_ARRAY(true, false, true, false, false, false, true, false, false), JSON_ARRAY(true, false, true), JSON_OBJECT(), FALSE, FALSE),
(1, 8, 800, 2, JSON_ARRAY(false, false, true, false, false, false, false, false, false), JSON_ARRAY(false, true, false), JSON_OBJECT(), FALSE, FALSE),
(1, 20, 1500, 3, JSON_ARRAY(true, true, true, false, false, false, true, false, false), JSON_ARRAY(true, true, false), JSON_OBJECT(), FALSE, FALSE),
(1, 12, 950, 3, JSON_ARRAY(false, false, false, true, false, false, false, true, false), JSON_ARRAY(false, false, true), JSON_OBJECT(), FALSE, FALSE),

-- Player 2 games
(2, 5, 500, 3, JSON_ARRAY(false, false, false, false, false, false, false, false, false), JSON_ARRAY(false, false, false), JSON_OBJECT(),FALSE, FALSE),
(2, 10, 750, 2, JSON_ARRAY(true, false, false, false, false, false, false, false, false), JSON_ARRAY(true, false, false), JSON_OBJECT(), FALSE, FALSE),
(2, 7, 600, 2, JSON_ARRAY(false, true, false, false, false, false, false, false, false), JSON_ARRAY(false, true, false), JSON_OBJECT(), FALSE, FALSE),

-- Pro gamer games
(3, 25, 2500, 2, JSON_ARRAY(true, true, true, true, true, false, false, false, false), JSON_ARRAY(true, true, true), JSON_OBJECT(), FALSE, FALSE),
(3, 30, 3000, 2, JSON_ARRAY(true, true, true, true, true, true, false, false, false), JSON_ARRAY(true, true, true), JSON_OBJECT(), FALSE, FALSE),
(3, 18, 2000, 2, JSON_ARRAY(true, true, false, true, false, false, true, false, false), JSON_ARRAY(true, false, true), JSON_OBJECT(), FALSE, FALSE),
(3, 22, 2300, 2, JSON_ARRAY(true, true, true, false, true, false, false, true, false), JSON_ARRAY(false, true, true), JSON_OBJECT(), FALSE, FALSE),

-- Newbie games
(4, 3, 300, 1, JSON_ARRAY(false, false, false, false, false, false, false, false, false), JSON_ARRAY(false, false, false), JSON_OBJECT(), FALSE, FALSE),
(4, 5, 400, 1, JSON_ARRAY(false, false, true, false, false, false, false, false, false), JSON_ARRAY(true, false, false), JSON_OBJECT(), FALSE, FALSE),

-- Tester games
(5, 3, 300, 1, JSON_ARRAY(false, false, false, false, false, false, false, false, false), JSON_ARRAY(false, false, false), JSON_OBJECT(), FALSE, FALSE),
(5, 6, 500, 3, JSON_ARRAY(false, false, false, false, true, false, false, false, false), JSON_ARRAY(false, true, false), JSON_OBJECT(), FALSE, FALSE),

-- Additional games for other players
(6, 40, 3500, 3, JSON_ARRAY(true, true, true, true, true, true, true, true, true), JSON_ARRAY(true, true, true), JSON_OBJECT(), FALSE, FALSE),
(7, 8, 650, 3, JSON_ARRAY(false, false, false, false, false, true, false, false, false), JSON_ARRAY(false, false, true), JSON_OBJECT(), FALSE, FALSE),
(8, 15, 1200, 2, JSON_ARRAY(true, false, true, false, true, false, true, false, true), JSON_ARRAY(true, true, false), JSON_OBJECT(), FALSE, FALSE),
(9, 10, 850, 1, JSON_ARRAY(false, true, false, true, false, true, false, true, false), JSON_ARRAY(false, true, true), JSON_OBJECT(), FALSE, FALSE),
(10, 28, 2700, 1, JSON_ARRAY(true, true, true, true, false, false, true, true, true), JSON_ARRAY(true, false, true), JSON_OBJECT(), FALSE, FALSE),
(11, 12, 950, 1, JSON_ARRAY(false, false, true, true, false, false, true, false, false), JSON_ARRAY(true, false, false), JSON_OBJECT(), FALSE, FALSE),
(12, 9, 700, 1, JSON_ARRAY(true, false, false, false, true, false, false, false, true), JSON_ARRAY(false, true, false), JSON_OBJECT(), FALSE, FALSE),
(13, 20, 1800, 1, JSON_ARRAY(true, true, false, true, false, true, false, true, false), JSON_ARRAY(true, true, true), JSON_OBJECT(), FALSE, FALSE),
(14, 14, 1100, 1, JSON_ARRAY(false, true, true, false, true, true, false, true, true), JSON_ARRAY(false, false, true), JSON_OBJECT(), FALSE, FALSE),
(15, 25, 2400, 1, JSON_ARRAY(true, true, true, false, false, true, true, true, false), JSON_ARRAY(true, true, false), JSON_OBJECT(), FALSE, FALSE),
(16, 18, 1600, 3, JSON_ARRAY(false, true, true, true, false, false, true, true, true), JSON_ARRAY(false, true, true), JSON_OBJECT(), FALSE, FALSE),
(17, 22, 2100, 3, JSON_ARRAY(true, false, true, true, true, false, true, false, true), JSON_ARRAY(true, false, false), JSON_OBJECT(), FALSE, FALSE),
(18, 16, 1400, 3, JSON_ARRAY(true, true, false, false, true, true, false, false, true), JSON_ARRAY(false, true, true), JSON_OBJECT(), FALSE, FALSE),
(19, 11, 900, 3, JSON_ARRAY(false, false, true, true, true, false, false, true, true), JSON_ARRAY(true, false, true), JSON_OBJECT(), FALSE, FALSE),
(20, 35, 3200, 2, JSON_ARRAY(true, true, true, true, true, true, true, true, false), JSON_ARRAY(true, true, true), JSON_OBJECT(), FALSE, FALSE),
(21, 50, 4500, 2, JSON_ARRAY(true, true, true, true, true, true, true, true, true), JSON_ARRAY(true, true, true), JSON_OBJECT(), FALSE, FALSE),
(22, 6, 550, 2, JSON_ARRAY(false, false, false, true, false, false, false, false, true), JSON_ARRAY(false, false, true), JSON_OBJECT(), FALSE, FALSE);

-- TEST QUERIES --

-- 1. Verify row counts (should show 22 users and 30 games)
SELECT 'Users' as table_name, COUNT(*) as record_count FROM Usuario
UNION ALL
SELECT 'Partidas', COUNT(*) FROM Partida;

-- 2. Find top 5 players by experience
SELECT correo, experiencia, partidas_jugadas, partidas_ganadas 
FROM Usuario 
ORDER BY experiencia DESC 
LIMIT 5;

-- 3. Find games with highest scores
SELECT p.id_partida, u.correo, p.puntuacion, p.monstruos_eliminados
FROM Partida p
JOIN Usuario u ON p.id_usuario = u.id_usuario
ORDER BY p.puntuacion DESC
LIMIT 5;

-- 4. Count found keys per game (using compatible method)
SELECT 
  p.id_partida,
  u.correo,
  (
    (JSON_EXTRACT(p.llaves_encontradas, '$[0]') = true) +
    (JSON_EXTRACT(p.llaves_encontradas, '$[1]') = true) +
    (JSON_EXTRACT(p.llaves_encontradas, '$[2]') = true) +
    (JSON_EXTRACT(p.llaves_encontradas, '$[3]') = true) +
    (JSON_EXTRACT(p.llaves_encontradas, '$[4]') = true) +
    (JSON_EXTRACT(p.llaves_encontradas, '$[5]') = true) +
    (JSON_EXTRACT(p.llaves_encontradas, '$[6]') = true) +
    (JSON_EXTRACT(p.llaves_encontradas, '$[7]') = true) +
    (JSON_EXTRACT(p.llaves_encontradas, '$[8]') = true)
  ) AS keys_found,
  (
    (JSON_EXTRACT(p.items_encontrados, '$[0]') = true) +
    (JSON_EXTRACT(p.items_encontrados, '$[1]') = true) +
    (JSON_EXTRACT(p.items_encontrados, '$[2]') = true)
  ) AS items_found
FROM Partida p
JOIN Usuario u ON p.id_usuario = u.id_usuario
ORDER BY keys_found DESC, items_found DESC;

-- 5. Calculate win rate for each player
SELECT 
  correo,
  partidas_jugadas,
  partidas_ganadas,
  ROUND((partidas_ganadas/partidas_jugadas)*100, 2) AS win_rate_percentage
FROM Usuario
WHERE partidas_jugadas > 0
ORDER BY win_rate_percentage DESC;

-- 6. Find players who found all items in at least one game
SELECT DISTINCT u.correo
FROM Usuario u
JOIN Partida p ON u.id_usuario = p.id_usuario
WHERE 
  (JSON_EXTRACT(p.items_encontrados, '$[0]') = true) AND
  (JSON_EXTRACT(p.items_encontrados, '$[1]') = true) AND
  (JSON_EXTRACT(p.items_encontrados, '$[2]') = true);
  
-- Triggers --

-- 1. Calculate experience for players when monstruos_eliminados changes

DELIMITER $$

CREATE TRIGGER trigger_actualizar_experiencia_partida
BEFORE UPDATE ON Usuario
FOR EACH ROW
BEGIN
  UPDATE Usuario
  SET experiencia = experiencia + (NEW.monstruos_eliminados * 10)
  WHERE id_usuario = NEW.id_usuario;
END;

DELIMITER ;

DROP TRIGGER IF EXISTS before_update_partida;

DELIMITER $$

CREATE TRIGGER before_update_partida
AFTER INSERT ON Partida
FOR EACH ROW
BEGIN
  -- Update the Usuario table when a Partida is updated
  UPDATE Usuario
  SET 
    -- Update the total number of monsters eliminated by summing across all the user's games
    monstruos_eliminados = (
      SELECT COALESCE(SUM(monstruos_eliminados), 0)
      FROM Partida
      WHERE id_usuario = NEW.id_usuario
    ),
    
    -- Update the total number of games played by counting all the user's Partida records
    partidas_jugadas = (
      SELECT COUNT(*)
      FROM Partida
      WHERE id_usuario = NEW.id_usuario
        AND terminada = TRUE
    ),
    
    -- Update the total number of games won by counting only the finished Partida records
    partidas_ganadas = (
      SELECT COUNT(*)
      FROM Partida
      WHERE id_usuario = NEW.id_usuario
        AND ganada = TRUE
    )
  
  -- Make sure we only update the Usuario related to the updated Partida
  WHERE id_usuario = NEW.id_usuario;
END$$

DELIMITER ;


-- Test for trigger 1
UPDATE Usuario
SET monstruos_eliminados = 4
WHERE id_usuario = 1;


SELECT * FROM Partida;
SELECT * FROM Usuario;
