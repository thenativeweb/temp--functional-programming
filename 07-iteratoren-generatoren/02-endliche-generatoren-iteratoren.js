// Manche Generatoren können nur begrenzt Elemente erzeugen.
// Wie teilt man dem Aufrufer mit, dass der Generator fertig ist?

// Möglichkeit 1: Per hasNext() Methode:
const finiteGenerator = () => {
  const items = ['bla', 'bli', 'blub'];

  const hasNext = () => {
    return items.length > 0;
  };

  const next = () => {
    return items.shift();
  };

  return {
    next,
    hasNext
  };
};

const myFiniteGenerator = finiteGenerator();

while (myFiniteGenerator.hasNext()) {
  console.log(myFiniteGenerator.next());
}

// Möglichkeit 2: Per Value-Objekt:
const finiteGenerator2 = () => {
  const items = ['bla', 'bli', 'blub'];

  const next = () => {
    if (items.length === 0) {
      return {
        value: undefined,
        done: true
      };
    }

    return  {
      value: items.shift(),
      done: false
    };
  };

  return {
    next,
    hasNext
  };
};

const myFiniteGenerator2 = finiteGenerator2();

for (
  const { done, value } = myFiniteGenerator2.next();
  !done; 
  { done, value } = myFiniteGenerator2.next()
) {
  console.log(value);
}
