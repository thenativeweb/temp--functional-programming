'use strict';

function addMax (x, y, z) {
  return (
    (x > y && y > z) ? (x + y) :
    (x > y && z > y) ? (x + z) :
    (y > x && x > z) ? (x + y) :
    (y > z && z > x) ? (y + z) :
    (x > y && z > x) ? (x + z) :
    (y + z)
  );
};

console.log(addMax(7, 8, 9)); // => 17
console.log(addMax(9, 8, 7)); // => 17
