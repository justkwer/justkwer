import React from 'react';
import { Logo } from '../../components/simple';
import { Navigation } from '../../components/simple';
import { HeaderStyled, NavStyled } from './styled';
import { Section } from '../../core/theme';
import { useToggleLightMode } from '../../components/ordinary';
import { ChangeMode } from '../../components/simple';

export const Header = () => {
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
