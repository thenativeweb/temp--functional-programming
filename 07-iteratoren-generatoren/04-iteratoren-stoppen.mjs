import mysql from 'mysql2/promise';

// Manchmal muss man Generatoren nach der Benutzung aufräumen, z.B. wenn sie Resourcen
// allokiert haben und diese freigegeben werden sollen.
// Hier ist das z.B. eine Datenbankverbindung:
class OrdersGenerator {
  static async Create (connectionOptions) {
    const connection = await mysql.createConnection(connectionOptions);
    
    return new OrdersGenerator(connection);
  }
  
  constructor (connection) {
    this.connection = connection;
    this.stride = 10;
    this.offset = 0;
    this.buffer = [];
  }

  [Symbol.iterator]() {
    return this;
  }

  async getNextBatch () {
    const [ rows ] = await this.connection.query(
      `SELECT orderNumber, orderDate, requiredDate, shippedDate, status, comments, customerNumber FROM orders LIMIT ${this.stride} OFFSET ${this.offset}`,
      [this.stride, this.offset]
    );

    this.buffer = [ ...rows ];
  }

  async next() {
    if (this.buffer.length === 0) {
      await this.getNextBatch();  
    }

    if (this.buffer.length === 0) {
      return {
        done: true,
        value: undefined
      };
    }

    return {
      value: this.buffer.shift(),
      done: false
    };
  }

  // Über die Methode "return" zeigt der Aufrufer dem Iterator, dass er fertig mit ihm ist.
  // Der Generator kann dann alle von ihm gehaltenen Ressourcen freigeben.
  async return() {
    await this.connection.end();
  }

  // Über die Methode "throw" zeigt der Aufrufer dem Iterator, dass er in die Fehlerbehandlung gegangen ist,
  // und daher den Generator nicht mehr weiter verwenden wird.
  // Der Generator kann dann alle von ihm gehaltenen Ressourcen freigeben.
  async throw() {
    await this.connection.end();
  }
}


const printOrders = async () => {
  const orders = await OrdersGenerator.Create({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : 'classicmodels'
  });

  for (let i = 0; i < 22; i++) {
    const nextOrder = await orders.next();

    if (nextOrder.done) {
      break;
    }

    console.log(i, JSON.stringify(nextOrder.value));
  }

  await orders.return();
};

await printOrders();
