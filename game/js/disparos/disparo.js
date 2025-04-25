class Bulletcontroller {
 
    timeToNextBullet=0;
    constructor(canvas) {
        this.canvas = canvas;
    }

    shoot({bulletSpeed,bulletDelay, damage, bulletX, bulletY}){
        
let direccion = ""

if (arguments[0].direccionForzada) {
    direccion = arguments[0].direccionForzada;
} else if (keys.a.pressed) {
    direccion = "izquierda"  
} else if (keys.w.pressed) {
    direccion = "arriba" 
} else if (keys.d.pressed) {
    direccion = "derecha" 
} else {
    player.lastDirection === "left" ? direccion = "izquierda"   : direccion = "derecha";
}

let imageR = "";

if (idArmaActual == '1'){
    imageR= "../../assets/bullets/04.png"
    if (direccion == "arriba" ) {
        imageR= "../../assets/bullets/04_up.png"
    }else{
        imageR= "../../assets/bullets/04.png"
    }
} else if (idArmaActual == '2'){
    imageR= "../../assets/bullets/01.png"
    if (direccion == "arriba" ) {
        imageR= "../../assets/bullets/01_up.png"
    }else{
        imageR= "../../assets/bullets/01.png"
    }
} else if (idArmaActual == '3'){
    imageR= "../../assets/bullets/02_shine.png"
    if (direccion == "arriba" ) {
        imageR= "../../assets/bullets/02_shine_up.png"
    }else{
        imageR= "../../assets/bullets/02_shine.png"
    }
}


        if (this.timeToNextBullet<=0) {
            // Ejemplo de uso
            playSound("shoot"); // Reproduce el sonido de sdisparo

            disparosJugador.push(new Bullet({
                x: bulletX,
                y: bulletY,
                speed: bulletSpeed,
                damage : damage,
                direccion: direccion,
                imageSrc : imageR
            })),

            this.timeToNextBullet= bulletDelay
        }
        this.timeToNextBullet--;
    }
    draw(context, deltaTime){
        disparosJugador.forEach((element, index) => {
            if (this.isBulletScreen(element)) {
                disparosJugador.splice(index, 1);
            }
            element.draw(context, deltaTime);
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


class EnemyBulletcontroller {
 
    timeToNextBullet=0;
    constructor(canvas) {
        this.canvas = canvas;
    }

    shoot({bulletSpeed,bulletDelay, damage, bulletX, bulletY, direccionDisparo}){
        
let direccion = ""


if (direccionDisparo ==="derecha") {
    direccion = "derecha" 
} else if (direccionDisparo ==="izquierda") {
    direccion = "izquierda"  
} else if (direccionDisparo ==="arriba") {
    direccion = "arriba" 
} else if(direccionDisparo ==="abajo"){
    direccion = "abajo" 
}

let imageR= "../../assets/bullets/02_shine.png"
if (direccion == "arriba" ||  direccion == "abajo") {
     imageR= "../../assets/bullets/02_shine_up.png"
}else{
       imageR= "../../assets/bullets/02_shine.png"
}

        if (this.timeToNextBullet<=0) {
            // Ejemplo de uso
            playSound("shoot"); // Reproduce el sonido de sdisparo

            disparosEnemigos.push(new EnemyBullet({
                x: bulletX,
                y: bulletY,
                speed: bulletSpeed,
                damage : damage,
                direccion: direccion,
                imageSrc : imageR
            })),

            this.timeToNextBullet= bulletDelay
        }
        this.timeToNextBullet--;
    }
    draw(context, deltaTime){
        disparosEnemigos.forEach((element, index) => {
            if (this.isBulletScreen(element)) {
                disparosEnemigos.splice(index, 1);
            }
            element.draw(context,  deltaTime);
        });
    }

    isBulletScreen(bullet){
        return bullet.y<= -bullet.height
    }

    collideWith(object){
        return disparosEnemigos.some(bullet=>{
            if (bullet.collideWith(object)) {
                disparosEnemigos.splice(disparosEnemigos.indexOf(bullet),1)
                return true
            }
            return false
        })
    }
}