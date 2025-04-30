

class Fantasma extends Sprite{
    constructor({
        index =100,
        health,
        position,
        bulletController,
        bloquesDeColision=[], 
        puertas=[], 
        imgResource, frameRate, animations}) 
        {
        super({imgResource, frameRate, animations, })
        //propiedades de la clase
        this.index = index;
        this.health =health;
        this.bulletController = bulletController;
        //Posición en pantallaad
        this.position =position
        this.velocity = {
            x:0,
            y:0
        }
        //Altura y ancho del objeto
     
        //creación de hitbox, lo que va a medir los lados de la hitBox
        this.sides = {
            bottom : this.position.y + this.height
        }
        this.gravity =0.8;
        this.bloquesDeColision = bloquesDeColision;
        this.puertas = puertas;
        this.disparosJugador = disparosJugador
        this.lifeImage = new Image();
        this.lifeImage.src = '../assets/PNG/Transperent/Icon12.png'; //Imagen de vidas
    }

    takeDamage (damage){

 
 
        this.health -=damage
    }
    update(player, deltaTime) {
        const velocidad = 0.9
        // Calcular la diferencia de posición entre el enemigo y el jugador
        let dx =(30+ player.position.x) - this.position.x;
        let dy =(50+ player.position.y) - this.position.y;
        
        // Normalizar la dirección del movimiento (para evitar movimiento diagonal más rápido)
        let distancia = Math.sqrt(dx * dx + dy * dy);
        
        // Si la distancia es mayor a 0, mover hacia el jugador
        if (distancia > 0) {
            // Normalizar la dirección y multiplicar por la velocidad
            this.velocity.x = (dx / distancia) * velocidad ;  // 0.8 es la velocidad
            this.velocity.y = (dy / distancia) * velocidad ;
        } else {
            // Si el fantasma está muy cerca del jugador, detenerse
            this.velocity.x = 0;
            this.velocity.y = 0;
        }
    
        // Aplicar movimiento
        this.position.x += this.velocity.x * deltaTime*100;
        this.position.y += this.velocity.y * deltaTime*100;
    
        // Llamadas existentes en tu método update
        this.updateHitbox();
        this.checkHorizontalCollisions();
        this.applyGravity();
        this.updateHitbox();
        this.checkVerticalCollisions();
       //dibujar tamaño imagen
        //context.fillStyle = "red";
        //context.fillRect(this.position.x, this.position.y, this.width, this.height);
        //// Dibuja el hitbox
        //context.fillStyle = "blue";
        //context.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height);
        
        // Dibuja la salud
        context.fillStyle = "white";
        context.font = "25px Arial";
        context.fillText(this.health, this.position.x + this.width / 2, this.position.y + 40);
    }
    //Método para cambiar de animación
    switchSprite(name){
        if (this.image=== this.animations[name].image) return

        this.currentFrame = 0;
        this.image =this.animations[name].image
        this.frameRate = this.animations[name].frameRate
        this.frameBuffer = this.animations[name].frameBuffer
    }

