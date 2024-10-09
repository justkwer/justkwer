export const getYearsFromDate = (date: Date) =>
  Math.floor((Date.now() - date.getTime()) / (1000 * 3600 * 24 * 365.25));

export const getRandom = (min: number, max: number) => min + Math.random() * (max - min);
