'use strict';

function randomIntInternal (min, max, generateRandom) {
  return Math.floor(generateRandom() * (max - min + 1)) + min;
}

function randomInt (min, max) {
  return randomIntInternal(min, max, Math.random);
}

function testRandomInt () {
  const actual = randomIntInternal(0, 10, () => 0.5);

  if (actual !== 5) {
    throw new Error(`wanted 5, got ${actual}`);
  }
}

testRandomInt();

function interpolate (value, min, max) {
  return value * (max - min) + min;
}

function testInterpolate () {
  const actual = interpolate(0.47, 0, 100);

  if (actual !== 47) {
    throw new Error(`wanted 47, got ${actual}`);
  }
}

testInterpolate();
