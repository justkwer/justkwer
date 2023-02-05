import React from 'react';
import { Section } from '../../core/theme';
import { FooterStyled } from './styled';
import { Social } from '../../components/simple';

export const Footer = () => (
  <FooterStyled>
    <Section>
      <span>© 2022 Alex Moore</span>
      <Social />
    </Section>
  </FooterStyled>
);
