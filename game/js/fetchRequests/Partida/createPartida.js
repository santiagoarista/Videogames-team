function createPartida(id_usuario, monstruos_eliminados, puntuacion, vidas, llaves_encontradas, items_encontrados, listaCuartosAleatorios, terminada, ganada){
    const partidaData = {
        id_usuario: id_usuario,
        monstruos_eliminados: monstruos_eliminados,
        puntuacion: puntuacion,
        vidas: vidas,
        llaves_encontradas: llaves_encontradas,
        items_encontrados: items_encontrados,
        listaCuartosAleatorios: listaCuartosAleatorios,
        terminada: terminada,
        ganada: ganada
      };
      
      fetch("http://localhost:3001/api/Partida", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(partidaData)
      });
}