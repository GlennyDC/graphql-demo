import { makeLogger } from '../../core';
import { Resolvers } from '../../types';
import { Book } from './book';
import * as bookService from './book.service';

const logger = makeLogger('book-resolver');

const bookResolvers: Resolvers = {
  Query: {
    books: async (_, { limit = 10 }): Promise<Book[]> => {
      logger.silly(`Get books with a limit of [${limit}]`);
      return bookService.getBooks(limit);
    },
    book: async (_, { id }): Promise<Book> => {
      logger.silly(`Get book [${id}]`);
      return bookService.getBookById(id);
    },
  },
  Author: {
    books: async ({ id, bookIds }, _, { bookLoader }): Promise<Book[]> => {
      logger.silly(`Get books of author [${id}]`);
      // eslint-disable-next-line
      // @ts-ignore
      return bookLoader.loadMany(bookIds);
    },
  },
};

export default bookResolvers;
