import React from 'react';
import { WantGeneratorStyled } from './styled';
import { WantGeneratorProp } from './prop';
import { SvgGenerator } from '../../SvgGenerator/SvgGenerator';

export const Want = ({ title, subtitle, svg }: WantGeneratorProp) => {
  return (
    <WantGeneratorStyled>
      <SvgGenerator id={svg} />
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
    </WantGeneratorStyled>
  );
};
