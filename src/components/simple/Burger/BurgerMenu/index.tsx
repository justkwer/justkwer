import { BurgerMenuStyled } from './styled';
import { FC } from 'react';
import { ActiveType, MouseEventClick, MouseEventType } from '@core/types';
import { BurgerWrapStyled } from '../styled';
import { Navigation } from '@components';

export const BurgerMenu: FC<ActiveType & MouseEventClick> = ({
  active,
  click,
}) => {
  const stopPropagation: MouseEventType = (e) => e.stopPropagation();

  return (
    <BurgerMenuStyled onClick={click} active={active}>
      <BurgerWrapStyled active={active} onClick={stopPropagation}>
        <Navigation />
      </BurgerWrapStyled>
    </BurgerMenuStyled>
  );
};
