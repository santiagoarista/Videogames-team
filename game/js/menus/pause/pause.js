const pauseMenuImage = new Image();
pauseMenuImage.src = "../../../assets/menu/5 Logo/Logo3.png";

const playButton = new Image();
playButton.src = "../../../assets/menu/6 Buttons/1/1_09.png";

const exitButton = new Image();
exitButton.src = "../../../assets/menu/6 Buttons/2/2_09.png";

const exitIcon = new Image();
exitIcon.src = "../../../assets/menu/3 Icons/Icons/Icon_35.png";

const settingsButton = new Image();
settingsButton.src = "../../../assets/menu/6 Buttons/3/3_09.png";

const playButtonIcon = new Image();
playButtonIcon.src = "../../../assets/menu/3 Icons/Icons/Icon_34.png";

const settingsButtonIcon = new Image();
settingsButtonIcon.src = "../../../assets/menu/3 Icons/Icons/Icon_07.png";

// Play Button. Globales para reusarlas en el eventListener
const buttonWidth = 80;
const buttonHeight = 80;
let buttonX, buttonY; 

//Exit Button. Globales para resuarlas en el eventlistener
const exitWidth = 210;
const exitHeight = 80;
let exitX, exitY;

// Settings Button. Globales para resuarlas en el eventlistener
const settingsWidth = 80;
const settingsHeight = 80;
let settingsX, settingsY;

function drawPauseMenu() {
    //BG
    const bgWidth = 650; 
    const bgHeight = 420;
    //Menú
    const imgWidth = 600;
    const imgHeight = 300;
    //Play Button Icon
    const iconWidth = 55;
    const iconHeight = 55;
    //Settings Button Icon
    const settingsIconWidth = 55;
    const settingsIconHeight = 55;
    //Exit Icon 
    const exitIconWidth = 55; // Define the size of the exit icon
    const exitIconHeight = 55;


    //Centro de canvas
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    //Posiciones
    const bgX = centerX - bgWidth / 2;
    const bgY = centerY - bgHeight / 2 - 35;
    const imgX = centerX - imgWidth / 2;
    const imgY = centerY - imgHeight / 2;
    buttonX = centerX - imgWidth / 2 + 65;
    buttonY = imgY + imgHeight / 2 - 78;
    const iconX = centerX - imgWidth / 2 + 82;
    const iconY = imgY + imgHeight / 2 - 58;
    exitX = centerX - imgWidth / 2 + 195;
    exitY = imgY + imgHeight / 2 - 78;
    settingsX = exitX + exitWidth + 45; 
    settingsY = exitY;
    const settingsIconX = settingsX + (settingsWidth - settingsIconWidth) / 2 + 2;
    const settingsIconY = settingsY + (settingsHeight - settingsIconHeight) / 2 + 8;
    const exitIconX = exitX + exitWidth - 75; // Position to the left of the text
    const exitIconY = exitY + (exitHeight - exitIconHeight) / 2 + 8;

    //Dibujar BG
    context.globalAplha = 0.09
    context.fillStyle = "black";
    context.fillRect(0,0, canvas.width, canvas.height);

    //Dibujar menú
    context.globalAplha = 1
    context.drawImage(pauseMenuImage, imgX, imgY, imgWidth, imgHeight);

    // Texto
    context.fillStyle = "white";
    context.font = "50px Arcade Gamer";
    context.textAlign = "center";
    context.shadowColor = "cyan"; //Efecto de letras neon
    context.shadowBlur = 15;
    context.fillText("Menú de Pausa", centerX, centerY - 180);

    // Resetear efecto neon
    context.shadowBlur = 0;
    context.shadowColor = "transparent";

    // Dibujar Play Button
    context.shadowColor = "cyan"; //Efecto neon
    context.shadowBlur = 15;
    context.drawImage(playButton, buttonX, buttonY, buttonWidth, buttonHeight);
    context.drawImage(playButtonIcon, iconX, iconY, iconWidth, iconHeight);

    //Dibujar Exit Button
    context.drawImage(exitButton, exitX, exitY, exitWidth, exitHeight);
    context.fillStyle = "white";
    context.font = "20px Arcade Gamer";
    context.textAlign = "center";
    context.shadowColor = "cyan"; //Efecto neon
    context.shadowBlur = 15;
    context.fillText("Salir", centerX - 20, centerY - 18);
    context.drawImage(exitIcon, exitIconX, exitIconY, exitIconWidth, exitIconHeight);
    // Resetear efecto neon

    //Dibujar Settings Button
    context.drawImage(settingsButton, settingsX, settingsY, settingsWidth, settingsHeight);
    context.drawImage(settingsButtonIcon, settingsIconX, settingsIconY, settingsIconWidth, settingsIconHeight);
    context.shadowBlur = 0;
    context.shadowColor = "transparent";
}

//Play button Event
canvas.addEventListener("click", (event) => {

    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    if (
        mouseX >= buttonX &&
        mouseX <= buttonX + buttonWidth &&
        mouseY >= buttonY &&
        mouseY <= buttonY + buttonHeight
    ) {
        paused = false; 
        animate();// Unpause the game
    }
});