    //Creación de hitbox y actualiazción
    updateHitbox() {
  
        this.hitbox ={
           position:{
               x: this.position.x + 20,
               y: this.position.y +22
               
           },
           width: 50,
           height: 50,
       }
       }
    checkHorizontalCollisions(){
          //CHECAR SI HAY COLISIONES EN X
          for (let index = 0; index < this.bloquesDeColision.length; index++) {
            const bloqueDeColsion = this.bloquesDeColision[index] ;

            //Comprobar si hay colisiones
            if (this.hitbox.position.x <= bloqueDeColsion.position.x +bloqueDeColsion.width &&
                this.hitbox.position.x + this.hitbox.width>= bloqueDeColsion.position.x &&
                this.hitbox.position.y + this.hitbox.height>= bloqueDeColsion.position.y &&
                this.hitbox.position.y <= bloqueDeColsion.position.y + bloqueDeColsion.height) {
                    
                   ////Si detecta colisión a la derecha regresa el objeto, para que no lo pueda atravesar
                   //if (this.velocity.x< 0) {
                   //    const offset = this.hitbox.position.x - this.position.x
                   //    this.position.x = bloqueDeColsion.position.x +bloqueDeColsion.width-offset
                   //    break;
                   //}
                   ////Si detecta colisión a la izquierda, regresa el objeto, para que no lo pueda atravesar
                   //if (this.velocity.x> 0) {
                   //    const offset = this.hitbox.position.x - this.position.x+this.hitbox.width
                   //    this.position.x = bloqueDeColsion.position.x-offset;
                   //    break;
                   //}
            }
            


        }
        
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
   //CHECAR SI HAY COLISIONES EN Y
   for (let index = 0; index < this.bloquesDeColision.length; index++) {
    const bloqueDeColsion = this.bloquesDeColision[index] ;

    //Comprobar si hay colisiones
    if (this.hitbox.position.x <= bloqueDeColsion.position.x +bloqueDeColsion.width &&
        this.hitbox.position.x + this.hitbox.width>= bloqueDeColsion.position.x &&
        this.hitbox.position.y + this.hitbox.height>= bloqueDeColsion.position.y &&
        this.hitbox.position.y <= bloqueDeColsion.position.y + bloqueDeColsion.height) {
            
          // //Si detecta colisión aarriba regresa el objeto, para que no lo pueda atravesar
          // if (this.velocity.y< 0) {
          //     this.velocity.y=0;
          //     const offset = this.hitbox.position.y - this.position.y
          //     this.position.y = bloqueDeColsion.position.y +bloqueDeColsion.height-offset 
          //     break;
          // }
          // //Si detecta colisión abajo, regresa el objeto, para que no lo pueda atravesar
          // if (this.velocity.y> 0) {
          //     this.velocity.y=0;
          //     const offset = this.hitbox.position.y - this.position.y+this.hitbox.height
          //     this.position.y = bloqueDeColsion.position.y-offset;
          //     break;
          // }
    }
    


}
 //Agregar colisiones de las disparos

for (let index = 0; index < this.disparosJugador.length; index++) {
    const disparo = this.disparosJugador[index] ;

    //Comprobar si hay colisiones
    if (this.hitbox.position.x <= disparo.x +disparo.width &&
        this.hitbox.position.x + this.hitbox.width>= disparo.x &&
        this.hitbox.position.y + this.hitbox.height>= disparo.y &&
        this.hitbox.position.y <= disparo.y + disparo.height) {
            
             //Si recibe un disparo se ejecuta el método
     
             this.recibirGolpe(disparo, index);

    }
    


}
  }
  applyGravity(){
//Sólo se aplica gravedad en Y porque es para que baje el objeto
    //this.velocity.y +=this.gravity;
    //this.position.y += this.velocity.y;
  }

  //ACCÍON cuando el enemigo recibe un golpe
  recibirGolpe(disparo,index){

    if (enemigos.length==1) {
        if (this.health==1) {
            console.log("ultimo enemigo")
            itemsEnJuego.push(new Llave({x:this.position.x,y:this.position.y, bloquesDeColision: bloquesColisiones}))
            console.log("player", player.experiencia);
        }
    }

    ejecutarFuncionItemAleatoria(this);

    console.log("golpe recibido por fantasma")
    this.health-= disparo.damage;
    playSound("hurt4"); // Reproduce el sonido de dolor
    this.disparosJugador.splice(index, 1);
    if (this.health<=0) {
        enemigos.splice(this.index, 1);
        player.monstruos_eliminados += 1;
        player.experiencia += 10;
    }
  }
}

class CalbazaExplosiva extends Sprite{
    constructor({
        index =100,
        health,
        position,
        direccion,
        bulletController,
        enemyBulletController,
        bloquesDeColision=[], 
        puertas=[], 
        imgResource, frameRate, animations}) 
        {
        super({imgResource, frameRate, animations, })
        //propiedades de la clase
        this.index = index;
        this.health =health;
        this.bulletController = bulletController;
        //Posición en pantallaad
        this.position =position
        this.velocity = {
            x:0,
            y:0
        }
        //Altura y ancho del objeto
     
        //creación de hitbox, lo que va a medir los lados de la hitBox
        this.sides = {
            bottom : this.position.y + this.height
        }
        this.enemyBulletController = enemyBulletController;
        this.gravity =0.8;
        this.bloquesDeColision = bloquesDeColision;
        this.puertas = puertas;
        this.disparosJugador = disparosJugador
        this.lifeImage = new Image();
        this.lifeImage.src = '../assets/PNG/Transperent/Icon12.png'; //Imagen de vidas
        this.direccion = direccion; 
        this.controladorAudio = new SoundController("laugh2", false, 0.5);
    }

    update(player, deltaTime) {
        let velocidad = 1.5;
        this.controladorAudio.play();
        let bulletSpeed = 300;
        let bulletDelay = 6;
        let damage =1;
        let bulletX = this.position.x ;
        let bulletY = this.position.y
        console.log("disparando calabaza")

        if (this.position.y<player.position.y+100 && this.position.y>player.position.y+80) {

                 
            this.enemyBulletController.shoot({
                direccionDisparo: "izquierda",
                bulletSpeed:bulletSpeed,
                bulletDelay:bulletDelay,
                damage:damage,
                bulletX : bulletX,
                bulletY : bulletY,
           
            
            }, deltaTime)
            this.enemyBulletController.shoot({
                direccionDisparo: "derecha",
                bulletSpeed:bulletSpeed,
                bulletDelay:bulletDelay,
                damage:damage,
                bulletX : bulletX,
                bulletY : bulletY,
           
            
            }, deltaTime)
        }

        if (this.position.y> player.position.y+100) {
            
            
         
        
           //Explosion
           enemigos.splice(this.index, 1);
            playSound("explosion", 0.5); 
        }

        this.position.y += velocidad * deltaTime * 100;
        // Llamadas existentes en tu método update
        this.updateHitbox();
        this.checkHorizontalCollisions();
        this.applyGravity();
        this.updateHitbox();
        this.checkVerticalCollisions();

   
    }
    //Método para cambiar de animación


