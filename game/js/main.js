
//sólo se ejecuta una ve<z
const canvas = document.querySelector("canvas");
context = canvas.getContext('2d');

// Tamaño de renderizado 16:9 NO MODIFICAR
canvas.width = 1344;
canvas.height = 768;

//convertimos mapoa de caracteres a una amtriz de listas
const colisionesConvertidas =level_cuarto_final_boss.parse2D();

//Convertimos la matriz de listas a una lista de clases de BloqueColision
const bloquesColisiones =colisionesConvertidas.creatObjectsFrom2d();




//sólo se ejecuta una ve<zs

//-----------------------------------INSTANCIAS DE CLASES----------------------------
const fondoCuarto4 = new Sprite({
    position: {
        x:0,
        y:0,      
    },
    imgResource :"../../game/assets/niveles_fondo/mapa_jefe_final.png"
})

//Esta clase esta en la carpeta de clases>player_class
const player = new Player({
    //Pasamos los bloques que harán las colisiones con este objeto
    bloquesDeColision:bloquesColisiones,
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

    },
})




//-----------------------------------INSTANCIAS DE CLASES----------------------------

//let buttom = y-100;

const keys = {
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

//LOOP DE ANIMACIÓN
function animate(){
//BPORRA EL FRAME ANTERIOR PARA DIBUJAR UNO NUEVO
    window.requestAnimationFrame(animate);
    //Se dibuja el canvas básico

    fondoCuarto4.draw();
    bloquesColisiones.forEach((bloqueColisiones)=>{
        bloqueColisiones.draw();
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
    else{
        if(player.lastDirection ==="left"){
            player.switchSprite("idleLeft")
        }else{
            player.switchSprite("idleRight")
        }
    }
    //Movimiento a alderecha o izquierda



    player.draw()
    player.update()
//
}

animate();
