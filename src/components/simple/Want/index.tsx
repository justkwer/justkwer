import React from 'react';
import { WantGeneratorStyled } from './styled';
import { WantGeneratorProp } from './prop';

export const Want = ({ title, subtitle, svg }: WantGeneratorProp) => {
  return (
    <WantGeneratorStyled>
      {svg}
      <figcaption>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </figcaption>
    </WantGeneratorStyled>
  );
};
