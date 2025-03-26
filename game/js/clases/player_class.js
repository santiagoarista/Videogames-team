
class Player extends Sprite{
    constructor({
        bloquesDeColision=[], 
        puertas=[], 
        imgResource, frameRate, animations}) 
        {
        super({imgResource, frameRate, animations})
        //propiedades de la clase

        //Posición en pantallaad
        this.position ={
            x :200,
            y :400,
        }
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
        this.lives = 3; // Inicializar vidas a 3
        this.lifeImage = new Image();
        this.lifeImage.src = '../../../assets/icons/PNG/Transperent/Icon12.png'; //Imagen de vidas
    }

    //draw(){
    //    //Método para dibujar el objeto
    //    context.fillStyle = "red";
    //    context.fillRect(this.position.x,this.position.y,this.width,this.height);
    //}
    //Dibujar sprite del personaje

    // Disminuir vidas y si no hay más vidas, Game Over
    decreaseLives() {
        this.lives -= 1;
        if (this.lives <= 0) {
            this.gameOver();
        }
    }

    // Dibujar vidas
    drawLives() {
        for (let i = 0; i < this.lives; i++) {
            context.drawImage(this.lifeImage, 90 + i * 65, 10, 60, 60);
        }
    }
    
    update(){
        //Que propiedades o aspectos de la clase se deben redibujar o en cuales se debe agregar una condición

        context.fillStyle= "rgba(0, 0, 255, 0)";
        context.fillRect(this.position.x,this.position.y,this.width,this.height);
        //EFECTO DE GRAVEDAD, aumenta o disminuye los movimientos de pixeles en x, derecha izquierda
        this.position.x += this.velocity.x;


        //aCTUALIZACIÓN DE HITBOX EN 2 PUNTOS
        this.updateHitbox();
        
        //Cpmrprobar si hay colisiones en X
        this.checkHorizontalCollisions();

        //EFECTO DE GRAVEDAD, aumenta o disminuye los movimientos de pixeles en y, arriba abajo
        this.applyGravity();


        //aCTUALIZACIÓN DE HITBOX EN 2 PUNTOS
        this.updateHitbox();
        context.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height)
        //Cpmrprobar si hay colisiones en Y
        this.checkVerticalCollisions();



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
               x: this.position.x + 45,
               y: this.position.y + 60
               
           },
           width: 38,
           height: 67.5,
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
                    
                    //Si detecta colisión a la derecha regresa el objeto, para que no lo pueda atravesar
                    if (this.velocity.x< 0) {
                        const offset = this.hitbox.position.x - this.position.x
                        this.position.x = bloqueDeColsion.position.x +bloqueDeColsion.width-offset+0.01
                        break;
                    }
                    //Si detecta colisión a la izquierda, regresa el objeto, para que no lo pueda atravesar
                    if (this.velocity.x> 0) {
                        const offset = this.hitbox.position.x - this.position.x+this.hitbox.width
                        this.position.x = bloqueDeColsion.position.x-offset-0.01;
                        break;
                    }
            }
            


        }
        //Agregar colisiones de las conexiones de nivel
        for (let index = 0; index < this.puertas.length; index++) {
           
            const bloqueDeColsion = this.puertas[index] ;

            //Comprobar si hay colisiones 
            if (this.hitbox.position.x <= bloqueDeColsion.position.x +bloqueDeColsion.width &&
                this.hitbox.position.x + this.hitbox.width>= bloqueDeColsion.position.x &&
                this.hitbox.position.y + this.hitbox.height>= bloqueDeColsion.position.y &&
                this.hitbox.position.y <= bloqueDeColsion.position.y + bloqueDeColsion.height) {
                    
                    //Si detecta colisión a la derecha regresa el objeto, para que no lo pueda atravesar
                    if (this.velocity.x< 0) {
                
                      console.log("Cambio de mapa")
                      navegarNuevoCuarto(bloqueDeColsion.idDestino, bloqueDeColsion.posicionDestino);
                      break;
                    }
                    //Si detecta colisión a la izquierda, regresa el objeto, para que no lo pueda atravesar
                    if (this.velocity.x> 0) {
                        console.log("Cambio de mapa")
                        navegarNuevoCuarto(bloqueDeColsion.idDestino, bloqueDeColsion.posicionDestino);
                        break;
                    }
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
            
            //Si detecta colisión aarriba regresa el objeto, para que no lo pueda atravesar
            if (this.velocity.y< 0) {
                this.velocity.y=0;
                const offset = this.hitbox.position.y - this.position.y
                this.position.y = bloqueDeColsion.position.y +bloqueDeColsion.height-offset +0.01
                break;
            }
            //Si detecta colisión abajo, regresa el objeto, para que no lo pueda atravesar
            if (this.velocity.y> 0) {
                this.velocity.y=0;
                const offset = this.hitbox.position.y - this.position.y+this.hitbox.height
                this.position.y = bloqueDeColsion.position.y-offset-0.01;
                break;
            }
    }
    


}
 //Agregar colisiones de las conexiones de nivel

for (let index = 0; index < this.puertas.length; index++) {
    const bloqueDeColsion = this.puertas[index] ;

    //Comprobar si hay colisiones
    if (this.hitbox.position.x <= bloqueDeColsion.position.x +bloqueDeColsion.width &&
        this.hitbox.position.x + this.hitbox.width>= bloqueDeColsion.position.x &&
        this.hitbox.position.y + this.hitbox.height>= bloqueDeColsion.position.y &&
        this.hitbox.position.y <= bloqueDeColsion.position.y + bloqueDeColsion.height) {
            
            //Si detecta colisión aarriba regresa el objeto, para que no lo pueda atravesar
            if (this.velocity.y< 0) {
             

                console.log("Cambio de mapa")
                navegarNuevoCuarto(bloqueDeColsion.idDestino, bloqueDeColsion.posicionDestino);
                break;
            }
            //Si detecta colisión abajo, regresa el objeto, para que no lo pueda atravesar
            if (this.velocity.y> 0) {
              
                console.log("Cambio de mapa")
                navegarNuevoCuarto(bloqueDeColsion.idDestino, bloqueDeColsion.posicionDestino);
               
                break;
            }
    }
    


}
  }
  applyGravity(){
//Sólo se aplica gravedad en Y porque es para que baje el objeto
    this.velocity.y +=this.gravity;
    this.position.y += this.velocity.y;
  }
}