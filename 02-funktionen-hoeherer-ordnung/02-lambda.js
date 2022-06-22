'use strict';

const accumulate = (a, b, term, next, calculate, filter, neutral) =>
  a > b ?
    neutral :
    filter(a) ?
      calculate(
        term(a),
        accumulate(next(a), b, term, next, calculate, filter, neutral)) :
      accumulate(next(a), b, term, next, calculate, filter, neutral);

const sumNumbers = (a, b) => accumulate(a, b,
  x => x,
  x => x + 1,
  (x, y) => x + y,
  () => true,
  0);

const sumOddNumbers = (a, b) => accumulate(a, b,
  x => x,
  x => x + 1,
  (x, y) => x + y,
  x => x % 2 === 1,
  0);

const productNumbers = (a, b) => accumulate(a, b,
  x => x,
  x => x + 1,
  (x, y) => x * y,
  () => true,
  1);

const sumCubes = (a, b) => accumulate(a, b,
  x => x * x * x,
  x => x + 1,
  (x, y) => x + y,
  () => true,
  0);

const sumPiEights = (a, b) => accumulate(a, b,
  x => 1 / (x * (x + 2)),
  x => x + 4,
  (x, y) => x + y,
  () => true,
  0);

console.log(8 * sumPiEights(1, 10000));
