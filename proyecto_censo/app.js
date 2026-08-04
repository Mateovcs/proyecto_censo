async function inicializarGrafico() {
    try {
    
        const respuesta = await fetch('datos_censo.json');
        const datos = await respuesta.json();

        const etiquetas = datos.map(item => item.nivel);
        const datosMujeres = datos.map(item => item.mujeres);
        const datosVarones = datos.map(item => item.varones);

        const ctx = document.getElementById('graficoEducacion').getContext('2d');

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: etiquetas,
                datasets: [
                    {
                        label: 'Mujeres / Femenino',
                        data: datosMujeres,
                        backgroundColor: '#ec4899',
                        borderRadius: 4
                    },
                    {
                        label: 'Varones / Masculino',
                        data: datosVarones,
                        backgroundColor: '#3b82f6',
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: { color: '#9ca3af' }
                    },
                    y: {
                        grid: { color: 'rgba(255, 255, 255, 0.05)' },
                        ticks: { color: '#9ca3af' }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: { color: '#f3f4f6' }
                    }
                }
            }
        });

    } catch (error) {
        console.error("Error al procesar los datos del INDEC:", error);
    }
}

window.onload = inicializarGrafico;
