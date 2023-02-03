import React from 'react';
import { LogoStyled } from './styled';
import { ease } from '../../../assets';

export const Logo = () => (
  <LogoStyled to="/">
    <figure>
      <img src={ease} alt="ease" />
    </figure>
    <figcaption>
      <span>ease</span>
    </figcaption>
  </LogoStyled>
);
