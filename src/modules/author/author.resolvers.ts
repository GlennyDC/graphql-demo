import { throwIfArrayHasError } from '../../common';
import { makeLogger } from '../../core';
import { Resolvers } from '../../types';
import { Author } from './author';
import * as authorService from './author.service';

const logger = makeLogger('author-resolver');

const authorResolvers: Resolvers = {
  Book: {
    authors: async (
      { id, authorIds },
      _,
      { authorLoader },
    ): Promise<Author[]> => {
      logger.silly(`Get all authors of book [${id}]`);

      const authors = await authorLoader.loadMany(authorIds);

      throwIfArrayHasError(authors);

      return authors as Author[];
    },
  },
  Query: {
    authors: async (_, { limit = 10 }): Promise<Author[]> => {
      logger.silly(`Get authors with a limit of [${limit}]`);
      return authorService.getAuthors(limit);
    },
  },
};

export default authorResolvers;
