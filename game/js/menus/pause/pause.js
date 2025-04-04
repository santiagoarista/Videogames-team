// Variables para settings menu
let settingsOpen = false;

const pauseMenuImage = new Image();

pauseMenuImage.src = "../assets/menu/logo/Logo3.png";

const playButton = new Image();
playButton.src = "../assets/menu/6 Buttons/1/1_09.png";

const exitButton = new Image();
exitButton.src = "../assets/menu/6 Buttons/2/2_09.png";

const exitIcon = new Image();
exitIcon.src = "../assets/menu/3 Icons/Icons/Icon_35.png";

const settingsButton = new Image();
settingsButton.src = "../assets/menu/6 Buttons/3/3_09.png";

const playButtonIcon = new Image();
playButtonIcon.src = "../assets/menu/3 Icons/Icons/Icon_34.png";

const settingsButtonIcon = new Image();
settingsButtonIcon.src = "../assets/menu/3 Icons/Icons/Icon_07.png";

const settingsMusicButton = new Image();
settingsMusicButton.src = "../assets/menu/6 Buttons/2/2_06.png";

const settingsMusicButtonIcon = new Image();
settingsMusicButtonIcon.src = "../assets/menu/3 Icons/Icons/Icon_37.png";

const settingsResetButton = new Image();
settingsResetButton.src = "../assets/menu/6 Buttons/2/2_06.png";

const settingsEffectsButtonIcon = new Image();
settingsEffectsButtonIcon.src = "../assets/menu/3 Icons/Icons/Icon_06.png";

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

//Menú de pausa
function drawPauseMenu() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    //Menú
    const imgWidth = 600;
    const imgHeight = 300;
    //Play Button Icon
    const iconWidth = 55;
    const iconHeight = 55;
    //Settings Button Icon
    const settingsIconWidth = 55;
    const settingsIconHeight = 55;
    //Exit Button 
    const exitIconWidth = 55; 
    const exitIconHeight = 55;


    //Centro de canvas
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    //Posiciones
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
    context.fillStyle = "black";
    context.fillRect(0,0, canvas.width, canvas.height);

    //Dibujar menú
    context.globalAlpha = 1
    context.drawImage(pauseMenuImage, imgX, imgY, imgWidth, imgHeight);

    // Texto
    context.fillStyle = "white";
    context.font = "50px Arcade Gamer";
    context.textAlign = "center";
    context.shadowColor = "cyan"; //Efecto de letras neon
    context.shadowBlur = 15;
    context.fillText("Menú de Pausa", centerX, centerY - 180);
    console.log(centerX, centerY)

    // Resetear efecto neon
    context.shadowBlur = 0;
    context.shadowColor = "transparent";

    // Dibujar Play Button
    context.shadowColor = "cyan"; //Efecto neon
    context.shadowBlur = 15;
    context.drawImage(playButton, buttonX, buttonY, buttonWidth, buttonHeight);
    context.drawImage(playButtonIcon, iconX, iconY, iconWidth, iconHeight);
    console.log(buttonX, buttonY, 'BOTONES')
    

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


//Button Reiniciar Progreso. Globales para reusarlas en el eventListener 
const resetWidth = 210; 
const resetHeight = 80;
let resetX, resetY;

//Efectos de Sonido Button. Globales para reusarlas en el eventListener 
const effectsWidth = 80;
const effectsHeight = 80
let effectsX, effectsY;


