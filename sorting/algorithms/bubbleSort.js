const { isLessThan, exchange } = require('../utils');

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0, stop = array.length - i; j < stop; j++) {
            if (isLessThan(array[j + 1], array[j])) {
                exchange(array, j, j + 1);
            }
        }
    }

    return array;
}

module.exports = bubbleSort;
