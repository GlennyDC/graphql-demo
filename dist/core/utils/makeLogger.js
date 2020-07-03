"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLogger = void 0;
const winston_1 = require("winston");
const makeConsoleFormat = () => winston_1.format.combine(winston_1.format.colorize({ message: true }), winston_1.format.timestamp(), winston_1.format.printf((info) => {
    const { message, moduleName } = info;
    return `[${moduleName}] - ${message}`;
}));
const makeLogger = (moduleName) => winston_1.createLogger({
    level: 'info',
    transports: [
        new winston_1.transports.Console({
            format: makeConsoleFormat(),
        }),
    ],
    defaultMeta: { moduleName },
});
exports.makeLogger = makeLogger;
//# sourceMappingURL=makeLogger.js.map