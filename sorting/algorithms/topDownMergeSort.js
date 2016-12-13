const { merge } = require('../utils');

function topDownMergeSort(array) {
    sort(array, new Array(array.length), 0, array.length - 1);
};

function sort(array, aux, start, end) {
    if (end <= start) {
        return;
    }

    const middle = Math.floor(start + (end - start) / 2);

    sort(array, aux, start, middle);
    sort(array, aux, middle + 1, end);
    merge(array, aux, start, middle, end);
}

module.exports = topDownMergeSort;
