

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
        this.health =90;
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
        this.isOjo = true;
      

       
    
    }

    takeDamage (damage){
        if ( !this.invencivilidad) {
            this.health -=damage
        }
       
    }
    
    update(player, deltaTime) {
 

    this.dibujarVida();
    const velocidad = this.velocidadEnemigo
    
        
  


        // Llamadas existentes en tu método update
        this.updateHitbox();
        this.checkHorizontalCollisions();
        this.updateHitbox();
        this.checkVerticalCollisions();
        context.fillStyle = "blue";
        context.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height);

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
    this.invencivilidad = true;

    if (enemigos.length==1) {
        if (this.health==1) {
            console.log("ultimo enemigo")
            itemsEnJuego.push(new Llave({x:this.position.x,y:this.position.y, bloquesDeColision: bloquesColisiones}))
            console.log("player", player.monstruos_eliminados);
        }
 
   
  }
    console.log("golpe recibido por ojo")
    if ( !this.invencivilidad) {
    this.health-= disparo.damage;}
    this.disparosJugador.splice(index, 1);
    if (this.health<=0) {
        enemigos.splice(this.index, 1);
        player.monstruos_eliminados += 1;
        player.experiencia += 20;
        console.log("player", player.experiencia);
    }
  }

  fase1(){

  }
  fase2(){
    
  }
  fase3(){
    
  }
  dibujarVida() {
    if (this.invencivilidad) {
        this.countdown = true; 
        
    }else{
        this.countdown = false; 
    }
    const vidaMaxima = 100; 
    const anchoBarraMaximo = 500; 
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
}