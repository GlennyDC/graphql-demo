import { makeAuthorLoader } from '../modules/author/author.loader';
import { makeBookLoader } from '../modules/book/book.loader';
import { makeCategoryLoader } from '../modules/category/category.loader';
import { Context } from '../types/context';

export const createContext = (): Context => ({
  authorLoader: makeAuthorLoader(),
  bookLoader: makeBookLoader(),
  categoryLoader: makeCategoryLoader(),
});
