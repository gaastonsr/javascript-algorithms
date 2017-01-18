const { exchange, isLessThan } = require('../utils');

class MaxPQ {

    constructor() {
        this._heap = [null];
    }

    isEmpty() {
        this._heap.length === 1;
    }

    size() {
        return this._heap.length - 1;
    }

    insert(value) {
        this._heap.push(value);
        this._swim(this.size());
    }

    delMax() {
        const max = this._heap[1];
        this._exchange(1, this.size());
        this._heap.pop();
        this._sink(1);
        return max;
    }

    _isLessThan(i, j) {
        return isLessThan(this._heap[i], this._heap[j]);
    }

    _exchange(i, j) {
        exchange(this._heap, i, j);
    }

    _swim(k) {
        while (k > 1 && this._isLessThan(Math.floor(k / 2), k)) {
            const parent = Math.floor(k / 2);
            this._exchange(k, parent);
            k = parent;
        }
    }

    _sink(k) {
        const N = this.size();

        while (2 * k <= N) {
            let j = 2 * k;

            if (j < N && this._isLessThan(j, j + 1)) {
                j++;
            }

            if (this._isLessThan(j, k)) {
                break;
            }

            this._exchange(k, j);
            k = j;
        }
    }

}

module.exports = MaxPQ;
