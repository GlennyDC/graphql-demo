import { loadFiles } from '@graphql-toolkit/file-loading';
import {
  makeExecutableSchema,
  ApolloServer,
  IResolvers,
} from 'apollo-server-koa';
import { GraphQLSchema } from 'graphql';
import Koa from 'koa';
import { join } from 'path';

import { createLoaders } from './utils';

const makeSchema = (): GraphQLSchema => {
  const typeDefs = loadFiles<string>(
    join(__dirname, '../../modules/**/*.typeDefs.gql'),
  );
  const resolvers = loadFiles<IResolvers>(
    join(__dirname, '../../modules/**/*.resolvers.*'),
  );
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });
  return schema;
};

export const installApolloServer = (app: Koa): void => {
  const schema = makeSchema();
  const apolloServer = new ApolloServer({
    schema,
    debug: true,
    playground: true,
    introspection: true,
    context: createLoaders(),
  });
  apolloServer.applyMiddleware({ app });
};
