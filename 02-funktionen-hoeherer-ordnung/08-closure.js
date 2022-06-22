'use strict';

const addN = function (n) {
  return function (x) {
    return x + n;
  };
};

const add10 = addN(10);
const add15 = addN(15);

console.log(add10(23));
console.log(add15(23));
