'use strict';

function power (base, exponent) {
  function powerIterative (base, counter, product) {
    return counter === 0 ?
      product :
      powerIterative(base, counter - 1, product * base);
  }

  return powerIterative(base, exponent, 1);
}

// -------------------------------------------------------

function power (base, exponent, product = 1) {
  return exponent === 0 ?
    product :
    power(base, exponent - 1, product * base);
}
