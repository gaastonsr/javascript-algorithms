const algorithms = require('./algorithms');

function runAlgorithm(algorithm, input) {
    const startTime = process.hrtime();
    const sortingFunction = algorithms[algorithm.toUpperCase()]

    if (sortingFunction === undefined) {
        throw new Error(`${algorithm} is an invalid algorithm`);
    }

    sortingFunction(input);
    const duration = process.hrtime(startTime);

    return duration;
}

module.exports = runAlgorithm;
