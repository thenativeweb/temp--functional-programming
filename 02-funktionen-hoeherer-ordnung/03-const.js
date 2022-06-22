'use strict';

// f(x, y) = x(1 + xy)^2 + y(1 - y) + (1 + xy)(1 - y)
//
// a = 1 + xy
// b = 1 - y
//
// f(x, y) = xa^2 + yb + ab

function f (x, y) {
  const a = 1 + x * y;
  const b = 1 - y;

  return x * a * a + y * b + a * b;
}

function f2 (x, y) {
  return ((a, b) =>
    x * a * a + y * b + a * b
  )(
    1 + x * y,
    1 - y
  );
}
