const { merge } = require('../utils');

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

module.exports = bottomUpMergeSort;
