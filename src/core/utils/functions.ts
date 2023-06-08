export const getRandom = (min: number, max: number) =>
  min + Math.random() * (max - min);

export const getFoolYears = () =>
  Math.floor(
    (Date.now() - new Date('11/30/2020').getTime()) /
      (1000 * 3600 * 24 * 365.25),
  );

export const signature = () => {
  const str = 'Alex Moore';
  const style = [
    'padding: .1em;',
    'text-shadow: 0 2px #5836AC;',
    'font: 1.3rem/3 Georgia;',
    'color: #B21CC4;',
  ].join('');
  console.log('%c%s', style, str);
};
