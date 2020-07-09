export const throwIfArrayHasError = <T>(array: T[]): void => {
  if (array.some((value) => value instanceof Error)) {
    throw new Error('Oops, incorrect data');
  }
};
