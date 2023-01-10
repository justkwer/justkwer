import React from 'react';
import { NavLink } from 'react-router-dom';
import { navigationList } from '../../../constants/constants';
import { NavigationStyled } from './styled';

const Navigation = () => {
  return (
    <NavigationStyled>
      <ul>
        {navigationList.map(({ href, text }, index) => (
          <li key={index}>
            <NavLink end to={href}>
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
