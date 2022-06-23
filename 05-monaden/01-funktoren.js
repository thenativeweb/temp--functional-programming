// Kategorie TypeScript enthält alle Typen in TS
// Unterkategorien:
//   -> Kategorie aller Objekttypen
//   -> Kategorie aller Zahlen
//   -> Kategorie aller Typen, die das Interface "Iterator" implementieren
//   -> Kategorie aller Arrays
//     -> Kategorie aller Arrays mit Zahlen
//     -> Kategorie aller Arrays mit Strings

// Funktoren sind Abbildungen von einer Kategorie in eine andere
// Funktoren sind Strukturerhaltend

// F(m) -- Functor wird auf Morphismus angewendet
// F(idA) = id_F(A) muss gelten!

// Nicht strukturerhaltend
const arrayToNumber = (arr) => 3;

// Strukturerhaltend
// intToString :: int -> string
const intToString = (int) => `${int}`;

// Identität in arrays:
const idArray = (arr) => arr;

// Identität in number:
const idNumber = (num) => num;


// Funktoren benötigen eine Funktion map
// Funktoren kann man sich als Container vorstellen.

// map :: (a -> b) -> (D a) -> (D b)
// map :: (a -> b) -> Array<a> -> Array<b>
const myMap = (arr, transform) => {
  const result = [];

  for (const element of arr) {
    result.push(transform(element));
  }

  return result;
};

const upperCaseName = ({ name, ...rest }) => ({
  name: name.toUpperCase(),
  ...rest
});

// Konstruktoren

// createArray :: a -> Array<a>
const createArray = (a) => [a];
