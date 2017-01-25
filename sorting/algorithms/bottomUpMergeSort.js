const { isLessThan } = require('../utils');

function bottomUpMergeSort(array) {
    const N = array.length;
    const aux = new Array(N);

    for (let size = 1; size < N; size = size + size) {
        for (let low = 0; low < N - size; low += size + size) {
            const middle = low + size - 1;
            const end = Math.min(low + size + size - 1, N - 1);

            merge(array, aux, low, middle, end);
        }
    }
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

module.exports = bottomUpMergeSort;