//Menú de Ajustes
function drawSettingsMenu() {
    if (!settingsOpen) return;

    context.clearRect(0, 0, canvas.width, canvas.height);
    
    //Para Exit "X"
    const menuWidth = 500;
    const menuHeight = 350;
    //Menú
    const imgWidth = 600;
    const imgHeight = 300;
    //Music Button Icon
    const iconWidth = 55;
    const iconHeight = 55;
    //Efectos de Sonido Icon
    const effectsIconWidth = 55;
    const effectsIconHeight = 55;

    //Centro de canvas
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    //Posiciones
    const imgX = centerX - imgWidth / 2;
    const imgY = centerY - imgHeight / 2;
    buttonX = centerX - imgWidth / 2 + 65;
    buttonY = imgY + imgHeight / 2 - 78;
    const iconX = centerX - imgWidth / 2 + 77;
    const iconY = imgY + imgHeight / 2 - 58;
    resetX = centerX - imgWidth / 2 + 195;
    resetY = imgY + imgHeight / 2 - 78;
    effectsX = resetX + resetWidth + 45; 
    effectsY = resetY;
    const effectsIconX = effectsX + (effectsWidth - effectsIconWidth) / 2 ;
    const effectsIconY = effectsY + (effectsHeight - effectsIconHeight) / 2 + 6;
    

    const menuX = canvas.width / 2 - menuWidth / 2;
    const menuY = canvas.height / 2 - menuHeight / 2;

    //Dibujar BG
    context.globalAplha = 0.09
    context.fillStyle = "black";
    context.fillRect(0,0, canvas.width, canvas.height);

    //Dibujar menú
    context.globalAplha = 1
    context.drawImage(pauseMenuImage, imgX, imgY, imgWidth, imgHeight);
    console.log(imgX, imgY, 'BG')

    // Texto
    context.fillStyle = "white";
    context.font = "50px Arcade Gamer";
    context.textAlign = "center";
    context.shadowColor = "cyan"; //Efecto de letras neon
    context.shadowBlur = 15;
    context.fillText("Configuración", centerX, centerY - 180);
    console.log(canvas.height)
    console.log(centerX, centerY, 'POSICIONES')

    // Dibujar Music Button
    context.shadowColor = "cyan"; //Efecto neon
    context.shadowBlur = 15;
    context.drawImage(settingsMusicButton, buttonX, buttonY, buttonWidth, buttonHeight);
    context.drawImage(settingsMusicButtonIcon, iconX, iconY, iconWidth, iconHeight);

    //Dibujar Reiniciar Estadísticas Button
    context.drawImage(settingsResetButton, resetX, resetY, resetWidth, resetHeight);
    context.fillStyle = "white";
    context.font = "15px Arcade Gamer";
    context.textAlign = "center";
    context.shadowColor = "cyan"; //Efecto neon
    context.shadowBlur = 15;
    context.fillText("Eliminar", centerX, centerY - 35);
    context.fillText("Progreso", centerX, centerY - 13);

    //Effects Button
    context.drawImage(settingsMusicButton, effectsX, effectsY, effectsWidth, effectsHeight);
    context.drawImage(settingsEffectsButtonIcon, effectsIconX, effectsIconY, effectsIconWidth, effectsIconHeight);
    context.shadowBlur = 0;
    context.shadowColor = "transparent";

    // Resetear efecto neon
    context.shadowBlur = 0;
    context.shadowColor = "transparent";

    
    
    // Exit button for settings
    const closeX = menuX + menuWidth - 50;
    const closeY = menuY + 10;
    context.fillStyle = "red";
    context.font = "25px Arcade Gamer";
    context.fillRect(closeX + 60, closeY, 40, 40);
    context.fillStyle = "white";
    context.fillText("X", closeX + 81, closeY + 32);
    console.log(closeX, closeY, 'X')
    
}


// Event listeners para Menú completo
window.addEventListener("click", (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Ahora ajustamos las posiciones de los botones para que se correspondan correctamente con las coordenadas del mouse.
    // Si está en pantalla completa, las coordenadas del canvas cambiarán

    if (!settingsOpen && paused) {
        if (
            mouseX >= buttonX &&
            mouseX <= buttonX + buttonWidth &&
            mouseY >= buttonY &&
            mouseY <= buttonY + buttonHeight
        ) {
            paused = false;
            animate(); // Play
        }

        if (
            mouseX >= settingsX &&
            mouseX <= settingsX + settingsWidth &&
            mouseY >= settingsY &&
            mouseY <= settingsY + settingsHeight
        ) {
            settingsOpen = true;
            drawSettingsMenu(); // Draw settings menu
        }

        if (
            mouseX >= exitX &&
            mouseX <= exitX + exitWidth &&
            mouseY >= exitY &&
            mouseY <= exitY + exitHeight
        ) {
            console.log("Salir al Menú...");
            window.location.href = "principal_menu.html";
        }
    } else if (settingsOpen) {
        const menuWidth = 500;
        const menuHeight = 350;
        const menuX = canvas.width / 2 - menuWidth / 2;
        const menuY = canvas.height / 2 - menuHeight / 2;

        const closeX = menuX + menuWidth;
        const closeY = menuY + 10;
        const closeSize = 40;

        if (
            mouseX >= closeX &&
            mouseX <= closeX + closeSize &&
            mouseY >= closeY &&
            mouseY <= closeY + closeSize
        ) {
            settingsOpen = false;
            drawPauseMenu();
        }

        if (
            mouseX >= buttonX &&
            mouseX <= buttonX + buttonWidth &&
            mouseY >= buttonY &&
            mouseY <= buttonY + buttonHeight
        ) {
            sonidoMusica.muted();
            console.log("Music");
        }

        if (
            mouseX >= resetX &&
            mouseX <= resetX + resetWidth &&
            mouseY >= resetY &&
            mouseY <= resetY + resetHeight
        ) {
            console.log("Reset");
        }

        if (
            mouseX >= effectsX &&
            mouseX <= effectsX + effectsWidth &&
            mouseY >= effectsY &&
            mouseY <= effectsY + effectsHeight
        ) {
            console.log("Effects");
        }
    }
});