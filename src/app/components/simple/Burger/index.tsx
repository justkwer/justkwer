'use client';
import * as S from './styled';
import { BurgerMenu } from './BurgerMenu';
import { useBooleanState } from '~hooks';
import { createPortal } from 'react-dom';

export const Burger = () => {
  const [isOpen, toggleIsOpen] = useBooleanState(false);

  return (
    <>
      <S.Burger>
        <button onClick={toggleIsOpen}>
          <S.BurgerBtn isActive={isOpen} />
        </button>
      </S.Burger>
      {isOpen &&
        createPortal(<BurgerMenu callback={toggleIsOpen} isActive={isOpen} />, document.body)}
    </>
  );
};
