import React from 'react';
import { Logo } from '../../components/simple';
import { Navigation } from '../../components/simple';
import { HeaderStyled } from './styled';
import { Section } from '../../core/theme';
import { useToggleLightMode } from '../../components/ordinary';
import { ChangeMode } from '../../components/simple';

export const Header = () => {
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
