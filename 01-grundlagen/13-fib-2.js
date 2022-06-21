'use strict';

function fib (n) {
  function fibIterative (current, predecessor, count) {
    return count === 0 ?
      current :
      fibIterative(current + predecessor, current, count - 1);
  }

  return fibIterative(1, 0, n);
}

console.log(fib(0)); // 1
console.log(fib(1)); // 1
console.log(fib(2)); // 2
console.log(fib(3)); // 3
console.log(fib(4)); // 5
console.log(fib(5)); // 8
console.log(fib(6)); // 13
console.log(fib(50)); // ...

// fib(5)
// fibIterative(1, 0, 5)
// fibIterative(1, 1, 4)
// fibIterative(2, 1, 3)
// fibIterative(3, 2, 2)
// fibIterative(5, 3, 1)
// fibIterative(8, 5, 0)
// 8
