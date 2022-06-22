'use strict';

//         f(x + dx) - f(x)
// Df(x) = ----------------
//                dx

function square (x) {
  return x * x;
}

function cube (x) {
  return x * x * x;
}

function derive (f) {
  const dx = 0.000000001;

  return function (x) {
    return (f(x + dx) - f(x)) / dx;
  };
}

const cubeDerivative = derive(cube);

console.log(cubeDerivative(1));
console.log(cubeDerivative(5));
console.log(cubeDerivative(10));
