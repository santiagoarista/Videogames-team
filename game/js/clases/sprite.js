

class Sprite{                           //si no hay cantidad de frames, se pone 1 por default, esto significa que el sprite no se necesita recortar
    constructor({position, imgResource, frameRate=1}){
        this.position = position;
        this.image = new Image();
        this.image.onload= ()=>{
            this.loaded=true
            this.width = this.image.width/this.frameRate;
            this.height =this.image.height;
        }
        
        this.image.src= imgResource;
        this.loaded= false
        this.frameRate= frameRate
        this.currentFrame =0;
        this.elapsedFrames =0
        this.frameBuffer =8
    }

    draw(){
        if (!this.loaded)return
        //Tamaño del recorte de la imagen con esto se puede seleccionar una parte en específico de la imágen y hacer animaciones
        const cropBox = {
            position:{
                x:this.width*this.currentFrame,
                y:0
            },
            width: this.width,
            height: this.height
        }

        context.drawImage(
            this.image,
            cropBox.position.x,
            cropBox.position.y,
            cropBox.width,
            cropBox.height,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
        this.updateFrames()
    }
    updateFrames(){
        this.elapsedFrames++
        if(this.elapsedFrames % this.frameBuffer===0){
            
        
        if(this.currentFrame < this.frameRate-1)this.currentFrame++
        else this.currentFrame= 0
        }
        
    }

}