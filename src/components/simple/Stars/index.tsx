import React, { Fragment, useCallback, useEffect, useState } from 'react';
import Star from './Star';
import { randomNum, width } from '@core/utils';

export const Stars = () => {
  const [length, setLength] = useState(width);
  const resize = useCallback(() => setLength(width), []);

  useEffect(() => {
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [resize]);

  return (
    <Fragment>
      {Array.from({ length }).map((item, index) => (
        <Star key={index} top={randomNum()} left={randomNum()} />
      ))}
    </Fragment>
  );
};
