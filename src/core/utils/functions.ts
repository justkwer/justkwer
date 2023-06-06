export const getRandom = (min: number, max: number) =>
  min + Math.random() * (max - min);

export const getFoolYears = () =>
  Math.floor(
    (Date.now() - new Date('11/30/2020').getTime()) /
      (1000 * 3600 * 24 * 365.25),
  );
