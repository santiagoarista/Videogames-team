class Bullet {
    constructor({ x, y, speed, damage, direccion, imageSrc }) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.damage = damage;
        this.direccion = direccion;

        // Definir tamaño según la dirección
        if (direccion === "izquierda" || direccion === "derecha") {
            this.width = 15;
            this.height = 5;
        } else if (direccion === "arriba") {
            this.width = 5;
            this.height = 15;
        }

        this.color = "red";
        this.image = new Image();
        this.image.src = imageSrc
        this.imageLoaded = false;

        // Asegurar que la imagen se cargue antes de usarla
        this.image.onload = () => {
            this.imageLoaded = true;
        };
    }

    draw(context) {
        // Dibujar el rectángulo base
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);

        // Dibujar la imagen solo si está cargada
        if (this.imageLoaded) {
        
            context.drawImage(this.image, this.x-18, this.y-23, 51, 50);
        }

        // Movimiento
        if (this.direccion === "izquierda") {
            this.x -= this.speed;
        } else if (this.direccion === "arriba") {
            this.y -= this.speed;
        } else if (this.direccion === "derecha") {
            this.x += this.speed;
        }
    }

    collideWith(object) {
        if (
            this.x < object.x + object.width &&
            this.x + this.width > object.x &&
            this.y < object.y + object.height &&
            this.y + this.height > object.y
        ) {
            object.takeDamage(this.damage);
            return true;
        }
        return false;
    }
}


class EnemyBullet {
    constructor({ x, y, speed, damage, direccion, imageSrc }) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.damage = damage;
        this.direccion = direccion;

        // Definir tamaño según la dirección
        if (direccion === "izquierda" || direccion === "derecha") {
            this.width = 15;
            this.height = 5;
        } else if (direccion === "arriba") {
            this.width = 5;
            this.height = 15;
        }

        this.color = "red";
        this.image = new Image();
        this.image.src = imageSrc
        this.imageLoaded = false;

        // Asegurar que la imagen se cargue antes de usarla
        this.image.onload = () => {
            this.imageLoaded = true;
        };
    }

    draw(context) {
        // Dibujar el rectángulo base
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);

        // Dibujar la imagen solo si está cargada
        if (this.imageLoaded) {
        
            context.drawImage(this.image, this.x-18, this.y-23, 51, 50);
        }

        // Movimiento
        if (this.direccion === "izquierda") {
            this.x -= this.speed;
        } else if (this.direccion === "arriba") {
            this.y -= this.speed;
        }  else if (this.direccion === "abajo") {
            this.y += this.speed;
        }  
        else if (this.direccion === "derecha") {
            this.x += this.speed;
        }
    }

    collideWith(object) {
        if (
            this.x < object.x + object.width &&
            this.x + this.width > object.x &&
            this.y < object.y + object.height &&
            this.y + this.height > object.y
        ) {
            object.takeDamage(this.damage);
            return true;
        }
        return false;
    }
}
