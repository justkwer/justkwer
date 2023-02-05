import React from 'react';
import { NavLink } from 'react-router-dom';
import { navigationList } from '../../../core/constants';
import { NavigationLiStyled, NavigationStyled } from './styled';

export const Navigation = () => {
  return (
    <NavigationStyled>
      <ul>
        {navigationList.map(({ href, text }) => (
          <NavigationLiStyled key={text}>
            <NavLink end to={href}>
              {text}
            </NavLink>
          </NavigationLiStyled>
        ))}
      </ul>
    </NavigationStyled>
  );
};
