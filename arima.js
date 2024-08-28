function calculateMean() {
    const prices = getPrices();
    const mean = prices.reduce((a, b) => a + b, 0) / prices.length;
    displayOutput(`Mean of past prices: ${mean.toFixed(2)}`);
}

function computeDifference() {
    const prices = getPrices();
    const differenced = prices.slice(1).map((price, i) => price - prices[i]);
    displayOutput(`Differenced data: ${differenced.join(", ")}`);
}

function predictPrice() {
    const prices = getPrices();
    if (prices.length < 2) {
        displayOutput("Not enough data to make a prediction.");
        return;
    }

    const size = prices.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;

    prices.forEach((price, i) => {
        sumX += i;
        sumY += price;
        sumXY += i * price;
        sumXX += i * i;
    });

    const b = (size * sumXY - sumX * sumY) / (size * sumXX - sumX * sumX);
    const a = (sumY - b * sumX) / size;
    const nextPrice = a + b * size;

    displayOutput(`Predicted next Price: ${nextPrice.toFixed(2)}`);
}

function getPrices() {
    const prices = document.getElementById("prices").value.split(",").map(Number);
    return prices;
}

function displayOutput(message) {
    document.getElementById("output").textContent = message;
}
