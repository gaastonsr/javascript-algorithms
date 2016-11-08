function isLessThan(x, y) {
    return x < y;
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
        previous = element;
        return element > previuos;
    });
}

module.exports = {
    isLessThan,
    exchange,
    arrayToString,
    isSorted
};
