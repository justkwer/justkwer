import React from 'react';
import { FooterStyled } from './styled';
import { social } from '../../constants/constants';
import { Section } from '../../styled/tags';
import { SvgGenerator } from '../SvgGenerator/SvgGenerator';

const Footer = () => {
  return (
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
};

export default Footer;
