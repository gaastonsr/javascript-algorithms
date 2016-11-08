const { isLessThan, exchange } = require('../utils');

function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j > 0 && isLessThan(array[i], array[j - 1]); j++) {
            exchange(array, i, j);
        }
    }
}

module.exports = insertionSort;
