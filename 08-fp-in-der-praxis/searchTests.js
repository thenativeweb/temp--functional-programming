'use strict';

const { search } = require('./search');

let actual, expected;

actual = search([ 'foo' ], 'foo');
expected = [
  { value: 'foo', quality: 1 }
];
for (let i = 0; i < actual.length; i++) {
  if (actual[i].value !== expected[i].value || actual[i].quality !== expected[i].quality) {
    throw new Error(`wanted ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
}


actual = search([ 'foo', 'foobar' ], 'foo');
expected = [
  { value: 'foo', quality: 1 },
  { value: 'foobar', quality: 0.3333333333333333 }
];
for (let i = 0; i < actual.length; i++) {
  if (actual[i].value !== expected[i].value || actual[i].quality !== expected[i].quality) {
    throw new Error(`wanted ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
}

actual = search([ 'foo', 'bar', 'foobar' ], 'foo');
expected = [
  { value: 'foo', quality: 1 },
  { value: 'bar', quality: 0.999 },
  { value: 'foobar', quality: 0.3333333333333333 }
];
for (let i = 0; i < actual.length; i++) {
  if (actual[i].value !== expected[i].value || actual[i].quality !== expected[i].quality) {
    throw new Error(`wanted ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
}
