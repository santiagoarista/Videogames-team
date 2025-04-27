class Item extends Sprite{
    constructor({
        idItem, type, imgResource, frameRate, animations, x = 500, y = 500,
        }){
        super({imgResource, frameRate, animations})

        this.idItem = idItem;
        this.type = type
        this.floatSpeed =  0.05;
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
    }
    
    //Dibujar sprite del personaje

    update(deltaTime) {
        this.time += this.floatSpeed * deltaTime;// velocidad de levitación
        this.position.y = this.baseY + Math.sin(this.time) * 5; // levitación suave

        this.shadowPulse = 20 + Math.sin(this.time * 2) * 10; // sombra que pulsa

        context.fillStyle= "rgba(0, 0, 255, 0)";
        context.fillRect(this.position.x,this.position.y,this.width,this.height);

        this.updateHitbox();

        context.fillStyle= "rgba(30, 255, 0, 0)";
        context.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height)
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

}

class Linterna extends Item {
    constructor({x, y}) {
        super({idItem : 1, type : "Linterna", x, y});
        this.itemImage = new Image();
        this.itemImage.src = "../assets/sprites/escenario_spawm_dario/linternaSprite.png";
        this.width = 50;
        this.height = 20;

        this.baseY = y;               // Posición base para la levitación
        this.time = 0;                // Para animación senoidal
        this.shadowPulse = 0;         // Para animación de sombra
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
               
        this.hitbox ={
           position:{
               x: this.position.x,
               y: this.position.y
           },

           width: this.width,
           height: this.height
       }
       }

       efect(player){
        player.visionRadius = 400;
   }

    
}

class Asistente extends Item {
    constructor({x, y}) {
        super({
            frameRate: 6,
            imgResource: "../assets/characters/Slime2_Idle.png",
            idItem : 2, type : "Asistente", x, y});

            this.baseY = y;               // Posición base para la levitación
            this.time = 0;                // Para animación senoidal
            this.shadowPulse = 0;         // Para animación de sombra
    }
    
    //Método para cambiar de animación
    switchSprite(name){

        if (this.image=== this.animations[name].image) return

        this.currentFrame = 0;
        this.image =this.animations[name].image
        this.frameRate = this.animations[name].frameRate
        this.frameBuffer = this.animations[name].frameBuffer

        context.shadowColor = "blue";
        context.shadowBlur = this.shadowPulse;
        // Reset shadow
        context.shadowColor = "transparent";
        context.shadowBlur = 5;
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

       efect(player){
            player.extralives += 3;
       }

    
}

class Botas extends Item {
    constructor({x, y}) {
        super({idItem : 3, type : "Botas", x, y});
        this.itemImage = new Image();
        this.itemImage.src = "../assets/sprites/escenario_spawm_dario/botas.png";
        this.width = 40;
        this.height = 50;

        this.baseY = y;               // Posición base para la levitación
        this.time = 0;                // Para animación senoidal
        this.shadowPulse = 0;         // Para animación de sombra
    }

    draw(){
        context.shadowColor = "green";
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

    efect(player) {
        player.canDoubleJump = true;
    }
    
}

class Arma extends Item {
    constructor({x, y, idArma, armaImageSrc, expRequerida}) {
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
        this.floatSpeed = 5;   // Qué tan rápido levita
        this.floatTime = 0;       // Contador de tiempo para el seno
        this.expRequerida = expRequerida;
    }

    update(deltaTime){
        // Aumentar tiempo para animación
        this.floatTime += this.floatSpeed * deltaTime;
    
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
    context.drawImage(img, 340, 30, img.width * 2, img.height * 2);
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