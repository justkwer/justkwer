import { useState, useRef, useEffect } from 'react';
import { BurgerBtnStyled, BurgerStyled } from './styled';
import { MouseEventType } from '@core/types';
import { BurgerMenu } from './BurgerMenu';
import { createPortal } from 'react-dom';

export const Burger = () => {
  const [isActive, setIsActive] = useState(false);
  const idNext = useRef<Element | null>(null);

  const handleClick: MouseEventType = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  useEffect(() => {
    idNext.current = document.querySelector('#__next');
  }, [idNext]);

  return (
    <BurgerStyled>
      <button onClick={handleClick}>
        <BurgerBtnStyled active={isActive} />
      </button>
      {idNext.current
        ? createPortal(
            <BurgerMenu click={handleClick} active={isActive} />,
            idNext.current,
          )
        : null}
    </BurgerStyled>
  );
};
