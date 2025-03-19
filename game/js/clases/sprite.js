

class Sprite{
    constructor({position, imgResource}){
        this.position = position;
        this.image = new Image();
        this.image.onload= ()=>{
            this.loaded=true
        }
        
        this.image.src= imgResource;
        this.loaded= false
    }

    draw(){
        if (!this.loaded)return
        context.drawImage(this.image,this.position.x,this.position.y)
    }

}