import React from 'react';
import { LogoStyled } from './styled';
import ease from '../../assets/img/ease.webp';

export const Logo = () => {
  return (
    <LogoStyled to="/">
      <figure>
        <img src={ease} alt="ease" />
      </figure>
      <figcaption>
        <span>ease</span>
      </figcaption>
    </LogoStyled>
  );
};

export default Logo;
