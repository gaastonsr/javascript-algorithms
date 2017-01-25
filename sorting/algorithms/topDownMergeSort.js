const { isLessThan } = require('../utils');

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

function merge(array, aux, start, middle, end) {
    let i = start;
    let j = middle + 1;

    for (let k = start; k <= end; k++) { // copy array[start, end] into aux
        aux[k] = array[k];
    }

    for (let k = start; k <= end; k++) {
        if (i > middle) { // left half exausted
            array[k] = aux[j++];
        } else if (j > end) { // right half exausted
            array[k] = aux[i++];
        } else if (isLessThan(aux[i], aux[j])) {
            array[k] = aux[i++];
        } else {
            array[k] = aux[j++];
        }
    }
}

module.exports = topDownMergeSort;
