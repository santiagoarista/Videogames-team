
//Lista de enemigos que aparecen por cada novel
function obtenerListaEnemigos(bulletController, enemyBulletController) {
    const enemigosSpawn=[
        
        new  FinalBoss({
            //Pasamos los bloques que harán las colisiones con este objeto
            delayBala: 20,
            velocidadEnemigo: 10,
            velocidadBala:50,
          
            estatico: true,
            movimiento: "y",
            umbralDisparo : 40,
            direccionDisparo: "izquierda",
            umbralesMovimiento:[0,700],
            health:5,
            position: {x:600, y:343},
            enemyBulletController: enemyBulletController,
            frameBuffer: 16,
            frameRate: 4,
     
            imgResource: "../../assets/characters/enemies/final_boss/pumpkin.png",
            animations:{
                idleRight:{
                    frameRate:6,
                    frameBuffer:4,
                    loop :true,
                    imgResource: "../../assets/characters/enemies/IdleRight.png",
                    
                },
                izquierda:{
                    frameRate:4,
                    frameBuffer:16,
                    loop :true,
                    imgResource: "../../assets/characters/enemies/final_boss/pumpkin.png",
                },
                derecha:{
                    frameRate:4,
                    frameBuffer:16,
                    loop :true,
                    imgResource: "../../assets/characters/enemies/final_boss/pumpkind.png",
                },
                runLeft:{
                    frameRate:8,
                    frameBuffer:4,
                    loop :true,
                    imgResource: "../../assets/characters/main_character/RunLeft.png",
                },
                jumpRight:{
                    frameRate:9,
                    frameBuffer:4,
                    loop :true,
                    imgResource: "../../assets/characters/main_character/Jump.png",
                    
                },
                jumpLeft:{
                    frameRate:9,
                    frameBuffer:4,
                    loop :true,
                    imgResource: "../../assets/characters/main_character/JumpLeft.png",
                    
                },
        
            },
        }),

        
    ]
    const enemigosNivel3=[

        new  Fantasma({
            //Pasamos los bloques que harán las colisiones con este objeto
            health:1,
            position: {x:100, y:300},
            bulletController: bulletController,
            frameRate: 4,
            imgResource: "../../assets/characters/enemies/ghost/Ghost_Walk_left.png",
            animations:{
                idleRight:{
                    frameRate:6,
                    frameBuffer:4,
                    loop :true,
                    imgResource: "../../assets/characters/main_character/IdleRight.png",
                    
                },
                idleLeft:{
                    frameRate:6,
                    frameBuffer:4,
                    loop :true,
                    imgResource: "../../assets/characters/main_character/IdleLeft.png",
                },
                runRight:{
                    frameRate:8,
                    frameBuffer:4,
                    loop :true,
                    imgResource: "../../assets/characters/main_character/Run.png",
                },
                runLeft:{
                    frameRate:8,
                    frameBuffer:4,
                    loop :true,
                    imgResource: "../../assets/characters/main_character/RunLeft.png",
                },
                jumpRight:{
                    frameRate:9,
                    frameBuffer:4,
                    loop :true,
                    imgResource: "../../assets/characters/main_character/Jump.png",
                    
                },
                jumpLeft:{
                    frameRate:9,
                    frameBuffer:4,
                    loop :true,
                    imgResource: "../../assets/characters/main_character/JumpLeft.png",
                    
                },
        
            },
        }),
        new  Fantasma({
            //Pasamos los bloques que harán las colisiones con este objeto
            health:1,
            position: {x:600, y:500},
            bulletController: bulletController,
            frameRate: 4,
            imgResource: "../../assets/characters/enemies/ghost/Ghost_Walk_left.png",
            animations:{
                idleRight:{
                    frameRate:6,
                    frameBuffer:4,
                    loop :true,
                    imgResource: "../../assets/characters/main_character/IdleRight.png",
                    
                },
                idleLeft:{
                    frameRate:6,
                    frameBuffer:4,
                    loop :true,
                    imgResource: "../../assets/characters/main_character/IdleLeft.png",
                },
                runRight:{
                    frameRate:8,
                    frameBuffer:4,
                    loop :true,
                    imgResource: "../../assets/characters/main_character/Run.png",
                },
                runLeft:{
                    frameRate:8,
                    frameBuffer:4,
                    loop :true,
                    imgResource: "../../assets/characters/main_character/RunLeft.png",
                },
                jumpRight:{
                    frameRate:9,
                    frameBuffer:4,
                    loop :true,
                    imgResource: "../../assets/characters/main_character/Jump.png",
                    
                },
                jumpLeft:{
                    frameRate:9,
                    frameBuffer:4,
                    loop :true,
                    imgResource: "../../assets/characters/main_character/JumpLeft.png",
                    
                },
        
            },
        }),
        new  Fantasma({
            //Pasamos los bloques que harán las colisiones con este objeto
    
            health:1,
            position: {x:600, y:100},
            bulletController: bulletController,
            frameRate: 4,
            imgResource: "../../assets/characters/enemies/ghost/Ghost_Walk_left.png",
            animations:{
                idleRight:{
                    frameRate:6,
                    frameBuffer:4,
                    loop :true,
                    imgResource: "../../assets/characters/main_character/IdleRight.png",
                    
                },
                idleLeft:{
                    frameRate:6,
                    frameBuffer:4,
                    loop :true,
                    imgResource: "../../assets/characters/main_character/IdleLeft.png",
                },
                runRight:{
                    frameRate:8,
                    frameBuffer:4,
                    loop :true,
                    imgResource: "../../assets/characters/main_character/Run.png",
                },
                runLeft:{
                    frameRate:8,
                    frameBuffer:4,
                    loop :true,
                    imgResource: "../../assets/characters/main_character/RunLeft.png",
                },
                jumpRight:{
                    frameRate:9,
                    frameBuffer:4,
                    loop :true,
                    imgResource: "../../assets/characters/main_character/Jump.png",
                    
                },
                jumpLeft:{
                    frameRate:9,
                    frameBuffer:4,
                    loop :true,
                    imgResource: "../../assets/characters/main_character/JumpLeft.png",
                    
                },
        
            },
        }),
        new  Ojo({
            //Pasamos los bloques que harán las colisiones con este objeto
            delayBala: 0.0001,
            velocidadEnemigo: 10,
            velocidadBala:20,
          
            estatico: false,
            movimiento: "y",
            umbralDisparo : 40,
            direccionDisparo: "izquierda",
            umbralesMovimiento:[0,700],
            health:5,
            position: {x:600, y:576.48},
            enemyBulletController: enemyBulletController,
            frameBuffer: 16,
            frameRate: 4,
            imgResource: "../../assets/characters/enemies/jack/jack.png",
    
        })

    ]
    const enemigosNivel1=[
        new  Reaper({
            //Pasamos los bloques que harán las colisiones con este objeto
    
            health: 8,
            position: {x:500, y:100},
            bulletController: bulletController,
            frameRate: 6,
            imgResource: "../../assets/characters/enemies/ghost/anim-nme-ghost.png",
            animations:{
                idleRight:{
                    frameRate:6,
                    frameBuffer:4,
                    loop :true,
                    imgResource: "../../assets/characters/main_character/IdleRight.png",
                    
                },
                idleLeft:{
                    frameRate:6,
                    frameBuffer:4,
                    loop :true,
                    imgResource: "../../assets/characters/main_character/IdleLeft.png",
                },
                runRight:{
                    frameRate:8,
                    frameBuffer:4,
                    loop :true,
                    imgResource: "../../assets/characters/main_character/Run.png",
                },
                runLeft:{
                    frameRate:8,
                    frameBuffer:4,
                    loop :true,
                    imgResource: "../../assets/characters/main_character/RunLeft.png",
                },
                jumpRight:{
                    frameRate:9,
                    frameBuffer:4,
                    loop :true,
                    imgResource: "../../assets/characters/main_character/Jump.png",
                    
                },
                jumpLeft:{
                    frameRate:9,
                    frameBuffer:4,
                    loop :true,
                    imgResource: "../../assets/characters/main_character/JumpLeft.png",
                    
                },
        
            },
            scale: 2
        })
    ]

    ene = [
        [],
        [],
        [],//enemigosNivel3,
        [],
        [],
        [],
        [],
        [],//enemigosNivel1, //[],
        enemigosSpawn,
    ]
    

return ene;
    
}