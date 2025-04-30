function drawCreditsScreen(deltaTime) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
  
    context.fillStyle = "white";
    context.textAlign = "center";
  
    let y = creditsY; // Variable local para posición de cada línea
    
    context.font = "48px Arcade Gamer";
    context.fillText("¡Gracias por jugar!", canvas.width / 2, y);
  
    context.font = "30px Arcade Gamer";
    y += 80;
    context.fillText("Desarrollado y Diseñado por: Ghostbusters", canvas.width / 2, y);

    context.font = "25px Arcade Gamer";
    y += 60;
    context.fillText("Rebeca Dávila, Santiago Arista, Darío Peña", canvas.width / 2, y);
  
    context.font = "30px Arcade Gamer";
    y += 120;
    context.fillText("Música y Efectos de sonido", canvas.width / 2, y);
  
    context.font = "20px Arcade Gamer";
    y += 60;
    context.fillText("Disparos: Robinhood76 - Freesound.org (CC BY)", canvas.width / 2, y);
    y += 60;
    context.fillText("Música original de la película 'Beetlejuice Beetlejuice'", canvas.width / 2, y);
    y += 60;
    context.fillText("Compositor: Danny Elfman", canvas.width / 2, y);
    y += 60;
    context.fillText("Usado solo con fines educativos / sin fines de lucro", canvas.width / 2, y);

    context.font = "30px Arcade Gamer";
    y += 120;
    context.fillText("Sprites", canvas.width / 2, y);
    
    context.font = "20px Arcade Gamer";
    y += 60;
    context.fillText("Sprites gratuitos de escenarios, disparos y personajes por Craftpix.net", canvas.width / 2, y);
    y += 60;
    context.fillText("Ghost monster por OpenGameArt.org (Dominio Público)", canvas.width / 2, y);
  
    y += 60;
    context.fillText("Agradecimientos especiales a...", canvas.width / 2, y);
  
    if (!creditsFinished) {
        creditsY -= creditsSpeed * deltaTime;
    }
    
      // Detectar si ya terminó el scroll
      if (y < 1 && !creditsFinished) { // Cuando el último texto ya subió
        creditsFinished = true;
        showRestartButton();
      }
  }

  function showRestartButton() {
    restartButton = document.createElement("button");
    restartButton.innerText = "Reiniciar Juego";
    restartButton.style.position = "absolute";
    restartButton.style.top = "70%";
    restartButton.style.left = "50%";
    restartButton.style.transform = "translate(-50%, -50%)";
    restartButton.style.padding = "20px 40px";
    restartButton.style.fontSize = "24px";
    restartButton.style.borderRadius = "10px";
    restartButton.style.backgroundColor = "black";
    restartButton.style.color = "white";
    restartButton.style.border = "none";
    restartButton.style.cursor = "pointer";
    restartButton.style.zIndex = "1000";
  
    document.body.appendChild(restartButton);
  
    restartButton.addEventListener("click", () => {

    if (showCredits && creditsFinished) {
      console.log("Play again...");
      const id_usuario = localStorage.getItem('id_usuario');
      console.log("ID_USUARIO: ", id_usuario);
      createPartida( // id_usuario, monstruos_eliminados, puntuacion, vidas, llaves_encontradas, items_encontrados, listaCuartosAleatorios
          id_usuario,
          player.monstruos_eliminados,
          player.monstruos_eliminados * 10,
          player.lives,
          llaves,
          itemsActivos,
          listaCuartosAleatorios,
          true,
          true,
      );
      context.clearRect(0, 0, canvas.width, canvas.height);

      gameOver = false;
      paused = false;
      showCredits = false;
      //Reiniciar el estado del juego

      //Generar nueva disposición de cuartos
      console.log("...........");

      cuartoJefeFinal = new Cuarto({
        idCuarto: 9,
        cuartoSpawn: false,
        cuartoJefeFinal: true,
        posicionJugadorSuperior: { x: 562, y: 30 },
        posicionJugadorInferior: { x: 641, y: 720 },
        posicionJugadorIzquierda: { x: 97, y: 670 },
        posicionJugadorDerecha: { x: 1220, y: 235 },
        colisiones: level_cuarto_final_boss,
        imgBackground: "../../assets/niveles_fondo/mapa_jefe_final.png",
      });

      cuartoSpawn = new Cuarto({
        idCuarto: 8,
        cuartoSpawn: true,
        cuartoJefeFinal: false,
        posicionJugadorSuperior: { x: 514, y: 56 },
        posicionJugadorInferior: { x: 641, y: 720 },
        posicionJugadorIzquierda: { x: 97, y: 670 },
        posicionJugadorDerecha: { x: 1220, y: 235 },
        colisiones: level_cuarto_spawn,
        imgBackground: "../../assets/niveles_fondo/cuarto_spawn.png",
      });
      cuarto1 = new Cuarto({
        idCuarto: 1,
        cuartoSpawn: false,
        cuartoJefeFinal: false,
        posicionJugadorSuperior: { x: 106, y: 82 },
        posicionJugadorInferior: { x: 520, y: 665 },
        posicionJugadorIzquierda: { x: 90, y: 691 },
        posicionJugadorDerecha: { x: 1220, y: 691 },
        colisiones: level_cuarto1,
        imgBackground: "../../assets/niveles_fondo/Scene1.png",
      });

      cuarto2 = new Cuarto({
        idCuarto: 2,
        cuartoSpawn: false,
        cuartoJefeFinal: false,

        posicionJugadorSuperior: { x: 687, y: 150 },
        posicionJugadorInferior: { x: 449, y: 680 },
        posicionJugadorIzquierda: { x: 140, y: 242 },
        posicionJugadorDerecha: { x: 1120, y: 247 },

        colisiones: level_cuarto2,
        imgBackground: "../../assets/niveles_fondo/Scene2.png",
      });

      cuarto3 = new Cuarto({
        idCuarto: 3,
        cuartoSpawn: false,
        cuartoJefeFinal: false,

        posicionJugadorSuperior: { x: 672, y: 182 },
        posicionJugadorInferior: { x: 927, y: 670 },
        posicionJugadorIzquierda: { x: 191, y: 270 },
        posicionJugadorDerecha: { x: 1220, y: 691 },

        colisiones: level_cuarto3,
        imgBackground: "../../assets/niveles_fondo/Scene3.png",
      });

      cuarto4 = new Cuarto({
        idCuarto: 4,
        cuartoSpawn: false,
        cuartoJefeFinal: false,
        posicionJugadorSuperior: { x: 544, y: 30 },
        posicionJugadorInferior: { x: 496, y: 670 },
        posicionJugadorIzquierda: { x: 97, y: 670 },
        posicionJugadorDerecha: { x: 1120, y: 235 },
        colisiones: colisionesNivel4,
        imgBackground: "../../assets/niveles_fondo/cuarto_giff.gif",
      });
      cuarto5 = new Cuarto({
        idCuarto: 5,
        cuartoSpawn: false,
        cuartoJefeFinal: false,
        posicionJugadorSuperior: { x: 608, y: 171 },
        posicionJugadorInferior: { x: 286, y: 690 },
        posicionJugadorIzquierda: { x: 90, y: 371 },
        posicionJugadorDerecha: { x: 1220, y: 691 },
        colisiones: level_cuarto5,
        imgBackground: "../../assets/niveles_fondo/Scene4.png",
      });
      cuarto6 = new Cuarto({
        idCuarto: 6,
        cuartoSpawn: false,
        cuartoJefeFinal: false,
        posicionJugadorSuperior: { x: 673, y: 110 },
        posicionJugadorInferior: { x: 560, y: 670 },
        posicionJugadorIzquierda: { x: 89, y: 674 },
        posicionJugadorDerecha: { x: 1220, y: 674 },
        colisiones: level_cuarto6,
        imgBackground: "../../assets/niveles_fondo/Scene5.png",
      });
      cuarto7 = new Cuarto({
        idCuarto: 7,
        cuartoSpawn: false,
        cuartoJefeFinal: false,
        posicionJugadorSuperior: { x: 674, y: 175 },
        posicionJugadorInferior: { x: 560, y: 670 },
        posicionJugadorIzquierda: { x: 90, y: 674 },
        posicionJugadorDerecha: { x: 1250, y: 674 },
        colisiones: level_cuarto7,
        imgBackground: "../../assets/niveles_fondo/Scene6.png",
      });

      if (restartButton) {
        document.body.removeChild(restartButton);
        restartButton = null;
      }
      
      reiniciarJuego();
      //
      // Reset Level
    
    }
  
    });
  }


  
  function reiniciarJuego() {
    if (restartButton) {
      document.body.removeChild(restartButton);
      restartButton = null;
    }

    // Cancelar game over screen animation
    if (gameOverAnimationId) {
      cancelAnimationFrame(gameOverAnimationId);
      gameOverAnimationId = null;
    }
  
    // Reset gameOver video
    gameOverVideo.pause();
    gameOverVideo.currentTime = 0;
  
    // Reset flags
    gameOver = false;
    paused = false;
    settingsOpen = false;
    showCredits = false;
  
    // Limpiar canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
  
    // Reiniciar variables de estado
    player.lives = 3;
    player.position = { x: 300, y: 580 };
    colisionesConvertidas = level_cuarto_final_boss.parse2D();
    bloquesColisiones = colisionesConvertidas.creatObjectsFrom2d();
    puertas = [];
    currentLevel = 8;
    listaCuartosAleatorios = [];
    showMap = false;
    llaves = [false, false, false, false, false, false, false, false, false];
    paused = false;
    itemsEnJuego = []; // o llama a obtenerListaItems() si quieres regenerarlos
    itemsActivos = [false, false, false];
    idArmaActual = "0";
    disparosJugador = [];
    disparosEnemigos = [];
    gameOver = false;
    lKeyProcessed = false;
    caminando = false;
    overlay.opacity = 0;
  
  
    enemigos = [];
    enemigosPorNivel = obtenerListaEnemigos(
      bulletController,
      enemyBulletController
    );
   
    cuartos = generarLevels(crear_disposicion_cuartos(), enemigosPorNivel);
    console.log(enemigosPorNivel);
    cuartos[currentLevel].init();
  
    cuartosOscuros = new Set();
    while (cuartosOscuros.size < 4) {
      const randomIndex = Math.floor(Math.random() * cuartosOrdenados.length);
      cuartosOscuros.add(cuartosOrdenados[randomIndex].idCuarto);
    }
  
    // Reiniciar input
    keys.k.pressed = false;
    keys.l.pressed = false;
    keys.w.pressed = false;
    keys.a.pressed = false;
    keys.d.pressed = false;
  
    // Volver a iniciar el cuarto actual
   
  
    // Reiniciar música si quieres que empiece de nuevo
    sonidoMusica.stop();
    musicaIniciada = false;
  
    // Volver a animar
    requestAnimationFrame(animate);
  
  }
  