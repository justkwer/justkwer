import React from 'react';
import { social } from '../../../core/constants';
import { SvgGenerator } from '../../SvgGenerator/SvgGenerator';
import { SocialStyled } from './styled';

export const Social = () => (
  <SocialStyled>
    <ul>
      {social.map(({ name, link }) => (
        <li key={name}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <SvgGenerator id={name} />
          </a>
        </li>
      ))}
    </ul>
  </SocialStyled>
);
