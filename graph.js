// Data for the crop distribution chart
const data = {
    labels: ['Cotton', 'Onion', 'Wheat', 'Rice', 'Corn', 'Soybean'],
    datasets: [{
        label: 'Crop Distribution',
        data: [30, 20, 25, 15, 10, 10], // Example data values
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#F7464A',
            '#8E5EA2'
        ],
        borderColor: '#fff',
        borderWidth: 1
    }]
};

// Configuration for the doughnut chart
const config = {
    type: 'doughnut',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        const dataset = tooltipItem.dataset;
                        const total = dataset.data.reduce((acc, val) => acc + val, 0);
                        const currentValue = dataset.data[tooltipItem.dataIndex];
                        const percentage = ((currentValue / total) * 100).toFixed(2);
                        return `${tooltipItem.label}: ${percentage}%`;
                    }
                }
            }
        },
        aspectRatio: 1, // Ensures the chart is circular
    }
};

// Render the doughnut chart
window.onload = function() {
    const ctx = document.getElementById('cropChart').getContext('2d');
    new Chart(ctx, config);
};
