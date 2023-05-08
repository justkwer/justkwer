import { FC } from 'react';
import { ScrollingProps } from '@core/types';
import { ScrollingStyled } from './styled';
import { Arrow, Mouse } from '@components';

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
