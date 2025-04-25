class BloqueColision {
    constructor({position}) {
           this.position = position;
           //Por defecto la coslión va  aser de 32x32, ya que esos usamos para crear el mapa
           this.width = 32;
           this.height = 32;
    }
    //Dibujar la colisión en el mapa
    draw(){
           context.fillStyle="rgba(255, 0, 0, 0)";
           context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update(){
           
    }
}
