'use strict';

// Wertetypen
// - Variable -> Wert (Stack)

const pi = 3.14;
// pi = 1.4142;

const isTrue = true;
// isTrue = false;



// Referenztypen
// - Variable -> Pointer (Stack) -> Wert (Heap)

const person = {
  firstName: 'Dana',
  lastName: 'Scully',
  address: {
    street: '700 Maine St',
  }
};

// person = {};
person.middleName = 'Katherine';

const names = [
  'Dana',
  'Fox'
];

// names = [];
names.push('Walter');

const name = 'Dana';
// name = 'Fox';
// name[2] = 'y';


const primes = [ 2, 3, 5, 7, 11 ];
const subPrimes = primes.slice(0, 2);

const copyOfPrimes = [ ...primes, 13 ];
const copyOfPerson = { ...person, age: 30 };

// const deepCopyOfPerson = JSON.parse(JSON.stringify(person));
const deepCopyOfPerson = structuredClone(person);
