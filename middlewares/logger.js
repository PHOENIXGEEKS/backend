const { createLogger, format, transports } = require('winston');

const { combine, splat, timestamp, printf } = format;

const myFormat = printf(({ level, message, timestamp, ...metadata }) => {
  let msg = `${timestamp} [${level}] : ${message} `;
  if (metadata) {
    msg += JSON.stringify(metadata);
  }
  return msg;
});

const logger = createLogger({
  level: 'info',
  format: combine(format.colorize(), splat(), timestamp(), myFormat),
  transports: [new transports.Console({ level: 'info' })],
});

// using the logger and its configured transports, to save the all logs created by Morgan
const myStream = {
  write: (text) => {
    logger.info(text);
  },
};

module.exports.logger = logger;
module.exports.stream = myStream;
