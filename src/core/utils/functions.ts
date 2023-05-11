export const getRandom = (min: number, max: number) =>
  Math.floor(min + Math.random() * (max - min));

export const width = () => window.innerWidth / 10;

export const randomNum = () => getRandom(0, 100) + '%';

export const getFoolYears = (date: number) =>
  Math.floor((Date.now() - date) / (1000 * 3600 * 24 * 365.25));

export const getMyLearningFoolYears = () => {
  const startLearning = new Date('11/30/2020').getTime();
  return getFoolYears(startLearning);
};
