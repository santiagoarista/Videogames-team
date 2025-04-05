# **Instrucciones para correr Nine-Shions**

## **¿Como corro el juego?**
  1. Primero debe clonar el repositorio en su dispositivo para tener todas las carpetas y archivos del juego.
  2. Para correr el juego de Nineshions, primero empieza abriendo el archivo html con el nombre de ["principal_menu.html"](https://github.com/santiagoarista/Videogames-team/blob/main/game/html/principal_menu.html) en el navegador que prefieras. Ahi se abrira el menu principal del juego.
  3. Ya estando en el menu, mueve el cursor hacia el boton que dice "Jugar" para que cambie la pantalla al juego.
  4. Una vez que presiones el boton, ya empezaras a jugar. Tambien hay un boton de pantalla completa en la parte superior del canvas para que se vea más grande y para más comodidad.

## **¿Cuales son los controles?**
  - w - Saltar
  - a - Moverse a la Izquierda
  - d - Moverse a la Derecha
  - s - Agacharse
  - m - Desplegar Mapa
  - p - Menú de Pausa
  - k - Disparar a la derecha o izquierda
  - Mantener presionado k y w - empiezas a disparar hacia arriba, pero dejaras de disparar en cuanto te muevas
  - l - Cambiar de arma, pero solo si tocas un arma en cuarto principal

## **Funcionalidades terminadas y en desarrollo**
### Funcionalidades terminadas:
  - El jugador puede moverse por el juego a traves de las puertas que tengan un color verde.
  - Tambien para verificar cuales salidas estan activas, es posible consultar el mapa con la tecla m
  - Los fantasmas al detectar un enemigo vuelan directamente al jugador
  - Los jacks no se mueven hacia el jugador porque tienen una secuencia de movimiento de derecha a izquierda, pero empiezan a dispararle en el momento en que lo detectan.
  - El jugador puede realizar disparos para eliminar a los enemigos
  - Los fantasmas se consideran enemigos debiles, por lo que cuando reciben un disparo del jugador desaparecen
  - Los jacks son mucho más resistentes que los fantasmas, toman más disparos para ser eliminados. Pero cuando su vida llega a 0 o menor despues de recibir varios disparos, se eliminan.
  - Si el jugador toca a un enemigo o toca uno de los bullets de los enemigos, se le quitara una vida y entrará en un cooldown donde no recibe daño por unos segundos
  - Cuando el jugador toca un objeto, este inmediatamente desaparece. Significando que tiene el objeto puesto

### Funcionalidades en desarrollo
  - Hay salidas que no estan activas para respetar la aleatoridad de la exploracion del mapa, pero todavia falta crear colisiones a las salidas no activas
  - Se supone que al agarrar un item te da un efecto que te ayuda en el camino. Todavia falta crear esos efectos despues de recoger los objetos
  - Por ahora, los enemigos solo estan en el cuarto principal, el resto todavia no tiene enemigos. Por eso tenemos que añadir más enemigos en el resto de habitaciones
  - Al cambiar de arma, se debe aumentar el daño que hace el jugador. Falta implementar eso para que el jugador tenga algo de ayuda al llegar a cierto puntaje
  - Al eliminar un enemigo recibes puntos, falta hacer un conteo de puntos y que se sume el puntaje al eliminar enemigos.
  - Falta hacer un jefe final, el cual se desbloquea solo cuando se derrotan todos los enemigos de todos los cuartos y consigues un total de 8 llaves.
  - Al igual que las salidas no activas, falta crear colisiones para que no se pueda ingresar al cuarto del jefe final. Por ahora es posible saber cual habitación es del jefe con el mapa, justo la casilla roja con una calabaza grande es el jefe final. 