    //Creación de hitbox y actualiazción
    updateHitbox() {
  
        this.hitbox ={
           position:{
               x: this.position.x +10,
               y: this.position.y +10
               
           },
           width: 30,
           height: 30,
       }
       }
    checkHorizontalCollisions(){
          //CHECAR SI HAY COLISIONES EN X
          for (let index = 0; index < this.bloquesDeColision.length; index++) {
            const bloqueDeColsion = this.bloquesDeColision[index] ;

            //Comprobar si hay colisiones
            if (this.hitbox.position.x <= bloqueDeColsion.position.x +bloqueDeColsion.width &&
                this.hitbox.position.x + this.hitbox.width>= bloqueDeColsion.position.x &&
                this.hitbox.position.y + this.hitbox.height>= bloqueDeColsion.position.y &&
                this.hitbox.position.y <= bloqueDeColsion.position.y + bloqueDeColsion.height) {
                    
                   ////Si detecta colisión a la derecha regresa el objeto, para que no lo pueda atravesar
                   //if (this.velocity.x< 0) {
                   //    const offset = this.hitbox.position.x - this.position.x
                   //    this.position.x = bloqueDeColsion.position.x +bloqueDeColsion.width-offset
                   //    break;
                   //}
                   ////Si detecta colisión a la izquierda, regresa el objeto, para que no lo pueda atravesar
                   //if (this.velocity.x> 0) {
                   //    const offset = this.hitbox.position.x - this.position.x+this.hitbox.width
                   //    this.position.x = bloqueDeColsion.position.x-offset;
                   //    break;
                   //}
            }
            


        }
        
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
   //CHECAR SI HAY COLISIONES EN Y
   for (let index = 0; index < this.bloquesDeColision.length; index++) {
    const bloqueDeColsion = this.bloquesDeColision[index] ;

    //Comprobar si hay colisiones
    if (this.hitbox.position.x <= bloqueDeColsion.position.x +bloqueDeColsion.width &&
        this.hitbox.position.x + this.hitbox.width>= bloqueDeColsion.position.x &&
        this.hitbox.position.y + this.hitbox.height>= bloqueDeColsion.position.y &&
        this.hitbox.position.y <= bloqueDeColsion.position.y + bloqueDeColsion.height) {
            
          // //Si detecta colisión aarriba regresa el objeto, para que no lo pueda atravesar
          // if (this.velocity.y< 0) {
          //     this.velocity.y=0;
          //     const offset = this.hitbox.position.y - this.position.y
          //     this.position.y = bloqueDeColsion.position.y +bloqueDeColsion.height-offset 
          //     break;
          // }
          // //Si detecta colisión abajo, regresa el objeto, para que no lo pueda atravesar
          // if (this.velocity.y> 0) {
          //     this.velocity.y=0;
          //     const offset = this.hitbox.position.y - this.position.y+this.hitbox.height
          //     this.position.y = bloqueDeColsion.position.y-offset;
          //     break;
          // }
    }
    


}
 //Agregar colisiones de las disparos

for (let index = 0; index < this.disparosJugador.length; index++) {
    const disparo = this.disparosJugador[index] ;

    //Comprobar si hay colisiones
    if (this.hitbox.position.x <= disparo.x +disparo.width &&
        this.hitbox.position.x + this.hitbox.width>= disparo.x &&
        this.hitbox.position.y + this.hitbox.height>= disparo.y &&
        this.hitbox.position.y <= disparo.y + disparo.height) {
            
             //Si recibe un disparo se ejecuta el método
     
             this.recibirGolpe(disparo, index);

    }
    


}
  }
  applyGravity(){
//Sólo se aplica gravedad en Y porque es para que baje el objeto
    //this.velocity.y +=this.gravity;
    //this.position.y += this.velocity.y;
  }

  //ACCÍON cuando el enemigo recibe un golpe
  recibirGolpe(disparo,index){

    if (enemigos.length==1) {
        if (this.health==1) {
            console.log("ultimo enemigo")
            itemsEnJuego.push(new Llave({x:this.position.x,y:this.position.y, bloquesDeColision: bloquesColisiones}))
            console.log("player", player.experiencia);
        }
    }

    ejecutarFuncionItemAleatoria(this);

    console.log("golpe recibido por fantasma")
    this.health-= disparo.damage;
    playSound("hurt4"); // Reproduce el sonido de dolor
    this.disparosJugador.splice(index, 1);
    if (this.health<=0) {
        enemigos.splice(this.index, 1);
        player.monstruos_eliminados += 1;
        player.experiencia += 10;
    }
  }
}

