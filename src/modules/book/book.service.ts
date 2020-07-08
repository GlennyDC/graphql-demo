import { randomSleep } from '../../common';
import { makeLogger } from '../../core';
import { Book } from './book';
import { books } from './book.data';

const logger = makeLogger('book-service');

export const getBookById = async (id: string): Promise<Book> => {
  logger.verbose(`Get book [${id}]`);

  await randomSleep();

  const book = books.find((book) => book.id === id);

  if (!book) throw new Error(`Book [${id}] not found`);

  return book;
};

export const getBooks = async (limit: number): Promise<Book[]> => {
  logger.verbose(`Get books with a limit of [${limit}]`);

  await randomSleep();

  return books.slice(0, limit);
};

export const getBooksByIds = async (
  ids: readonly string[],
): Promise<Book[]> => {
  logger.verbose(`Get books [${ids}]`);

  await randomSleep();

  return books.filter((book) => ids.includes(book.id));
};
