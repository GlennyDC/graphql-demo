"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const logger = core_1.makeLogger('category-resolver');
const categoryResolvers = {
    Book: {
        categories: async ({ id, categoryIds }, _, { categoryLoader }) => {
            logger.verbose(`Get all categories of book [${id}]`);
            return categoryLoader.loadMany(categoryIds);
        },
    },
};
exports.default = categoryResolvers;
//# sourceMappingURL=category.resolvers.js.map
