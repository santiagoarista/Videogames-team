
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
    } else if (keys.a.pressed) {
        player.switchSprite("runLeft");
        player.velocity.x = -speed * deltaTime;
        player.lastDirection = "left";
    } else if (keys.w.pressed) {
        player.switchSprite("jumpRight");
    } else {
        player.switchSprite(player.lastDirection === "left" ? "idleLeft" : "idleRight");
    }
//

document.addEventListener('DOMContentLoaded', () => {
    const fullscreenBtn = document.getElementById('fullscreen-btn');

    fullscreenBtn.addEventListener('click', () => {
        if (canvas.requestFullscreen) {
            canvas.requestFullscreen();
        } else if (canvas.webkitRequestFullscreen) {
            canvas.webkitRequestFullscreen();
        } else if (canvas.msRequestFullscreen) {
            canvas.msRequestFullscreen();
        }
    });
});







      //Enemigos
    enemigos.forEach((enemigo, index) => {
        enemigo.index = index; // Asigna el índice del array al enemigo
        enemigo.velocity.x = 0;
        enemigo.update(player);
        context.shadowColor = "cyan"; // Neon effect
        context.shadowBlur = 10;
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
    context.shadowColor = "white"; // Neon effect
    context.shadowBlur = 10;
    bulletController.draw(context);
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


