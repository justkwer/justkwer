import styled from 'styled-components';
import { ActiveType } from '@core/types';

export const BurgerMenuStyled = styled.div<ActiveType>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 20px;
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
`;
