'use strict';

function addTs (left: number, right: number): number {
  return left + right;
}

console.log(addTs(23, 42));     // 65
console.log(addTs(23, 42, 7));  // Compilerfehler
console.log(addTs(23));         // Compilerfehler
