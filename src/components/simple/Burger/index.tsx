import { MouseEvent, useEffect, useState } from 'react';
import { Navigation } from '@components';
import {
  BurgerBtnStyled,
  BurgerFieldStyled,
  BurgerStyled,
  BurgerWrapStyled,
} from './styled';

export const Burger = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  const handleClose = () => {
    setIsActive(false);
  };

  useEffect(() => {
    handleClose();
  }, []);

  return (
    <BurgerStyled>
      <button onClick={handleClick}>
        <BurgerBtnStyled active={isActive} />
      </button>
      <BurgerWrapStyled active={isActive}>
        <Navigation />
        <BurgerFieldStyled onClick={handleClick} active={isActive} />
      </BurgerWrapStyled>
    </BurgerStyled>
  );
};
