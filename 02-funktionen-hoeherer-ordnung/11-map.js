'use strict';

// function map (array, fn) {
//   function mapRecursive (array, fn, result) {
//     const [ head, ...tail ] = array;

//     return head === undefined ?
//       result :
//       mapRecursive(tail, fn, [ ...result, fn(head) ]);
//   }

//   return mapRecursive(array, fn, []);
// }

const primes = [ 2, 3, 5, 7, 11, 13, 17, 19 ];
const squares = primes.map(prime => prime ** 2);
console.log(squares);

const names = [ 'Dana', 'Fox', 'Walter' ];
const uppercaseNames = names.map(name => name.toUpperCase());
console.log(uppercaseNames);

const persons = [
  { firstName: 'Dana', lastName: 'Scully' },
  { firstName: 'Fox', lastName: 'Mulder' },
  { firstName: 'Walter', lastName: 'Skinner' }
];
const fullNames = persons.map(person => `${person.firstName} ${person.lastName}`);
console.log(fullNames);
