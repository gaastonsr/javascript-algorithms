function isLessThan(x, y) {
    return x < y;
}

function compare(a, b) {
    if (isLessThan(b, a)) {
        return 1;
    } else if (isLessThan(a, b)) {
        return -1;
    } else {
        return 0;
    }
}

function exchange(array, i, j) {
    const temporary = array[i];
    array[i] = array[j];
    array[j] = temporary;
}

function arrayToString(array) {
    return array.join(' ');
}

function isSorted(array) {
    const tail = array.slice(1);
    let previous = array[0];

    return tail.every(element => {
        const result = isLessThan(previous, element);
        previous = element;
        return result;
    });
}

function generateInputOfSize(size) {
    const input = new Array(size);

    for (let i = 0; i < size; i++) {
        input[i] = Math.random();
    }

    return input;
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

// Fisher–Yates shuffle
function shuffle(array) {
    let i = array.length - 1;
    let j = 0;
    let temp = null;

    for (; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}

module.exports = {
    isLessThan,
    compare,
    exchange,
    arrayToString,
    isSorted,
    generateInputOfSize,
    merge,
    shuffle
};
