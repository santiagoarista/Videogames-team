
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
            keys.a.pressed= true;

       
            break;    
        //MOVIMIENTO A LA DERECHA
        case "d":
            keys.d.pressed= true;


        
            keys.d.pressed= true;
             break;  
        
         case "m":
                showMap = !showMap; // cambiar el showmap a verdadero o falso
                break;
        
         //PAUSAR JUEGO 
        case "p":
            paused = !paused; 
            if (!paused) {
                animate(); //Volver a renderizar las animaciones cuando no esté en pausa
            }
            break;
  
        
        
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