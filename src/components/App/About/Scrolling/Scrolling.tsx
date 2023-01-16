import React from 'react';
import { ScrollingProps } from './props';
import { SvgGenerator } from '../../../SvgGenerator/SvgGenerator';
import { ScrollingStyled } from './styled';

const Scrolling = ({ click, up }: ScrollingProps) => {
  const handleClick = () => click(up);

  return (
    <ScrollingStyled onClick={handleClick} up={up}>
      {up && <SvgGenerator id="arrow" />}
      <SvgGenerator id="mouse" />
      {!up && <SvgGenerator id="arrow" />}
    </ScrollingStyled>
  );
};

export default Scrolling;
