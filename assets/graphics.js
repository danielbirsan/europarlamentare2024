// Datele pentru participarea la alegeri
const participationData = {
    years: ['2008', '2012', '2016', '2024'],
    percentages: [39.67, 41.72, 39.49, 31.84]
};

// Creați un grafic cu participarea la alegeri
const ctx = document.getElementById('chart').getContext('2d');
const participationChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: participationData.years,
        datasets: [{
            label: 'Participare (%)',
            data: participationData.percentages,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Participare (%)'
                }
            }
        }
    }
});