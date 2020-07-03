"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeBookLoader = void 0;
const dataloader_1 = __importDefault(require("dataloader"));
const book_service_1 = require("./book.service");
const loaderFn = async (keys) => {
    const books = await book_service_1.getBooksByIds(keys);
    const bookMap = new Map();
    books.forEach((book) => bookMap.set(book.id, book));
    return keys.map((key) => bookMap.get(key) || new Error(`No result for key [${key}]`));
};
exports.makeBookLoader = () => new dataloader_1.default(loaderFn);
//# sourceMappingURL=book.loader.js.map