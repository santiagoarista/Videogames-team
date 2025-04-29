function drawCreditsScreen(deltaTime) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
  
    context.fillStyle = "white";
    context.textAlign = "center";
  
    let y = creditsY; // Variable local para posición de cada línea
    
    context.font = "48px Arcade Gamer";
    context.fillText("¡Gracias por jugar!", canvas.width / 2, y);
  
    context.font = "32px Arcade Gamer";
    y += 80;
    context.fillText("Desarrollado por: Ghostbusters", canvas.width / 2, y);
  
    y += 60;
    context.fillText("Música: Nombre del artista", canvas.width / 2, y);
  
    y += 60;
    context.fillText("Arte: Nombre del artista", canvas.width / 2, y);
  
    y += 60;
    context.fillText("Agradecimientos especiales a...", canvas.width / 2, y);
  
    y += 100;
    context.font = "24px Arcade Gamer";
    context.fillText("Presiona R para reiniciar", canvas.width / 2, y);
  
    if (!creditsFinished) {
        creditsY -= creditsSpeed * deltaTime;
    }
    
      // Detectar si ya terminó el scroll
      if (y < 100 && !creditsFinished) { // Cuando el último texto ya subió
        creditsFinished = true;
        showRestartButton();
      }
  }

  function showRestartButton() {
    restartButton = document.createElement("button");
    restartButton.innerText = "Reiniciar Juego";
    restartButton.style.position = "absolute";
    restartButton.style.top = "70%";
    restartButton.style.left = "50%";
    restartButton.style.transform = "translate(-50%, -50%)";
    restartButton.style.padding = "20px 40px";
    restartButton.style.fontSize = "24px";
    restartButton.style.borderRadius = "10px";
    restartButton.style.backgroundColor = "#00bfff";
    restartButton.style.color = "white";
    restartButton.style.border = "none";
    restartButton.style.cursor = "pointer";
    restartButton.style.zIndex = "1000";
  
    document.body.appendChild(restartButton);
  
    restartButton.addEventListener("click", () => {
      location.reload(); // Reinicia la página
    });
  }
  