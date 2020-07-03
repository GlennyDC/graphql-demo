"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const core_1 = require("./core");
console.log(core_1.makeLogger);
const logger = core_1.makeLogger('app');
const app = new koa_1.default();
app.use(core_1.makeResponseTimeMiddleware(logger));
core_1.installApolloServer(app);
app.listen(3000, '0.0.0.0', () => {
    logger.info(`Server ready at localhost:3000 in ${process.env.NODE_ENV} mode`);
});
//# sourceMappingURL=index.js.map