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

fetch('/api/estadisticas/todos')
    .then(response => response.json())
    .then(data => {
        const nombres = data.map((user, index) => `Jugador ${index + 1}`);
        const partidas = data.map(user => user.partidas_jugadas);
        const ganadas = data.map(user => user.partidas_ganadas);
        const experiencia = data.map(user => user.experiencia);

        const ctx = document.getElementById('grafica-estadisticas').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: nombres,
                datasets: [
                    {
                        label: 'Experiencia',
                        data: experiencia,
                        backgroundColor: 'rgb(255, 0, 255)'
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        })

        const ctx_partida = document.getElementById('grafica-partidas').getContext('2d');
        new Chart(ctx_partida, {
            type: 'bar',
            data: {
                labels: nombres,
                datasets: [
                    {
                        label: 'Partidas Jugadas',
                        data: partidas,
                        backgroundColor: 'rgb(0, 255, 255)'
                    },
                    {
                        label: 'Partidas Ganadas',
                        data: ganadas,
                        backgroundColor: 'rgb(217, 255, 0)'
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

    })
    .catch(err => {
        console.error('Error al cargar estadísticas globales:', err);
    });