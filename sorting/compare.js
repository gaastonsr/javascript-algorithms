const bubbleSort = require('./bubbleSort');
const selectionSort = require('./selectionSort');
const { arrayToString, isSorted } = require('./utils');

const args = process.argv.slice(2);

const sortingAlgorithms = {
    BUBBLE: bubbleSort,
    SELECTION: selectionSort
};

function compareAlgorithms(algorithm1, algorithm2, sampleSize = '100000') {
    const parsedSampleSize = parseInt(sampleSize, 10);
    console.log(`Generating input of size ${parsedSampleSize.toLocaleString()}`);
    const input = generateInputOfSize(parsedSampleSize);

    [algorithm1, algorithm2].forEach(algorithm => {
        console.log(`Running ${algorithm} sort algorithm...`);
        const executionTime = runAlgorithm(algorithm, input.slice());
        console.log(`Execution time: ${formatExecutionTime(executionTime)}`)
    });
}

function formatExecutionTime(executionTime) {
    const seconds = executionTime[0];
    const nanoSeconds = executionTime[1];
    const milliSeconds = nanosecondsToMilliseconds(nanoSeconds);
    return `${seconds}s ${Math.round(milliSeconds)}ms`;
}

function nanosecondsToMilliseconds(nanoSeconds) {
    return nanoSeconds / 1000000;
}

function generateInputOfSize(size) {
    const input = new Array(size);

    for (let i = 0; i < size; i++) {
        input[i] = Math.random();
    }

    return input;
}

function runAlgorithm(algorithm, input) {
    const startTime = process.hrtime();
    const sortingFn = sortingAlgorithms[algorithm.toUpperCase()]

    if (sortingFn === undefined) {
        throw new Error(`${algorithm} is an invalid algorithm`);
    }

    sortedInput = sortingFn(input);
    const duration = process.hrtime(startTime);

    return duration;
}

try {
    compareAlgorithms(...args);
} catch(error) {
    console.error(error);
}
