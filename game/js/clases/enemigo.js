

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
    update(player) {
        const velocidad = 0.8
        // Calcular la diferencia de posición entre el enemigo y el jugador
        let dx =(30+ player.position.x) - this.position.x;
        let dy =(50+ player.position.y) - this.position.y;
        
        // Normalizar la dirección del movimiento (para evitar movimiento diagonal más rápido)
        let distancia = Math.sqrt(dx * dx + dy * dy);
        
        // Si la distancia es mayor a 0, mover hacia el jugador
        if (distancia > 0) {
            // Normalizar la dirección y multiplicar por la velocidad
            this.velocity.x = (dx / distancia) * velocidad;  // 0.8 es la velocidad
            this.velocity.y = (dy / distancia) * velocidad;
        } else {
            // Si el fantasma está muy cerca del jugador, detenerse
            this.velocity.x = 0;
            this.velocity.y = 0;
        }
    
        // Aplicar movimiento
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    
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
             this.recibirGolpe(index);

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

    console.log("golpe recibido por fantasma")
    this.health-= disparo.damage;
    playSound("hurt"); // Reproduce el sonido de dolor
    this.disparosJugador.splice(index, 1);
    if (this.health<=0) {
        enemigos.splice(this.index, 1);

    }
  }
}