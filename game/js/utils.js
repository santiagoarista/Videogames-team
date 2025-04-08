//ESTA FUNCIÓN CONVIERTE EL MAPA DE CARACTERES una matriz de listas de caracteres
Array.prototype.parse2D = function () {
  const rows = [];
  //42 PORQUE TENEMOS 42 COLUMNAS
  for (let i = 0; i < this.length; i += 42) {
    rows.push(this.slice(i, i + 42));
  }
  return rows;
};

//Sobrescribimos función de arreglos, lo que hace es del contendio del arreglo lo convierte a bloques de colisiones ordenados
Array.prototype.creatObjectsFrom2d = function () {
  const objects = [];
  this.forEach((row, y) => {
    row.forEach((symbol, x) => {
      //Si encuentra de simbolo que sea gual a 2, significa que hay una colisión en el mapa, por lo que se tiene que agregar la colisión
      if (symbol == 2 || symbol == 1 || symbol == 4 || symbol == 3) {
        //Agregar colisión
        objects.push(
          new BloqueColision({
            position: {
              x: x * 32,
              y: y * 32,
            },
          })
        );
      }
    });
  });

  return objects;
};
function navegarNuevoCuarto(idDestino, posicionDestino, nombreOrigen) {
  console.log("Nombre origen desde navegarCuarto: " + nombreOrigen);

  let posiciónFinal = { x: 0, y: 0 };
  let cuartoDestino = cuartosOrdenadosCons.find((c) => c.idCuarto == idDestino);

  console.log(nombreOrigen);

  switch (nombreOrigen) {
    case "izquierda":
      posiciónFinal = { ...cuartoDestino.posicionJugadorDerecha };
      break;
    case "derecha":
      posiciónFinal = { ...cuartoDestino.posicionJugadorIzquierda };
      break;
    case "superior":
      posiciónFinal = { ...cuartoDestino.posicionJugadorInferior };
      posiciónFinal.y = 500; // esta línea ya no modifica el original
      break;
    case "inferior":
      posiciónFinal = { ...cuartoDestino.posicionJugadorSuperior };
      break;
  }
  if (idDestino == 9) {
    sonidoMusica.setSound("musica_jefe");
    sonidoMusica.setVolume(0.2);
  }

  console.log("Navegando nuevo cuarto...");
  console.log("Destino:", idDestino);
  console.log("Posición Final:", posiciónFinal);

  // Bloquear el movimiento y visibilidad del jugador
  player.position = { x: -300, y: -300 };
  player.inTransition = true;
  player.visible = false;
  player.velocity = { x: 0, y: 0 };

  // Poner pantalla negra de inmediato
  overlay.opacity = 1; // Pantalla se pone negra de inmediato

  gsap.to(overlay, {
    opacity: 1, // Mantiene la opacidad en 1
    duration: 0, // Sin transición inicial (se vuelve negro al instante)
    onComplete: () => {
      currentLevel = idDestino;
      console.log("Nuevo nivel:", currentLevel);
      cuartos[currentLevel].init();

      player.position = posiciónFinal;
      itemsEnJuego = [];
      player.visible = true;
      player.inTransition = false;
      player.countdown = true; // Reiniciar el temporizador
      // Desvanecimiento más lento
      gsap.to(overlay, {
        opacity: 0,
        duration: 2, // Transición más lenta (aquí puedes ajustar el tiempo a tu gusto)
        ease: "power2.out",
        onComplete: () => {
          // Desbloquear movimiento y visibilidad cuando termine la transición
        },
      });
    },
  });
}
