"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBooksByIds = exports.getBooks = exports.getBookById = void 0;
const common_1 = require("../../common");
const core_1 = require("../../core");
const book_data_1 = require("./book.data");
const logger = core_1.makeLogger('book-service');
exports.getBookById = async (id) => {
    logger.info(`Get book [${id}]`);
    await common_1.randomSleep();
    const book = book_data_1.books.find((book) => book.id === id);
    if (!book)
        throw new Error(`Book [${id}] not found`);
    return book;
};
exports.getBooks = async (limit) => {
    logger.info(`Get books with a limit of [${limit}]`);
    await common_1.randomSleep();
    return book_data_1.books.slice(0, limit);
};
exports.getBooksByIds = async (ids) => {
    logger.info(`Get books [${ids}]`);
    await common_1.randomSleep();
    return book_data_1.books.filter((book) => ids.includes(book.id));
};
//# sourceMappingURL=book.service.js.map