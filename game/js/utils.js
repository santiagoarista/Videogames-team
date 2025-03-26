
//ESTA FUNCIÓN CONVIERTE EL MAPA DE CARACTERES una matriz de listas de caracteres
Array.prototype.parse2D= function(){
    const rows = [];                                  
                            //42 PORQUE TENEMOS 42 COLUMNAS
    for (let i = 0; i < this.length; i+=42) {
           rows.push(this.slice(i, i+42));
           
    }
    return rows;
    }
    
    //Sobrescribimos función de arreglos, lo que hace es del contendio del arreglo lo convierte a bloques de colisiones ordenados
    Array.prototype.creatObjectsFrom2d= function () {
        const objects = [];
        this.forEach((row, y) => {
            row.forEach((symbol, x)=>{
                   //Si encuentra de simbolo que sea gual a 2, significa que hay una colisión en el mapa, por lo que se tiene que agregar la colisión
                   if (symbol == 2||symbol == 1 ||symbol == 4 ||symbol == 3) {
                        //Agregar colisión  
                        objects.push(new BloqueColision({
                          position:{
                                 x: x*32,
                                 y: y*32,
                                 
                          },
                        }));
                   }
     
            })
     })

     return objects;

    }

function navegarNuevoCuarto(idDestino, posicionDestino){

       overlay.opacity
       player.velocity = {x:0,y:0};
       gsap.to(overlay, {opacity:1, onComplete:()=>{
       currentLevel  = idDestino[0]
       console.log(currentLevel)
       cuartos[currentLevel].init();
       player.position = posicionDestino;
       console.log(player.position)
       player.update(),
       player.draw(),
       player.velocity = {x:0,y:0};
      
        gsap.to(overlay, {opacity:0})
       
       
       },
       
       
       })

       }