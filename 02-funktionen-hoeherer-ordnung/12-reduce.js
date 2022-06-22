'use strict';

// function reduce (array, initialValue, fn) {
//   function reduceRecursive (array, result) {
//     const [ head, ...tail ] = array;

//     return head === undefined ?
//       result :
//       reduceRecursive(tail, fn(result, head));
//   }

//   return reduceRecursive(array, initialValue);
// }

const primes = [ 2, 3, 5, 7, 11, 13, 17, 19 ];
const sum = primes.reduce((sum, current) => sum + current, 0);
console.log(sum);

const names = [ 'Dana', 'Fox', 'Walter' ];
const guestList = names.reduce((acc, val) => `${acc}, ${val}`, '');
console.log(guestList);
