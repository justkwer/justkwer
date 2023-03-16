import { BurgerBtnStyled, BurgerStyled, BurgerWrapStyled, BurgerFieldStyled } from './styled';
import { useState, MouseEvent, useEffect } from 'react';
import { Navigation } from '../Navigation';
import { useLocation } from 'react-router-dom';

export const Burger = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const handleClick = (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  const handleClose = () => {
    setIsActive(false);
  };

  useEffect(() => {
    handleClose();
  }, [location]);

  useEffect(() => {
    window.addEventListener('resize', handleClose);

    return () => {
      window.removeEventListener('resize', handleClose);
    };
  });

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
