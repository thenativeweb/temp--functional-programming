'use strict';

const iterations = 10_000_000;

function isEven (x) {
  return x % 2 === 0;
}

function square (x) {
  return x * x;
}

function fastPower (base, exponent) {
  return exponent === 0 ?
    1 :
    isEven(exponent) ?
      square(fastPower(base, exponent / 2)) :
      base * fastPower(base, exponent - 1);
}

console.time('fastPower');
for (let i = 0; i < iterations; i++) {
  fastPower(2, 64);
}
console.timeEnd('fastPower');

function powerTailRecursion (base, exponent) {
  function powerIterative (base, counter, product) {
    return counter === 0 ?
      product :
      powerIterative(base, counter - 1, product * base);
  }

  return powerIterative(base, exponent, 1);
}

console.time('powerTailRecursion');
for (let i = 0; i < iterations; i++) {
  powerTailRecursion(2, 64);
}
console.timeEnd('powerTailRecursion');

function power (x, y) {
  return y === 0 ?
    1 :
    x * power(x, y - 1);
}

console.time('power');
for (let i = 0; i < iterations; i++) {
  power(2, 64);
}
console.timeEnd('power');
