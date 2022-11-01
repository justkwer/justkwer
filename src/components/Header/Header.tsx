import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from './Navigation/Navigation';
import { HeaderStyled } from './styled';
import { Section } from '../../styled/globalStyles';
import { useToggleLightMode } from '../Theme/Theme';
import ChangeMode from './ChangeMode/ChangeMode';

const Header = () => {
  const { isLightMode } = useToggleLightMode();

  return (
    <HeaderStyled>
      <Section>
        <Logo />
        <Navigation />
        <ChangeMode isOn={isLightMode} />
      </Section>
    </HeaderStyled>
  );
};

export default Header;
