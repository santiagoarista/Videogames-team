class Player extends Sprite {
  constructor({
    countdown = false,
    visible = true,
    bulletController,
    bloquesDeColision = [],
    puertas = [],
    items,
    imgResource,
    frameRate,
    animations,
  }) {
    super({
      imgResource,
      frameRate,
      animations,
      countdown: countdown,
      visible: visible,
    });
    //propiedades de la clase
    this.inTransition = false;
    this.visible = true;
    this.countodown = countdown;
    this.countdownDelay = 50;
    this.bulletController = bulletController;
    //Posición en pantallaad
    this.position = {
      x: 200,
      y: 400,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    //Altura y ancho del objeto

    //creación de hitbox, lo que va a medir los lados de la hitBox
    this.sides = {
      bottom: this.position.y + this.height,
    };

    this.gravity = 16;
    this.bloquesDeColision = bloquesDeColision;
    this.puertas = puertas;
    this.lives = 3; // Inicializar vidas a 3
    this.lifeImage = new Image();
    this.lifeImage.src = "../assets/PNG/Transperent/Icon12.png"; //Imagen de vidas
    this.extralives = 0;
    this.exlifeImage = new Image();
    this.exlifeImage.src = "../assets/PNG/Transperent/Slimeheart.png";
    this.arma3cooldown = 0;
    // Propiedades para el parpadeo
    this.blinking = false;
    this.blinkInterval = 100; // Tiempo entre parpadeos en milisegundos
    this.blinkDuration = 50; // Duración total del parpadeo en milisegundos
    this.blinkStartTime = null;
    //Llaves
    this.keys = 0;
    this.keysImage = new Image();
    this.keysImage.src = "../assets/sprites/36.png"; //Imagen de llave

    this.items = items;
    //Propiedad doble salto
    this.canDoubleJump = false; // Solo se activa al recoger las botas
    this.jumpCount = 0; // Contador de saltos
    //Vision para linterna
    this.visionRadius = 200; // valor por defecto
    //Datos para estadisticas
    this.monstruos_eliminados = 0; // monstruos eliminados
    this.experiencia = 0;
    //Mensaje de falta de EXP
    this.mensajeBloqueo = "";
    this.mensajeTiempo = 0;
    this.mensajePosX = 0;
    this.mensajePosY = 0;
  }

  //draw(){
  //    //Método para dibujar el objeto
  //    context.fillStyle = "red";
  //    context.fillRect(this.position.x,this.position.y,this.width,this.height);
  //}

  //Dibujar sprite del personaje

  decreaseLives() {
    this.lives -= 1;
    if (this.lives <= 0) {
      gameOver = true; //Game Over si hay 0 vidas o menos
    }
  }

  // Dibujar vidas
  drawLives() {
    for (let i = 0; i < this.lives; i++) {
        context.drawImage(this.lifeImage, 15 + i * 65, 15, 60, 60);
    }

    for (let i = 0; i < this.extralives; i++) {
        context.drawImage(this.exlifeImage, 25 + i * 65, 75, 40, 40);
    }
  }

  // Dibujar conteo de llaves
  drawKeys() {
    this.keys = llaves.filter((element) => element === true).length;

    context.shadowColor = "transparent";
    context.shadowBlur = 15;
    context.drawImage(this.keysImage, 230, 15, 30, 60);
    context.font = "40px Arcade Gamer"; // Tamaño y fuente del texto
    context.textAlign = "start";
    context.fillStyle = "white"; // Color del texto
    context.fillText(this.keys, 280, 65); // Texto y posición (x, y)
    context.shadowColor = "transparent";
    context.shadowBlur = 0;
  }

  update(deltaTime) {

    if (this.inTransition) {
      this.velocity.x = 0;
      this.velocity.y = 0;
      return; // Detener actualización si está en transición
    }

    //Que propiedades o aspectos de la clase se deben redibujar o en cuales se debe agregar una condición
    if (this.countdown) {
      if (this.countdownDelay > 0) {
        this.countdownDelay -= 1;
      } else {
        this.countdown = false;
        this.countdownDelay = 75;
        this.visible = true;
      }
    }

    context.fillStyle = "rgba(255, 153, 0, 0)";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
    //EFECTO DE GRAVEDAD, aumenta o disminuye los movimientos de pixeles en x, derecha izquierda
    this.position.x += this.velocity.x * deltaTime;

    //aCTUALIZACIÓN DE HITBOX EN 2 PUNTOS
    this.updateHitbox();

    //Cpmrprobar si hay colisiones en X
    this.checkHorizontalCollisions();

    //EFECTO DE GRAVEDAD, aumenta o disminuye los movimientos de pixeles en y, arriba abajo
    this.applyGravity(deltaTime);

    context.shadowColor = "cyan"; // Neon effect
    context.shadowBlur = 15;

    this.updateHitbox();

    context.fillStyle = "rgba(0, 0, 0, 0.01)"; // Fully transparent fill
    context.fillRect(
      this.hitbox.position.x,
      this.hitbox.position.y,
      this.hitbox.width,
      this.hitbox.height
    );

    // Reset shadow effects
    context.shadowBlur = 0;
    context.shadowColor = "transparent";

    this.checkVerticalCollisions();
    this.shoot(deltaTime);
    if (this.arma3cooldown > 0){
      this.arma3cooldown -= deltaTime;
    }

    if (this.mensajeTiempo > 0) {
      context.font = "15px Arcade Gamer";
      context.fillStyle = "white";
      context.fillText(this.mensajeBloqueo, this.mensajePosX, this.mensajePosY);
      this.mensajeTiempo -= deltaTime;
  }
  }

  shoot(deltaTime) {
    //Disparo
    if (keys.k.pressed && idArmaActual == '1') {
      let bulletSpeed = 500;
      let bulletDelay = 50;
      let damage = 0.5;
      let bulletX = this.position.x + this.width / 2;
      let bulletY = this.position.y + 80;
      this.bulletController.shoot({
        bulletSpeed: bulletSpeed,
        bulletDelay: bulletDelay,
        damage: damage,
        bulletX: bulletX,
        bulletY: bulletY,
      },deltaTime);
    } else if(keys.k.pressed && idArmaActual == '2') {
      let bulletSpeed = 500;
      let bulletDelay = 35;
      let damage = 3;
      let bulletX = this.position.x + this.width / 2;
      let bulletY = this.position.y + 80;
      this.bulletController.shoot({
        bulletSpeed: bulletSpeed,
        bulletDelay: bulletDelay,
        damage: damage,
        bulletX: bulletX,
        bulletY: bulletY,
      }, deltaTime);
    } else if (keys.k.pressed && idArmaActual == '3') {
      if (this.arma3cooldown <= 0) { // Solo dispara si cooldown llegó a 0
        let bulletSpeed = 300; // velocidad reducida
        let bulletDelay = 0; // disparo instantáneo
        let damage = 3;
        let centerX = this.position.x + this.width / 2;
        let centerY = this.position.y + 80;
        let diagonal1 = this.lastDirection === "left" ? "arriba-izquierda" : "arriba-derecha";
        let diagonal2 = this.lastDirection === "left" ? "abajo-izquierda" : "abajo-derecha";

        // Tres disparos simultáneos
        this.bulletController.shoot({
            bulletSpeed,
            bulletDelay,
            damage,
            bulletX: centerX,
            bulletY: centerY,
            distanciaMaxima: 200,
            ignorarDelay: true
        }, deltaTime);

        this.bulletController.shoot({
            bulletSpeed,
            bulletDelay,
            damage,
            bulletX: centerX,
            bulletY: centerY,
            distanciaMaxima: 200,
            ignorarDelay: true,
            direccionForzada: diagonal1
        }, deltaTime);

        this.bulletController.shoot({
            bulletSpeed,
            bulletDelay,
            damage,
            bulletX: centerX,
            bulletY: centerY,
            distanciaMaxima: 200,
            ignorarDelay: true,
            direccionForzada: diagonal2
        }, deltaTime);

        this.arma3cooldown = 0.8; // tiempo de espera en segundos (ajústalo a gusto)
    }

    }
  }

  //Método para cambiar de animación
  switchSprite(name) {
    if (this.image === this.animations[name].image) return;

    this.currentFrame = 0;
    this.image = this.animations[name].image;
    this.frameRate = this.animations[name].frameRate;
    this.frameBuffer = this.animations[name].frameBuffer;
  }

  //Creación de hitbox y actualiazción
  updateHitbox() {
    this.hitbox = {
      position: {
        x: this.position.x + 45,
        y: this.position.y + 60,
      },
      width: 38,
      height: 67.5,
    };
  }

  checkHorizontalCollisions() {

    //CHECAR SI HAY COLISIONES EN X
    for (let index = 0; index < this.bloquesDeColision.length; index++) {
      const bloqueDeColsion = this.bloquesDeColision[index];

      //Comprobar si hay colisiones
      if (
        this.hitbox.position.x <=
          bloqueDeColsion.position.x + bloqueDeColsion.width &&
        this.hitbox.position.x + this.hitbox.width >=
          bloqueDeColsion.position.x &&
        this.hitbox.position.y + this.hitbox.height >=
          bloqueDeColsion.position.y &&
        this.hitbox.position.y <=
          bloqueDeColsion.position.y + bloqueDeColsion.height
      ) {
        //Si detecta colisión a la derecha regresa el objeto, para que no lo pueda atravesar
        if (this.velocity.x < 0) {
          const offset = this.hitbox.position.x - this.position.x;
          this.position.x =
            bloqueDeColsion.position.x + bloqueDeColsion.width - offset + 0.01;
          break;
        }
        //Si detecta colisión a la izquierda, regresa el objeto, para que no lo pueda atravesar
        if (this.velocity.x > 0) {
          const offset =
            this.hitbox.position.x - this.position.x + this.hitbox.width;
          this.position.x = bloqueDeColsion.position.x - offset - 0.01;
          break;
        }
      }
    }
    //Agregar colisiones de las conexiones de nivel
    for (let index = 0; index < this.puertas.length; index++) {
      const bloqueDeColsion = this.puertas[index];

      //Comprobar si hay colisiones
      if (
        this.hitbox.position.x <=
          bloqueDeColsion.position.x + bloqueDeColsion.width &&
        this.hitbox.position.x + this.hitbox.width >=
          bloqueDeColsion.position.x &&
        this.hitbox.position.y + this.hitbox.height >=
          bloqueDeColsion.position.y &&
        this.hitbox.position.y <=
          bloqueDeColsion.position.y + bloqueDeColsion.height
      ) {
        //Si detecta colisión a la derecha regresa el objeto, para que no lo pueda atravesar
        if (this.velocity.x < 0) {
          console.log("Cambio de mapa");
          navegarNuevoCuarto(
            bloqueDeColsion.idDestino,
            bloqueDeColsion.posicionDestino,
            bloqueDeColsion.nombreOrigen
          );
          console.log("bloque:");
          console.log(bloqueDeColsion.posicionDestino);
          console.log("Nombre de Origen:", bloqueDeColsion.nombreOrigen);
          console.log(bloqueDeColsion);
          break;
        }
        //Si detecta colisión a la izquierda, regresa el objeto, para que no lo pueda atravesar
        if (this.velocity.x > 0) {
          console.log("Cambio de mapa");
          navegarNuevoCuarto(
            bloqueDeColsion.idDestino,
            bloqueDeColsion.posicionDestino,
            bloqueDeColsion.nombreOrigen
          );
          console.log("bloque:");
          console.log(bloqueDeColsion.posicionDestino);
          console.log("Nombre de Origen:", bloqueDeColsion.nombreOrigen);
          console.log(bloqueDeColsion);
          break;
        }
      }
    }
    if (!this.countdown) {
      //Agregar colisiones con enemigos
      for (let index = 0; index < enemigos.length; index++) {
        const enemigo = enemigos[index];

        //Comprobar si hay colisiones
        if (
          this.hitbox.position.x <=
            enemigo.hitbox.position.x + enemigo.hitbox.width &&
          this.hitbox.position.x + this.hitbox.width >=
            enemigo.hitbox.position.x &&
          this.hitbox.position.y + this.hitbox.height >=
            enemigo.hitbox.position.y &&
          this.hitbox.position.y <=
            enemigo.hitbox.position.y + enemigo.hitbox.height
        ) {
          this.lastEnemyKill(enemigo);

          this.monstruos_eliminados += 1;
          console.log("player", this.monstruos_eliminados);
          ejecutarFuncionItemAleatoria(enemigo);
          this.recibirDaño(index, enemigo);
        }

        //Agregar colisiones con enemigos
        for (let index = 0; index < disparosEnemigos.length; index++) {
          const bala = disparosEnemigos[index];

          //Comprobar si hay colisiones
          if (
            this.hitbox.position.x <= bala.x + bala.width &&
            this.hitbox.position.x + this.hitbox.width >= bala.x &&
            this.hitbox.position.y + this.hitbox.height >= bala.y &&
            this.hitbox.position.y <= bala.y + bala.height
          ) {
            console.log("colision con bala");
            this.recibirDañoBalaEnemigo(index);
          }
        }
      }
    }

    //Colisiones con las Armas
    if (keys.l.pressed && !lKeyProcessed) {
      // Se ejecuta una vez al presionar "l"
      for (let index = 0; index < armaslista.length; index++) {
        const arma = armaslista[index];

        if (
          this.hitbox.position.x <=
            arma.hitbox.position.x + arma.hitbox.width &&
          this.hitbox.position.x + this.hitbox.width >=
            arma.hitbox.position.x &&
          this.hitbox.position.y + this.hitbox.height >=
            arma.hitbox.position.y &&
          this.hitbox.position.y <= arma.hitbox.position.y + arma.hitbox.height
        ) {

          const armaInfo = armaslista.find(a => a.idArma === arma.idArma);

          if (this.experiencia >= armaInfo.expRequerida) {
              if (idArmaActual !== arma.idArma) {
                  console.log("se recogió arma");
                  playSound("take_weapon", 0.5);
              } else {
                  console.log("no recogió arma");
                  playSound("no_weapon", 0.4);
              }
              idArmaActual = arma.idArma;
          } else {
            this.mensajeBloqueo = `Necesitas ${armaInfo.expRequerida} EXP`;
            this.mensajeTiempo = 2; // Mostrar el mensaje 2 segundos
            this.mensajePosX = arma.position.x - 120; 
            this.mensajePosY = arma.position.y - 40;
            playSound("no_weapon", 0.4);
          }
        }
      }

      lKeyProcessed = true; // Marcar como procesado para evitar múltiples ejecuciones
    }

    for (let index = 0; index < itemsEnJuego.length; index++) {
      const item = itemsEnJuego[index];

      //Comprobar si hay colisiones
      if (
        this.hitbox.position.x <= item.position.x + item.width &&
        this.hitbox.position.x + this.hitbox.width >= item.position.x &&
        this.hitbox.position.y + this.hitbox.height >= item.position.y &&
        this.hitbox.position.y <= item.position.y + item.height
      ) {
        console.log("Colisión con item ID");
        if (item.type == "Llave") {
          llaves[currentLevel - 1] = true;
        } else if (item.type == "Linterna") {
          itemsActivos[item.idItem - 1] = true;
          item.efect(this);
        } else if (item.type == "Asistente") {
          itemsActivos[item.idItem - 1] = true;
          item.efect(this);
          //console.log(this.lives);
        } else if (item.type == "Botas") {
          itemsActivos[item.idItem - 1] = true;
          item.efect(this); // Llama al efecto de las botas
        }
        itemsEnJuego.splice(index, 1);
        playSound("bonus", 0.5)
      }
    }
  } //

  checkVerticalCollisions() {
    //CHECAR SI HAY COLISIONES EN Y
    for (let index = 0; index < this.bloquesDeColision.length; index++) {
      const bloqueDeColsion = this.bloquesDeColision[index];

      //Comprobar si hay colisiones
      if (
        this.hitbox.position.x <=
          bloqueDeColsion.position.x + bloqueDeColsion.width &&
        this.hitbox.position.x + this.hitbox.width >=
          bloqueDeColsion.position.x &&
        this.hitbox.position.y + this.hitbox.height >=
          bloqueDeColsion.position.y &&
        this.hitbox.position.y <=
          bloqueDeColsion.position.y + bloqueDeColsion.height
      ) {
        //Si detecta colisión aarriba regresa el objeto, para que no lo pueda atravesar
        if (this.velocity.y < 0) {
          this.velocity.y = 0;
          const offset = this.hitbox.position.y - this.position.y;
          this.position.y =
            bloqueDeColsion.position.y + bloqueDeColsion.height - offset + 0.01;
          break;
        }
        //Si detecta colisión abajo, regresa el objeto, para que no lo pueda atravesar
        if (this.velocity.y > 0) {
          this.velocity.y = 0;
          const offset =
            this.hitbox.position.y - this.position.y + this.hitbox.height;
          this.position.y = bloqueDeColsion.position.y - offset - 0.01;
          this.jumpCount = 0;
          break;
        }
      }
    }
    //Agregar colisiones de las conexiones de nivel

    for (let index = 0; index < this.puertas.length; index++) {
      const bloqueDeColsion = this.puertas[index];

      //Comprobar si hay colisiones
      if (
        this.hitbox.position.x <=
          bloqueDeColsion.position.x + bloqueDeColsion.width &&
        this.hitbox.position.x + this.hitbox.width >=
          bloqueDeColsion.position.x &&
        this.hitbox.position.y + this.hitbox.height >=
          bloqueDeColsion.position.y &&
        this.hitbox.position.y <=
          bloqueDeColsion.position.y + bloqueDeColsion.height
      ) {
        //Si detecta colisión aarriba regresa el objeto, para que no lo pueda atravesar
        if (this.velocity.y < 0) {
          console.log("Cambio de mapa");
          navegarNuevoCuarto(
            bloqueDeColsion.idDestino,
            bloqueDeColsion.posicionDestino,
            bloqueDeColsion.nombreOrigen
          );
          console.log("bloque:");
          console.log(bloqueDeColsion.posicionDestino);
          console.log("Nombre de Origen:", bloqueDeColsion.nombreOrigen);
          console.log(bloqueDeColsion);
          break;
        }
        //Si detecta colisión abajo, regresa el objeto, para que no lo pueda atravesar
        if (this.velocity.y > 0) {
          navegarNuevoCuarto(
            bloqueDeColsion.idDestino,
            bloqueDeColsion.posicionDestino,
            bloqueDeColsion.nombreOrigen
          );
          console.log("bloque:");
          console.log(bloqueDeColsion.posicionDestino);
          console.log("Nombre de Origen:", bloqueDeColsion.nombreOrigen);
          console.log(bloqueDeColsion);
          break;
        }
      }
    }

    if (!this.countdown) {
      for (let index = 0; index < disparosEnemigos.length; index++) {
        const bala = disparosEnemigos[index];

        //Comprobar si hay colisiones
        if (
          this.hitbox.position.x + this.hitbox.width > bala.x &&
          this.hitbox.position.x < bala.x + bala.width &&
          this.hitbox.position.y + this.hitbox.height > bala.y &&
          this.hitbox.position.y < bala.y + bala.height
        ) {
          this.recibirDañoBalaEnemigo(index);
        }

        // Comprobar si hay colisiones entre el hitbox del jugador y la bala
        if (
          this.hitbox.position.x + this.hitbox.width > bala.x && // El lado derecho del hitbox del jugador está más allá de la bala
          this.hitbox.position.x < bala.x + bala.width && // El lado izquierdo del hitbox del jugador está antes del lado derecho de la bala
          this.hitbox.position.y + this.hitbox.height > bala.y && // El lado inferior del hitbox del jugador está más allá de la bala
          this.hitbox.position.y < bala.y + bala.height
        ) {
          // El lado superior del hitbox del jugador está antes del lado inferior de la bala

          // Si todas las condiciones son verdaderas, la bala está dentro del hitbox del jugador
          this.recibirDañoBalaEnemigo(index);
        }
      }
    }
  }
  recibirDaño(index, enemigo) {
    if (!this.countdown) {


      if (enemigo.health > 1){
        enemigo.health -= 1;
        console.log("vida jack", enemigo.health);
        playSound("hurt"); // Reproduce el sonido de dolor
        if(this.extralives == 0){
          this.lives -= 1;
        } else {
          this.extralives -= 1;
        }
        this.countdown = true;
        if (this.lives <= 0) {
          gameOver = true;
        }
        return;
      }

      enemigos.splice(index, 1);
      playSound("hurt"); // Reproduce el sonido de dolor
      if(this.extralives == 0){
        this.lives -= 1;
      } else {
        this.extralives -= 1;
      }
      this.countdown = true;
      if (this.lives <= 0) {
        gameOver = true;
      }
    }
  }

  recibirDañoBalaEnemigo(index) {
    if (!this.countdown) {
      console.log(this.countdown);

      disparosEnemigos.splice(index, 1);
      playSound("hurt"); // Reproduce el sonido de dolor
      if(this.extralives == 0){
        this.lives -= 1;
      } else {
        this.extralives -= 1;
      }
      this.countdown = true;
      if (this.lives <= 0) {
        gameOver = true;
      }
    }
  }

  gameOver() {
    if (this.lives <= 0) {
      gameOver = true;
    }
  }

  lastEnemyKill(enemigo) {
    if (enemigos.length == 1) {
      if (enemigo.health == 1) {
        console.log("ultimo enemigo");
        itemsEnJuego.push(
          new Llave({ x: enemigo.position.x, y: enemigo.position.y })
        );
      }
    }
  }

  applyGravity(deltaTime) {
    //Sólo se aplica gravedad en Y porque es para que baje el objeto
    this.velocity.y += this.gravity * deltaTime;
    this.position.y += this.velocity.y * deltaTime*100;
  }
}
