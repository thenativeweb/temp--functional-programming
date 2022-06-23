const autoCurry = function (fn) {
  const wrapped = function(...args) {
    if (args.length >= fn.length) {
      return fn(...args);

    } else {

      return function (...remainingArgs) {
        return wrapped(...args, ...remainingArgs);
      }
    }
  };
  
  return wrapped;
};

export {
  autoCurry
};
