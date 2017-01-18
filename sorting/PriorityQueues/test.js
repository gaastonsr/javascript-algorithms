#!/usr/bin/env node

const MaxPQ = require('./MaxPQ');
const { isSorted, generateInputOfSize } = require('../utils');

function testAlgorithm(inputSize = '100000') {
    const priorityQueue = new MaxPQ();

    const parsedInputSize = parseInt(inputSize, 10);
    console.log(`Generating input of size ${parsedInputSize.toLocaleString()}`);
    const input = generateInputOfSize(parsedInputSize);

    console.log(`Inserting items into PriorityQueue...`);
    input.forEach(num => priorityQueue.insert(num));

    console.log(`Extracting items...`);
    const extractedInput = new Array(input.length);

    for (let i = input.length - 1; i >= 0; i--) {
        extractedInput[i] = priorityQueue.delMax();
    }

    console.log('Testing if input is sorted...');
    console.log(isSorted(extractedInput) ? 'SUCCESS' : 'FAILURE');
}

try {
    const args = process.argv.slice(2);
    testAlgorithm(...args);
} catch(error) {
    console.error(error);
    process.exit(1);
}
