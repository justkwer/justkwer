import * as S from './styled';
import { type FC } from 'react';
import { Navigation } from '~components';
import { onStopPropagation } from '~utils';
import type { BurgerMenuProps } from './models';

export const BurgerMenu: FC<BurgerMenuProps> = ({ callback, ...rest }) => (
  <S.BurgerMenu {...rest} onClick={callback}>
    <S.BurgerWrapper onClick={onStopPropagation} {...rest}>
      <Navigation />
    </S.BurgerWrapper>
  </S.BurgerMenu>
);
