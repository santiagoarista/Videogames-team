//Lista de enemigos que aparecen por cada novel
function obtenerListaItems() {
    let itemscreados=[
        new Linterna({x: 500, y: 500}),

        new Asistente({ x: 600, y: 500,
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
        
        }),

        new Botas({x: 100, y:500})

    ]

return itemscreados;
    
}
