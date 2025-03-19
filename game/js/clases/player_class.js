
class Player {
    constructor() {
        //propiedades de la clase

        //Posición en pantalla
        this.position =
        {
            x :100,
            y :100,
        }
        this.velocity = {
            x:0,
            y:0
        }
        //Altura y ancho del objeto
        this.width = 100;
        this.height =100;
        //creación de hitbox, lo que va a medir los lados de la hitBox
        this.sides = {
            bottom : this.position.y + this.height
        }
        this.gravity =1;
    }

    draw(){
        //Método para dibujar el objeto
        context.fillStyle = "red";
        context.fillRect(this.position.x,this.position.y,this.width,this.height);
    }
    update(){
        //Que propiedades o aspectos de la clase se deben redibujar o en cuales se debe agregar una condición
       
        //EFECTO DE GRAVEDAD, aumenta o disminuye los movimientos de pixeles en x, derecha izquierda
        this.position.x += this.velocity.x;
        //EFECTO DE GRAVEDAD, aumenta o disminuye los movimientos de pixeles en y, arriba abajo
        this.position.y += this.velocity.y;
        //se actualiza la posición del hitbox
         this.sides.bottom = this.position.y+this.height;

        //Detecar y para movimiento del objeto si se sale del canvas, colisión con bordes del cnavas
    if (this.sides.bottom + this.velocity.y< canvas.height) {
    
        this.velocity.y +=this.gravity;

    }else{
        //si llega al borde de la pantalla para la gravedad, para que no se mueva
        this.velocity.y=0;
    }
    }
}