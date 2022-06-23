// Was braucht ein Logger?
//
// Irgendwas mit Strings?
// Wo soll die Ausgabe geschehen?
// Wie sollen die Logs formatiert werden?
// Welches Loglevel hat die Nachricht?
// Metadaten müssen enthalten sein.

// Ein OOP-Logger:

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


// Mit Currying & Partial Application:

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
};

const writeLog = autoCurry(
  function(writer, formatter, level, message) {
    const date = Date();
  
    writer.write(formatter(date, level, message));
  }
);

const consoleWriter = {
  write(text) {
    console.log(text);
  }
};

const plainFormatter = autoCurry(
  function (date, level, message) {
    return `${date} ${level}: ${message}`;
  }
);

const jsonFormatter = autoCurry(
  function (date, level, message) {
    return JSON.stringify({ date, level, message});
  }
);

// Let's build some stuff

const logger = writeLog(consoleWriter);

const formattedLogger = logger(plainFormatter);

const logError = formattedLogger('ERROR');
const logWarning = formattedLogger('WARNING');
const logInfo = formattedLogger('INFO');
const logDebug = formattedLogger('DEBUG');

const log = {
  error: formattedLogger('ERROR'),
  warning: formattedLogger('WARNING'),
  info: formattedLogger('INFO'),
  debug: formattedLogger('DEBUG'),
};

log.debug('Is this working?');
log.info('This is working!');
log.warning('This is too much fun!');
log.error('Fun overload!!!');
