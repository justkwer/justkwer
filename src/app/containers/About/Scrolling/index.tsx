import type { FC } from 'react';
import type { ScrollingProps } from './models';
import * as S from './styled';
import Arrow from '~svg/arrow.svg';
import Mouse from '~svg/mouse.svg';
import type { MouseEventType } from '~types';

export const Scrolling: FC<ScrollingProps> = ({ callback, ...rest }) => {
  const { isScrollUp } = rest;
  
  const handleClick: MouseEventType<HTMLButtonElement> = (e) => {
    e.preventDefault();
    callback(isScrollUp);
  };

  return (
    <S.Scrolling onClick={handleClick} {...rest}>
      {isScrollUp && <Arrow id="arrow" />}
      <Mouse id="mouse" />
      {!isScrollUp && <Arrow id="arrow" />}
    </S.Scrolling>
  );
};
