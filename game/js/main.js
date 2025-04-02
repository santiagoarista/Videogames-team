
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
let llaves =[false,false,true,true,false,true,false,true,false,]
let paused = false;
let disparosJugador=[]


//-----------------------------------INSTANCIAS DE CLASES----------------------------


const bulletController = new Bulletcontroller(canvas)
//Esta clase esta en la carpeta de clases>player_class


let enemigos =[
    new  Fantasma({
        //Pasamos los bloques que harán las colisiones con este objeto
        health:3,
        position: {x:100, y:300},
        bulletController: bulletController,
        frameRate: 4,
        imgResource: "../../game/assets/characters/enemies/ghost/Ghost_Walk_left.png",
        animations:{
            idleRight:{
                frameRate:6,
                frameBuffer:4,
                loop :true,
                imgResource: "../../game/assets/characters/main_character/IdleRight.png",
                
            },
            idleLeft:{
                frameRate:6,
                frameBuffer:4,
                loop :true,
                imgResource: "../../game/assets/characters/main_character/IdleLeft.png",
            },
            runRight:{
                frameRate:8,
                frameBuffer:4,
                loop :true,
                imgResource: "../../game/assets/characters/main_character/Run.png",
            },
            runLeft:{
                frameRate:8,
                frameBuffer:4,
                loop :true,
                imgResource: "../../game/assets/characters/main_character/RunLeft.png",
            },
            jumpRight:{
                frameRate:9,
                frameBuffer:4,
                loop :true,
                imgResource: "../../game/assets/characters/main_character/Jump.png",
                
            },
            jumpLeft:{
                frameRate:9,
                frameBuffer:4,
                loop :true,
                imgResource: "../../game/assets/characters/main_character/JumpLeft.png",
                
            },
    
        },
    }),
    new  Fantasma({
        //Pasamos los bloques que harán las colisiones con este objeto
        health:3,
        position: {x:600, y:500},
        bulletController: bulletController,
        frameRate: 4,
        imgResource: "../../game/assets/characters/enemies/ghost/Ghost_Walk_left.png",
        animations:{
            idleRight:{
                frameRate:6,
                frameBuffer:4,
                loop :true,
                imgResource: "../../game/assets/characters/main_character/IdleRight.png",
                
            },
            idleLeft:{
                frameRate:6,
                frameBuffer:4,
                loop :true,
                imgResource: "../../game/assets/characters/main_character/IdleLeft.png",
            },
            runRight:{
                frameRate:8,
                frameBuffer:4,
                loop :true,
                imgResource: "../../game/assets/characters/main_character/Run.png",
            },
            runLeft:{
                frameRate:8,
                frameBuffer:4,
                loop :true,
                imgResource: "../../game/assets/characters/main_character/RunLeft.png",
            },
            jumpRight:{
                frameRate:9,
                frameBuffer:4,
                loop :true,
                imgResource: "../../game/assets/characters/main_character/Jump.png",
                
            },
            jumpLeft:{
                frameRate:9,
                frameBuffer:4,
                loop :true,
                imgResource: "../../game/assets/characters/main_character/JumpLeft.png",
                
            },
    
        },
    }),
    new  Fantasma({
        //Pasamos los bloques que harán las colisiones con este objeto
        health:3,
        position: {x:600, y:100},
        bulletController: bulletController,
        frameRate: 4,
        imgResource: "../../game/assets/characters/enemies/ghost/Ghost_Walk_left.png",
        animations:{
            idleRight:{
                frameRate:6,
                frameBuffer:4,
                loop :true,
                imgResource: "../../game/assets/characters/main_character/IdleRight.png",
                
            },
            idleLeft:{
                frameRate:6,
                frameBuffer:4,
                loop :true,
                imgResource: "../../game/assets/characters/main_character/IdleLeft.png",
            },
            runRight:{
                frameRate:8,
                frameBuffer:4,
                loop :true,
                imgResource: "../../game/assets/characters/main_character/Run.png",
            },
            runLeft:{
                frameRate:8,
                frameBuffer:4,
                loop :true,
                imgResource: "../../game/assets/characters/main_character/RunLeft.png",
            },
            jumpRight:{
                frameRate:9,
                frameBuffer:4,
                loop :true,
                imgResource: "../../game/assets/characters/main_character/Jump.png",
                
            },
            jumpLeft:{
                frameRate:9,
                frameBuffer:4,
                loop :true,
                imgResource: "../../game/assets/characters/main_character/JumpLeft.png",
                
            },
    
        },
    })
]


const player = new Player({
    //Pasamos los bloques que harán las colisiones con este objeto
    enemigos: enemigos,
    bulletController: bulletController,
    frameRate: 6,
    imgResource: "../../game/assets/characters/main_character/IdleRight.png",
    animations:{
        idleRight:{
            frameRate:6,
            frameBuffer:4,
            loop :true,
            imgResource: "../../game/assets/characters/main_character/IdleRight.png",
            
        },
        idleLeft:{
            frameRate:6,
            frameBuffer:4,
            loop :true,
            imgResource: "../../game/assets/characters/main_character/IdleLeft.png",
        },
        runRight:{
            frameRate:8,
            frameBuffer:4,
            loop :true,
            imgResource: "../../game/assets/characters/main_character/Run.png",
        },
        runLeft:{
            frameRate:8,
            frameBuffer:4,
            loop :true,
            imgResource: "../../game/assets/characters/main_character/RunLeft.png",
        },
        jumpRight:{
            frameRate:9,
            frameBuffer:4,
            loop :true,
            imgResource: "../../game/assets/characters/main_character/Jump.png",
            
        },
        jumpLeft:{
            frameRate:9,
            frameBuffer:4,
            loop :true,
            imgResource: "../../game/assets/characters/main_character/JumpLeft.png",
            
        },

    },
})




// Tamaño de renderizado 16:9 NO MODIFICAR
canvas.width = 1344;
canvas.height = 768;

//cuartos aleatorios
let cuartos= generarLevels(crear_disposicion_cuartos())
class Puerta extends Sprite{
    constructor({position, imgResource, posicionOrigen, posicionDestino, idOrigen, idDestino, puertaActiva=false}){
        super({position, imgResource})
    
 
        this.posicionOrigen = posicionOrigen;
        this.posicionDestino = posicionDestino;
        this.idOrigen = idOrigen;
        this.idDestino = idDestino;
        this.puertaActiva = puertaActiva;

        
    }
}

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
    if (paused) {
        drawPauseMenu();
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


    //Enemigos
    enemigos.forEach((enemigo, index) => {
        enemigo.index = index; // Asigna el índice del array al enemigo
        enemigo.velocity.x = 0;
        enemigo.update(player);
        enemigo.draw();
    });


    // Actualizar y dibujar el jugador
    player.update();
    player.draw();
    player.drawLives();
    bulletController.draw(context);




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


