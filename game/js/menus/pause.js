function drawPauseMenu() {
    context.fillStyle = "rgba(0, 0, 0, 0.5)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "white";
    context.font = "30px Arial";
    context.textAlign = "center";
    context.fillText("Game Paused", canvas.width / 2, canvas.height / 2 - 20);
    context.font = "20px Arial";
    context.fillText("Press 'P' to Resume", canvas.width / 2, canvas.height / 2 + 20);
}