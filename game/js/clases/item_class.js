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
    constructor({x, y, idArma, armaImageSrc}) {
        super({
            idItem: 4,
            type: "Arma",
           // usamos esto como Sprite espera
            x,
            y
        });
        
        this.armaImage = armaImageSrc;
        this.idArma = idArma;
        this.width = 40;
        this.height = 20;
        this.baseY = this.position.y;
        this.floatAmplitude = 10; // Qué tanto sube y baja
        this.floatSpeed = 0.05;   // Qué tan rápido levita
        this.floatTime = 0;       // Contador de tiempo para el seno
      
    }

    update(){
        // Aumentar tiempo para animación
        this.floatTime += this.floatSpeed;
    
        // Calcular desplazamiento vertical tipo "levitación"
        const floatOffset = Math.sin(this.floatTime) * this.floatAmplitude;
    
        // Calcular sombra oscilante (entre 30 y 60 de blur, por ejemplo)
        const shadowOscillation = 30 + Math.abs(Math.sin(this.floatTime)) * 30;
    
        // Limpiar fondo (si hace falta, opcional)
        // context.clearRect(0, 0, canvas.width, canvas.height);
    if (this.idArma !=idArmaActual) {
        // Dibujar sombra y levitación
        context.shadowColor = "#faff61";
        context.shadowBlur = shadowOscillation;
    
        // Cargar imagen y dibujarla en nueva posición
        const img = new Image();
        img.src = this.armaImage;
        context.drawImage(img, this.position.x, this.baseY + floatOffset, img.width, img.height);
    
    }
    context.shadowBlur = 0;
    context.shadowColor = "transparent"; //Resetear Neon effect para no afectar lo demás

        // Redibujar hitbox
        this.updateHitbox();
        this.draw();
    
    }
    
    

    draw(){
        if (this.loaded) {
            context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        }
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


function dibujarArmaActual() {
    const img = new Image();

    switch (idArmaActual) {
        case "1":
            img.src = "../assets/sprites/escenario_spawm_dario/8_1.png"
            break;
        case "2":
            img.src = "../assets/sprites/escenario_spawm_dario/7_1.png"
        break;
        case "3":
            img.src =  "../assets/sprites/escenario_spawm_dario/9_1.png"
        break;
        default:
            break;
    }

    context.shadowColor = "white";
    context.shadowBlur = 10;
    

    // Dibujo del arma
    context.drawImage(img, 400, 20, img.width * 2, img.height * 2);

}

class Llave extends Item {
    constructor({x, y}) {
        super({idItem : 10, type : "Llave", x, y});
        this.itemImage = new Image();
        this.itemImage.src = "../assets/sprites/36.png";
        this.width = 22.1;
        this.height = 49.2;

        this.baseY = y;               // Posición base para la levitación
        this.time = 0;                // Para animación senoidal
        this.shadowPulse = 0;         // Para animación de sombra
    }

    update() {
        this.time += 0.05; // velocidad de levitación
        this.position.y = this.baseY + Math.sin(this.time) * 5; // levitación suave

        this.shadowPulse = 20 + Math.sin(this.time * 2) * 10; // sombra que pulsa

        this.updateHitbox();
    }

    draw(){
        context.shadowColor = "yellow";
        context.shadowBlur = this.shadowPulse;

        context.drawImage(this.itemImage, this.position.x, this.position.y, this.width, this.height);

        // Reset shadow
        context.shadowColor = "transparent";
        context.shadowBlur = 5;
    }

    updateHitbox() {
        this.hitbox = {
            position: {
                x: this.position.x + 3,
                y: this.position.y + 2
            },
            width: this.width - 6,
            height: this.height - 5
        };
    }
}