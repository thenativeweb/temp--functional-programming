'use strict';

function fib (n) {
  return n === 0 || n === 1 ?
    1 :
    fib(n - 1) + fib(n - 2);
}

console.log(fib(0));    // 1
console.log(fib(1));    // 1
console.log(fib(2));    // 2
console.log(fib(3));    // 3
console.log(fib(4));    // 5
console.log(fib(5));    // 8
console.log(fib(46));   // ...

// fib(5)
// fib(4) + fib(3)
// (fib(3) + fib(2)) + (fib(2) + fib(1))
// (((fib(2) + fib(1)) + (fib(1) + fib(0))) + ((fib(1) + fib(0)) + 1)
// (((fib(1) + fib(0) + fib(1)) + (fib(1) + fib(0))) + ((fib(1) + fib(0)) + 1)
// 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1
