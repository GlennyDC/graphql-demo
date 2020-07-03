export const randomSleep = (): Promise<void> => {
  const milliseconds = Math.random() * (500 - 400) + 400;
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
