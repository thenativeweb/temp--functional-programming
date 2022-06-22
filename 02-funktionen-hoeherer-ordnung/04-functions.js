'use strict';

function square (x) {
  return x * x;
}

function f (g) {
  return g(2);
}

f(f);
