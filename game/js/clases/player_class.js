
class Player extends Sprite{
    constructor({
        bloquesDeColision=[], 
        imgResource, frameRate}) 
        {
        super({imgResource, frameRate})
        //propiedades de la clase

        //Posición en pantalla
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
    }

    //draw(){
    //    //Método para dibujar el objeto
    //    context.fillStyle = "red";
    //    context.fillRect(this.position.x,this.position.y,this.width,this.height);
    //}
    //Dibujar sprite del personaje
    
    update(){
        //Que propiedades o aspectos de la clase se deben redibujar o en cuales se debe agregar una condición

        context.fillStyle= "rgba(0,0,255,0.5)";
        context.fillRect(this.position.x,this.position.y,this.width,this.height);
        //EFECTO DE GRAVEDAD, aumenta o disminuye los movimientos de pixeles en x, derecha izquierda
        this.position.x += this.velocity.x;

        //Cpmrprobar si hay colisiones en X
        this.checkHorizontalCollisions();

        //EFECTO DE GRAVEDAD, aumenta o disminuye los movimientos de pixeles en y, arriba abajo
        this.applyGravity();

    
        //Cpmrprobar si hay colisiones en Y
        this.checkVerticalCollisions();



    }
    checkHorizontalCollisions(){
          //CHECAR SI HAY COLISIONES EN X
          for (let index = 0; index < this.bloquesDeColision.length; index++) {
            const bloqueDeColsion = this.bloquesDeColision[index] ;

            //Comprobar si hay colisiones
            if (this.position.x <= bloqueDeColsion.position.x +bloqueDeColsion.width &&
                this.position.x + this.width>= bloqueDeColsion.position.x &&
                this.position.y + this.height>= bloqueDeColsion.position.y &&
                this.position.y <= bloqueDeColsion.position.y + bloqueDeColsion.height) {
                    
                    //Si detecta colisión a la derecha regresa el objeto, para que no lo pueda atravesar
                    if (this.velocity.x< 0) {
                        this.position.x = bloqueDeColsion.position.x +bloqueDeColsion.width+0.01
                        break;
                    }
                    //Si detecta colisión a la izquierda, regresa el objeto, para que no lo pueda atravesar
                    if (this.velocity.x> 0) {
                        this.position.x = bloqueDeColsion.position.x-this.width-0.01;
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
    if (this.position.x <= bloqueDeColsion.position.x +bloqueDeColsion.width &&
        this.position.x + this.width>= bloqueDeColsion.position.x &&
        this.position.y + this.height>= bloqueDeColsion.position.y &&
        this.position.y <= bloqueDeColsion.position.y + bloqueDeColsion.height) {
            
            //Si detecta colisión aarriba regresa el objeto, para que no lo pueda atravesar
            if (this.velocity.y< 0) {
                this.velocity.y=0;
                this.position.y = bloqueDeColsion.position.y +bloqueDeColsion.height+0.01
                break;
            }
            //Si detecta colisión abajo, regresa el objeto, para que no lo pueda atravesar
            if (this.velocity.y> 0) {
                this.velocity.y=0;
                this.position.y = bloqueDeColsion.position.y-this.height-0.01;
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