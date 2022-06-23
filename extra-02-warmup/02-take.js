// Die Funktion take erhält eine Zahl n und eine Liste arr als Argumente.
// Sie gibt eine Liste zurück, die die ersten n Elemente von arr enthält.
// Wenn arr weniger als n Elemente enthält, gibt sie so viele Elemente wie möglich zurück.
// Wenn n = 0 ist, gibt sie eine leere Liste zurück.

const take = (n, arr) => {
	throw new Error("Not implemented!"); 
};


////////////////////////////////////////////////
// Tests
////////////////////////////////////////////////

const compareLists = (left, right) => {
	if (left.length !== right.length) {
		return false;	
	}	
	
	return left
		.map((l, i) => [l, right[i]])
		.reduce((result, [l, r]) => result && (l === r), true);	
}

const test = () => {
	const expect = (actual) => ({
		toListEqual(expected) {
			if (!compareLists(actual, expected)) {
				console.error(`Expected ${actual} to be ${expected}.`);			
			}		
		}	
	});
	
	expect(take(12, [])).toListEqual([]);
	expect(take(12, [4,3,2,1])).toListEqual([4,3,2,1]);
	expect(take(4, [4,3,2,1])).toListEqual([4,3,2,1]);
	expect(take(0, [3,5,3])).toListEqual([]);
	expect(take(2, [3,5,3])).toListEqual([3,5]);
};

test();