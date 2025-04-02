class Bulletcontroller {
 
    timeToNextBullet=0;
    constructor(canvas) {
        this.canvas = canvas;
    }

    shoot({bulletSpeed,bulletDelay, damage, bulletX, bulletY}){
        
let direccion = ""

        if (keys.d.pressed) {
            direccion = "derecha"
        } else if (keys.a.pressed) {
            direccion = "izquierda"  
        } else if (keys.w.pressed) {
                direccion = "arriba" 
        } else {
            direccion = "derecha" 
        }

        if (this.timeToNextBullet<=0) {
            disparosJugador.push(new Bullet({
                x: bulletX,
                y: bulletY,
                speed: bulletSpeed,
                damage : damage,
                direccion: direccion
            })),

            this.timeToNextBullet= bulletDelay
        }
        this.timeToNextBullet--;
    }
    draw(context){
        disparosJugador.forEach(element => {
            if (this.isBulletScreen(element)) {
                disparosJugador.splice(index,1)
            }
            element.draw(context)
        });
    }

    isBulletScreen(bullet){
        return bullet.y<= -bullet.height
    }

    collideWith(object){
        return disparosJugador.some(bullet=>{
            if (bullet.collideWith(object)) {
                disparosJugador.splice(disparosJugador.indexOf(bullet),1)
                return true
            }
            return false
        })
    }
}