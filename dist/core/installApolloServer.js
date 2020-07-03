"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.installApolloServer = void 0;
const file_loading_1 = require("@graphql-toolkit/file-loading");
const apollo_server_koa_1 = require("apollo-server-koa");
const path_1 = require("path");
const utils_1 = require("./utils");
const makeSchema = () => {
    const typeDefs = file_loading_1.loadFiles(path_1.join(__dirname, '../../modules/**/*.typeDefs.gql'));
    const resolvers = file_loading_1.loadFiles(path_1.join(__dirname, '../../modules/**/*.resolvers.*'));
    const schema = apollo_server_koa_1.makeExecutableSchema({
        typeDefs,
        resolvers,
    });
    return schema;
};
exports.installApolloServer = (app) => {
    const schema = makeSchema();
    const apolloServer = new apollo_server_koa_1.ApolloServer({
        schema,
        debug: true,
        playground: true,
        introspection: true,
        context: utils_1.createLoaders(),
    });
    apolloServer.applyMiddleware({ app });
};
//# sourceMappingURL=installApolloServer.js.map