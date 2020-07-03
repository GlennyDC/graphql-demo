"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoriesByIds = void 0;
const common_1 = require("../../common");
const core_1 = require("../../core");
const category_data_1 = require("./category.data");
const logger = core_1.makeLogger('category-service');
exports.getCategoriesByIds = async (ids) => {
    logger.info(`Get categories [${ids}]`);
    await common_1.randomSleep();
    return category_data_1.categories.filter((category) => ids.includes(category.id));
};
//# sourceMappingURL=category.service.js.map