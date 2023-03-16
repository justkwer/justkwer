import React from 'react';
import { ScrollingProps } from './prop';
import { ScrollingStyled } from './styled';
import { Arrow, Mouse } from '../../../assets';

export const Scrolling = ({ click, up }: ScrollingProps) => {
  const handleClick = () => click(up);

  return (
    <ScrollingStyled onClick={handleClick} up={up}>
      {up && <Arrow />}
      <Mouse />
      {!up && <Arrow />}
    </ScrollingStyled>
  );
};
