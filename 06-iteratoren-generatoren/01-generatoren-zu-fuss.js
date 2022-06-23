const naturalNumbersUntil = (end) => Array.from({ length: end }).map((_, i) => i);

const isPrime = (num) => {
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false;		
		}	
	}
	
	return true;
}

const naivePrimesUntil = (end) => naturalNumbersUntil(end).filter((num) => isPrime(num));

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
	console.log(take(10, naivePrimesUntil(10000000)))
}));

// Unendlicher Generator

const naturalNumbers = () => {
	const nextNumber = 0;
	
	const generate = () => {
	
	}
}
