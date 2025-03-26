
//Ele event es lo que detecta la pantalla, ya sea teclas, clics, etc, el evento tiene diferente información
//como en que parte se presionó, que tecla, cuánto tiempo, etc
window.addEventListener("keydown", (event)=>{
    //hacemos un switch para las diferentes teclas
    switch (event.key) {
        //SALTO-----------
        case "w":
            


            //Comporbación para hacer un solo salt,p sólo cuando no tenga velocidad en y, se puede hacer el salto
            if (player.velocity.y === 0) {
                //cantidad de salto
            player.velocity.y =-18;
            
           
            }
            
            keys.w.pressed= true;
            break;
        //MOVIMIETNO A LA IZQUIERDA    
        case "a":
            //COLISIÓN CON SALIDA DEL MAPA
            for (let index = 0; index < puertas.length; index++) {
                const door = puertas[index];
                     //CAMBIO DE MAPA, al salirte del mapa
                     if (player.hitbox.position.x <= door.position.x +door.width &&
                        player.hitbox.position.x +  player.hitbox.width>= door.position.x &&
                        player.hitbox.position.y +  player.hitbox.height>= door.position.y &&
                        player.hitbox.position.y <= door.position.y + door.height) {
                        
                        
                        //    console.log("Cambio de mapa")
                        //overlay.opacity
                        //gsap.to(overlay, {opacity:1, onComplete:()=>{
                        //    currentLevel  = cuartosAleatorios[currentLevel-1].conexionDerecha;
                        //    levels[currentLevel].init();
                        //    gsap.to(overlay, {opacity:0})
                        //}})
                    
                 
                     }
            }
            keys.a.pressed= true;

       
            break;    
        //MOVIMIENTO A LA DERECHA
        case "d":

            //COLISIÓN CON SALIDA DEL MAPA
            for (let index = 0; index < puertas.length; index++) {
                const door = puertas[index];
                     //CAMBIO DE MAPA, al salirte del mapa
        if (player.hitbox.position.x <= door.position.x +door.width &&
            player.hitbox.position.x +  player.hitbox.width>= door.position.x &&
            player.hitbox.position.y +  player.hitbox.height>= door.position.y &&
            player.hitbox.position.y <= door.position.y + door.height) {
           // console.log("Cambio de mapa")
            
        
     
         }
            }
            keys.d.pressed= true;


        
            keys.d.pressed= true;
  
            break;  
        //AGACHARSE    
        case "s":
        
            break;  
                              
            

    }
})



//parar los movimientos
window.addEventListener("keyup", (event)=>{
    //hacemos un switch para las diferentes teclas
    switch (event.key) {
        case "w":
            keys.w.pressed= false;
        case "a":
            keys.a.pressed= false;
       
            break;    
        //MOVIMIENTO A LA DERECHA
        case "d":
            keys.d.pressed= false;

            break;  
        //AGACHARSE    
        case "s":
      
            break;  
                              
            

    }
})