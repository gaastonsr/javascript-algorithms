const { shuffle, isLessThan, exchange, compare } = require('../utils');

function quick3WaySort(array) {
    shuffle(array);
    sort(array, 0, array.length - 1);
}

function sort(array, start, end) {
   if (end <= start) {
      return;
   }

   let lessThan = start;
   let i = start + 1;
   let greaterThan = end;
   const partitioningItem = array[start];

   while (i <= greaterThan) {
      const comparation = compare(array[i], partitioningItem);

      if (comparation < 0) {
         exchange(array, lessThan++, i++);
      } else if (comparation > 0) {
         exchange(array, i, greaterThan--);
      } else {
         i++;
      }
   }

   sort(array, start, lessThan - 1);
   sort(array, greaterThan + 1, end);
}

module.exports = quick3WaySort;
