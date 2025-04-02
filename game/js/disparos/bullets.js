class Bullet {
    constructor({x,y, speed, damage, direccion}) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.damage = damage;
        this.direccion = direccion;

        this.width =  15;
        this.height =  5;  
        this.color = "red";


    }

    draw(context){

        if (this.direccion === "izquierda") {
            this.width =  15;
            this.height =  5;  
        }else if(this.direccion === "arriba"){
            this.width =  5;
            this.height =  15;  
        }else if(this.direccion === "derecha"){
            this.width =  15;
            this.height =  5;  
        }

        context.fillStyle = this.color;
        context.fillRect (this.x, this.y, this.width, this.height)

        if (this.direccion === "izquierda") {
            this.x -=this.speed;
        }else if(this.direccion === "arriba"){
            this.y -=this.speed;
        }else if(this.direccion === "derecha"){
            this.x +=this.speed;
        }

       
    }
    collideWith( object){
        if(this.x< object.x+object.width &&
             this.x + this.width> object.x &&
             this.y < object.y+  object.height&&
             this.y + this.height>   object.y){
              object.takeDamage(this.damage);
              return true  
             }

             return false
    }
}
