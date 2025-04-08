//instancia del jugador en el juego

function jugador1(bulletController, itemsEnJuego) {
   return new Player({
        //Pasamos los bloques que harán las colisiones con este objeto
        items: itemsEnJuego,
        bulletController: bulletController,
        frameRate: 6,
        imgResource: "../assets/characters/main_character/IdleRight.png",
        animations:{
            idleRight:{
                frameRate:6,
                frameBuffer:4,
                loop :true,
                imgResource: "../assets/characters/main_character/IdleRight.png",
                
            },
            idleLeft:{
                frameRate:6,
                frameBuffer:4,
                loop :true,
                imgResource: "../assets/characters/main_character/IdleLeft.png",
            },
            runRight:{
                frameRate:8,
                frameBuffer:4,
                loop :true,
                imgResource: "../assets/characters/main_character/Run.png",
            },
            runLeft:{
                frameRate:8,
                frameBuffer:4,
                loop :true,
                imgResource: "../assets/characters/main_character/RunLeft.png",
            },
            jumpRight:{
                frameRate:9,
                frameBuffer:4,
                loop :true,
                imgResource: "../assets/characters/main_character/Jump.png",
                
            },
            jumpLeft:{
                frameRate:9,
                frameBuffer:4,
                loop :true,
                imgResource: "../assets/characters/main_character/JumpLeft.png",
                
            },
    
        },
    })
}