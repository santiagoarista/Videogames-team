// Background 
const gameOverVideo = document.createElement("video");
gameOverVideo.src = "../assets/gameOver/gameOver.mp4"; // Asegúrate de que la ruta sea correcta
gameOverVideo.loop = true; //Loop 
gameOverVideo.muted = true; 
gameOverVideo.play(); // Iniciar reproducción automática

//Button Volver a Jugar. Global para EventListeners 
const playWidth = 300;
const playHeight = 60;
let playX, playY;

//Button Salir al Menú. Global para EventListeners 
const exitGameWidth = 300;
const exitGameHeight = 60;
let exitGameX, exitGameY

function drawGameOverScreen() {

    //Posiciones
    playX = canvas.width / 2 - 150;
    playY = canvas.height / 2.5;
    exitGameX = canvas.width / 2 - 150;
    exitGameY = canvas.height / 2.5 + 80

    // Dibujar la imagen de fondo
    context.drawImage(gameOverVideo, 0, 0, canvas.width, canvas.height);

    // Dibujar "GAME OVER"
    context.fillStyle = "white";
    context.font = "70px Arcade Gamer"; 
    context.textAlign = "center";
    context.textBaseline = "middle"; 
    context.shadowColor = "cyan"; //Efecto de letras neon
    context.shadowBlur = 15;
    context.fillText("GAME OVER", canvas.width / 2, canvas.height / 4); 

    // Dibujar botones
    drawButton(playX, playY, playWidth, playHeight, "Volver a Jugar", "black"); 
    drawButton(exitGameX, exitGameY, exitGameWidth, exitGameHeight, "Salir al Menú", "black"); 

    // Resetear efecto neon
    context.shadowBlur = 0;
    context.shadowColor = "transparent";

    // Hacer que la función se ejecute en cada frame para actualizar el video
    requestAnimationFrame(drawGameOverScreen);
}

// Función para dibujar botones reutilizables
function drawButton(x, y, width, height, text, color) {
    // Dibujar el rectángulo del botón
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
    
    // Dibujar el texto del botón
    context.fillStyle = "white";
    context.font = "20px Arcade Gamer";
    context.fillText(text, x + width / 2, y + height / 2);
}

canvas.addEventListener("click", (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Si settings no está abierto, actúa de acuerdo a pausa
    if (gameOver) {
        if (
            mouseX >= playX &&
            mouseX <= playX + playWidth &&
            mouseY >= playY &&
            mouseY <= playY + playHeight
        ) {
            console.log('Play again...')
            gameOver = false; 
            // Reset Player
            player.lives = 3; // Reiniciar vidas
            player.position = { x: 100, y: 100 }; // Reiniciar posición inicial para que parezca que cae en el cuarto spawn

            // Reiniciar el estado del juego
            currentLevel = 8; // Volver al cuarto spawn
            //Generar nueva disposición de cuartos
            listaCuartosAleatorios = generarLevels(crear_disposicion_cuartos()); 
            cuartos = generarLevels(crear_disposicion_cuartos()); 

            // Reset Level
            cuartos[currentLevel].init(); // Reinitialize the level
            animate(); // Play
        }

        // Al hacer click en Salir
        if (
            mouseX >= exitGameX &&
            mouseX <= exitGameX + exitGameWidth &&
            mouseY >= exitGameY &&
            mouseY <= exitGameY + exitGameHeight
        ) {
            console.log("Salir al Menú...");
            window.location.href = "principal_menu.html"; // Redirige a la página del menú
        }
    }
});

// Iniciar la animación cuando el video cargue solo cuando gameOver
if (gameOver){
    gameOverVideo.oncanplay = function() {
        drawGameOverScreen();
    };
}


