const f = (x, y, z) =>
	(2 * Math.pow(x, 3)) +
	(3 * Math.pow(y, 2)) -
	z;

const g =
	(x) =>
		(y) =>
			(z) => f(x, y, z);

const foo = f(1, 2, 3);
const bar = g(1)(2)(3);

console.log({ foo, bar });