import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from './Navigation/Navigation';
import { HeaderStyled, NavStyled } from './styled';
import { Section } from '../../styled/tags';
import { useToggleLightMode } from '../Theme/Theme';
import ChangeMode from './ChangeMode/ChangeMode';

const Header = () => {
  const { isLightMode } = useToggleLightMode();

  return (
    <HeaderStyled>
      <Section>
        <Logo />
        <NavStyled>
          <Navigation />
          <ChangeMode isOn={isLightMode} />
        </NavStyled>
      </Section>
    </HeaderStyled>
  );
};

export default Header;
