const add = (x) => (y) => x + y;

// Irgendwas mit Strings?
// Wo soll die Ausgabe geschehen?
// Wie sollen die Logs formatiert werden?
// Welches Loglevel hat die Nachricht?
// Metadaten müssen enthalten sein.

const consoleDestination = {
  write(text) {
    console.log(text);
  }
};

const plainTextFormatter = {
  format({ logLevel, metadata, message }) {
    return `${metadata.hostName} @ ${metadata.time} (${logLevel}): ${message}`;
  }
}

class Logger {
  constructor(formatter, destination) {
    this.formatter = formatter;
    this.destination = destination;
  }

  getMetadata() {
    return {
      time: Date(),
      hostName: ''
    }
  }

  log(logLevel, message) {
    this.destination.write(this.formatter.format({
      logLevel,
      metadata: this.getMetadata(),
      message
    }));
  }

  debug(message) {
    this.log('debug', message);
  }

  info(message) {
    this.log('info', message);
  }

  warning(message) {
    this.log('warning', message);
  }

  error(message) {
    this.log('error', message);
  }
}

const myLogger = new Logger(plainTextFormatter, consoleDestination);

myLogger.debug('It\'s working!');

const autoCurry = function (fn) {
  const wrapped = function(...args) {
      if (args.length >= fn.length) {
          return fn(...args);
      } else {
          return function (...remainingArgs) {
              return wrapped(...args, ...remainingArgs);
          }
      }
  };
  
  return wrapped;
}

const greetUser = autoCurry(
  (greeting, name) => `${greeting}, ${name}!`
);

const germanGreeting = greetUser('Hallo');

console.log(germanGreeting('Herrmann Mann'));