"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const bookService = __importStar(require("./book.service"));
const logger = core_1.makeLogger('book-resolver');
const bookResolvers = {
    Query: {
        books: async (_, { limit = 10 }) => {
            logger.verbose(`Get books with a limit of [${limit}]`);
            return bookService.getBooks(limit);
        },
        book: async (_, { id }) => {
            logger.verbose(`Get book [${id}]`);
            return bookService.getBookById(id);
        },
    },
    Author: {
        books: async ({ id, bookIds }, _, { bookLoader }) => {
            logger.verbose(`Get books of author [${id}]`);
            return bookLoader.loadMany(bookIds);
        },
    },
};
exports.default = bookResolvers;
//# sourceMappingURL=book.resolvers.js.map