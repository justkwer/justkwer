import type { MouseEventType } from '~types';
import { DICTIONARY } from '~constants';

export const onStopPropagation: MouseEventType<HTMLElement> = (e) => {
  e.stopPropagation();
};

export const onPrintSignature = () => {
  const style = [
    'padding: .1em;',
    'text-shadow: 0 2px #5836AC;',
    'font: 1.3rem/3 Georgia;',
    'color: #B21CC4;',
  ].join('');
  console.log('%c%s', style, DICTIONARY.en.META.ALEX_YAKOVLEV);
};
