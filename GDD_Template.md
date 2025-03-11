# **Nine-Shions**

## _Documento de Diseño del Juego_

Equipo Ghostbusters

- Santiago Arista Viramontes
- Darío Peña Mariano
- Rebeca Dávila Araiza

##

## _Índice_

---

1. &#x20;[Mecánicas](#mecánicas)
2. [Diseño de Niveles](#diseño-de-niveles)
   1. [Temas](#temas)
      1. Ambiente
      2. Objetos
         1. Ambientales
         2. Interactivos
      3. Desafíos
   2. [Flujo del Juego](#flujo-del-juego)
3. [Desarrollo](#desarrollo)
   1. [Clases Abstractas](#clases-abstractas--componentes)
   2. [Clases Derivadas](#clases-derivadas--composiciones-de-componentes)
4. [Gráficos](#gráficos)
   1. [Atributos de Estilo](#atributos-de-estilo)
   2. [Gráficos Necesarios](#gráficos-necesarios)
5. [Sonidos/Música](#sonidosmúsica)
   1. [Atributos de Estilo](#atributos-de-estilo-1)
   2. [Sonidos Necesarios](#sonidos-necesarios)
   3. [Música Necesaria](#música-necesaria)
6. [Calendario](#calendario)

## _Diseño del Juego_

### **Resumen**

Nineshions es un juego de plataformas roguelite de terror en el que un cazador de monstruos entra en una mansión misteriosa de donde emergen criaturas para asustar a la gente cada Halloween. El cazador debe derrotar a todos los monstruos en las ocho habitaciones de la mansión. No será una tarea fácil en un lugar oscuro, grande y peligroso, por lo que contará con la ayuda ocasional de un asistente que dañará a algunos enemigos, una linterna para iluminar en la oscuridad y una mejora que le permitirá hacer un doble salto en las plataformas. A medida que explore la mansión, deberá encontrar ocho llaves para entrar en la novena habitación, donde se encuentra el jefe final, y derrotarlo para salvar Halloween.

### **Jugabilidad**

El cazador de monstruos se controla con las teclas W, A, S y D para moverse a la izquierda, derecha, saltar y descender de una plataforma.
El jugador debe navegar a través de ocho habitaciones dentro de la mansión, luchar contra diferentes monstruos y recolectar ocho llaves para acceder a la sala del jefe final. El desafío radica en la gestión de recursos (vidas limitadas, pérdida de llaves al morir) y en el movimiento estratégico (usando el doble salto y el asistente).

### **Mentalidad**

Queremos que el jugador se sienta asustado, indefenso y confundido al comienzo del juego, en una mansión misteriosa con algunas habitaciones oscuras cuyo orden cambia tras la muerte y donde los monstruos acechan. Sin embargo, a medida que el jugador derrota monstruos, gana experiencia para aumentar su daño y derrotarlos más fácilmente. El jugador también debe ser cauteloso, ya que puede perder esta experiencia y las llaves recolectadas si muere, lo que le presenta más desafíos y lo obliga a usar su propia habilidad, con la ayuda de los objetos, para limpiar la mansión.

## _Técnico_

---

### **Pantallas**

1. Pantalla de Título
   - Configuración
   - Botón de Jugar
   - Logo del Juego
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
3. Pantalla de Configuración
   - Volumen General
   - Reiniciar Progreso
4. Pantalla de Créditos
   - Créditos del Juego

### **Controles**

- W - Saltar / Doble Salto
- A - Moverse a la Izquierda
- D - Moverse a la Derecha
- S - Agacharse
- M - Desplegar Mapa
- P - Menú de Pausa
- K - Disparar

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

## _Desarrollo_

---

### **Clases Abstractas / Componentes**

1. BasePhysics
   - BasePlayer
   - BaseAssistant
   - BaseEnemy
   - BaseObject
2. BaseObstacle

### **Clases Derivadas / Composiciones de Componentes**

1. BasePlayer
   - PlayerMain
2. BaseEnemy
   - Enemy (puede soltar llaves, siempre suelta experiencia)
3. BaseObject
   - ObjectKey (recogible, lanzable)
   - ObjectFlashlight (recogible)
   - ObjectAssistant (recogible)
   - ObjectDoubleJumpJar (recogible)
4. BaseObstacle
   - ObstacleLibrary
   - ObstacleTable
   - ObstacleWall
   - ObstacleTile
   - ObstacleGate

## _Calendario_

---

_(Definir las actividades principales y las fechas esperadas de finalización. Esto solo es una referencia y puede cambiar a medida que se desarrolle el proyecto.)_

1. [Índice](#index)
2. [Game Design](#game-design)
   1. [Summary](#summary)
   2. [Gameplay](#gameplay)
   3. [Mindset](#mindset)
3. [Technical](#technical)
   1. [Screens](#screens)
   2. [Controls](#controls)
   3. [Mechanics](#mechanics)
4. [Level Design](#level-design)
   1. [Themes](#themes)
      1. Ambience
      2. Objects
         1. Ambient
         2. Interactive
      3. Challenges
   2. [Game Flow](#game-flow)
5. [Development](#development)
   1. [Abstract Classes](#abstract-classes--components)
   2. [Derived Classes](#derived-classes--component-compositions)
6. [Graphics](#graphics)
   1. [Style Attributes](#style-attributes)
   2. [Graphics Needed](#graphics-needed)
7. [Sounds/Music](#soundsmusic)
   1. [Style Attributes](#style-attributes-1)
   2. [Sounds Needed](#sounds-needed)
   3. [Music Needed](#music-needed)
8. [Schedule](#schedule)

## _Game Design_

---

### **Summary**

Nineshions is a spooky plataforming roguelite game where a monster hunter enters a mysterious mansion where monsters come out to haunt people every Halloween. There, the hunter must defeat all the monsters in the eight rooms of the mansion. It’ll be no easy task inside a dark, big, and dangerous mansion, so that’s why the he can receive ocassional help from an assistant do hurt some enemies, a flashlight to look in the dark and a powerup to double jump in the platforms. Through the explorations of the mansion, he must find eight keys to enter the ninth room, where the boss room is located, and finally defeat to stop his plans and save Halloween.

### **Gameplay**

The monster hunter can be controled by using the keys w,a,s,d to move left and right, jump and get down a platform.
The player must navigate through eight rooms inside the mansion, fight different monsters, and collect eight keys to access the final boss room. The challenge comes from resource management (limited lives, losing keys upon death) and strategic movement (using the double jump and the helper).

### **Mindset**

We want to make the player feel scared, helpless and confused at the start of the game, in a mysterious mansion with some dark rooms that change their order after death and has monsters haunting through them. However, as the player keeps defeating monsters, they can gain experience to increase their damage and deafeting the monster easier. The player must also be cautious because they can loose this experience and the keys collected through the rooms if they die, giving them more challenges and make them use their own skill, with the help of the items, to clear the mansion.

## _Technical_

---

### **Screens**

1. Title Screen
   Settings
   Play buttom
   Logo Game
2. Gameplay Screen 1. Life section 2. Key section 3. Game section 4. Pause Container
   Continue
   Settings
   Leave game 5. Map Container
   Rooms
   Boss Romm
   Tittle
   Actual Room
   Rooms completed
   3.- Settings Screen
   General volume
   Restart progress
   4.- Credits Screen
   Game Credits

### **Controls**

- W-jump/Double Jump
- A-Move left
- D-Move right
- S-Bend
- M-Unfold map
- P-Pause Menu
- k-Fire

### **Mechanics**

#### Scenarios mechanics:

- The first room where the player respawns is the safe room, where there are no enemies around and you can find the weapons arsenal to unlock new weapons depending on your game score.
- When you open the map, the game doesn't stop. So, the player must open it in special cases or in places with fewer enemies.
- There are three weapons at the safe room, which have diferrent fire mechanics and you can unlock them as you progress through the game.

#### Rules:

1. The player must explore all the eight rooms to get the keys and enter the boss’s room
2. The player has three lives in total, and after he dyes, he must start the level from the begining
3. The player can explore the rooms however they want through the different exits inside a room. Some of them can be accessed by jumping through platforms
4. The player has a default weapon that allows him to shoot at the enemies and they can arrange its direction.
5. After defeating an enemy, they will always gain experience level, which increases the damage the player can do withthe gun. This experience goes 0 after the player dyes.
6. The last monster in each room will have a key. So the player must defeat all the monsters in each room until they get the key and get eight keys in total.
7. A random monster can grant the player an item after defeating them:
   - Flashlight: It allows you to get a wider range of sight inside a dark room, and it’ll still be active even in iluminated rooms. If the player doesn’t has the flashlight, their range of sight is shorter in darkr rooms.
   - The assistant: It appears next to the player to shoot at some enemies. However, its range attack is shorter than the player and does less damage.
   - Double Jump: it allows the player to make a second jump while they are in the air.
8. These items can be gained once through all of the game and can be kept by the player even after dying.
9. Once the player has all the keys, they must find the secret door that leads to the final boss.

## _Level Design_

---

_(Note : These sections can safely be skipped if they&#39;re not relevant, or you&#39;d rather go about it another way. For most games, at least one of them should be useful. But I&#39;ll understand if you don&#39;t want to use them. It&#39;ll only hurt my feelings a little bit.)_

### **Assets**

In the video game, we have assets inspired by monsters and the Halloween festivity. The assets are as follows:

1.  scenery

    1.  Tiles (Complete assets list -> [Tiles](https://github.com/santiagoarista/Videogames-team/tree/main/assets/bullets/Laser%20Sprites/)

    ![](assets/escenario/tiles/Tile_01.png) | ![](assets/escenario/tiles/Tile_03.png)| ![](assets/escenario/Tiles/Tile_12.png)|![](assets/escenario/Tiles/Tile_20.png) ![](assets/escenario/tiles/Tile_023.png) | ![](assets/escenario/tiles/Tile_25.png)| ![](assets/escenario/Tiles/Tile_30.png)|![](assets/escenario/Tiles/Tile_31.png)

    1.  Decorations (Complete assets list -> [Decoration](https://github.com/santiagoarista/Videogames-team/tree/main/assets/escenario/decoraciones) )

        | ![](assets/escenario/decoraciones/hallowen/Web1.png) | ![](assets/escenario/decoraciones/hallowen/Signboard3.png)| ![](assets/escenario/decoraciones/hallowen/Signboard4.png)|
        | ![](assets/escenario/decoraciones/elementos%20de%20mapa/Box1.png) | ![](assets/escenario/decoraciones/elementos%20de%20mapa/Box5.png)| ![](assets/escenario/decoraciones/elementos%20de%20mapa/Flag.png)| ![](assets/escenario/decoraciones/elementos%20de%20mapa/Locker4.png)|

        <img src="assets/escenario/decoraciones/hallowen/mesa.png" alt="Texto alternativo" width="100">|
        <img src="assets/escenario/decoraciones/hallowen/librarysprites2.png" alt="Texto alternativo" width="100"> |

    1.  Bullet (Complete assets list -> [Bullets](https://github.com/santiagoarista/Videogames-team/tree/main/assets/bullets/Laser%20Sprites/) )

        | ![](assets/bullets/Laser%20Sprites/01.png) | ![](assets/bullets/Laser%20Sprites/02.png)| ![](assets/bullets/Laser%20Sprites/03.png))|

        | ![](assets/bullets/Laser%20Sprites/15.png) |

2.  Sound Assets
    1. Music assets we used three musical tracks, because in the video game there will be three musicalized moments, these moments are:
       1. Title Screen: "Beetlejuice Beetlejuice Soundtrack | Main Title Theme - Danny Elfman "
          [Title Screen Music](https://www.youtube.com/watch?v=C9vv3-AYxkw)
       2. Regular rooms: "Goosebumps · Danny Elfman"
          [Regular Rooms Music](https://www.youtube.com/watch?v=ztnifjaFDxQ)
       3. Final Boss room: "Spooky, Scary Skeletons (Undead Tombstone Remix) · Andrew Gold"
          [Final Boss room Music](https://www.youtube.com/watch?v=UWR4aTdMbzw)

## _Graphics_

### **style-attributes**

1.  Vibrant neon colors on dark backgrounds, creating a strong contrast.
2.  Intense particle effects with lighting.
3.  Minimalist yet stylish design, with geometric shapes and defined silhouettes.
4.  Dystopian atmosphere with supernatural Halloween elements.
5.  Use of gradient shapes to simulate lighting.

**Characters**

1. Main character (Complete assets list -> [Main Character](https://github.com/santiagoarista/Videogames-team/tree/main/assets/character/main_character) )

   ![](assets/character/main_character/Run.png)
   ![](assets/character/main_character/Jump.png)
   ![](assets/character/main_character/Attack_1.png)

2. Sketch of the levels

   1. Rooms sketches:
      -Final Boss
      ![](sketches/cuartos/cuarto_jefeFinal_skecth.png)
      -Spawn
      ![](sketches/cuartos/cuarto_spawn_sketch.png)

   2. Another screens:
      -Puse screen
      ![](sketches/pantallas/pause_screen.png)
      -Map Screen
      ![](sketches/pantallas/map_screen.png)

## _soundsmusic_

### **style-attributes**

### **Themes**

1. Haunted Mansion
   1. Mood
      1. Dark, mysterious, unpredictable
   2. Objects
      1. _Ambient_
         1. Neon lights
         2. tileblock
         3. coffins
         4. tables
         5. libraries
         6. cabinets
         7. cardboard boxes
      2. _Interactive_
         1. skeletons
         2. ghosts
         3. bats
         4. keys
         5. flasklight
         6. assistant
         7. DoubleJumpJar

### **Game Flow**

1. Player starts in the respawn room,
2. In that room, the player can find three weapons to use, but at the beginning or after respawning, he may only use the first one, (&quot;movement controls&quot; taught)
3. There are four open exits in that room, the player can go to any direction they want.
4. Wherever room the player decides to get in, a group of enemies inside will start attacking them.
5. Player shoots at the enemies to eliminate them
6. The last enemy the player defeats will let go of a key that the player must pick up.
7. Then the player must continue to the next room they decide to go
8. Some monsters will grant an item to the player to facilitate the gameplay, which can only be picked up once. The player can have the items permanently.
9. The player eventually finds the door to the final boss, but it must collect the eight keys to get inside.

## _Development_

---

### **Abstract Classes / Components**

1. BasePhysics
   1. BasePlayer
   2. BaseAsistant
   3. BaseEnemy
   4. BaseObject
2. BaseObstacle

_(example)_

### **Derived Classes / Component Compositions**

1. BasePlayer
   1. PlayerMain
2. BaseEnemy
   1. Enemy (may drop key, always drops exp)
3. BaseObject
   1. ObjectKey (pick-up-able, throwable)
   2. ObjectFlasklight (pick-up-able)
   3. ObjectAssistant (pick-up-able)
   4. ObjectDoubleJumpJar (pick-up-able)
4. BaseObstacle
   1. ObstacleLibrary
   2. ObstacleTable
   3. ObstacleWall
   4. ObstacleTile
   5. ObstacleGate

## _Schedule_

---

_(define the main activities and the expected dates when they should be finished. This is only a reference, and can change as the project is developed)_

1. develop base classes
   1. base entity
      1. base player
      2. base enemy
      3. base block
2. base app state
   1. game world
   2. menu world
3. develop player and basic block classes
   1. physics / collisions
4. find some smooth controls/physics
5. develop other derived classes
   1. blocks
      1. moving
      2. falling
      3. breaking
      4. cloud
   2. enemies
      1. soldier
      2. rat
      3. etc.
6. design levels
   1. introduce motion/jumping
   2. introduce throwing
   3. mind the pacing, let the player play between lessons
7. design sounds
8. design music

_(example)_
