import { FC } from 'react';
import { ScrollingProps } from '@core/types';
import { ScrollingStyled } from './styled';
import Arrow from '@public/svg/arrow.svg';
import Mouse from '@public/svg/mouse.svg';

export const Scrolling: FC<ScrollingProps> = ({ click, up }) => {
  const handleClick = () => click(up);

  return (
    <ScrollingStyled onClick={handleClick} active={up}>
      {up && <Arrow />}
      <Mouse />
      {!up && <Arrow />}
    </ScrollingStyled>
  );
};
