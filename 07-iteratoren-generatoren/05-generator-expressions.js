import mysql from 'mysql2/promise';

// Generatiren lassen sich mit den Generator-Expressions wesentlich kompakter schreiben:
const infiniteNumbers = function* () {
  let i = 0;

  while (true) {
    // Yield unterbricht die Ausführung und gibt den Wert
    // an den Aufrufer weiter.
    // Die Abschnitte zwischen zwei yield-statements entsprend jeweils
    // einer Asuführung der next()-Funktion.
    yield i++;
  }
};

// Wenn die Funktion returned, ist der Generator leer.
// Das kommt einem next()-Aufruf gleich, der { done: true, ...} returned.
const finiteNumbers = function* () {
  let i = 0;

  while (i < 100) {
    yield i++;
  }
};

for (const item of finiteNumbers()) {
  console.log(item);
}


// Auch Generator-Expressions können aufeinander aufbauen:
const primes = function* () {
  for (const num of finiteNumbers()) {
    if (isPrime(num)) {
      yield num;
    }
  }
}


// Auch das Abbrechen von Generatoren ist möglich.
// Durch das Einfügen eines try-finally blocks können Instruktionen ausgeführt werden,
// sobald der Generator durch den Aufrufer verworfen wird.
const getOrders = async function* (connectionOptions) {
  const connection = await mysql.createConnection(connectionOptions);

  try {
    const stride = 10;
    let offset = 0;

    while (true) {
      const [ rows ] = await connection.query(
        `SELECT orderNumber, orderDate, requiredDate, shippedDate, status, comments, customerNumber FROM orders LIMIT ${stride} OFFSET ${offset}`,
        [stride, offset]
      );

      offset += rows.length;
  
      if (rows.length === 0) {
        break;
      }

      for (const row of rows) {
        yield row;
      }
    }

  } finally {
    connection.end();
  }
};

for await (const order of getOrders({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'root',
  database : 'classicmodels'
})) {
  console.log(order);

  // Da ein finally-Block immer ausgeführt wird, bevor eine Funktion beendet werden kann,
  // wir das Aufräumen hier sogar automatisch ausgeführt!
  throw "Help!";
}
