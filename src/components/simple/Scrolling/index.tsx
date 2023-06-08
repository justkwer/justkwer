import { FC, MouseEvent } from 'react';
import { ScrollingProps } from '@core/types';
import { ScrollingStyled } from './styled';
import Arrow from '@public/svg/arrow.svg';
import Mouse from '@public/svg/mouse.svg';

export const Scrolling: FC<ScrollingProps> = ({ click, up }) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    click(up);
  };

  return (
    <ScrollingStyled onClick={handleClick} active={up}>
      {up && <Arrow id="arrow" />}
      <Mouse id="mouse" />
      {!up && <Arrow id="arrow" />}
    </ScrollingStyled>
  );
};
