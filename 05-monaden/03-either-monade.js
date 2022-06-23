// Beispiel: Wie die Fehlermeldung bekommen?
// Either-Monade

// just :: a -> Either<a>
let just = (data) => ({
  value: data
});
// error :: a -> Either<a>
let error = (err) => ({
  error: err
});

const isJust = (either) => 'value' in either;
const isError = (either) => !isJust(either);


// Operationen können fehlschlagen
let unreliableGetUser = () => {
  if (Math.random() < 0.5) {
    return error("Can't get user.");
  }

  return just({
    id: 'foobarbazquuux',
    name: 'Herrmann Mann',
  });
};

let unreliableGetLastLogin = (userId) => {
  if (Math.random() < 0.5) {
    return error(`Can't get last login for user ${userId}.`);
  }

  return just(Date.now());
}

// Funktor erstellen durch map:
// eitherMap :: Either<a> -> (a -> b) -> Either<b>
const eitherMap = (either, fn) => {
  if (isError(either)) {
    return error(either.error);
  }

  return just(fn(either.value));
};

// Monade erstellen durch flat:
// eitherFlat :: Either<Either<a>> -> Either<a>
const eitherFlat = (nestedEither) => {
  if (isError(nestedEither)) {
    return error(nestedEither.error);
  }

  return nestedEither.value;
};

// map + flat = chain <3
// eitherChain :: Either<a> -> (a -> Either<b>) -> Either<b>
const eitherChain = (either, fn) => eitherFlat(eitherMap(either, fn));

// Jetzt können wir Ketten bauen:
//  Either<a> -> (a -> Either<b>) -> Either<b> -> (b -> Either<c>) -> Either<c> -> (c -> Either<d>) -> Either<d> -> ....

let eitherGreetUser = () => 
  eitherChain(
    eitherChain(
      unreliableGetUser(),
        (user) =>
          eitherMap(
            unreliableGetLastLogin(user.id),
            (lastLogin) => ({ user, lastLogin })
          )
    ),
  ({ user, lastLogin }) => `Hi, ${user.name}! Your last login was at ${lastLogin}`
);

console.log('Mit chain');
console.log(eitherGreetUser());
console.log(eitherGreetUser());
console.log(eitherGreetUser());
console.log(eitherGreetUser());
console.log(eitherGreetUser());
console.log(eitherGreetUser());

// Bessere API:

// just :: a -> Either<a>
const bindEitherFunctions = (self) => ({
  ...self,
  map: (fn) => eitherMap(self, fn),
  flat: () => eitherFlat(self),
  chain: (fn) => eitherChain(self, fn),
});

just = (data) => {
  const either = {
    value: data
  };

  return bindEitherFunctions(either);
}
// error :: () -> Either<a>
error = (err) => {
  const either = {
    error: err
  };

  return bindEitherFunctions(either);
}

// Fun :]
const yell = (greeting) => [ ...greeting ]
  .map(char => char.toUpperCase())
  .join('');

eitherGreetUser = 
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
console.log(eitherGreetUser());
console.log(eitherGreetUser());
console.log(eitherGreetUser());
console.log(eitherGreetUser());
console.log(eitherGreetUser());
console.log(eitherGreetUser());
