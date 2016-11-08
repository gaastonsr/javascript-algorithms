const { isLessThan, exchange } = require('./utils');

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let smallestIndex = i;
        let currentIndex = null;

        for (let j = i + 1; j < array.length; j++) {
            if (isLessThan(array[j], array[smallestIndex])) {
                smallestIndex = j;
            }
        }

        exchange(array, i, smallestIndex);
    }
}

module.exports = selectionSort;
