const id_usuario = localStorage.getItem('id_usuario');

fetch(`/api/estadisticas?id_usuario=${id_usuario}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('monstruos-count').textContent = data.monstruos_eliminados || 0;
        document.getElementById('puntuacion-count').textContent = data.experiencia || 0;
        document.getElementById('jugadas-count').textContent = data.partidas_jugadas || 0;
        document.getElementById('ganadas-count').textContent = data.partidas_ganadas || 0;
    })
    .catch(err => {
    console.error('Error al cargar estadísticas:', err);
});