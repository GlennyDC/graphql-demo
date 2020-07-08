import { makeLogger } from '../../core';
import { Resolvers } from '../../types';
import { Category } from './category';

const logger = makeLogger('category-resolver');

const categoryResolvers: Resolvers = {
  Book: {
    categories: async (
      { id, categoryIds },
      _,
      { categoryLoader },
    ): Promise<Category[]> => {
      logger.silly(`Get all categories of book [${id}]`);
      // eslint-disable-next-line
      // @ts-ignore
      return categoryLoader.loadMany(categoryIds);
    },
  },
};

export default categoryResolvers;
