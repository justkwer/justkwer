import type { IsActiveType } from '~types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const BurgerWrapper = styled.div<IsActiveType>`
  position: absolute;
  width: max-content;
  top: 50px;
  right: 0;
  display: block;
  padding: ${({ theme }) => theme.sizes.container.padding[4]};
  transition: transform 0.3s ease-in-out;
  background: ${({ theme }) => theme.colors.dark};
  border-radius: 10px;

  ${({
    theme: {
      flex: { flexColumn },
    },
    isActive,
  }) => css`
    transform: ${isActive ? 'translateX(0);' : 'translateX(150%);'};

    & > nav {
      ul {
        ${flexColumn};
        align-items: end;
      }
    }
  `};
`;

export const BurgerMenu = styled.div<IsActiveType>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
`;
