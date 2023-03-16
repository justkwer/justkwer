import React from 'react';
import { social } from '../../../core/constants';
import { SocialStyled } from './styled';

export const Social = () => (
  <SocialStyled>
    <ul>
      {social.map(({ name, svg, link }) => (
        <li key={name}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {svg}
          </a>
        </li>
      ))}
    </ul>
  </SocialStyled>
);
