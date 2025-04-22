//sólo se ejecuta una ve<z
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
//convertimos mapoa de caracteres a una amtriz de listas
let colisionesConvertidas = level_cuarto_final_boss.parse2D();
//Convertimos la matriz de listas a una lista de clases de BloqueColision
let bloquesColisiones = colisionesConvertidas.creatObjectsFrom2d();
let puertas = [];
let currentLevel = 8;
let listaCuartosAleatorios = [];
let showMap = false;
let llaves = [false, false, false, false, false, false, false, false, false];
let paused = false;
let itemsEnJuego = []; //obtenerListaItems()
let itemsActivos = [false, false, false];
let idArmaActual = "0";
let disparosJugador = [];
let disparosEnemigos = [];
let gameOver = false;
let lKeyProcessed = false;

// Tamaño de renderizado 16:9 NO MODIFICAR
canvas.width = 1344;
canvas.height = 768;
//-----------------------------------INSTANCIAS DE CLASES----------------------------

let armaslista = armasLi; //Están en archivo utils>lista_armas

//Controladores de disparos
const bulletController = new Bulletcontroller(canvas);
//Esta clase esta en la carpeta de clases>player_class
const enemyBulletController = new EnemyBulletcontroller(canvas);
//Esta clase esta en la carpeta de clases>player_class

//instancias de objetos en cuartos
let enemigos = [];
let enemigosPorNivel = obtenerListaEnemigos(
  bulletController,
  enemyBulletController
);
const player = jugador1(bulletController, itemsEnJuego);

//cuartos aleatorios
let cuartos = generarLevels(crear_disposicion_cuartos(), enemigosPorNivel);

let cuartosOscuros = new Set(); // IDs de cuartos con oscuridad

// Aleatoriamente seleccionar cuartos oscuros (por ejemplo, 4 cuartos)
while (cuartosOscuros.size < 4) {
  const randomIndex = Math.floor(Math.random() * cuartosOrdenados.length);
  cuartosOscuros.add(cuartosOrdenados[randomIndex].idCuarto);
}

//-----------------------------------INSTANCIAS DE CLASES----------------------------

//let buttom = y-100;

const keys = {
  k: {
    pressed: false,
  },
  l: {
    pressed: false,
  },
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};

const caminarSound = new SoundController("walk", true, 0.02); // "walk" debe existir en tu soundMap
let caminando = false; // Bandera para saber si ya está sonando

const overlay = {
  opacity: 0,
};
let lastTime = 0; // Para almacenar el tiempo del último frame

