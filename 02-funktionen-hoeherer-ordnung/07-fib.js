'use strict';

const memoization = f => {
  const cache = new Map();

  return function (n) {
    if (cache.has(n)) {
      return cache.get(n);
    }

    cache.set(n, f(n));
    return cache.get(n);
  };
};

const fib = memoization(
  n =>
    n === 0 || n === 1 ?
      1 :
      fib(n - 1) + fib(n - 2));

console.log(fib(50));
