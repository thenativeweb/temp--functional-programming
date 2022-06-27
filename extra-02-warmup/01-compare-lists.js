// Die Funktion compareLists erhält zwei Listen left und right als Argumente.
// Enthalten beide Listen die selben Elemente, gibt die Funktion true zurück.
// Anderenfalls gibt die Funktion false zurück.
// 
// Hinweis: Objekte und Arrays können in JS nicht zuverlässig mit === verglichen werden.
// Wir wollen davon für diese Aufgabe absehen. Wir können davon ausgehen, dass alle Elemente
// in den beiden Listen left und right mit dem Operator === verglichen werden können.

const compareLists = (left, right) => {
	throw new Error("Not implemented!");
}

////////////////////////////////////////////////
// Tests
////////////////////////////////////////////////

const test = () => {
	const expect = (actual) => ({
		toBe(expected) {
			if (actual !== expected) {
				console.error(`Expected ${actual} to be ${expected}.`);			
			}		
		}	
	});

	expect(compareLists([1,2,3], [1,2,3])).toBe(true);
	expect(compareLists([], [])).toBe(true);
	expect(compareLists(['bla'], ['bla'])).toBe(true);
	
	expect(compareLists([1,2], [1,2,3])).toBe(false);
	expect(compareLists([1], [])).toBe(false);
	expect(compareLists(['bla'], ['blub'])).toBe(false);
};

test();