
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
let itemsEnJuego = obtenerListaItems();
let idArmaActual = '0';
let disparosJugador=[]
let disparosEnemigos=[]
let gameOver = false;
let armaAnterior = null;



// Tamaño de renderizado 16:9 NO MODIFICAR
canvas.width = 1344;
canvas.height = 768;
//-----------------------------------INSTANCIAS DE CLASES----------------------------

let armaslista = [
 new Arma({x: 525, y: 640, idArma: '1', armaImageSrc: "../assets/sprites/escenario_spawm_dario/8_1.png"}),
 new Arma({x: 940, y: 640, idArma: '2', armaImageSrc: "../assets/sprites/escenario_spawm_dario/7_1.png"}),
 new Arma({x: 1005, y: 195, idArma: '3', armaImageSrc: "../assets/sprites/escenario_spawm_dario/9_1.png"})
];

let armasEnEscenario = [...armaslista];

const armasOriginales = [
    new Arma({x: 525, y: 640, idArma: '1', armaImageSrc: "../assets/sprites/escenario_spawm_dario/8_1.png"}),
    new Arma({x: 940, y: 640, idArma: '2', armaImageSrc: "../assets/sprites/escenario_spawm_dario/7_1.png"}),
    new Arma({x: 1005, y: 195, idArma: '3', armaImageSrc: "../assets/sprites/escenario_spawm_dario/9_1.png"}),
];

function clonarArmaDesdeId(id, x, y) {
    const original = armasOriginales.find(a => a.idArma === id);
    if (!original) return null;

    return new Arma({ x, y, idArma: original.idArma, armaImageSrc: original.image.src});
}

//Controladores de disparos
const bulletController = new Bulletcontroller(canvas)
//Esta clase esta en la carpeta de clases>player_class
const enemyBulletController = new EnemyBulletcontroller(canvas)
//Esta clase esta en la carpeta de clases>player_class


//instancias de objetos en cuartos
let enemigos =[
]
let enemigosPorNivel =obtenerListaEnemigos(bulletController, enemyBulletController);
const player = jugador1(bulletController, itemsEnJuego);


//cuartos aleatorios
let cuartos= generarLevels(crear_disposicion_cuartos(),enemigosPorNivel)


//-----------------------------------INSTANCIAS DE CLASES----------------------------

//let buttom = y-100;

const keys = {
    k:{
        pressed: false
    },
    l:{
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

const caminarSound = new SoundController("walk", true, 0.02); // "walk" debe existir en tu soundMap
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

    if(cuartos[currentLevel].id == 8){
        armaslista.forEach((arma) => {
            if (arma.idArma !== idArmaActual) {
                arma.update();
            }
        });
    } else {
        armaslista = [];
    }

    itemsEnJuego.forEach((i) => {
        if (i.visible !== false) { // Solo dibujar si es visible
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
        player.switchSprite(player.lastDirection === "left" ? "idleLeft" : "idleRight");
    
        if (caminando) {
            caminarSound.fadeOut(500); // Fade out suave
            caminando = false;
        }
    }


let puertasCueart = cuartosOrdenados.filter(c => c.idCuarto == currentLevel)

context.fillStyle= "rgb(255, 0, 0)";
context.fillRect(puertasCueart[0].posicionJugadorSuperior.x, puertasCueart[0].posicionJugadorSuperior.y, 5, 5);

context.fillStyle= "rgb(255, 0, 0)";
context.fillRect(puertasCueart[0].posicionJugadorInferior.x, puertasCueart[0].posicionJugadorInferior.y, 5, 5);


context.fillStyle= "rgb(255, 0, 0)";
context.fillRect(puertasCueart[0].posicionJugadorDerecha.x, puertasCueart[0].posicionJugadorDerecha.y, 5, 5);



context.fillStyle= "rgb(255, 0, 0)";
context.fillRect(puertasCueart[0].posicionJugadorIzquierda.x, puertasCueart[0].posicionJugadorIzquierda.y, 5, 5);


context.fillStyle= "rgb(0, 8, 255)";
context.fillRect(1220,674, 5, 5);







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

