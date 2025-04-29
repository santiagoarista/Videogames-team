

class FinalBoss extends Sprite{
    constructor({
        velocidadBala =7,
        delayBala =10,
        velocidadEnemigo=1,
        estatico,
        umbralDisparo,
        umbralesMovimiento,
        movimiento,
        direccionDisparo,
        index =100,
        health,
        position,
        enemyBulletController,
        bloquesDeColision=[], 
        frameBuffer,
        invencivilidad = false,
        imgResource, frameRate, animations}) 
        {
            
        super({imgResource, frameRate, animations, frameBuffer: frameBuffer, scale:2, blinkRate:100})
        //propiedades de la clase
        this.index = index;
        this.health =200;
        this.mxhealth =200;
        this.invencivilidad = invencivilidad;
    
        this.enemyBulletController = enemyBulletController;
        //Posición en pantallaad
        this.position =position
        this.delayBala = delayBala,
        this.velocidadBala = velocidadBala
        this.velocidadEnemigo= velocidadBala
        this.direccion = 1
        this.velocity = {
            x:0,
            y:0
        }
        //Altura y ancho del objeto
     
        //creación de hitbox, lo que va a medir los lados de la hitBox
        this.sides = {
            bottom : this.position.y + this.height
        }
        this.velocidadBala=velocidadBala,
        this.delayBala=delayBala,
        this.velocidadEnemigo=velocidadEnemigo,

        this.umbralDisparo = 100
        this.direccionDisparo = direccionDisparo
        this.movimiento = movimiento
        this.umbralesMovimiento = umbralesMovimiento
        this.bloquesDeColision = bloquesDeColision;
        this.puertas = puertas;
        this.estatico = estatico
        this.disparosJugador = disparosJugador
        this.lifeImage = new Image();
        this.lifeImage.src = '../assets/PNG/Transperent/Icon12.png'; //Imagen de vidas
        this.isOjo = true;
        this.fase =1
        this.movimiento = TextTrackCueList
        this.invocaion = false
        this.invocaionFantasmas = false
        this.direccion = -1
       
    
    }

    takeDamage (damage){
        if ( !this.invencivilidad) {
        
            this.health -=damage
        }
       
    }
    
    update(player, deltaTime) {
        //FASES DE COMPORTAMIENTO
        if (this.fase==1) {
            this.fase1(deltaTime)
            this.generarFantasmas(1, deltaTime)
        }else if (this.fase==2) {
            this.fase2(deltaTime)
            this.generarCalabazas(1, deltaTime)
        }else if (this.fase==3) {
            this.fase3(deltaTime)
        }
        this.dibujarVida();
        this.updateHitbox();
        this.checkHorizontalCollisions();
        this.updateHitbox();
        this.checkVerticalCollisions();
      
  
    }
    //Método para cambiar de animación
    switchSprite(name) {
        // Verificar si la animación existe en el mapa
        if (!this.animations[name]) {
            console.warn(`La animación "${name}" no existe.`);
            return;
        }
    
        // Evitar reiniciar la misma animación
        if (this.image === this.animations[name].image) return;
    
        // Cambiar a la nueva animación
        this.currentFrame = 0;
        this.image = this.animations[name].image;
        this.frameRate = this.animations[name].frameRate;
        this.frameBuffer = this.animations[name].frameBuffer;
    }
    //Creación de hitbox y actualiazción
    updateHitbox() {
     
        this.hitbox ={
           position:{
               x: this.position.x +55,
               y: this.position.y +35
               
           },
           width: 180,
           height: 170,
       }
       }
    checkHorizontalCollisions(){
       
        //Agregar colisiones de disparos
        for (let index = 0; index < this.disparosJugador.length; index++) {
           
            const disparo = this.disparosJugador[index] ;

            //Comprobar si hay colisiones 
            if (this.hitbox.position.x <= disparo.x +disparo.width &&
                this.hitbox.position.x + this.hitbox.width>= disparo.x &&
                this.hitbox.position.y + this.hitbox.height>= disparo.y &&
                this.hitbox.position.y <= disparo.y + disparo.height) {
                    
                    //Si recibe un disparo se ejecuta el método 
                    this.recibirGolpe(disparo,index);
            }
            


        }

    }
    checkVerticalCollisions(){
  
 //Agregar colisiones de las disparos

for (let index = 0; index < this.disparosJugador.length; index++) {
    const disparo = this.disparosJugador[index] ;

    //Comprobar si hay colisiones
    if (this.hitbox.position.x <= disparo.x +disparo.width &&
        this.hitbox.position.x + this.hitbox.width>= disparo.x &&
        this.hitbox.position.y + this.hitbox.height>= disparo.y &&
        this.hitbox.position.y <= disparo.y + disparo.height) {
            
             //Si recibe un disparo se ejecuta el método 
             this.recibirGolpe(index);

    }
    


}
  }
 
