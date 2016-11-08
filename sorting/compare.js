#!/usr/bin/env node

const runAlgorithm = require('./runAlgorithm');
const { generateInputOfSize } = require('./utils');
const { formatExecutionTime } = require('./formatter');

const args = process.argv.slice(2);

function compareAlgorithms(algorithm1, algorithm2, inputSize = '100000') {
    const parsedInputSize = parseInt(inputSize, 10);
    console.log(`Generating input of size ${parsedInputSize.toLocaleString()}`);
    const input = generateInputOfSize(parsedInputSize);

    [algorithm1, algorithm2].forEach(algorithm => {
        console.log(`Running ${algorithm} sort algorithm...`);
        const executionTime = runAlgorithm(algorithm, input.slice());
        console.log(`Execution time: ${formatExecutionTime(executionTime)}`);
    });
}

try {
    compareAlgorithms(...args);
} catch(error) {
    console.error(error);
    process.exit(1);
}
