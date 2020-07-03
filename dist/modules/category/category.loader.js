"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCategoryLoader = void 0;
const dataloader_1 = __importDefault(require("dataloader"));
const category_service_1 = require("./category.service");
const loaderFn = async (keys) => {
    const categorys = await category_service_1.getCategoriesByIds(keys);
    const categoryMap = new Map();
    categorys.forEach((category) => categoryMap.set(category.id, category));
    return keys.map((key) => categoryMap.get(key) || new Error(`No result for key [${key}]`));
};
exports.makeCategoryLoader = () => new dataloader_1.default(loaderFn);
//# sourceMappingURL=category.loader.js.map