import { Fragment, useEffect } from 'react';

export const Signature = () => {
  useEffect(() => {
    return () => {
      const str = 'Alex Moore';
      const style = [
        'padding: .1em;',
        'text-shadow: 0 2px #5836AC;',
        'font: 1.3rem/3 Georgia;',
        'color: #B21CC4;',
      ].join('');
      console.log('%c%s', style, str);
    };
  }, []);

  return <Fragment></Fragment>;
};
