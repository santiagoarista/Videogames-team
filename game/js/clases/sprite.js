class Sprite {
    constructor({
        scale = 1,
        position, imgResource, frameRate = 1,frameBuffer = 8,  animations, loop = true, autoplay = true, blinkRate =150, countdown = false
    }) {
        this.position = position;
        this.image = new Image();
        this.image.onload = () => {
            this.loaded = true;
            this.width = this.image.width / this.frameRate;
            this.height = this.image.height;
        }
        this.scale = scale;
        this.image.src = imgResource;
        this.loaded = false;
        this.frameRate = frameRate;
        this.currentFrame = 0;
        this.elapsedFrames = 0;
        this.frameBuffer = frameBuffer
        this.animations = animations;
        this.loop = loop;
        this.autoplay = autoplay;
        this.visible = true; // Propiedad para controlar la visibilidad
        this.countdown = countdown; // Propiedad para controlar el estado de countdown

        // Iniciar el parpadeo
        this.startBlinking(blinkRate);

        if (this.animations) {
            for (let key in this.animations) {
                const image = new Image();
                image.src = this.animations[key].imgResource;
                this.animations[key].image = image;
            }
        }
    }

    draw() {
        if (!this.loaded || !this.visible) return; // No dibujar si no está cargado o no es visible

        const cropBox = {
            position: {
                x: this.width * this.currentFrame,
                y: 0
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
            this.width * this.scale,
            this.height * this.scale
        )
        this.updateFrames();
    }

    play() {
        this.autoplay = true;
    }

    updateFrames() {
        if (!this.autoplay) return;
        this.elapsedFrames++;
        if (this.elapsedFrames % this.frameBuffer === 0) {
            if (this.currentFrame < this.frameRate - 1) this.currentFrame++;
            else if (this.loop) this.currentFrame = 0;
        }
    }

    startBlinking(blinkRate) {
        setInterval(() => {
            if (this.countdown) { // Solo alternar visibilidad si countdown es false
                this.visible = !this.visible; // Alternar visibilidad
            }
        }, blinkRate);
    }

    // Método para actualizar el estado de countdown
    setCountdown(value) {
        this.countdown = value;
        this.visible = true; // Restablecer visibilidad
    
        if (!value) {
            this.startBlinking(150); // Reiniciar parpadeo cuando countdown termina
          
        }
        this.visible = true;
    }
    
    
}