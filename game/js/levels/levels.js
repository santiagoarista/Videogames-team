/*
 * String variables with the layout of the levels
 * https://eloquentjavascript.net/16_game.html
 *
 * EQUIPO GHOSTBUSTERS
 * 2025-01-22
 */

"use strict";

//EJEMPLO

//let levelEjemplo = `
//................
//.##############.
//.#....$.......#.
//.#............#.
//.#......#######.
//.#............#.
//.#......@.....#.
//.#............#.
//.##############.
//................
//`;


//REBE

let level_cuarto1 = ``;
let level_cuarto2 = ``;
let level_cuarto3 = ``;

//SANTIAGO

let level_cuarto4 = ``;
let level_cuarto5 = ``;
let level_cuarto6 = ``;


//Darío

let level_cuarto7 = ``;
let level_cuarto_spawn = ``;
let level_cuarto_final_boss = ``;


let GAME_LEVELS = [
level_cuarto1,
level_cuarto2,
level_cuarto3,
level_cuarto4,
level_cuarto5,
level_cuarto6,
level_cuarto7,
level_cuarto_spawn,
level_cuarto_final_boss
];

if (typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports))
  module.exports = GAME_LEVELS;
if (typeof global != "undefined" && !global.GAME_LEVELS)
  global.GAME_LEVELS = GAME_LEVELS;
