'use strict';

function power (x, y) {
  return y === 0 ?
    1 :
    x * power(x, y - 1);
}

// power(2, 5)
// 2 * power(2, 4)
// 2 * 2 * power(2, 3)
// 2 * 2 * 2 * power(2, 2)
// 2 * 2 * 2 * 2 * power(2, 1)
// 2 * 2 * 2 * 2 * 2 * power(2, 0)
// 2 * 2 * 2 * 2 * 2 * 1
// 2 * 2 * 2 * 2 * 2
// 2 * 2 * 2 * 4
// 2 * 2 * 8
// 2 * 16
// 32
