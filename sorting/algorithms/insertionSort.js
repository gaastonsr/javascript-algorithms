const { isLessThan, exchange } = require('../utils');

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = i; j > 0 && isLessThan(array[j], array[j - 1]); j--) {
            exchange(array, j, j - 1);
        }
    }
}

module.exports = insertionSort;
