import React from 'react';
import { Section } from '../../core/theme';
import { FooterStyled } from './styled';
import { SvgGenerator } from '../../components/SvgGenerator/SvgGenerator';
import { social } from '../../core/constants';

export const Footer = () => (
  <FooterStyled>
    <Section>
      <div>
        {social.map(({ name, link }) => (
          <a href={link} key={name} target="_blank" rel="noopener noreferrer">
            <SvgGenerator id={name} />
          </a>
        ))}
      </div>
      <p>© 2022 Alex Moore</p>
    </Section>
  </FooterStyled>
);
