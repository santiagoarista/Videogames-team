// Background
const gameOverVideo = document.createElement("video");
gameOverVideo.src = "../assets/gameOver/gameOver.mp4"; // Asegúrate de que la ruta sea correcta
gameOverVideo.loop = true; //Loop
gameOverVideo.muted = true;
gameOverVideo.play(); // Iniciar reproducción automática

//Button Volver a Jugar. Global para EventListeners
const playWidth = 300;
const playHeight = 60;
let playX, playY;

//Button Salir al Menú. Global para EventListeners
const exitGameWidth = 300;
const exitGameHeight = 60;
let exitGameX, exitGameY;

function drawGameOverScreen() {
  if (!gameOver) return;

  //Posiciones
  playX = canvas.width / 2 - 150;
  playY = canvas.height / 2.5;
  exitGameX = canvas.width / 2 - 150;
  exitGameY = canvas.height / 2.5 + 80;

  // Dibujar la imagen de fondo
  context.drawImage(gameOverVideo, 0, 0, canvas.width, canvas.height);

  // Dibujar "GAME OVER"
  context.fillStyle = "white";
  context.font = "70px Arcade Gamer";
  context.textAlign = "center";
  // context.textBaseline = "middle";
  context.shadowColor = "cyan"; //Efecto de letras neon
  context.shadowBlur = 15;
  context.fillText("GAME OVER", canvas.width / 2, canvas.height / 4 - 30);

  // Dibujar botones
  drawButton(playX, playY, playWidth, playHeight, "Volver a Jugar", "black");
  drawButton(
    exitGameX,
    exitGameY,
    exitGameWidth,
    exitGameHeight,
    "Salir al Menú",
    "black"
  );

  // Resetear efecto neon
  context.shadowBlur = 0;
  context.shadowColor = "transparent";

  // Hacer que la función se ejecute en cada frame para actualizar el video
  gameOverAnimationId = requestAnimationFrame(drawGameOverScreen);
}

// Función para dibujar botones reutilizables
function drawButton(x, y, width, height, text, color) {
  // Dibujar el rectángulo del botón
  context.fillStyle = color;
  context.fillRect(x, y, width, height);

  // Dibujar el texto del botón
  context.fillStyle = "white";
  context.font = "20px Arcade Gamer";
  context.fillText(text, x + width / 2, y + height / 2 + 11);
}

canvas.addEventListener("click", (event) => {
  const rect = canvas.getBoundingClientRect();
  const rectwidth = rect.right - rect.left;
  const rectHeight = rect.bottom - rect.top;
  const ratioWidth = rectwidth / canvas.width;
  const ratioHeight = rectHeight / canvas.height;
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  // Si gameOver está abierto
  if (gameOver && !paused && !settingsOpen) {
    paused = false;
    if (
      mouseX >= playX * ratioWidth &&
      mouseX <= (playX + playWidth) * ratioWidth &&
      mouseY >= playY * ratioHeight &&
      mouseY <= (playY + playHeight) * ratioHeight &&
      gameOver
    ) {
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
          true
      );
      context.clearRect(0, 0, canvas.width, canvas.height);

      gameOver = false;
      paused = false;
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
      reiniciarJuego();
      //
      // Reset Level
      // 
      if (gameOverAnimationId) {
        cancelAnimationFrame(gameOverAnimationId);
        gameOverAnimationId = null;
      }
    }

    // Al hacer click en Salir
    if (
      mouseX >= exitGameX * ratioWidth &&
      mouseX <= (exitGameX + exitGameWidth) * ratioWidth &&
      mouseY >= exitGameY * ratioHeight &&
      mouseY <= (exitGameY + exitGameHeight) * ratioHeight &&
      gameOver
    ) {
      console.log("Salir al Menú...");
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
          true
      );
      window.location.href = "/html/principal_menu.html"; // Redirige a la página del menú
    }
  }
});

// Iniciar la animación cuando el video cargue solo cuando gameOver
if (gameOver) {
  gameOverVideo.oncanplay = function () {
    drawGameOverScreen();
  };
}

function reiniciarJuego() {

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
