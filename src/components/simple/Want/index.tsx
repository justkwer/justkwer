import { WantGeneratorStyled } from './styled';
import { WantGeneratorProp } from '@core/types';
import { FC } from 'react';

export const Want: FC<WantGeneratorProp> = ({ title, subtitle, svg }) => {
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
