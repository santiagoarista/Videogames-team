class Bullet {
    constructor({ x, y, speed, damage, direccion, imageSrc, distanciaMaxima = 600,}) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.damage = damage;
        this.direccion = direccion;
        this.distanciaRecorrida = 0;
        this.distanciaMaxima = distanciaMaxima;
        

        // Definir tamaño según la dirección
        if (direccion === "izquierda" || direccion === "derecha") {
            this.width = 15;
            this.height = 5;
        } else if (direccion === "arriba") {
            this.width = 5;
            this.height = 15;
        } else {
            // Para diagonales
            this.width = 10;
            this.height = 10;
        }

        this.color = 'rgba(0, 0, 0, 0)';
        this.image = new Image();
        this.image.src = imageSrc
        this.imageLoaded = false;

        // Asegurar que la imagen se cargue antes de usarla
        this.image.onload = () => {
            this.imageLoaded = true;
        };
    }

    draw(context, deltaTime) {
        // Dibujar el rectángulo base
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);

        // Dibujar la imagen solo si está cargada
        if (this.imageLoaded) {
        
            context.drawImage(this.image, this.x-18, this.y-23, 51, 50);
        }
        const velocidad = this.speed * deltaTime ; 
        // Movimiento
 
        if (this.direccion === "izquierda") {
            this.x -= velocidad;
            this.distanciaRecorrida += velocidad;
        } else if (this.direccion === "arriba") {
            this.y -= velocidad;
            this.distanciaRecorrida += velocidad;
        } else if (this.direccion === "derecha") {
            this.x += velocidad;
            this.distanciaRecorrida += velocidad;
        } else if (this.direccion === "arriba-izquierda") {
            this.x -= velocidad * 0.9;
            this.y -= velocidad * 0.4;
            this.distanciaRecorrida += Math.sqrt((velocidad * 0.9) ** 2 + (velocidad * 0.4) ** 2);
        } else if (this.direccion === "arriba-derecha") {
            this.x += velocidad * 0.9;
            this.y -= velocidad * 0.4;
            this.distanciaRecorrida += Math.sqrt((velocidad * 0.9) ** 2 + (velocidad * 0.4) ** 2);
        } else if (this.direccion === "abajo-izquierda") {
            this.x -= velocidad * 0.9;
            this.y += velocidad * 0.4;
            this.distanciaRecorrida += Math.sqrt((velocidad * 0.9) ** 2 + (velocidad * 0.4) ** 2);
        } else if (this.direccion === "abajo-derecha") {
            this.x += velocidad * 0.9;
            this.y += velocidad * 0.4;
            this.distanciaRecorrida += Math.sqrt((velocidad * 0.9) ** 2 + (velocidad * 0.4) ** 2);
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
}class EnemyBullet {
    constructor({ x, y, speed, damage, direccion, imageSrc, angulo = 0 }) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.damage = damage;
        this.direccion = direccion;
        this.angulo = angulo;

        // Definir tamaño de la bala
        this.width = 60; // Tamaño genérico para la hitbox
        this.height = 60;

        this.color = "transparent"; // Color de la bala (puedes cambiarlo si es necesario)
        this.image = new Image();
        this.image.src = imageSrc;
        this.imageLoaded = false;

        // Asegurar que la imagen se cargue antes de usarla
        this.image.onload = () => {
            this.imageLoaded = true;
        };
    }

    draw(context, deltaTime) {
 
        // Si la imagen está cargada, dibujarla con rotación
        if (this.imageLoaded) {
            context.save(); // Guardar el estado actual del contexto
            context.translate(this.x + this.width / 2, this.y + this.height / 2); // Mover el contexto al centro de la bala
            context.rotate(this.angulo); // Rotar el contexto según el ángulo
            context.drawImage(this.image, -this.width / 2, -this.height / 2, this.width, this.height); // Dibujar la imagen
            context.restore(); // Restaurar el estado original del contexto
        } else {
            // Si la imagen no se ha cargado, dibujar el rectángulo base
            context.fillStyle = this.color;
            context.fillRect(this.x, this.y, this.width, this.height);
        }

        // Movimiento de la bala
        this.move(deltaTime);
    }

    move(deltaTime) {
        // Movimiento basado en el ángulo
        if (this.angulo !== 0) {
            this.width = 30;
            this.height = 30; 
            this.x += this.speed * Math.cos(this.angulo) * deltaTime;
            this.y += this.speed * Math.sin(this.angulo) * deltaTime;
        } else {
            const movement = this.speed * deltaTime;
            switch (this.direccion) {
                case "izquierda":
                    this.x -= movement;
                    break;
                case "derecha":
                    this.x += movement;
                    break;
                case "arriba":
                    this.y -= movement;
                    break;
                case "abajo":
                    this.y += movement;
                    break;
            }
        }
    }

    collideWith(object) {
        // Ajustar la hitbox para que sea más precisa
        const hitbox = {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
        };

        // Verificar colisión con el objeto
        if (
            hitbox.x < object.x + object.width &&
            hitbox.x + hitbox.width > object.x &&
            hitbox.y < object.y + object.height &&
            hitbox.y + hitbox.height > object.y
        ) {
            object.takeDamage(this.damage); // Si hay colisión, causar daño
            return true;
        }
        return false;
    }
}