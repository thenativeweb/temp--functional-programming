'use strict';

function increment (x) {
  return x + 1;
}

function square (x) {
  return x * x;
}

function double (f) {
  return function (x) {
    return f(f(x));
  };
}

function repeat (f, n) {
  return function (x) {
    return n === 0 ?
      x :
      f(repeat(f, n - 1)(x));
  };
}

console.log(repeat(increment, 12)(23)); // 35
console.log(repeat(increment, 7)(49));  // 56
console.log(repeat(increment, 3)(16));  // 19
console.log(repeat(square, 1)(5));      // 25
console.log(repeat(square, 2)(5));      // 625
console.log(repeat(square, 3)(5));      // 390625
