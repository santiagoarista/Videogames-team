//Ele event es lo que detecta la pantalla, ya sea teclas, clics, etc, el evento tiene diferente información
//como en que parte se presionó, que tecla, cuánto tiempo, etc
window.addEventListener("keydown", (event) => {
  //hacemos un switch para las diferentes teclas
  switch (event.key) {
    //SALTO-----------
    case "w":
      //Comporbación para hacer un solo salt,p sólo cuando no tenga velocidad en y, se puede hacer el salto
      if (player.velocity.y === 0) {
        //cantidad de salto
      player.velocity.y = -8;
      player.jumpCount = 1;
        playSound("jump")
      } else if (player.canDoubleJump && player.jumpCount < 2) {
        // Segundo salto
        playSound("jump")
        player.velocity.y = -8;
        player.jumpCount++;
      }

      keys.w.pressed = true;
      break;
    //MOVIMIETNO A LA IZQUIERDA
    //case " ":
    //  console.log("salto space")
    //  //Comporbación para hacer un solo salt,p sólo cuando no tenga velocidad en y, se puede hacer el salto
    //  if (player.velocity.y === 0) {
    //    //cantidad de salto
    //    player.velocity.y = -8;
    //    player.jumpCount = 1;
    //    playSound("jump")
    //  } else if (player.canDoubleJump && player.jumpCount < 2) {
    //    // Segundo salto
    //    playSound("jump")
    //    player.velocity.y = -8;
    //    player.jumpCount++;
    //  }
//
    //  keys.space.pressed = true;
    //  break;
    //MOVIMIETNO A LA IZQUIERDA
    case "a":
      keys.a.pressed = true;

      break;
    //MOVIMIENTO A LA DERECHA
    case "d":
      keys.d.pressed = true;

      keys.d.pressed = true;
      break;

    case "m":
      showMap = !showMap; // cambiar el showmap a verdadero o falso
      break;

    case "r":
      // pause = false;
      // gameOver = false; 
      showCredits = true; // cambiar el showmap a verdadero o falso
      break;


    //PAUSAR JUEGO
    case "p":
      if (gameOver) {
        break;
      }
      
      if (paused) {
        // Si estaba pausado, lo quitamos
        paused = false;
        isAnimating = false;
        requestAnimationFrame(animate); // Continuamos la animación
      } else {
        // Si no estaba pausado, pausamos
        paused = true;
      }    
      
      break;

    case "g":
      pause = false;

      if (gameOver) {
        gameOver = false;
        isAnimating = false;
        requestAnimationFrame(animate); // Continuamos la animación
      } else {
        paused = false;
        gameOver = true;
        drawGameOverScreen();; // Resume the game if gameOver is turned off
      }
      break;

    case "l":
      keys.l.pressed = true;
      break;

    case "k":
      keys.k.pressed = true;
      break;

    case "s":
      break;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const fullscreenBtn = document.getElementById("fullscreen-btn");

  fullscreenBtn.addEventListener("click", () => {
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen();
    } else if (canvas.webkitRequestFullscreen) {
      canvas.webkitRequestFullscreen();
    } else if (canvas.msRequestFullscreen) {
      canvas.msRequestFullscreen();
    }
  });
  buttonX = canvas.width / 2 - imgWidth / 2 + 65;
  buttonY = imgY + imgHeight / 2 - 78;
});

//parar los movimientos
window.addEventListener("keyup", (event) => {
  //hacemos un switch para las diferentes teclas
  switch (event.key) {
    case "w":
      keys.w.pressed = false;
      break;
    //case " ":
    //    keys.space.pressed = false;
    //    break;
    case "a":
      keys.a.pressed = false;

      break;
    //MOVIMIENTO A LA DERECHA
    case "d":
      keys.d.pressed = false;

      break;
    case "l":
      keys.l.pressed = false;
      lKeyProcessed = false;
      break;
    //AGACHARSE
    case "s":
      break;
    case "k":
      //Dinamicas de disparo
      keys.k.pressed = false;
      disparoActivo = false;
      break;
  }
});
