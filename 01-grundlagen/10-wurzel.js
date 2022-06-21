'use strict';

function abs (x) {
  return x >= 0 ? x : -x;
}

function square (x) {
  return power(x, 2);
}

function power (x, y) {
  return y > 0 ?
    x * power(x, y - 1) :
    1;
}

function average (x, y) {
  return (x + y) / 2;
}

function sqrt (x) {
  function isGoodEnough (guess) {
    return abs(square(guess) - x) < 0.00001;
  }

  function improve (guess) {
    return average(guess, x / guess);
  }

  function sqrtRecursive (guess) {
    return isGoodEnough(guess) ?
      guess :
      sqrtRecursive(improve(guess));
  }

  return sqrtRecursive(1);
}

function cbrt (x) {
  function isGoodEnough (guess) {
    return abs(power(guess, 3) - x) < 0.00001;
  }

  function improve (guess) {
    return (x / square(guess) + 2 * guess) / 3;
  }

  function cbrtRecursive (guess) {
    return isGoodEnough(guess) ?
      guess :
      cbrtRecursive(improve(guess));
  }

  return cbrtRecursive(1);
}

console.log(sqrt(2));
console.log(cbrt(27));
