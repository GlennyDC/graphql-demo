import { randomSleep } from '../../common';
import { makeLogger } from '../../core';
import { Author } from './author';
import { authors } from './author.data';

const logger = makeLogger('author-service');

export const getAuthors = async (limit: number): Promise<Author[]> => {
  logger.info(`Get authors with a limit of [${limit}]`);

  await randomSleep();

  return authors.slice(0, limit);
};

export const getAuthorsByIds = async (
  ids: readonly string[],
): Promise<Author[]> => {
  logger.info(`Get authors [${ids}]`);

  await randomSleep();

  return authors.filter((author) => ids.includes(author.id));
};
