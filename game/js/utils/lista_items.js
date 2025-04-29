function ShowLinterna(enemigo){
    if (enemigo.health==1 && !itemsActivos[0]) {
        //console.log("enemigo golpeado 1")
        itemsEnJuego.push(new Linterna({x: enemigo.position.x, y: enemigo.position.y}))
    }
  }

  function ShowAsistente(enemigo){
    if (enemigo.health==1 && !itemsActivos[1]) {
        //console.log("enemigo golpeado 2")
        itemsEnJuego.push(
            new Asistente({x: enemigo.position.x, y: enemigo.position.y,
                frameRate: 6,
                imgResource: "../assets/characters/Slime2_Idle.png",
                animations:{
                    idleRight:{
                        frameRate:6,
                        frameBuffer:4,
                        loop :true,
                        imgResource: "../../assets/characters/main_character/IdleRight.png",
                        
                    },
                    idleLeft:{
                        frameRate:6,
                        frameBuffer:4,
                        loop :true,
                        imgResource: "../../assets/characters/main_character/IdleLeft.png",
                    },
                    runRight:{
                        frameRate:8,
                        frameBuffer:4,
                        loop :true,
                        imgResource: "../../assets/characters/main_character/Run.png",
                    },
                    runLeft:{
                        frameRate:8,
                        frameBuffer:4,
                        loop :true,
                        imgResource: "../../assets/characters/main_character/RunLeft.png",
                    },
                    jumpRight:{
                        frameRate:9,
                        frameBuffer:4,
                        loop :true,
                        imgResource: "../../assets/characters/main_character/Jump.png",
                        
                    },
                    jumpLeft:{
                        frameRate:9,
                        frameBuffer:4,
                        loop :true,
                        imgResource: "../../assets/characters/main_character/JumpLeft.png",
                        
                    },
                },
            
            }),
        )
    }
  }

 function ShowBotas(enemigo){
    if (enemigo.health==1 && !itemsActivos[2]) {
        //console.log("enemigo golpeado 3")
        itemsEnJuego.push(new Botas({x: enemigo.position.x, y: enemigo.position.y}))
    }
  }

  function ejecutarFuncionItemAleatoria(enemigo) {
    const funciones = [ShowLinterna, ShowAsistente, ShowBotas];
    
    // Probabilidad del 30% (0.3), ajusta este valor como desees
    const probabilidadDeDrop = 0.2;

    if (Math.random() < probabilidadDeDrop) {
        const funcionSeleccionada = funciones[Math.floor(Math.random() * funciones.length)];
        funcionSeleccionada(enemigo);
    } else {
        console.log("No drop esta vez.");
    }
}

function dibujarOscuridadSiNecesaria(idCuarto, cuartosOscuros) {
    if (idCuarto === 8 ||  !cuartosOscuros.has(idCuarto)) return;

    // Crea un gradiente radial que simula una linterna
    const centerX = player.position.x + player.width / 2;
    const centerY = player.position.y + player.height / 2;
    const radius = player.visionRadius || 80;

    const gradient = context.createRadialGradient(centerX, centerY, radius * 0.3, centerX, centerY, radius);
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');

    context.save();
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.restore();
}