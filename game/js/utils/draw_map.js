let imgJEFE = new Image();
imgJEFE.src = "../assets/sprites/escenario_jefe_dario/spriteJEFE.png";

let imgPROTA = new Image();
imgPROTA.src = "../assets/sprites/JugadorIMG.png";

let imgLlave = new Image();
imgLlave.src = "../assets/sprites/35.png";

let llaves =[false,false,true,false,false,false,false,false,false,]
//Funcion para dibujar el mapa
function drawMap(cuartosAleatorios) {


    //Dibujar cuadro del mapa
    context.globalAlpha = 1; // Restaurar opacidad
    context.fillStyle = "rgb(35, 34, 34)";
    context.fillRect(canvas.width/2 - 300, 100, 640, 530);
    context.strokeStyle = "white";
    context.lineWidth = 10;
    context.lineJoin = "round";  // Hace los vértices redondeados
    context.strokeRect(canvas.width/2 - 300, 100, 640, 530);

    //Texto del Titulo
    context.font = "60px Arcade Gamer";  // Tamaño y fuente del texto
    context.fillStyle = "white";  // Color del texto
    context.shadowColor = "white";
    context.shadowBlur = 15;
    context.fillText("Mapa", canvas.width/2 -100, 200);  // Texto y posición (x, y)
    
    context.shadowColor = "transparent";
    context.shadowBlur = 0;

    //Creacion de cuartos en el mapa
    let startX = 525; // Posición inicial en X
    let startY = 250; // Posición inicial en Y
    let size = 100; // Tamaño de cada cuadrado
    let gap = 20; // Espacio entre cuadrados
    let cuadros = [];
    let index =0;
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            let x = startX + col * (size + gap);
            let y = startY + row * (size + gap);
            
            cuarto = cuartosAleatorios[index]
        
            cuadros.push(new ContainerCuarto(
                {position: {x:x, y:y}, 
                cuartoJefeFinal: cuarto.cuartoJefeFinal, 
                idcuarto:cuarto.idCuarto,

                salidaIZQ :cuarto. conexionIzquierda,
                salidaDER :cuarto.conexionDerecha ,
                salidaUP  :cuarto. conexionSuperior ,
                salidaDOWN:cuarto.conexionInferior,
            
            }));
            index++;
        }
    }

    cuadros.forEach(cuadrado => {
        cuadrado.draw();
        
    });

    
}

class ContainerCuarto{
    constructor({colorfondo = "rgb(65, 65, 65)" , icono, salidaIZQ, salidaDER, salidaUP, salidaDOWN, position, idcuarto, cuartoJefeFinal=false, esCuartoActual=false}){
        this.colorfondo = colorfondo,
        this.icono = icono,
        this.salidaIZQ = salidaIZQ, 
        this.salidaDER = salidaDER, 
        this.salidaUP = salidaUP,
        this.salidaDOWN = salidaDOWN,
        this.position = position,
        this.idcuarto = idcuarto,
        this.cuartoJefeFinal = cuartoJefeFinal,
        this.esCuartoActual = esCuartoActual;
    }

    draw(){
        if(this.idcuarto == currentLevel){
            this.esCuartoActual = true;
        } else {
            this.esCuartoActual = false;
        }
        
        if(this.cuartoJefeFinal){
            this.colorfondo = "rgb(168, 10, 10)";
        }

        if(this.esCuartoActual){
            this.colorfondo = "yellow";
            context.drawImage(imgJEFE, this.position.x + 20, this.position.y + 20, 60, 60);
        }
        if((llaves[this.idcuarto-1]) == true){
            this.colorfondo = "rgb(119, 245, 93)";
        }


        if(this.salidaDER){
           context.fillStyle = "white";
           context.fillRect(this.position.x + 50, this.position.y + 50, 100, 20)
        }

        if(this.salidaUP){
            context.fillStyle = "white";
            context.fillRect(this.position.x + 50-20, this.position.y+50 , 20, -70)
        }
     
        context.fillStyle = this.colorfondo;
        context.fillRect(this.position.x, this.position.y, 100, 100);
        if(this.cuartoJefeFinal){
            context.drawImage(imgJEFE, this.position.x + 20, this.position.y + 20, 60, 60);
        }
        if(this.esCuartoActual){
            context.drawImage(imgPROTA, this.position.x + 30, this.position.y + 20, 40, 60);
        }

        context.strokeStyle = "white";
        context.lineWidth = 2;
        context.lineJoin = "round";
        context.strokeRect(this.position.x, this.position.y, 100, 100);
       console.log((llaves[this.idcuarto-1]));
        if((llaves[this.idcuarto-1]) == true){
            context.drawImage(imgLlave, this.position.x + 33, this.position.y + 20, 30, 60);
            console.log("cuarto "+this.idcuarto);
        }

    }
}