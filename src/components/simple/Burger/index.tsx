import { useState } from 'react';
import { BurgerBtnStyled, BurgerStyled } from './styled';
import { MouseEventType } from '@core/types';
import { BurgerMenu } from './BurgerMenu';

export const Burger = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick: MouseEventType = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  return (
    <BurgerStyled>
      <button onClick={handleClick}>
        <BurgerBtnStyled active={isActive} />
      </button>
      <BurgerMenu click={handleClick} active={isActive} />
    </BurgerStyled>
  );
};
