# **Nine-Shions**

## _Documento de Diseño del Juego_

Equipo Ghostbusters

- Santiago Arista Viramontes
- Darío Peña Mariano
- Rebeca Dávila Araiza

## _Índice_

1. [índice](#Índice)
1. &#x20;[Diseño del juego](#Diseño_del_Juego)
   - [Resumen](#Resumen)
   - [Jugabilidad](#Jugabilidad)
   - [Mentalidad](#Mentalidad)
1. &#x20;[Apectos técnicos](#Aspectos_técnicos)
   - [Pantallas](#Pantallas)
   - [Controles](#Controles)
   - [Mecánicas](#Mecánicas)
1. [Diseño de Nivel](#Diseño-de-nivel)
   1. [Temática](#Temática)
      1. Ambiente
      2. Objetos
         1. Ambientales
         2. Interactivos
      3. Desafíos
   2. [Borradores de Diseños de cuartos](#Borradores-de-diseños-de-cuartos)
   3. [Flujo del Juego](#Flujo-de-juego)
1. [Desarrollo](#Desarrollo)
   1. [Clases Abstractas](#clases-abstractas--componentes)
   2. [Clases Derivadas](#Clases-Derivadas--Componentes)
1. [Gráficos](#gráficos)
   1. [Atributos de Estilo](#atributos-de-estilo)
   2. [Gráficos Necesarios](#Gráficos-necesarios)
1. [Sonidos/Música](#SonidosMúsica)
   1. [Atributos de Estilo](#atributos-de-estilo-1)
   2. [Sonidos Necesarios](#sonidos-necesarios)
   3. [Música Necesaria](#música-necesaria)

## _Diseño_del_Juego_

### **Resumen**

Nineshions es un juego de plataformas roguelite de terror en el que un cazador de monstruos entra en una mansión misteriosa de donde emergen criaturas para asustar a la gente cada Halloween. El cazador debe derrotar a todos los monstruos en las ocho habitaciones de la mansión. No será una tarea fácil en un lugar oscuro, grande y peligroso, por lo que contará con la ayuda ocasional de un asistente que dañará a algunos enemigos, una linterna para iluminar en la oscuridad y una mejora que le permitirá hacer un doble salto en las plataformas. A medida que explore la mansión, deberá encontrar ocho llaves para entrar en la novena habitación, donde se encuentra el jefe final, y derrotarlo para salvar Halloween.

### **Jugabilidad**

El cazador de monstruos se controla con las teclas W, A, S y D para moverse a la izquierda, derecha, saltar y descender de una plataforma.
El jugador debe navegar a través de ocho habitaciones dentro de la mansión, luchar contra diferentes monstruos y recolectar ocho llaves para acceder a la sala del jefe final. El desafío radica en la gestión de recursos (vidas limitadas, pérdida de llaves al morir) y en el movimiento estratégico (usando el doble salto y el asistente).

### **Mentalidad**

Queremos que el jugador se sienta asustado, indefenso y confundido al comienzo del juego, en una mansión misteriosa con algunas habitaciones oscuras cuyo orden cambia tras la muerte y donde los monstruos acechan. Sin embargo, a medida que el jugador derrota monstruos, gana experiencia para aumentar su daño y derrotarlos más fácilmente. El jugador también debe ser cauteloso, ya que puede perder esta experiencia y las llaves recolectadas si muere, lo que le presenta más desafíos y lo obliga a usar su propia habilidad, con la ayuda de los objetos, para limpiar la mansión.

---

## _Aspectos_técnicos_

### **Pantallas**

1. Pantalla de Título
   - Logo del Juego
   - Botón de Jugar
   - Boton de registro
   - Boton de estadisticas del juego
2. Pantalla de Juego
   - Sección de Vida
   - Sección de Llaves
   - Sección de Juego
   - Contenedor de Pausa
     - Continuar
     - Configuración
     - Salir del Juego
   - Contenedor del Mapa
     - Habitaciones
     - Sala del Jefe
     - Título
     - Habitación Actual
     - Habitaciones Completadas
3. Pantalla de Configuración Rapida
   - Volumen General
   - Reiniciar Progreso
4. Pantalla de GAME OVER
   - Volver a jugar
   - Salir del juego
5. Pantalla de Créditos
   - Créditos del Juego

**Bocetos de pantallas**:
   -Panralla de pausa
      ![](sketches/pantallas/pause_screen.png)
   -Pantalla de mapa
      ![](sketches/pantallas/map_screen.png)

### **Controles**

- w - Saltar / Doble Salto
- a - Moverse a la Izquierda
- d - Moverse a la Derecha
- s - Agacharse
- m - Desplegar Mapa
- p - Menú de Pausa
- k - Disparar
- l - Cambiar de arma

### **Mecánicas**

#### Mecánicas de Escenarios:

- La primera habitación donde reaparece el jugador es la habitación segura, donde no hay enemigos y se puede encontrar un arsenal de armas para desbloquear nuevas según el puntaje del juego.
- Al abrir el mapa, el juego no se detiene, por lo que el jugador debe abrirlo en momentos estratégicos.
- Hay tres armas en la habitación segura, cada una con diferentes mecánicas de disparo, y se pueden desbloquear a medida que se avanza en el juego.

#### Reglas:

1. El jugador debe explorar las ocho habitaciones para obtener las llaves y entrar en la sala del jefe.
2. Tiene tres vidas en total; al perderlas, debe reiniciar el nivel.
3. Puede explorar las habitaciones libremente a través de las diferentes salidas dentro de una habitación.
4. Tiene un arma predeterminada con la que puede disparar a los enemigos y dirigir sus disparos.
5. Derrotar enemigos otorga experiencia, aumentando el daño del arma. Esta experiencia se reinicia si el jugador muere.
6. El último monstruo en cada habitación tendrá una llave, por lo que el jugador debe derrotar a todos los monstruos en cada habitación hasta obtenerlas.
7. Un monstruo aleatorio puede otorgar un objeto al ser derrotado:
   - Linterna: Aumenta el rango de visión en habitaciones oscuras.
   - Asistente: Dispara a algunos enemigos con un rango de ataque menor y menor daño.
   - Doble Salto: Permite hacer un segundo salto en el aire.
8. Estos objetos se obtienen una sola vez y permanecen incluso tras la muerte.
9. Una vez obtenidas todas las llaves, el jugador debe encontrar la puerta secreta que conduce al jefe final.

#### Mecanicas con enemigos
 * Fantasmas: Los fantasmas flotan por las habitaciones sin colisionar con los bloques. En cuanto detecten al juagdor, los fantasmas flotaran a la dirección de este, y cuando el fantasma toca al jugador, el jugador perderá una vida y entrata en un cooldown donde será invulnerable a cualquier colision con los enemigos. Al derrotar este tipo de enemigos, el jugador ganara un total de 50 puntos, los cuales si se consiguen 300 o 500 puntos podra desbloquear otras armas para incrementar su daño a los enemigos.
 * Jack: Un jack tambien flota en las habitaciones sin colisionar con los bloques, con la diferencia de que solo se mueve de arriba y abajo y puede realizar disparos en el momento que detecta al jugador. Si el disparo colisiona con el jugador, perderá una vida y entrata en un cooldown donde será invulnerable a cualquier colision con los enemigos. Al derrotar este tipo de enemigos, el jugador ganara un total de 80 puntos, los cuales si se consiguen 300 o 500 puntos podra desbloquear otras armas para incrementar su daño a los enemigos.

---

## _Diseño de nivel_

### **Temática**

1. Mansión embrujada
   1. _Ambiente_
      1. Brillante, impredecible, intrigante, misteriosa, sobrenatural
   2. _Objetos_
      1. Escenario de Fondo
         1. Luces neón
         2. Grafitis
         3. Bloques
      2. Interactuables
         1. Linterna
         
         2. Asistente
         
         3. Botas
         4. Armas
   3. _Desafíos_
        1. Fantasmas
        2. Jack

### Borradores de diseños de cuartos

   1. Cuartos:
      -Jefe final
      ![](sketches/cuartos/cuarto_jefeFinal_skecth.png)
      
      -Cuarto Spawn
      ![](sketches/cuartos/cuarto_spawn_sketch.png)
      
      -Cuarto 1
      ![](game/assets/niveles_fondo/Scene1.png)
      
      -Cuarto 2
      ![](game/assets/niveles_fondo/Scene2.png)
      
      -Cuarto 3
      ![](game/assets/niveles_fondo/Scene3.png)
      
      -Cuarto 4
      ![](game/assets/niveles_fondo/Scene4.png)
      
      -Cuarto 5
      ![](game/assets/niveles_fondo/Scene5.png)
      
      -Cuarto 6
      ![](game/assets/niveles_fondo/Scene6.png)

    

### **Flujo de juego**

1. El jugador comienza en la sala de reaparición.
2. En esa sala, el jugador puede encontrar tres armas para usar, pero al principio o después de reaparecer, solo podrá usar la primera (se enseñan los "controles de movimiento").
3. Hay cuatro salidas abiertas en esa sala, el jugador puede ir hacia cualquier dirección que desee.
4. En cualquiera de las habitaciones en las que el jugador decida entrar, un grupo de enemigos dentro comenzará a atacarlo.
5. El jugador dispara a los enemigos para eliminarlos.
6. El último enemigo que el jugador derrote soltará una llave que el jugador debe recoger.
7. Luego, el jugador debe continuar hacia la siguiente habitación que decida explorar.
8. Algunos monstruos otorgarán un ítem al jugador para facilitar el juego, el cual solo se puede recoger una vez. El jugador puede tener estos ítems permanentemente.
9. Eventualmente, el jugador encontrará la puerta al jefe final, pero debe recolectar las ocho llaves para poder entrar.

---

## Desarrollo

### **Clases Abstractas / Componentes**

1. #### Sprite
   - ##### Atributos
      * posicion
      * imagen
      * cargado
      * ancho
      * largo
      * framerate
      * frameActual
      * framesTranscurridos
      * frameBuffer
      * animaciones
      * ciclo
      * autoplay
      * visible
      * countdown
   - ##### Metodos
      * Dibujar
      * Reproducir
      * ActualizarFrames
      * EmpezarParpadeo
      * EstablecerCountdown
2. #### Cuarto
   - ##### Atributos
      * idCuarto
      * cuartoSpawn
      * cuartoJefeFinal
      * conexionSuperior
      * conexionIzquierda
      * conexionDerecha
      * posicionJugadorSuperior
      * posicionJugadorInferior
      * posicionJugadorIzquierda
      * posicionJugadorDerecha
      * imgBackground
      * colisiones
4. #### ConexionCuarto
   - ##### Atributos
      * idConexion
      * idOrigen
      * idDestino
      * esConexionJefe
      * conexionActiva
      * posicionDestino
6. #### ControladorDeAudio
   - ##### Atributos
      * accion
      * audio
      * ciclo
      * volumen
   - ##### Metodos
     * reproducir
     * mutar
     * pausar
     * detener
     * establecerVolumen
     * establecerSonido
     * fadeIn
     * fadeOut
8. #### ContenedorCuarto
   - ##### Atributos
      * colorfondo
      * icono
      * salidaIZQ
      * salidaDER
      * salidaUP
      * salidaDOWN
      * posicion
      * idCuarto
      * cuartoJefeFinal
      * esCuartoActual
   - ##### Metodos
     * dibujar

### **Clases Derivadas / Componentes**

1. #### Jugador, derivada de Sprite
   - ##### Atributos
      * EnTransicion
      * visible
      * countdown
      * countdownDelay
      * bulletController
      * posicion
      * velocidad
      * lados
      * gravedad
      * bloques de colision
      * puertas
      * vidas
      * parpadeo
      * parapdeo Intervalo
      * parpadeo Duracion
      * llaves
      * objetos
   - ##### Metodos
      * BajarVidas
      * DibujarVidas
      * DibujarLlaves
      * Actualizar
      * Disparar
      * CambiarSprite
      * ActualizarHitbox
      * ChecarColisionesHorizontales
      * ChecarColisionesVerticales
      * RecibirDaño
      * RecibirDañoBalaEnemigo
      * GameOver
      * AplicarGravedad
2. #### Enemigo1, derivada de Sprite
   - ##### Atributos
      * indice
      * salud
      * bulletController
      * posicion
      * velocidad
      * lados
      * gravedad
      * bloques de colision
      * puertas
      * disparosJugador
      * ImagenVidas
   - ##### Metodos
      * RecibirDaño
      * Actualizar
      * Disparar
      * CambiarSprite
      * ActualizarHitbox
      * ChecarColisionesHorizontales
      * ChecarColisionesVerticales
      * AplicarGravedad
      * RecibirGolpe
3. #### Enemigo2, derivada de Sprite
   - ##### Atributos
      * indice
      * salud
      * EnemigobulletController
      * posicion
      * delayBala
      * velocidadBala
      * velocidadEnemigo
      * direccion
      * velocidad
      * lados
      * umbralDisparo
      * direccionDisparo
      * movimiento
      * umbralesMovimiento
      * bloques de colision
      * puertas
      * estatico
      * disparosJugador
      * imagenVida
   - ##### Metodos
      * RecibirDaño
      * Actualizar
      * Disparar
      * CambiarSprite
      * ActualizarHitbox
      * ChecarColisionesHorizontales
      * ChecarColisionesVerticales
      * RecibirGolpe
4. #### Items, derivada de Sprite
   - ##### Atributos
      * idObjeto
      * tipo
      * posicion
      * velocidad
      * lados
      * gravedad
      * bloques de colision
   - ##### Metodos
      * Actualizar
      * ActualizarHitbox
      * ChecarColisionesHorizontales
      * ChecarColisionesVerticales
      * AplicarGravedad
5. #### Linterna, derivada de Item
   - ##### Atributos
      * idObjeto
      * largo
      * ancho
   - ##### Metodos
      * Dibujar
      * ActualizarHitbox
6. #### Asistente, derivada de Item
   - ##### Atributos
      * frameRate
      * imgFuente
      * idObjeto
      * tipo
      * x
      * y
   - ##### Metodos
      * CambiarSprite
      * ActualizarHitbox
5. #### Botas, derivada de Item
   - ##### Atributos
      * idObjeto
      * largo
      * ancho
   - ##### Metodos
      * Dibujar
      * ActualizarHitbox
6. #### Arma, derivada de Item
   - ##### Atributos
      * idObjeto
      * tipo
      * imgFuente
      * x
      * y
      * idArma
      * largo
      * ancho
   - ##### Metodos
      * Actualizar
      * Dibujar
      * ActualizarHitbox
7. #### Puerta, derivada de Sprite
   - ##### Atributos
      * posicionOrigen
      * posicionDestino
      * idOrigen
      * idDestino
      * puertaActiva

---

## _Gráficos_

### **Atributos de estilo**

1. Colores neón vibrantes sobre fondos oscuros, creando un fuerte contraste.
2. Efectos de partículas intensos con iluminación.
3. Diseño minimalista pero estilizado, con formas geométricas y siluetas definidas.
4. Ambiente distópico con elementos sobrenaturales de Halloween.
5. Uso de formas con degradado para simular iluminación.

### **Gráficos necesarios**

1. Personaje principal (Lista completa de assets -> [Main Character](https://github.com/santiagoarista/Videogames-team/tree/main/assets/character/main_character) )

   ![](assets/character/main_character/Run.png)
   ![](assets/character/main_character/Jump.png)
   ![](assets/character/main_character/Attack_1.png)

2. Objetos
   - Linterna

      <img src="game/assets/sprites/escenario_spawm_dario/linternaSprite.png" width="50">
   
   - Asistente
     
      ![](game/assets/characters/Slime2_Idle.png)

   - Botas
  
      <img src="game/assets/sprites/escenario_spawm_dario/botas.png" width="50">

   - Armas

      ![](game/assets/sprites/escenario_spawm_dario/7_1.png)
      ![](game/assets/sprites/escenario_spawm_dario/8_1.png)
      ![](game/assets/sprites/escenario_spawm_dario/9_1.png)

3. Disparos

      ![](assets/bullets/Laser%20Sprites/01.png)
      ![](assets/bullets/Laser%20Sprites/02.png)
      ![](assets/bullets/Laser%20Sprites/03.png)
      ![](assets/bullets/Laser%20Sprites/15.png)

4. Enemigos
   - Fantasmas

      ![](game/assets/characters/enemies/ghost/Ghost_Walk_left.png)

   - Jack

      ![](game/assets/characters/enemies/jack/jack.png)

4. Escenarios
   - Bloques
  
      ![](game/assets/sprites/escenario_spawm_dario/Tile_28.png)

   - Paredes

      ![](game/assets/sprites/escenario_spawm_dario/Tile_09.png)
      ![](game/assets/sprites/escenario_spawm_dario/Tile_10.png)
      ![](game/assets/sprites/escenario_spawm_dario/Tile_11.png)
     
   - Suelo
  
      ![](game/assets/sprites/escenario_spawm_dario/Tile_02.png)


## **Sonidos/Música**
La música del videojuego tiene que estar inspirada en música de hallowen

1. Los assets musicales que utilizamos incluyen tres pistas, ya que en el videojuego habrá tres momentos musicalizados. Estos momentos son:
   1. Pantalla de titulos (inicio): "Beetlejuice Beetlejuice Soundtrack | Main Title Theme - Danny Elfman "
          [Title Screen Music](https://www.youtube.com/watch?v=C9vv3-AYxkw)
   2. Cuartos normales: "Goosebumps · Danny Elfman"
          [Regular Rooms Music](https://www.youtube.com/watch?v=ztnifjaFDxQ)
   3. Cuarto del jefe final: "Spooky, Scary Skeletons (Undead Tombstone Remix) · Andrew Gold"
          [Final Boss room Music](https://www.youtube.com/watch?v=UWR4aTdMbzw)

**Efectos de Sonido**

1. Personaje principal (Lista completa de efectos de sonido -> [Personaje Principal](https://github.com/santiagoarista/Videogames-team/tree/main/game/assets/soundeffects/protagonist)
   - Sonido para caminar
   - Sonido para aterrizar despues de saltar
   - Sonido de dolor al recibir daño

2. Disparos (Lista completa de efectos de sonido -> [Disparos](https://github.com/santiagoarista/Videogames-team/tree/main/game/assets/soundeffects/laserShot)
   - Sonido de disparos del jugador
   - Sonido de disparos de los enemigos

4. Enemigos (Lista completa de efectos de sonido -> [Enemigos](https://github.com/santiagoarista/Videogames-team/tree/main/game/assets/soundeffects/monsterSounds)
   - Sonidos para los fantasmas
   - Sonidos al ser eliminados
