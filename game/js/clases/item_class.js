class Item extends Sprite{
    constructor({
        bloquesDeColision=[],
        idItem, type, imgResource, frameRate, animations, x = 500, y = 500,
        }){
        super({imgResource, frameRate, animations})

        this.idItem = idItem;
        this.type = type
        
        //Posición en pantalla
        this.position ={
            x :x,
            y :y,
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
    }
    
    //Dibujar sprite del personaje

    update(){
        //Que propiedades o aspectos de la clase se deben redibujar o en cuales se debe agregar una condición

        context.fillStyle= "rgba(0, 0, 255, 0)";
        context.fillRect(this.position.x,this.position.y,this.width,this.height);

        this.updateHitbox();

        //Cpmrprobar si hay colisiones en X
        this.checkHorizontalCollisions();

        //EFECTO DE GRAVEDAD, aumenta o disminuye los movimientos de pixeles en y, arriba abajo
        this.applyGravity();

        //aCTUALIZACIÓN DE HITBOX EN 2 PUNTOS
        this.updateHitbox();
        context.fillStyle= "rgba(30, 255, 0, 0)";
        context.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height)
        //Cpmrprobar si hay colisiones en Y
        this.checkVerticalCollisions();

    }

    //Creación de hitbox y actualiazción
    updateHitbox() {
               
        this.hitbox ={
           position:{
               x: this.position.x,
               y: this.position.y
               
           },
           width: 0,
           height: 0,
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
            
            //Si detecta colisión abajo, regresa el objeto, para que no lo pueda atravesar
            if (this.velocity.y> 0) {
                this.velocity.y=0;
                const offset = this.hitbox.position.y - this.position.y+this.hitbox.height
                this.position.y = bloqueDeColsion.position.y-offset-0.01;
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

class Linterna extends Item {
    constructor({x, y}) {
        super({idItem : 1, type : "Linterna", x, y});
        this.itemImage = new Image();
        this.itemImage.src = "../assets/sprites/escenario_spawm_dario/linternaSprite.png";
        this.width = 50;
        this.height = 20;
    }
    
    draw(){
        context.drawImage(this.itemImage, this.position.x, this.position.y, this.width, this.height)
    }

    updateHitbox() {
               
        this.hitbox ={
           position:{
               x: this.position.x,
               y: this.position.y
           },

           width: this.width,
           height: this.height
       }
       }

    
}

class Asistente extends Item {
    constructor({x, y}) {
        super({
            frameRate: 6,
            imgResource: "../assets/characters/Slime2_Idle.png",
            idItem : 2, type : "Asistente", x, y});
    }
    
    //Método para cambiar de animación
    switchSprite(name){
        if (this.image=== this.animations[name].image) return

        this.currentFrame = 0;
        this.image =this.animations[name].image
        this.frameRate = this.animations[name].frameRate
        this.frameBuffer = this.animations[name].frameBuffer
    }

    updateHitbox() {
               
        this.hitbox ={
           position:{
               x: this.position.x + 18,
               y: this.position.y
           },

           width: 30,
           height: 40
       }
       }

    
}

class Botas extends Item {
    constructor({x, y}) {
        super({idItem : 3, type : "Botas", x, y});
        this.itemImage = new Image();
        this.itemImage.src = "../assets/sprites/escenario_spawm_dario/botas.png";
        this.width = 30;
        this.height = 40;
    }
    

    draw(){
        context.drawImage(this.itemImage, this.position.x, this.position.y, this.width, this.height)
    }

    updateHitbox() {
               
        this.hitbox ={
           position:{
               x: this.position.x + 3,
               y: this.position.y + 2
               
           },
           width: this.width - 6,
           height: this.height - 5
       }
       }
    
}

class Arma extends Item {
    constructor({x, y, idArma, armaImage}) {
        super({idItem : 4, type : "Arma", x, y});
        this.armaImage = armaImage;
        this.idArma = idArma;
        this.width = 40;
        this.height = 20;
    }

    update(){
        //Que propiedades o aspectos de la clase se deben redibujar o en cuales se debe agregar una condición

        context.fillStyle= "rgba(0, 0, 255, 0)";
        context.fillRect(this.position.x,this.position.y,this.width,this.height);

        //aCTUALIZACIÓN DE HITBOX EN 2 PUNTOS
        this.updateHitbox();
        context.fillStyle= "rgba(30, 255, 0, 0)";
        context.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height)
    }
    

    drawArma(){
        context.drawImage(this.armaImage, this.position.x, this.position.y, this.width, this.height)
        //if(this.idArma == idArmaActual){}
    }

    updateHitbox() {
        this.hitbox ={
           position:{
               x: this.position.x,
               y: this.position.y
               
           },
           width: this.width,
           height: this.height +30,
       }
       }
    
}