  //ACCÍON cuando el enemigo recibe un golpe
  recibirGolpe(disparo,index){
 //   this.apagarPrenderOscuro()
    playSound("hurt3");
    if (enemigos.length==1) {
        if (this.health==1) {
            console.log("ultimo enemigo")
            itemsEnJuego.push(new Llave({x:this.position.x,y:this.position.y, bloquesDeColision: bloquesColisiones}))
            console.log("player", player.monstruos_eliminados);
        }
 
   
  }
    console.log("golpe recibido por ojo")
    if ( !this.invencivilidad) {
    this.health-= disparo.damage;
}
    this.disparosJugador.splice(index, 1);
    if (this.health<=0) {
        enemigos.splice(this.index, 1);
        player.monstruos_eliminados += 1;
        player.experiencia += 20;
        console.log("player", player.experiencia);
    }
  }
  fase1(deltaTime) {
    let velocidad = 1;

    // Movimiento del jefe si no es invencible
    if (!this.invencivilidad) {
        if (this.position.x <= 350) {
            this.direccion = 1; // Mover a la derecha
      
            this.switchSprite("derecha")
        } else if (this.position.x >= 800) {
            this.direccion = -1; // Mover a la izquierda
            this.switchSprite("izquierda")
        }
        // Aplicar movimiento en la dirección actual
        this.position.x += velocidad * this.direccion * deltaTime * 100;
    }else{
        
    }

    // Control de invencibilidad
    if (!this.invencibilidadTimer) {
        this.invencibilidadTimer = 0; // Inicializar el temporizador
    }

    if (this.invencivilidad) {
       
        // Si está en modo invencible, acumular tiempo
        this.invencibilidadTimer += deltaTime * 1000; // Convertir deltaTime a milisegundos

        // Duración de la invencibilidad (en milisegundos)
        const duracionInvencibilidad = 6000; // 3 segundos

        if (this.invencibilidadTimer >= duracionInvencibilidad) {
            this.invencivilidad = false; // Desactivar invencibilidad
            this.visible = true; 
            this.invencibilidadTimer = 0; // Reiniciar el temporizador
            this.invocaion = false
            this.invocaionFantasmas = false
           
        }
    } else {
        // Si no está en modo invencible, acumular tiempo para activarlo
        this.invencibilidadTimer += deltaTime * 1000;

        // Tiempo entre activaciones de invencibilidad (en milisegundos)
        const intervaloInvencibilidad = 10000; // 5 segundos

        if (this.invencibilidadTimer >= intervaloInvencibilidad) {
            
            if (!this.invocaion) {
            
                playSound("roar2enemy")
                this.apagarPrenderOscuro()
            }
          
          
            this.invocaion = true
            this.invocaionFantasmas = true
            this.invencivilidad = true; // Activar invencibilidad
            this.invencibilidadTimer = 0; // Reiniciar el temporizador
        }
    }

    // Disparar en espiral
    this.dispararEspiral(deltaTime);
    if (this.health<100) {
        this.cambiarFase(2)
        this.fantasmaTimer=400
        this.position.x = 200
        this.position.y = 50
        
    }
}
  fase2(deltaTime){
    this.invocaionFantasmas = true
    this.invencivilidad =false
    let bulletSpeed = 150;
    let bulletDelay = 10;
    let damage =1;
    let bulletX = this.position.x + 50;
    let bulletY = this.position.y+100
    if (this.position.x > player.position.x - 100 && this.position.x < player.position.x ) {
        this.enemyBulletController.shoot({
            direccionDisparo: "abajo",
            bulletSpeed: bulletSpeed,
            bulletDelay: bulletDelay,
            damage: damage,
            bulletX: bulletX,
            bulletY: bulletY,
        }, deltaTime);
    }
    let velocidad = 2.5;



    // Movimiento del jefe si no es invencible
 
        if (this.position.x <= 150) {
            this.direccion = 1; // Mover a la derecha
      
            this.switchSprite("derecha")
        } else if (this.position.x >= 1000) {
            this.direccion = -1; // Mover a la izquierda
            this.switchSprite("izquierda")
        }
        // Aplicar movimiento en la dirección actual
        this.position.x += velocidad * this.direccion * deltaTime * 100;
    
        
    


 
        // Si no está en modo invencible, acumular tiempo para activarlo
        this.invencibilidadTimer += deltaTime * 1000;

        // Tiempo entre activaciones de invencibilidad (en milisegundos)
        const intervaloInvencibilidad = 0; // 5 segundos

    

    
  }
  fase3(){
    
  }
  dibujarVida() {
    if (this.invencivilidad) {
        this.countdown = true; 
        
    }else{
        this.countdown = false; 
    }
    const vidaMaxima = this.mxhealth; 
    const anchoBarraMaximo = 500 ;
    const altoBarra = 20; 
    const anchoActual = (this.health / vidaMaxima) * anchoBarraMaximo;

   
    const barraX = this.position.x + this.width / 2 - anchoBarraMaximo / 2;
    const barraY = this.position.y - 30;
    context.shadowBlur =10;
    context.shadowColor = "red"; 
    context.fillStyle = "white";
    context.font = "25px Arcade Gamer";
    context.fillText("Calabaza Jack", 550, 70);

    context.shadowBlur =10;
    context.shadowColor = "red"; 
    context.fillStyle = "gray";
    context.fillRect(450, 80, anchoBarraMaximo, altoBarra);

 
    context.fillStyle = "red";
    context.fillRect(450, 80, anchoActual, altoBarra);

  
    context.shadowBlur =10;
    context.shadowColor = "transparent"; //Resetear Neon effect para no afectar lo demás
}

dispararEspiral(deltaTime){
    this.enemyBulletController.shootEspiral({
        bulletSpeed:600 ,
        bulletDelay:50,
        damage:1,
         bulletX: this.position.x+100,
          bulletY: this.position.y+80,
          direccionDisparo: "izquierda",
          deltaTime: deltaTime,
     
     
    })

    
 
}
apagarPrenderOscuro(){
    playSound("laughenemy");
    if (cuartosOscuros.has(9)) {
        cuartosOscuros.delete(9);
        
    }else{
        cuartosOscuros.add(9);
    }
    

}

cambiarFase(
    nuevaFase
){
    playSound("roarenemy")
    this.fase = nuevaFase;
}

generarFantasmas(numero, deltaTime) {
    if (this.invocaionFantasmas) {

        
    
    if (!this.fantasmaTimer) {
        this.fantasmaTimer = 0; // Inicializar el temporizador
    }
    if (!this.fantasmasGenerados) {
        this.fantasmasGenerados = 0; // Contador de fantasmas generados
    }

    // Intervalo entre la generación de cada fantasma (en milisegundos)
    const intervaloGeneracion = 2000; // 1 segundo

    // Acumular tiempo transcurrido
    this.fantasmaTimer += deltaTime * 1000;

    // Verificar si es momento de generar un nuevo fantasma
    if (this.fantasmaTimer >= intervaloGeneracion && this.fantasmasGenerados < numero) {
        // Generar un nuevo fantasma
     
        enemigos.push(
 
           new Fantasma({
               health: 1,
               position: { x: 600 + this.fantasmasGenerados * 50, y: 100 }, // Ajustar posición para cada fantasma
               bulletController: bulletController,
               frameRate: 4,
               imgResource: "../../assets/characters/enemies/ghost/Ghost_Walk_left.png",
               animations: {
                   idleRight: {
                       frameRate: 6,
                       frameBuffer: 4,
                       loop: true,
                       imgResource: "../../assets/characters/main_character/IdleRight.png",
                   },
                   idleLeft: {
                       frameRate: 6,
                       frameBuffer: 4,
                       loop: true,
                       imgResource: "../../assets/characters/main_character/IdleLeft.png",
                   },
                   runRight: {
                       frameRate: 8,
                       frameBuffer: 4,
                       loop: true,
                       imgResource: "../../assets/characters/main_character/Run.png",
                   },
                   runLeft: {
                       frameRate: 8,
                       frameBuffer: 4,
                       loop: true,
                       imgResource: "../../assets/characters/main_character/RunLeft.png",
                   },
               },
           })
        );

        // Reiniciar el temporizador y aumentar el contador
        this.fantasmaTimer = 0;
        this.fantasmasGenerados++;
    }

    // Reiniciar el contador si se han generado todos los fantasmas
    if (this.fantasmasGenerados >= numero) {
        this.fantasmasGenerados = 0;
        this.fantasmaTimer = 0;
    }
   
}}



generarCalabazas(numero, deltaTime) {
    if (this.invocaionFantasmas) {
  
        
    
    if (!this.fantasmaTimer) {
        this.fantasmaTimer = 0; // Inicializar el temporizador
    }
    if (!this.fantasmasGenerados) {
        this.fantasmasGenerados = 0; // Contador de fantasmas generados
    }

    // Intervalo entre la generación de cada fantasma (en milisegundos)
    const intervaloGeneracion = 2000; // 1 segundo

    // Acumular tiempo transcurrido
    this.fantasmaTimer += deltaTime * 1000;

    // Verificar si es momento de generar un nuevo fantasma
    if (this.fantasmaTimer >= intervaloGeneracion && this.fantasmasGenerados < numero) {
        // Generar un nuevo fantasma
     
        enemigos.push(
            new CalbazaExplosiva({
                delayBala: 0.0001,
            velocidadEnemigo: 10,
            velocidadBala:20,
          
            estatico: false,
            movimiento: "y",
            umbralDisparo : 40,
            direccionDisparo: "izquierda",
            umbralesMovimiento:[0,700],
            health:5,
            position: {x:this.position.x+100, y:this.position.y+100},
            enemyBulletController: this.enemyBulletController,
               frameRate: 27,
               imgResource: "../../assets/characters/enemies/final_boss/babypumk.png",
               animations: {
                   idleRight: {
                       frameRate: 6,
                       frameBuffer: 4,
                       loop: true,
                       imgResource: "../../assets/characters/main_character/IdleRight.png",
                   },
                   idleLeft: {
                       frameRate: 6,
                       frameBuffer: 4,
                       loop: true,
                       imgResource: "../../assets/characters/main_character/IdleLeft.png",
                   },
                   runRight: {
                       frameRate: 8,
                       frameBuffer: 4,
                       loop: true,
                       imgResource: "../../assets/characters/main_character/Run.png",
                   },
                   runLeft: {
                       frameRate: 8,
                       frameBuffer: 4,
                       loop: true,
                       imgResource: "../../assets/characters/main_character/RunLeft.png",
                   },
               },
           })
         //   new Fantasma({
         //       health: 1,
         //       position: { x: 600 + this.fantasmasGenerados * 50, y: 100 }, // Ajustar posición para cada fantasma
         //       bulletController: bulletController,
         //       frameRate: 4,
         //       imgResource: "../../assets/characters/enemies/ghost/Ghost_Walk_left.png",
         //       animations: {
         //           idleRight: {
         //               frameRate: 6,
         //               frameBuffer: 4,
         //               loop: true,
         //               imgResource: "../../assets/characters/main_character/IdleRight.png",
         //           },
         //           idleLeft: {
         //               frameRate: 6,
         //               frameBuffer: 4,
         //               loop: true,
         //               imgResource: "../../assets/characters/main_character/IdleLeft.png",
         //           },
         //           runRight: {
         //               frameRate: 8,
         //               frameBuffer: 4,
         //               loop: true,
         //               imgResource: "../../assets/characters/main_character/Run.png",
         //           },
         //           runLeft: {
         //               frameRate: 8,
         //               frameBuffer: 4,
         //               loop: true,
         //               imgResource: "../../assets/characters/main_character/RunLeft.png",
         //           },
         //       },
         //   })
        );

        // Reiniciar el temporizador y aumentar el contador
        this.fantasmaTimer = 0;
        this.fantasmasGenerados++;
    }

    // Reiniciar el contador si se han generado todos los fantasmas
    if (this.fantasmasGenerados >= numero) {
        this.fantasmasGenerados = 0;
        this.fantasmaTimer = 0;
    }
}}
}