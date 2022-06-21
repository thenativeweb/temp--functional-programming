'use strict';

// 5! = 1 * 2 * 3 * 4 * 5 = 120
// 5! = (((1 * 2) * 3) * 4) * 5 = 120

// product := 1
// counter := 1
// loop
//   product = product * counter
//   counter = counter + 1

// function factorialIterative (product, counter, maxCounter) {
//   start:
//   return counter > maxCounter ?
//     product :
//     {
//       product * counter
//       counter + 1
//       maxCounter
//       goto start
//     }
// }

function factorial (n) {
  function factorialIterative (product, counter, maxCounter) {
    return counter > maxCounter ?
      product :
      factorialIterative(product * counter, counter + 1, maxCounter);
  }

  return factorialIterative(1, 1, n);
}

console.log(factorial(5));

// fac(5)
// facIter(1, 1, 5)
// facIter(1, 2, 5)
// facIter(2, 3, 5)
// facIter(6, 4, 5)
// facIter(24, 5, 5)
// facIter(120, 6, 5)
// 120
