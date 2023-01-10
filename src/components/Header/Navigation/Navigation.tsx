import React from 'react';
import { NavLink } from 'react-router-dom';
import { navigationList } from '../../../constants/constants';
import { NavigationLi, NavigationUl } from './styled';

const Navigation = () => {
  return (
    <nav>
      <NavigationUl>
        {navigationList.map(({ href, text }) => (
          <NavigationLi key={text}>
            <NavLink end to={href}>
              {text}
            </NavLink>
          </NavigationLi>
        ))}
      </NavigationUl>
    </nav>
  );
};

export default Navigation;
