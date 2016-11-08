const algorithms = require('./algorithms');

function runAlgorithm(algorithm, input) {
    const startTime = process.hrtime();
    const sortingFn = algorithms[algorithm.toUpperCase()]

    if (sortingFn === undefined) {
        throw new Error(`${algorithm} is an invalid algorithm`);
    }

    sortedInput = sortingFn(input);
    const duration = process.hrtime(startTime);

    return duration;
}

module.exports = runAlgorithm;
