class Bulletcontroller {
    bullets= [];
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

      console.log("direccion2_")
        console.log(direccion)
        console.log("Shooott3");
        if (this.timeToNextBullet<=0) {
            this.bullets.push(new Bullet({
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
        this.bullets.forEach(element => {
            if (this.isBulletScreen(element)) {
                this.bullets.splice(index,1)
            }
            element.draw(context)
        });
    }

    isBulletScreen(bullet){
        return bullet.y<= -bullet.height
    }

    collideWith(object){
        return this.bullets.some(bullet=>{
            if (bullet.collideWith(object)) {
                this.bullets.splice(this.bullets.indexOf(bullet),1)
                return true
            }
            return false
        })
    }
}