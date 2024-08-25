import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Button = styled.button`
  padding: 15px 45px;
  border-radius: var(--border-radius-primary);
  letter-spacing: var(--letter-spacing-secondary);

  ${({
    theme: {
      colors: { white, magenta, primary, grey },
    },
  }) => css`
    color: ${white};
    background: linear-gradient(135deg, ${magenta} 0%, ${primary} 100%);

    &:hover {
      transform: translate(0, -5%);
    }

    &:active {
      transform: none;
    }

    &:disabled {
      background: ${grey};
    }
  `}
`;
