

class Ojo extends Sprite{
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
        imgResource, frameRate, animations}) 
        {
        super({imgResource, frameRate, animations, frameBuffer: frameBuffer })
        //propiedades de la clase
        this.index = index;
        this.health =health;
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

        this.umbralDisparo = umbralDisparo
        this.direccionDisparo = direccionDisparo
        this.movimiento = movimiento
        this.umbralesMovimiento = umbralesMovimiento
        this.bloquesDeColision = bloquesDeColision;
        this.puertas = puertas;
        this.estatico = estatico
        this.disparosJugador = disparosJugador
        this.lifeImage = new Image();
        this.lifeImage.src = '../assets/PNG/Transperent/Icon12.png'; //Imagen de vidas
    }

    takeDamage (damage){
        this.health -=damage
    }
    
    update(player) {

    const velocidad = this.velocidadEnemigo
    
        
    
    if (this.movimiento == "x") {
        
        
    if (Math.abs(player.position.x+30 - this.position.x) <= (this.umbralDisparo/2)*2) {
        let bulletSpeed = this.velocidadBala;
        let bulletDelay = this.delayBala;
        let damage =1;
        let bulletX = this.position.x + this.width/2;
        let bulletY = this.position.y+21
        
        this.enemyBulletController.shoot({
            direccionDisparo: this.direccionDisparo,
            bulletSpeed:bulletSpeed,
            bulletDelay:bulletDelay,
            damage:damage,
            bulletX : bulletX,
            bulletY : bulletY,
       
        
        })

    }
    if (!this.estatico) {
    
        // Cambiar dirección cuando llega a los límites
        if (this.position.x <= this.umbralesMovimiento[0]) {
        
            this.direccion = 1; // Mover a la derecha
        } else if (this.position.x >= this.umbralesMovimiento[1]) {
      
            this.direccion = -1; // Mover a la izquierda
        }
           // Aplicar movimiento en la dirección actual
           this.position.x += velocidad * this.direccion;
    }
     
    }else if(this.movimiento == "y"){
        if (Math.abs(player.position.y+60 - this.position.y) <= this.umbralDisparo/2) {
            let bulletSpeed = this.velocidadBala;
            let bulletDelay = this.delayBala;
            let damage =1;
            let bulletX = this.position.x + this.width/2;
            let bulletY = this.position.y+21
            
            this.enemyBulletController.shoot({
                direccionDisparo: this.direccionDisparo,
                bulletSpeed:bulletSpeed,
                bulletDelay:bulletDelay,
                damage:damage,
                bulletX : bulletX,
                bulletY : bulletY,
           
            
            })
    
        }
        if (!this.estatico) {
            // Cambiar dirección cuando llega a los límites
            if (this.position.y <= this.umbralesMovimiento[0]) {
                
                this.direccion = 1; // Mover a la derecha
            } else if (this.position.y >= this.umbralesMovimiento[1]) {
            
                this.direccion = -1; // Mover a la izquierda
            }
        
            // Aplicar movimiento en la dirección actual
            this.position.y += velocidad * this.direccion;
        }
    }




        // Llamadas existentes en tu método update
        this.updateHitbox();
        this.checkHorizontalCollisions();
       
        this.updateHitbox();
        this.checkVerticalCollisions();
       //dibujar tamaño imagen
        //context.fillStyle = "red";
        //context.fillRect(this.position.x, this.position.y, this.width, this.height);
        // Dibuja el hitbox
        context.fillStyle = "blue";
        context.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height);
        
        // Dibuja la salud
        context.fillStyle = "white";
        context.font = "25px Arial";
        context.fillText(this.health+"Ojo", this.position.x + this.width / 2, this.position.y + 40);
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
               x: this.position.x +5,
               y: this.position.y 
               
           },
           width: 40,
           height: 75,
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

    console.log("golpe recibido por fantasma")
    this.health-= disparo.damage;
    this.disparosJugador.splice(index, 1);
    if (this.health<=0) {
        enemigos.splice(this.index, 1);

    }
  }
}