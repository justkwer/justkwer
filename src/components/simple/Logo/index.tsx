import React from 'react';
import { LogoStyled } from './styled';
import { ease } from '../../../assets';
import { Span } from '../../../core/theme';

export const Logo = () => (
  <LogoStyled to="/">
    <figure>
      <img src={ease} alt="ease" />
      <figcaption>
        <button>
          <Span>ease</Span>
        </button>
      </figcaption>
    </figure>
  </LogoStyled>
);
