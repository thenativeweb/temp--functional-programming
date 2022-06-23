// Beispiel: Wie mit Fehlern umgehen?
// Maybe-Monade

// just :: a -> Maybe<a>
let just = (data) => ({
  value: data
});
// nothing :: () -> Maybe<a>
let nothing = () => ({
  nothing: true
});

const isJust = (maybe) => 'value' in maybe;
const isNothing = (maybe) => !isJust(maybe);


// Operationen können fehlschlagen
let unreliableGetUser = () => {
  if (Math.random() < 0.5) {
    return nothing();
  }

  return just({
    id: 'foobarbazquuux',
    name: 'Herrmann Mann',
  });
};

let unreliableGetLastLogin = (userId) => {
  if (Math.random() < 0.5) {
    return nothing();
  }

  return just(Date.now());
}

// Imperatives error handling
const greetUser = () => {
  const user = unreliableGetUser();

  if (isNothing(user)) {
    return 'Hi, I don\'t know you :/';
  }

  const { name, id } = user.value;

  const lastLogin = unreliableGetLastLogin(id);

  if (isNothing(lastLogin)) {
    return `Hi, ${name}!`;  
  }

  return `Hi, ${name}! Your last login was at ${lastLogin}`;
};

console.log('Imperativ ohne Monaden');
console.log(greetUser());
console.log(greetUser());
console.log(greetUser());
console.log(greetUser());
console.log(greetUser());
console.log(greetUser());

// Funktor erstellen durch map:
// maybeMap :: Maybe<a> -> (a -> b) -> Maybe<b>
const maybeMap = (maybe, fn) => {
  if (isNothing(maybe)) {
    return nothing();
  }

  return just(fn(maybe.value));
};

// Monade erstellen durch flat:
// maybeFlat :: Maybe<Maybe<a>> -> Maybe<a>
const maybeFlat = (nestedMaybe) => {
  if (isNothing(nestedMaybe)) {
    return nothing();
  }

  return nestedMaybe.value;
};

// map + flat = chain <3
// maybeChain :: Maybe<a> -> (a -> Maybe<b>) -> Maybe<b>
const maybeChain = (maybe, fn) => maybeFlat(maybeMap(maybe, fn));

// Jetzt können wir Ketten bauen:
//  Maybe<a> -> (a -> Maybe<b>) -> Maybe<b> -> (b -> Maybe<c>) -> Maybe<c> -> (c -> Maybe<d>) -> Maybe<d> -> ....

let maybeGreetUser = () => 
  maybeChain(
    maybeChain(
      unreliableGetUser(),
        (user) =>
          maybeMap(
            unreliableGetLastLogin(user.id),
            (lastLogin) => ({ user, lastLogin })
          )
    ),
  ({ user, lastLogin }) => `Hi, ${user.name}! Your last login was at ${lastLogin}`
);

console.log('Mit chain');
console.log(maybeGreetUser());
console.log(maybeGreetUser());
console.log(maybeGreetUser());
console.log(maybeGreetUser());
console.log(maybeGreetUser());
console.log(maybeGreetUser());

// Bessere API:

// just :: a -> Maybe<a>
const bindMaybeFunctions = (self) => ({
  ...self,
  map: (fn) => maybeMap(self, fn),
  flat: () => maybeFlat(self),
  chain: (fn) => maybeChain(self, fn),
});

just = (data) => {
  const maybe = {
    value: data
  };

  return bindMaybeFunctions(maybe);
}
// nothing :: () -> Maybe<a>
nothing = () => {
  const maybe = {
    nothing: true
  };

  return bindMaybeFunctions(maybe);
}

// Fun :]
const yell = (greeting) => [ ...greeting ]
  .map(char => char.toUpperCase())
  .join('');

maybeGreetUser = 
  () =>
    unreliableGetUser()
      .chain(
        (user) =>
          unreliableGetLastLogin(user.id)
            .map((lastLogin) => ({ user, lastLogin }))
      )
      .map(
        ({ user, lastLogin }) => `Hi, ${user.name}! Your last login was at ${lastLogin}`
      )
      .map(
        (greeting) => yell(greeting)
      );

console.log('Mit besserer chain API');
console.log(maybeGreetUser());
console.log(maybeGreetUser());
console.log(maybeGreetUser());
console.log(maybeGreetUser());
console.log(maybeGreetUser());
console.log(maybeGreetUser());
