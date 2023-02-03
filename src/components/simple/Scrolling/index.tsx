import React from 'react';
import { ScrollingProps } from './prop';
import { ScrollingStyled } from './styled';
import { SvgGenerator } from '../../SvgGenerator/SvgGenerator';

export const Scrolling = ({ click, up }: ScrollingProps) => {
  const handleClick = () => click(up);

  return (
    <ScrollingStyled onClick={handleClick} up={up}>
      {up && <SvgGenerator id="arrow" />}
      <SvgGenerator id="mouse" />
      {!up && <SvgGenerator id="arrow" />}
    </ScrollingStyled>
  );
};
