/*
 * Simple top down adventure game
 *
 * Gilberto Echeverria
 * 2025-02-05
 */

"use strict";

// Global variables
const canvasWidth = 1366;
const canvasHeight = 768;

let ctx;

let frameStart;

let game;
let player;
let level;

let playerSpeed = 0.005;

// Scale of the whole world, to be applied to all objects
// Each unit in the level file will be drawn as these many square pixels
const scale = 29;








// Object with the characters that appear in the level description strings
// and their corresponding objects

//Chars personalizados de level_chars.js
let levelChars =CUSTOM_LEVEL_CHARS;


function main() {
    // Set a callback for when the page is loaded,
    // so that the canvas can be found
    window.onload = init;
}

function init() {
    const canvas = document.getElementById('canvas');
    //const canvas = document.querySelector('canvas');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    ctx = canvas.getContext('2d');

    gameStart();
}

function gameStart() {
    // Register the game object, which creates all other objects
    //AQUI SE CAMBIA EL NIVEL QUE SE QUIERE RENDERIZAR HECHO EN LEVELS.JS
    game = new Game('playing', new Level(GAME_LEVELS[1]));

    setEventListeners();

    // Call the first frame with the current time
    updateCanvas(document.timeline.currentTime);
}

function setEventListeners() {
    window.addEventListener("keydown", event => {
        if (event.key == 'w') {
            game.player.startMovement("up");
        }
        if (event.key == 'a') {
            game.player.startMovement("left");
        }
        if (event.key == 's') {
            game.player.startMovement("down");
        }
        if (event.key == 'd') {
            game.player.startMovement("right");
        }
    });

    window.addEventListener("keyup", event => {
        if (event.key == 'w') {
            game.player.stopMovement("up");
        }
        if (event.key == 'a') {
            game.player.stopMovement("left");
        }
        if (event.key == 's') {
            game.player.stopMovement("down");
        }
        if (event.key == 'd') {
            game.player.stopMovement("right");
        }
    });
}

// Function that will be called for the game loop
function updateCanvas(frameTime) {
    if (frameStart === undefined) {
        frameStart = frameTime;
    }
    let deltaTime = frameTime - frameStart;
    //console.log(`Delta Time: ${deltaTime}`);

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    game.update(deltaTime);
    game.draw(ctx, scale);

    // Update time for the next frame
    frameStart = frameTime;
    requestAnimationFrame(updateCanvas);
}

// Call the start function to initiate the game
main();
