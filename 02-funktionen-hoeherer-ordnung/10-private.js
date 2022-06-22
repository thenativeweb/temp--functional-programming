'use strict';

const createStack = function () {
  const data = [];

  const isEmpty = () => data.length === 0;
  const push = value => data.push(value);
  const pop = () => data.pop();
  const top = () => data[data.length - 1];

  return { isEmpty, push, pop, top };
};

const stack = createStack();

console.log(stack.isEmpty());     // true

stack.push(23);
stack.push(42);
console.log(stack.isEmpty());     // false

console.log(stack.top());         // 42
console.log(stack.top());         // 42

console.log(stack.pop());         // 42
console.log(stack.top());         // 23
console.log(stack.pop());         // 23

console.log(stack.isEmpty());     // true
