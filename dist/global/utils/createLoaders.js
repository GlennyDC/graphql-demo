"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLoaders = void 0;
const author_loader_1 = require("../../modules/author/author.loader");
const book_loader_1 = require("../../modules/book/book.loader");
const category_loader_1 = require("../../modules/category/category.loader");
exports.createLoaders = () => ({
    authorLoader: author_loader_1.makeAuthorLoader(),
    bookLoader: book_loader_1.makeBookLoader(),
    categoryLoader: category_loader_1.makeCategoryLoader(),
});
//# sourceMappingURL=createLoaders.js.map