class Reaper extends Sprite{
    constructor({
        index =100,
        health,
        position,
        bulletController,
        bloquesDeColision=[], 
        puertas=[], 
        imgResource, frameRate, animations, scale = 1}) 
        {
        super({imgResource, frameRate, animations, scale })
        //propiedades de la clase
        this.index = index;
        this.health =health;
        this.bulletController = bulletController;
        //Posición en pantallaad
        this.position =position
        this.velocity = {
            x:1,
            y:1
        }
        //Altura y ancho del objeto
     
        //creación de hitbox, lo que va a medir los lados de la hitBox
        this.sides = {
            bottom : this.position.y + this.height
        }
        this.gravity =0.8;
        this.bloquesDeColision = bloquesDeColision;
        this.puertas = puertas;
        this.disparosJugador = disparosJugador
    }

    takeDamage (damage){
        this.health -=damage
    }

    update(player, deltaTime) {
        const verticalSpeed = 1.0;

        // Movimiento vertical
        this.position.y += this.velocity.y * deltaTime * 100;
        const time = Date.now() / 1000; // segundos
        const centerX = canvas.width / 2; // centro del canvas
        const amplitude = (canvas.width - this.width) / 2; // amplitud máxima
        const frequency = 1.2; // frecuencia lenta para que no sea loco

    // Oscilación de lado a lado
    this.position.x = centerX + Math.sin(time * frequency) * amplitude;
    
        // Revisar bordes verticales
        if (this.position.y <= 0) {
            this.velocity.y = verticalSpeed; // Bajar
        } else if (this.position.y + this.height >= canvas.height) {
            this.velocity.y = -verticalSpeed; // Subir
        }
    
        // Revisar bordes horizontales
        if (this.position.x <= 0) {
            this.position.x = 0;
            this.velocity.x *= -1; // Rebote horizontal
        } else if (this.position.x + this.width >= canvas.width) {
            this.position.x = canvas.width - this.width;
            this.velocity.x *= -1; // Rebote horizontal
        }
        
    
        // Llamadas existentes en tu método update
        this.updateHitbox();
        context.fillStyle= "rgba(30, 255, 0, 0.5)";
        context.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height)
        this.checkCollisions();
        this.applyGravity();
        this.updateHitbox();
       //dibujar tamaño imagen
        //context.fillStyle = "red";
        //context.fillRect(this.position.x, this.position.y, this.width, this.height);
        //// Dibuja el hitbox
        //context.fillStyle = "blue";
        //context.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height);
        
    }
    //Método para cambiar de animación
    switchSprite(name){
        if (this.image=== this.animations[name].image) return

        this.currentFrame = 0;
        this.image =this.animations[name].image
        this.frameRate = this.animations[name].frameRate
        this.frameBuffer = this.animations[name].frameBuffer
    }

    //Creación de hitbox y actualiazción
    updateHitbox() {
  
        this.hitbox ={
           position:{
               x: this.position.x + 10,
               y: this.position.y 
               
           },
           width: 50,
           height: 70,
       }
       }
       checkCollisions(){
        //Agregar colisiones de disparos
        for (let index = 0; index < this.disparosJugador.length; index++) {
            const disparo = this.disparosJugador[index];
    
            if (this.hitbox.position.x <= disparo.x + disparo.width &&
                this.hitbox.position.x + this.hitbox.width >= disparo.x &&
                this.hitbox.position.y <= disparo.y + disparo.height &&
                this.hitbox.position.y + this.hitbox.height >= disparo.y) {
    
                this.recibirGolpe(disparo, index);
            }
        }

    }
   
  applyGravity(){
//Sólo se aplica gravedad en Y porque es para que baje el objeto
    //this.velocity.y +=this.gravity;
    //this.position.y += this.velocity.y;
  }

  //ACCÍON cuando el enemigo recibe un golpe
  recibirGolpe(disparo,index){

    if (enemigos.length==1) {
        if (this.health==1) {
            console.log("ultimo enemigo")
            itemsEnJuego.push(new Llave({x:this.position.x,y:this.position.y, bloquesDeColision: bloquesColisiones}))
            console.log("player", player.experiencia);
        }
    }

    ejecutarFuncionItemAleatoria(this);

    console.log("golpe recibido por fantasma")
    this.health-= disparo.damage;
    playSound("hurt"); // Reproduce el sonido de dolor
    this.disparosJugador.splice(index, 1);
    if (this.health<=0) {
        enemigos.splice(this.index, 1);
        player.monstruos_eliminados += 1;
        player.experiencia += 10;
    }
  }
}