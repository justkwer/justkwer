import React from 'react';
import { SvgGenerator } from '../../../../SvgGenerator/SvgGenerator';
import { WantGeneratorStyled } from './styled';
import { WantGeneratorProps } from './WantGenerator.module';

const WantGenerator = ({ title, subtitle, svg }: WantGeneratorProps) => {
  return (
    <WantGeneratorStyled>
      <SvgGenerator id={svg} />
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
    </WantGeneratorStyled>
  );
};

export default WantGenerator;
