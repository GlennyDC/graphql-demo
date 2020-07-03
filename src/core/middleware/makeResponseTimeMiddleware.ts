import Koa from 'koa';
import { Logger } from 'winston';

export const makeResponseTimeMiddleware = (logger: Logger): Koa.Middleware => {
  return async (ctx: Koa.Context, next: Koa.Next): Promise<void> => {
    const start = process.hrtime();

    await next();

    const end = process.hrtime(start);
    const responseTime = Math.round(end[0] * 1000 + end[1] / 1000000);

    logger.warn(`Response time: ${responseTime} milliseconds`);
  };
};
