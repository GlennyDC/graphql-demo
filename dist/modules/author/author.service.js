"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthorsByIds = exports.getAuthors = void 0;
const common_1 = require("../../common");
const core_1 = require("../../core");
const author_data_1 = require("./author.data");
const logger = core_1.makeLogger('author-service');
exports.getAuthors = async (limit) => {
    logger.info(`Get authors with a limit of [${limit}]`);
    await common_1.randomSleep();
    return author_data_1.authors.slice(0, limit);
};
exports.getAuthorsByIds = async (ids) => {
    logger.info(`Get authors [${ids}]`);
    await common_1.randomSleep();
    return author_data_1.authors.filter((author) => ids.includes(author.id));
};
//# sourceMappingURL=author.service.js.map
