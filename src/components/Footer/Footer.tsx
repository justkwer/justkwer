import React from 'react';
import { FooterStyled } from './styled';
import { SvgGenerator } from '../SvgGenerator/SvgGenerator';
import { social } from '../../constants/constants';

const Footer = () => {
  return (
    <FooterStyled>
      <section>
        <div>
          {social.map(({ name, link }) => (
            <a href={link} target="_blank">
              <SvgGenerator id={name} key={name} />
            </a>
          ))}
        </div>
        <p>© 2022 Alex Moore</p>
      </section>
    </FooterStyled>
  );
};

export default Footer;
