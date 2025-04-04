
//sólo se ejecuta una ve<z
const canvas = document.querySelector("canvas");
const context = canvas.getContext('2d');
//convertimos mapoa de caracteres a una amtriz de listas
let colisionesConvertidas =level_cuarto_final_boss.parse2D();
//Convertimos la matriz de listas a una lista de clases de BloqueColision
let bloquesColisiones =colisionesConvertidas.creatObjectsFrom2d();
let puertas =[]
let currentLevel =8;
let listaCuartosAleatorios=[];
let showMap = false;
let llaves =[false,false,true,false,false,false,false,false,false,]
let paused = false;
let disparosJugador=[]
let disparosEnemigos=[]
let gameOver = false;
// Tamaño de renderizado 16:9 NO MODIFICAR
canvas.width = 1344;
canvas.height = 768;
//-----------------------------------INSTANCIAS DE CLASES----------------------------


//Controladores de disparos
const bulletController = new Bulletcontroller(canvas)
//Esta clase esta en la carpeta de clases>player_class
const enemyBulletController = new EnemyBulletcontroller(canvas)
//Esta clase esta en la carpeta de clases>player_class


//instancias de objetos en cuartos
let enemigos =[
]
let enemigosPorNivel =obtenerListaEnemigos(bulletController, enemyBulletController);
const player = jugador1(bulletController);





//cuartos aleatorios
let cuartos= generarLevels(crear_disposicion_cuartos(),enemigosPorNivel)


//-----------------------------------INSTANCIAS DE CLASES----------------------------

//let buttom = y-100;

const keys = {
    k:{
        pressed: false
    },
    w:{
        pressed: false
    },
    a:{
        pressed: false
    },
    d:{
        pressed: false
    },
}

const caminarSound = new SoundController("walk", true, 0.1); // "walk" debe existir en tu soundMap
let caminando = false; // Bandera para saber si ya está sonando



const overlay = {
    opacity: 0,
}
let lastTime = 0; // Para almacenar el tiempo del último frame
function animate(timeStamp) {
 //Game Over Pantalla
    if (gameOver) {
            drawGameOverScreen(); //Todo lo relacionado a gameOver está en gameOver.js
            return;
        }
    
    //Pausar Juego
    if (paused){
        drawPauseMenu(); //Todo lo relacionado a pausa y ajustes está en pause.js
        return 
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

    // Movimiento del jugador con deltaTime
    player.velocity.x = 0;
    const speed = 200; // Velocidad en píxeles por segundo
    
    if (keys.d.pressed) {
        player.switchSprite("runRight");
        player.velocity.x = speed * deltaTime;
        player.lastDirection = "right";
    
        if (!caminando) {
            caminarSound.fadeIn(1.0, 500); // Fade in suave
            caminando = true;
        }
    } else if (keys.a.pressed) {
        player.switchSprite("runLeft");
        player.velocity.x = -speed * deltaTime;
        player.lastDirection = "left";
    
        if (!caminando) {
            caminarSound.fadeIn(1.0, 500);
            caminando = true;
        }
    } else {
        player.switchSprite(player.lastDirection === "left" ? "idleLeft" : "idleRight");
    
        if (caminando) {
            caminarSound.fadeOut(500); // Fade out suave
            caminando = false;
        }
    }




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
    player.drawLives();
    player.drawKeys();
    context.shadowColor = "red"; // Neon effect
    context.shadowBlur = 40;
    bulletController.draw(context);
    context.shadowColor = "blue"; // Neon effect
    context.shadowBlur = 40;
    enemyBulletController.draw(context);
    context.shadowBlur = 0;
    context.shadowColor = "transparent"; //Resetear Neon effect para no afectar lo demás




    // Dibujar pantalla de cambio de nivel
    context.save();
    context.globalAlpha = overlay.opacity;
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.restore();

    if (showMap) {
        drawMap(listaCuartosAleatorios);
    }
}


cuartos[currentLevel].init();
//console.log(listaCuartosAleatorios)
requestAnimationFrame(animate);

const sonidoMusica = new SoundController("regularLevelsMusic", true, 0.3);
let musicaIniciada = false;

window.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();

    if (["a", "w", "s", "d", "k"].includes(key) && !musicaIniciada) {
        sonidoMusica.play();
        musicaIniciada = true;
        console.log("🎵 Música iniciada");
    }
});