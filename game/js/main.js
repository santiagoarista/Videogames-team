
//sólo se ejecuta una ve<z
const canvas = document.querySelector("canvas");
context = canvas.getContext('2d');

// Tamaño de renderizado 16:9 NO MODIFICAR
canvas.width = 1024;
canvas.height = 576;

//sólo se ejecuta una ve<z


const fondoCuarto4 = new Sprite({
    position: {
        x:0,
        y:0,      
    },
    imgResource :"../cuarto4_sketch.png"
})

//Esta clase esta en la carpeta de clases>player_class
const player = new Player()

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
    //Movimiento a alderecha o izquierda
    player.velocity.x=0;
    if (keys.d.pressed) {
        player.velocity.x =5;
    }else if(keys.a.pressed){
        player.velocity.x = -5;
    }
    //Movimiento a alderecha o izquierda



    player.draw()
    player.update()

}

animate();
