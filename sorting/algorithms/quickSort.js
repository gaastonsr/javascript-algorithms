const { shuffle, isLessThan, exchange } = require('../utils');

function quickSort(array) {
    shuffle(array);
    sort(array, 0, array.length - 1);
}

function sort(array, start, end) {
    if (end <= start) {
        return;
    }

    const j = partition(array, start, end);
    sort(array, start, j - 1);
    sort(array, j + 1, end);
}

function partition(array, start, end) {
    let i = start;
    let j = end + 1;
    const partitioningItem = array[start];

    while (true) {
        while (isLessThan(array[++i], partitioningItem)) {
            if (i === end)
                break;
        }

        while (isLessThan(partitioningItem, array[--j])) {
            if (j === start)
                break;
        }

        if (i >= j) {
            break;
        }

        exchange(array, i, j);
   }

   exchange(array, start, j);
   return j;
}

module.exports = quickSort;
