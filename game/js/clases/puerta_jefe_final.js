class PuertaJefeFinal {
    constructor({position, width, height}) {
        this.position =position;
        this.width =width;
        this.height =height;
        this.numeroLlaves=0;
        this.llaveImagen =  new Image();
        this.llaveImagen.src ="../assets/sprites/36.png";
        this.calabazaImagen =  new Image();
        this.calabazaImagen.src ="../assets/sprites/calabaza.png";
        this.lockImagen =  new Image();
        this.lockImagen.src ="../assets/sprites/lock.png";
        this.unlockImagen =  new Image();
        this.unlockImagen.src ="../assets/sprites/unlock.png";
        this.infoDibujada= false;
        this.posicionInfo = {
            x: 150,
            y: 30,
        }
        this.soundController = new SoundController("lock", false, 0.9);
        this.alpha = 0; 
        this.infoVisible = false; 
        this.fadeSpeed = 0.1;
    }

    update() {
      
 
            this.numeroLlaves = player.keys;

        
        
      


        
        if(player.position.x +60> this.position.x +this.width && player.position.x < this.position.x +this.width ){
           //jugador cerca derecha
           this.posicionInfo ={
            x: 100,
            y: 60,
           }
           this.infoVisible = true;
           this.dibujarInfoPuerta();

    

        } else if(player.position.x< this.position.x && player.position.x> this.position.x -100){
           //jugador cerca derecha izquierda
           this.infoVisible = true;
           this.dibujarInfoPuerta();
        
           this.posicionInfo ={
            x: -80,
            y: 60,
           }
 
        }else if (
            player.position.y + player.height > this.position.y &&         
            player.position.y < this.position.y + this.height &&    
            player.position.y < this.position.y + this.height &&           
           !( player.position.x +player.height < this.position.x +100) &&                        
            player.position.x < this.position.x + this.width               
        ) {
            this.infoVisible = true;
            this.dibujarInfoPuerta();
            if (player.position.y>0) {
                this.posicionInfo = {
                    x: 10,
                    y: -20,  // Ajusta la posición para mostrar la información debajo de la puerta
                };
            }else{
            this.posicionInfo = {
                x: 10,
                y: 170,  // Posición ajustada para mostrar la información encima de la puerta
            };}
        } 
          else{
            this.infoVisible = false;
            this.infoDibujada = false;
        }
        if (this.infoVisible) {
            if (this.alpha < 1) this.alpha += this.fadeSpeed;
        } else {
            if (this.alpha > 0) this.alpha -= this.fadeSpeed;
        }


    }
    dibujarInfoPuerta() {

        if (this.alpha <= 0) return; // no dibujar si es invisible

        if (!this.infoDibujada && this.alpha > 0.1) {
            this.soundController.play();
            this.infoDibujada = true;
        }
        if (!this.infoVisible) {
            this.infoDibujada = false; // permitir reproducir sonido otra vez si se aleja
        }
        
        context.save();
        context.globalAlpha = this.alpha;
        
        context.shadowBlur=4;
        context.shadowColor="white"; // Neon effect
        context.fillStyle = "rgba(0, 0, 0, 0.66)";
        context.fillRect(this.posicionInfo.x + player.position.x+ 5 , this.posicionInfo.y + player.position.y -20,  95, 80);
        context.shadowBlur=10;
        context.shadowColor="transparent";
        context.fillStyle = "white";
        context.font = "18px Arcade Gamer";
        context.fillText(this.numeroLlaves + "/7", this.posicionInfo.x + player.position.x + 40, this.posicionInfo.y + player.position.y + 52);
              

        context.drawImage(
            this.llaveImagen,
            this.posicionInfo.x + player.position.x + 15,
            this.posicionInfo.y + player.position.y + 30,
            12, 24
        );
        
        context.drawImage(
            this.calabazaImagen,
            this.posicionInfo.x + player.position.x + 15,
            this.posicionInfo.y + player.position.y - 20,
            this.calabazaImagen.width * 0.38,
            this.calabazaImagen.height * 0.38
        );
        
        if (this.numeroLlaves < 7) {
            context.drawImage(
                this.lockImagen,
                this.posicionInfo.x + player.position.x + 60,
                this.posicionInfo.y + player.position.y - 10,
                this.lockImagen.width * 0.9,
                this.lockImagen.height * 0.9
            );
        }else{
            this.height =10
            this.width =10
            context.drawImage(
                this.unlockImagen,
                this.posicionInfo.x + player.position.x + 60,
                this.posicionInfo.y + player.position.y - 10,
                this.lockImagen.width * 0.9,
                this.lockImagen.height * 0.9
            );
        }
        
        context.restore();
    }
    draw() {
        context.fillStyle="rgba(255, 0, 0, 0)";
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    
}