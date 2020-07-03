"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAuthorLoader = void 0;
const dataloader_1 = __importDefault(require("dataloader"));
const author_service_1 = require("./author.service");
const loaderFn = async (keys) => {
    const authors = await author_service_1.getAuthorsByIds(keys);
    const authorMap = new Map();
    authors.forEach((author) => authorMap.set(author.id, author));
    return keys.map((key) => authorMap.get(key) || new Error(`No result for key [${key}]`));
};
exports.makeAuthorLoader = () => new dataloader_1.default(loaderFn);
//# sourceMappingURL=author.loader.js.map