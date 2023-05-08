import React from 'react';
import { navigationList } from '@core/constants';
import { NavigationLiStyled, NavigationStyled } from './styled';
import Link from 'next/link';

export const Navigation = () => (
  <NavigationStyled>
    <ul>
      {navigationList.map(({ href, text }) => (
        <NavigationLiStyled key={text}>
          <Link href={href}>{text}</Link>
        </NavigationLiStyled>
      ))}
    </ul>
  </NavigationStyled>
);
