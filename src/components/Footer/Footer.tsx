import React from 'react';
import { FooterStyled } from './styled';
import { SvgGenerator } from '../SvgGenerator/SvgGenerator';
import { social } from '../../constants/constants';
import { Section } from '../../styled/globalStyles';

const Footer = () => {
  return (
    <FooterStyled>
      <Section>
        <div>
          {social.map(({ name, link }) => (
            <a href={link} target="_blank" key={name}>
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