function animate(timeStamp) {
  //Game Over Pantalla
  if (gameOver) {
    drawGameOverScreen(); //Todo lo relacionado a gameOver está en gameOver.js
    return;
  }

  //Pausar Juego
  if (paused) {
    drawPauseMenu(); //Todo lo relacionado a pausa y ajustes está en pause.js
    return;
  }

  requestAnimationFrame(animate);

  // Calcular delta time (tiempo transcurrido en segundos)
  const deltaTime = (timeStamp - lastTime) / 1000;
  lastTime = timeStamp;

  // Limpiar el canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Dibujar el fondo
  fondoCuarto.draw();

  // Dibujar colisiones
  bloquesColisiones.forEach((bloqueColisiones) => {
    bloqueColisiones.draw();
  });

  // Dibujar puertas
  puertas.forEach((puerta) => {


    puerta.draw();
  });
  context.shadowBlur = 0;
  context.shadowColor = "transparent"; //Resetear Neon effect para no afectar lo demás

  // Movimiento del jugador con deltaTime
  player.velocity.x = 0;
  const speed = 200; // Velocidad en píxeles por segundo

  if (cuartos[currentLevel].id == 8) {
    armaslista.forEach((arma) => {
      arma.update();
    });
  }

  itemsEnJuego.forEach((i) => {
    if (i.visible !== false) {
      // Solo dibujar si es visible
      if (i.idItem == 2) {
        context.shadowColor = "blue";
        context.shadowBlur = this.shadowPulse;
        // Reset shadow
        context.shadowColor = "transparent";
        context.shadowBlur = 5;
      }
      i.draw();
      i.update();
    }
  });



  if (keys.d.pressed) {
    player.switchSprite("runRight");
    player.velocity.x = speed * deltaTime;
    player.lastDirection = "right";

    if (!caminando) {
      caminarSound.fadeIn(0.5, 500); // Fade in suave
      caminando = true;
    }
  } else if (keys.a.pressed) {
    player.switchSprite("runLeft");
    player.velocity.x = -speed * deltaTime;
    player.lastDirection = "left";

    if (!caminando) {
      caminarSound.fadeIn(0.5, 500);
      caminando = true;
    }
  } else {
    player.switchSprite(
      player.lastDirection === "left" ? "idleLeft" : "idleRight"
    );

    if (caminando) {
      caminarSound.fadeOut(500); // Fade out suave
      caminando = false;
    }
  }

  let puertasCueart = cuartosOrdenados.filter(
    (c) => c.idCuarto == currentLevel
  );


  //Enemigos
  enemigos.forEach((enemigo, index) => {
    enemigo.index = index; // Asigna el índice del array al enemigo
    enemigo.velocity.x = 0;
    enemigo.update(player);
    context.shadowColor = "cyan"; // Neon effect
    context.shadowBlur = 40;
    enemigo.draw();
    context.shadowBlur = 0;
    context.shadowColor = "transparent"; //Resetear Neon effect para no afectar lo demás
  });

  // Actualizar y dibujar el jugador
  player.update();
  context.shadowColor = "white"; // Neon effect
  context.shadowBlur = 10;
  player.draw();

  if(idArmaActual == '1'){
    context.shadowColor = "rgb(149, 0, 255)"; // Neon effect
    context.shadowBlur = 5;
    bulletController.draw(context);
  } else if (idArmaActual == '2'){
    context.shadowColor = "blue"; // Neon effect
    context.shadowBlur = 5;
    bulletController.draw(context);
  } else if (idArmaActual == '3'){
    context.shadowColor = "red"; // Neon effect
    context.shadowBlur = 40;
    bulletController.draw(context);
  }
  
  
  context.shadowColor = "blue"; // Neon effect
  context.shadowBlur = 40;
  enemyBulletController.draw(context);
  context.shadowBlur = 0;
  context.shadowColor = "transparent"; //Resetear Neon effect para no afectar lo demás

  
dibujarOscuridadSiNecesaria(cuartos[currentLevel].id, cuartosOscuros);

context.save();
context.fillStyle = 'rgba(0, 0, 0, 0.9)';
context.strokeStyle = "white";
context.lineWidth = 3;
context.lineJoin = "round";

let width = 340;
let height = 90;

if (player.extralives > 0) {
  height = 130;
}
if (idArmaActual != '0') {
  width = 410;
}

context.fillRect(0, 0, width, height);
context.strokeRect(0, 0, width, height);
context.restore();   
  
  

  // Dibujar pantalla de cambio de nivel
  context.save();
  context.globalAlpha = overlay.opacity;
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.restore();

  

  player.drawLives();
  player.drawKeys();

  if (showMap) {
    drawMap(listaCuartosAleatorios);
  }

  dibujarArmaActual();
  
}

cuartos[currentLevel].init();
//console.log(listaCuartosAleatorios)
requestAnimationFrame(animate);

//CONTROLADORES DE MÚSICA
const sonidoMusica = new SoundController("regularLevelsMusic", true, 0.2);
let musicaIniciada = false;

window.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();

  if (["a", "w", "s", "d", "k"].includes(key) && !musicaIniciada) {
    sonidoMusica.play();
    musicaIniciada = true;
    console.log("🎵 Música iniciada");
  }
});
