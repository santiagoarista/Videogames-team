
//caracteres para hacer los niveles y sus esprites, si falta alguno, agregar el sprite
//IMPORTANTE COMENTAR EN CADA CHAR, clara y consisamente la descripción del sprite con el fin de poder reutilizarlos

let  CUSTOM_LEVEL_CHARS = {

    //TODO: QUITAR DEspues de terminar plantillas

   // Rect defined as offset from the first tile, and size of the tiles
    ".": {objClass: GameObject,
          label: "wall",
          sprite: '../assets/sprites/escenario_jefe_dario/Tile_28.png',
          rect: new Rect(0, 0, 32, 32)},
    "#": {objClass: GameObject,
          label: "wall",
          sprite: '../assets/sprites/escenario_jefe_dario/Tile_28.png',
          rect: new Rect(0, 0, 0, 0)},
    "@": {objClass: Player,
          label: "player",
          //sprite: '../assets/sprites/blordrough_quartermaster-NESW.png',
          //rect: new Rect(0, 0, 48, 64),
          //sheetCols: 3,
          //startFrame: [7, 7]},
          sprite: '../assets/sprites/link_sprite_sheet.png',
          rect: new Rect(0, 0, 120, 130),
          sheetCols: 10,
          startFrame: [0, 0]},
    "$": {objClass: Coin,
          label: "collectible",
          sprite: '../assets/sprites/coin_gold.png',
          rect: new Rect(0, 0, 32, 32),
          sheetCols: 8,
          startFrame: [0, 7]},
};


    // Rect defined as offset from the first tile, and size of the tiles
   //EJEMPLOS:

   //SPRITE DE SET DE SPRITES CON ANIMACIÓN
   // "$": {objClass: Coin,
   //label: "collectible",
   //sprite: '../assets/sprites/coin_gold.png',
   //rect: new Rect(0, 0, 32, 32),
   //sheetCols: 8,
   //startFrame: [0, 7]},

   //SPRITE DE IMÁGEN ÚNICA   
   //"#": {objClass: GameObject,
   // label: "wall",
   // sprite: '../assets/sprites/ProjectUtumno_full.png',
   // rect: new Rect(2, 19, 32, 32)},
   