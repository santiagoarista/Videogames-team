
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
let itemsEnJuego = [];
let idArmaActual = '0';

//-----------------------------------INSTANCIAS DE CLASES----------------------------

const asistente = new Asistente({ x: 600, y: 500,
    frameRate: 6,
    imgResource: "../assets/characters/Slime2_Idle.png",
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

const linterna = new Linterna({x: 500, y: 500});
const botas = new Botas({x: 100, y:500});
itemsEnJuego.push(linterna);
itemsEnJuego.push(asistente);
itemsEnJuego.push(botas);

let armaGrisImage = new Image();
armaGrisImage.src = "../assets/sprites/escenario_spawm_dario/8_1.png";
let armaAzulImage = new Image();
armaAzulImage.src = "../assets/sprites/escenario_spawm_dario/7_1.png";
let armaRojaImage = new Image();
armaRojaImage.src = "../assets/sprites/escenario_spawm_dario/9_1.png";

const armaGris = new Arma({x: 525, y: 640, idArma: '1', armaImage: armaGrisImage});
const armaAzul = new Arma({x: 940, y: 640, idArma: '2', armaImage: armaAzulImage});
const armaRoja = new Arma({x: 1005, y: 195, idArma: '3', armaImage: armaRojaImage});
let armaslista = [];
armaslista.push(armaGris);
armaslista.push(armaAzul);
armaslista.push(armaRoja);




//Esta clase esta en la carpeta de clases>player_class
const player = new Player({
    //Pasamos los bloques que harán las colisiones con este objeto
    armas: armaslista,
    items: itemsEnJuego,
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


const overlay = {
    opacity: 0,
}

//LOOP DE ANIMACIÓN
function animate(){

    //Pausar Juego
    if (paused){
        drawPauseMenu(); //Todo lo relacionado a pausa está en pause.js
        return 
    }

//BPORRA EL FRAME ANTERIOR PARA DIBUJAR UNO NUEVO
    window.requestAnimationFrame(animate);
    //Se dibuja el canvas básico
    fondoCuarto.draw();
    bloquesColisiones.forEach((bloqueColisiones)=>{
        bloqueColisiones.draw();
    })

    //DIBUJAR LAS SALIDAS DEL MAPA
    puertas.forEach((puerta)=>{
        puerta.draw();
    })



    //Movimiento a alderecha o izquierda, y velocidad que toma
    //Poner animaciones dependiendo de la dirección y movimineto
    player.velocity.x=0;

    if (keys.d.pressed) {
        //Hacer cambiar de animacón
        player.switchSprite("runRight")
        //Hacer movimiento
        player.velocity.x =3;
        player.lastDirection = "right"
    }else if(keys.a.pressed)
        {
            player.switchSprite("runLeft")
            player.velocity.x = -3
            player.lastDirection = "left"
        }
    else if (keys.w.pressed) {
            //Hacer cambiar de animacón
            player.switchSprite("jumpRight")
        
        }
    else{
        if(player.lastDirection ==="left"){
            player.switchSprite("idleLeft")
        }else{
            player.switchSprite("idleRight")
        }
    }
    //Movimiento a alderecha o izquierda
    

    if(cuartos[currentLevel].id == 8){
        armaslista.forEach((arma) => {
            if (arma.idArma !== idArmaActual) {
                arma.drawArma();
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
    

    player.draw()
    player.drawLives() //Dibujar vidas del jugador
    player.drawKeys() //Dibujar llaves
    player.update()
    

    //Pantalla negra de cambio de nivel
    context.save();
    context.globalAlpha =overlay.opacity;
    context.fillStyle = "black";
    context.fillRect(0,0,canvas.width,canvas.height);
    context.restore();

    if (showMap) {
        drawMap(listaCuartosAleatorios);
    }
}
cuartos[currentLevel].init();
//console.log(cuartos[currentLevel].id)
animate();


