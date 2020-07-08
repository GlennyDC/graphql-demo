import Koa from 'koa';

import {
  makeLogger,
  installApolloServer,
  makeResponseTimeMiddleware,
} from './core';

const logger = makeLogger('app');

const app = new Koa();

app.use(makeResponseTimeMiddleware(logger));

installApolloServer(app);

app.listen(3000, '0.0.0.0', () => {
  logger.info(`Server ready at localhost:3000 in ${process.env.NODE_ENV} mode`);
});
