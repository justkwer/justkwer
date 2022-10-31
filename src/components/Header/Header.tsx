import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from './Navigation/Navigation';
import { HeaderStyled } from './styled';

const Header = () => {
  return (
    <HeaderStyled>
      <section>
        <Logo />
        <Navigation />
      </section>
    </HeaderStyled>
  );
};

export default Header;
