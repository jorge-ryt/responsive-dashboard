document.addEventListener('DOMContentLoaded', () => {
    initChart();
});

function initChart() {
    const chart = document.getElementById("currentChart")?.getContext('2d');
    if (!chart) return;

    new Chart(chart, {
        type: 'bar',
        data: getChartData(),
        options: getChartOptions(),
    })
};

function getChartData() {
    const labels = ['October 2024', 'November 2024', 'December 2024', 'January 2025', 'February 2025', 'March 2025'];
    const data = {
        labels: labels,
        datasets: [{
            label: 'Projects',
            data: [10, 5, 0, 25, 15, 38],
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };
    return data;
}

function getChartOptions() {
    return {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
    };
}

