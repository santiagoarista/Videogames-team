-- Nineshions Database Schema
-- Version 1.0

-- Copyright (c) 2025 Nineshions and/or its affiliates.

SET NAMES utf8mb4;
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL';

DROP SCHEMA IF EXISTS nineshions;
CREATE SCHEMA nineshions;
USE nineshions;

--
-- Estructura tabla `Usuario`
--

CREATE TABLE Usuario (
  id_usuario SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  correo VARCHAR(254) NOT NULL UNIQUE,
  contrasena TEXT NOT NULL,
  monstruos_eliminados INT UNSIGNED DEFAULT 0,
  partidas_jugadas INT UNSIGNED DEFAULT 0,
  partidas_ganadas INT UNSIGNED DEFAULT 0,
  experiencia INT UNSIGNED DEFAULT 0,
  PRIMARY KEY  (id_usuario)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Estructura tabla `Partida`
--

CREATE TABLE Partida (
  id_partida SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  id_usuario SMALLINT UNSIGNED NOT NULL,
  monstruos_eliminados INT UNSIGNED NOT NULL DEFAULT 0,
  puntuacion INT UNSIGNED NOT NULL DEFAULT 0,
  vidas SMALLINT UNSIGNED NOT NULL DEFAULT 3,
  llaves_encontradas JSON NOT NULL DEFAULT (JSON_ARRAY(false, false, false, false, false, false, false, false, false)),
  items_encontrados JSON NOT NULL DEFAULT (JSON_ARRAY(false, false, false)),
  mapa JSON NOT NULL DEFAULT (JSON_ARRAY()),
  terminada BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (id_partida),
  CONSTRAINT fk_partida_usuario FOREIGN KEY (id_usuario) REFERENCES Usuario (id_usuario) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

