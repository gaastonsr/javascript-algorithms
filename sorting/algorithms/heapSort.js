const { exchange, isLessThan } = require('../utils');

function heapSort(array) {
   let N = array.length - 1;
   let k = Math.min((N - 1) / 2);

    for (; k >= 0; k--) {
        sink(array, k, N);
    }

    while (N > 0) {
        exchange(array, 0, N--);
        sink(array, 0, N);
    }
}

function sink(array, k, N) {
    while ((2 * k + 1) <= N) {
        let j = 2 * k + 1;

        if (j < N && isLessThan(array[j], array[j + 1])) {
            j++;
        }

        if (isLessThan(array[j], array[k])) {
            break;
        }

        exchange(array, k, j);
        k = j;
    }
}

module.exports = heapSort;
