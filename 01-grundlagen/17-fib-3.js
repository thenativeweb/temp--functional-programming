'use strict';

const cache = [];

function fib (n) {
  return n === 0 || n === 1 ?
    1 :
    cache[n] ?
      cache[n] :
      cache[n] = fib(n - 1) + fib(n - 2);
}

console.log(fib(45));
