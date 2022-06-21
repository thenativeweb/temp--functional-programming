'use strict';

function add (left, right) {
  return left + right;
}

console.log(add(23, 42));     // 65
console.log(add(23, 42, 7));  // 65, zusätzliche Argumente werden ignoriert
console.log(add(23));         // NaN, fehlende Argumente werden mit undefined initialisiert
