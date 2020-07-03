import { Format } from 'logform';
import { createLogger, format, transports, Logger } from 'winston';

/**
 * Make the format for console logs.
 *
 * @returns {Format} The Winston Console transport format
 */
const makeConsoleFormat = (): Format =>
  format.combine(
    format.colorize({ message: true }),
    format.timestamp(),
    format.printf((info) => {
      const { message, moduleName } = info;
      return `[${moduleName}] - ${message}`;
    }),
  );

/**
 * Make a logger.
 *
 * @param {string} moduleName - The name of the module wich will use the logger
 *
 * @returns {Logger} A Winston logger
 */
const makeLogger = (moduleName: string): Logger =>
  createLogger({
    level: 'info',
    transports: [
      new transports.Console({
        format: makeConsoleFormat(),
      }),
    ],
    defaultMeta: { moduleName },
  });

export { makeLogger };
