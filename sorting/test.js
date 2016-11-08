#!/usr/bin/env node

const runAlgorithm = require('./runAlgorithm');
const { formatExecutionTime } = require('./formatter');
const { isSorted, arrayToString, generateInputOfSize } = require('./utils');

const args = process.argv.slice(2);

function testAlgorithm(algorithm, inputSize = '100000') {
    const parsedInputSize = parseInt(inputSize, 10);
    console.log(`Generating input of size ${parsedInputSize.toLocaleString()}`);
    const input = generateInputOfSize(parsedInputSize);

    console.log(`Running ${algorithm} sort algorithm...`);
    const executionTime = runAlgorithm(algorithm, input);
    console.log(`Execution time: ${formatExecutionTime(executionTime)}`);

    console.log('Testing if input is sorted...')
    console.log(isSorted(input) ? 'SUCCESS' : 'FAILURE');
}

try {
    testAlgorithm(...args);
} catch(error) {
    console.error(error);
    process.exit(1);
}
