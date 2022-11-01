export const getRandom = (min: number, max: number) =>
  Math.floor(min + Math.random() * (max - min));

export const width = () => window.innerWidth / 10;

export const randomNum = () => getRandom(0, 100) + '%';
