import { randomSleep } from '../../common';
import { makeLogger } from '../../core';
import { Category } from './category';
import { categories } from './category.data';

const logger = makeLogger('category-service');

export const getCategoriesByIds = async (
  ids: readonly string[],
): Promise<Category[]> => {
  logger.info(`Get categories [${ids}]`);

  await randomSleep();

  return categories.filter((category) => ids.includes(category.id));
};
