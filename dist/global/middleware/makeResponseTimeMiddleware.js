"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeResponseTimeMiddleware = void 0;
exports.makeResponseTimeMiddleware = (logger) => {
    return async (ctx, next) => {
        const start = process.hrtime();
        await next();
        const end = process.hrtime(start);
        const responseTime = Math.round(end[0] * 1000 + end[1] / 1000000);
        logger.warn(`Response time: ${responseTime} milliseconds`);
    };
};
//# sourceMappingURL=makeResponseTimeMiddleware.js.map