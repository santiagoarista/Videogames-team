
//sólo se ejecuta una ve<z
const canvas = document.querySelector("canvas");
context = canvas.getContext('2d');

// Tamaño de renderizado 16:9 NO MODIFICAR
canvas.width = 1344;
canvas.height = 768;

//convertimos mapoa de caracteres a una amtriz de listas
const colisionesConvertidas = colisionesNivel4.parse2D();

//Convertimos la matriz de listas a una lista de clases de BloqueColision
const bloquesColisiones =colisionesConvertidas.creatObjectsFrom2d();




//sólo se ejecuta una ve<z

//-----------------------------------INSTANCIAS DE CLASES----------------------------
const fondoCuarto4 = new Sprite({
    position: {
        x:0,
        y:0,      
    },
    imgResource :"../cuarto_giff.gif"
})

//Esta clase esta en la carpeta de clases>player_class
const player = new Player({
    //Pasamos los bloques que harán las colisiones con este objeto
    bloquesDeColision:bloquesColisiones,
    imgResource: "../../game/assets/characters/main_character/Idle.png",
    frameRate: 6,
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
    player.velocity.x=0;
    if (keys.d.pressed) {
        player.velocity.x =3;
    }else if(keys.a.pressed){
        player.velocity.x = -3;
    }
    //Movimiento a alderecha o izquierda



    player.draw()
    player.update()
//
}

animate();
