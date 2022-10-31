import React from 'react';
import { LogoStyled } from './styled';

export const Logo = () => {
  return (
    <LogoStyled>
      <figure>
        <img src={require('../../assets/img/ease.webp')} alt={'Error'} />
      </figure>
      <figcaption>
        <h2>ease</h2>
      </figcaption>
    </LogoStyled>
  );
};

export default Logo;
