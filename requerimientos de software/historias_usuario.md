# Historias de Usuario
## EQUIPO GHOSTBUSTERS

-Rebeca Davila Araiza A01029805
-Darío Cuauhtémoc Peña Mariano A01785420
-Santiago Arista Viramontes A01028372


## Menú
- [Videojuego](#videojuego)
- [Página Web](#pagina-web)
- [Base de Datos](#base-de-datos)

## Videojuego

### Historias de Usuario para Videojuego

#### Historia #1 R
**Como Jugador**
quiero que el personaje jugable use una pistola como arma
para poder atacar a los enemigos y evitar perder vidas

**Validación:**
- Tener los sprites del personaje jugable y los disparos de este
- Programar una tecla para hacer que el personaje realice un disparo
- Programar el movimiento y la cantidad de daño que le hacen a los enemigos
---

#### Historia #2 R
**Como Jugador**
quiero que el personaje jugable tenga un conteo de vidas
para poder medir cuánto daño le han hecho al personaje y no morir de un solo golpe de un enemigo.

**Validación:**
- Crear una interfaz en la pantalla donde aparezca el número de vidas
- Hacer que la interfaz de las vidas cambie cuando el personaje sea atacado
- Mandar los datos de la vida perdida hacia la base de datos
- Mostrar este conteo de vidas en la página web
---

#### Historia #3 D
**Como Jugador**
quiero que el juego tenga una dinámica en donde mi personaje pueda adquirir ítems
para poder pasar los niveles de manera más sencilla.

**Validación:**
- Aparición de ítems en el juego
- Mejoras en el personaje al encontrar un ítem
- Habilidades especiales por cada ítem
---

#### Historia #4 D
**Como Jugador**
quiero que haya un mapa en el juego al cual pueda acceder fácilmente
para poder navegar de mejor manera en el videojuego sin perder tanto tiempo.

**Validación:**
- Diseñar un mapa gráfico del videojuego
- Al presionar una tecla se debe desplegar el mapa
- El mapa debe de mostrar la posición actual del personaje
---

#### Historia #5 R
**Como Jugador**
quiero que el juego tenga un menú de pausa
para poder detener el juego por un momento y poder salir cuando ya no quiera jugar.

**Validación:**
- Hacer sketch del menú de pausa
- Hacer que todo el juego se detenga cuando se activa el menú
- Crear botones que permitan salir del juego y continuarlo
---

#### Historia #6 D
**Como Jugador**
quiero que el juego tenga varios cuartos donde aparezcan enemigos
para poder tener una mejor experiencia de usuario y explorar el escenario.

**Validación:**
- Tener diferentes cuartos de nivel diseñados.
- Poder navegar y acceder a los cuartos desde diferentes puntos.
---

#### Historia #7 R
**Como Jugador**
quiero que los cuartos tengan varias conexiones entre sí
para poder explorar y moverse libremente por toda la mansión sin tener que seguir un solo camino.

**Validación:**
- Hacer los diseños de niveles como boceto
- Programar un grafo para crear el mapa y sus conexiones
---

#### Historia #8 D
**Como Jugador**
quiero que los cuartos del escenario estén ambientados en Halloween
para poder tener una experiencia parecida a la de un "especial de Halloween" de alguna serie.

**Validación:**
- La decoración, sonidos y diseño de los niveles deben estar basados en la festividad de Halloween
- Los personajes del juego deben ser caracterizados por la festividad de Halloween
---

#### Historia #9 D
**Como Jugador**
quiero tener controles sencillos y fáciles de aprender
para poder desplazarme sin problemas en el juego.

**Validación:**
- Se utilizarán los controles comúnmente usados en los videojuegos para movimiento e interacción con la interfaz de usuario.
---

#### Historia #10 S
**Como Jugador**
quiero que los villanos tengan distintos tipos de dificultad
para poder disfrutar de una experiencia desafiante y variada.

**Validación:**
- Implementar distintos tipos de enemigos con diferentes ataques
- Asignar un nivel de dificultad a los distintos enemigos
---

#### Historia #11 R
**Como Jugador**
quiero que el ataque del personaje aumente conforme avanzo en el juego
para poder enfrentar enemigos más fuertes.

**Validación:**
- Hacer un inventario de armas con diferentes niveles de daño
- Asegurar que estas armas solo aparezcan en ciertas habitaciones
- Dar un número de nivel requerido para utilizar cada arma
---

#### Historia #12 S
**Como Jugador**
quiero que el juego tenga un sistema de puntuación y clasificaciones
para poder competir con otros jugadores.

**Validación:**
- Implementar sistema de puntuación basado en el desempeño del jugador
- Mostrar una tabla de estadísticas al finalizar la ronda
---

#### Historia #13 S
**Como Diseñador de niveles**
quiero que el juego cuente con 9 niveles diferentes
para ofrecer variedad de escenarios al jugador.

**Validación:**
- Diseñar 9 escenarios distintos
- Implementar 1 diseño a cada nivel
---

#### Historia #14 S
**Como Jugador**
quiero que el juego me deje reiniciar mi progreso
para poder empezar de cero nuevamente.

**Validación:**
- Implementar un botón para reiniciar progreso
---

## Página Web

### Historias de Usuario para Página Web


### Historia #1 D
**Como jugador registrado**  
quiero acceder al juego mediante una página web  
para poder jugar el videojuego lo más rápido posible sin necesidad de descargar algún software extra.  

**Validación:**  
- El videojuego se debe alojar en alguna página web.  
- El videojuego no debe de tener alguna instalación extra, sólo entrar a la página web.  

---

### Historia #2 S
**Como Desarrollador web**  
quiero una página web con sistema de autenticación  
para poder identificar al usuario y almacenar sus estadísticas.  

**Validación:**  
- Implementar autenticación de usuarios en la página web.  
- Almacenar las estadísticas de cada usuario.  

---

### Historia #3 R
**Como usuario no registrado**  
quiero que la página web me permita ingresar mis datos  
para poder registrarme en la base de datos, entrar al juego y que se pueda guardar mi progreso cuando decida parar.  

**Validación:**  
- Crear una buena página de inicio de sesión antes de que el jugador pueda ingresar al juego.  
- Almacenar las estadísticas de cada usuario.  

---

### Historia #4 R
**Como Usuario**  
quiero ver mis datos de mi partida en la página web  
para poder verificar en cómo puedo mejorar y de esa forma jugar una y otra vez.  

**Validación:**  
- Hay que diseñar la página web para que muestre la cantidad de enemigos derrotados, las vidas que le quedan al jugador, la cantidad de llaves recolectadas cada partida, la cantidad de veces que el jugador murió y el nivel de experiencia del jugador, así como los datos del usuario.  

---

### Historia #5 R
**Como desarrollador frontend**  
quiero que la interfaz de la página sea intuitiva y atractiva  
para poder mejorar la experiencia del usuario.  

**Validación:**  
- El diseño debe ser responsivo y adaptarse a la pantalla de una computadora, sin importar el tamaño de la pestaña.  
- La página debe tener una buena iconografía para que sea intuitiva para el usuario.  
- La información debe estar bien organizada y ser fácil de encontrar.

---

### Base de Datos

### Historia #1 S
**Como Administrador del servidor**  
quiero que la base de datos almacene la información de cada usuario  
para poder analizar el comportamiento de cada jugador y brindar una atención más personalizada.  

**Validación:**  
- Guardar la información de cada usuario en la base de datos.  

---

### Historia #2 R
**Como jugador**  
quiero que la base de datos guarde un conteo de mis muertes hasta que termine el juego  
para poder saber cuántas veces he perdido las partidas y poder mejorar la próxima vez que juegue.  

**Validación:**  
- Guardar en una entidad el conteo de veces que el jugador muere hasta que termine el juego.  

---

### Historia #3
**Como administrador de base de datos**  
quiero que la base de datos sea reactiva  
para que en ciertos eventos pueda insertar, actualizar o eliminar de manera automática.  

**Validación:**  
- Definir triggers para determinados eventos.  

---

### Historia #4 S
**Como administrador de base de datos**  
quiero hacer operaciones que no sean atómicas, sino que sean bloques de operaciones  
para poder insertar, actualizar o eliminar información.  

**Validación:**  
- La base de datos debe permitir agrupar múltiples operaciones dentro de una misma transacción.  
- Debe admitir comandos como BEGIN, COMMIT y ROLLBACK.  

---

### Historia #5 S
**Como administrador de base de datos**  
quiero que la información esté normalizada hasta la tercera forma normal  
para poder asegurar la integridad de los datos y que cumpla con los requerimientos mínimos de ingeniería de software.  

**Validación:**  
- Cada columna debe contener valores atómicos (sin listas o valores repetidos).  
- La base de datos no debe tener dependencias parciales, es decir, todas las columnas deben depender de la clave primaria completa.  
- No debe haber dependencias transitivas (una columna no clave no debe depender de otra columna no clave).  
- Todos los atributos de una tabla deben depender únicamente de la clave primaria.  

---

### Historia #6 S
**Como administrador de base de datos**  
quiero tener el CRUD a través de una API, la cual comunique la base de datos con la página web por medio de un proxy  
para poder gestionar los datos de manera segura y eficiente.  

**Validación:**  
- Implementar los endpoints para Crear (Create), Leer (Read), Actualizar (Update) y Eliminar (Delete) datos en la base de datos.  
- Asegurar que todas las peticiones pasen a través de un proxy para mejorar la seguridad y el rendimiento.  
- Implementar autenticación y autorización para restringir el acceso según permisos de usuario.  
- Verificar que la API responde correctamente a solicitudes desde la página web.  

---

### Historia #7 S
**Como administrador de base de datos**  
quiero tener múltiples tablas que guarden información histórica del videojuego  
para poder analizar los datos y hacer mejoras en el diseño del juego.  

**Validación:**  
- Crear múltiples tablas que almacenen información histórica del juego, incluyendo estadísticas de partidas previas y comportamiento de los jugadores.  

---

### Historia #8 S
**Como administrador de base de datos**  
quiero que la base de datos cumpla con los elementos mínimos de calidad, es decir, que cumpla con el ACID  
para poder asegurarme de que la base de datos sea accesible, consistente, íntegra y eficiente en su rendimiento.  

**Validación:**  
- Verificar que las consultas sean rápidas y eficientes a través de pruebas de rendimiento.  
- Validar la integridad de los datos mediante restricciones como claves primarias, foráneas y validaciones de tipo de datos.  
- Comprobar que las relaciones entre las tablas sean coherentes y que no haya datos redundantes o faltantes.  
- Asegurar que los usuarios tengan acceso solo a los datos que necesitan, y que la base de datos se mantenga operativa con tiempos de respuesta óptimos, incluso bajo carga.  

---

### Historia #9 S
**Como usuario común**  
quiero que la base de datos almacene múltiples tablas con el contenido de la información del juego  
para poder acceder y consultar fácilmente los datos relacionados con los juegos, como detalles de jugadores, puntuaciones y estadísticas.  

**Validación:**  
- Verificar que las tablas se hayan creado correctamente con la estructura adecuada para almacenar la información del juego.  
- Asegurar que las relaciones entre las tablas sean consistentes y estén correctamente referenciadas.  
- Validar que los datos se ingresen correctamente en cada tabla y que la integridad de los mismos se mantenga mediante restricciones de integridad.

