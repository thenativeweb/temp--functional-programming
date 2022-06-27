<<<<<<< HEAD
const integersUntil = (end) => Array.from({ length: end }).map((_, i) => i);
=======
const naturalNumbersUntil = (end) => Array.from({ length: end }).map((_, i) => i);
>>>>>>> origin/main

const isPrime = (num) => {
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false;		
		}	
	}
	
	return true;
}

<<<<<<< HEAD

// Braucht immer "end" viele Durchläufe, auch wenn man nur die ersten Paar Ergebnisse braucht!
const naivePrimesUntil = (end) => integersUntil(end).filter((num) => isPrime(num));
=======
const naivePrimesUntil = (end) => naturalNumbersUntil(end).filter((num) => isPrime(num));
>>>>>>> origin/main

const take = (n, arr) => {
	if (n === 0 || arr.length === 0) {
		return [];	
	}
	
	const [head, ...tail] = arr;
	
	return [head, ...take(n - 1, tail)];
}

const time = (fn) => {
	const start = new Date();
	fn();	
	const end = new Date();
	
	return end - start;
}

console.log(time(() => {
<<<<<<< HEAD
	console.log(take(10, naivePrimesUntil(10000000)));
}));


// Unendlicher Generator
const integersGenerator = () => {
  let nextInteger = 0;
  
  return () => {
    console.log("NEXT");
    const result = nextInteger;
    nextInteger += 1;

    return result;
  };
}

const integers = integersGenerator();

//console.log(integers()); // 0
//console.log(integers()); // 1
//console.log(integers()); // 2
//console.log(integers()); // 3

// Man kann aus einem Generator auch nur so viel nehmen, wie man auch wirklich benötigt:
const takeFromGenerator = (n, next) => {
  if (n === 0) {
    return [];
  }

  return [next(), ...takeFromGenerator(n-1, next)];
};

console.log(time(() => {
	console.log(takeFromGenerator(10, integers));
}));


// Man kann Generatoren aufeinander aufbauen:
const primesGenerator = () => {
  const integers = integersGenerator();

  const getNext = () => {
    const nextInteger = integers();

    if (isPrime(nextInteger)) {
      return nextInteger;
    }

    return getNext();
  }

  return getNext;
}

console.log(time(() => {
	console.log(takeFromGenerator(10, primesGenerator()));
}));


// Man kann Generatoren auch immutable schreiben:
const immutableIntegersGenerator = () => {

  const nextInteger = (previousInteger) => {
    return {
      value: previousInteger + 1,
      next: () => nextInteger(previousInteger + 1)
    }
  };

  return {
    value: 0,
    next: () => nextInteger(0)
  };
};

const immutableIntegers_0 = immutableIntegersGenerator();
const immutableIntegers_1 = immutableIntegers_0.next();
const immutableIntegers_2 = immutableIntegers_1.next();
=======
	console.log(take(10, naivePrimesUntil(10000000)))
}));

// Unendlicher Generator

const naturalNumbers = () => {
	const nextNumber = 0;
	
	const generate = () => {
	
	}
}
>>>>>>> origin/main
