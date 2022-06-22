'use strict';

function cube (x) {
  return x * x * x;
}

function identity (x) {
  return x;
}

function increase (x) {
  return x + 1;
}

function add (x, y) {
  return x + y;
}

function multiply (x, y) {
  return x * y;
}

function acceptEverything (x) {
  return true;
}

function accumulate (a, b, term, next, calculate, filter, neutral) {
  return a > b ?
    neutral :
    filter(a) ?
      calculate(
        term(a),
        accumulate(next(a), b, term, next, calculate, filter, neutral)) :
      accumulate(next(a), b, term, next, calculate, filter, neutral);
}

function sum (a, b, term, next) {
  return accumulate(a, b, term, next, add, acceptEverything, 0);
}

function product (a, b, term, next) {
  return accumulate(a, b, term, next, multiply, acceptEverything, 1);
}

function sumNumbers (a, b) {
  return sum(a, b, identity, increase);
}

function sumOddNumbers (a, b) {
  function acceptOdd (x) {
    return x % 2 === 1;
  }

  return accumulate(a, b, identity, increase, add, acceptOdd, 0);
}

function productNumbers (a, b) {
  return product(a, b, identity, increase);
}

function sumCubes (a, b) {
  return sum(a, b, cube, increase);
}

function sumPiEights (a, b) {
  function fraction (x) {
    return 1 / (x * (x + 2));
  }

  function increase (x) {
    return x + 4;
  }

  return sum(a, b, fraction, increase);
}

console.log(sumOddNumbers(1, 10));
