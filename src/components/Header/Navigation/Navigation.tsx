import React from 'react';
import { NavLink } from 'react-router-dom';
import { navigationList } from '../../../constants/constants';
import { NavigationLiStyled, NavigationUlStyled } from './styled';

const Navigation = () => {
  return (
    <nav>
      <NavigationUlStyled>
        {navigationList.map(({ href, text }) => (
          <NavigationLiStyled key={text}>
            <NavLink end to={href}>
              {text}
            </NavLink>
          </NavigationLiStyled>
        ))}
      </NavigationUlStyled>
    </nav>
  );
};

export default Navigation;
