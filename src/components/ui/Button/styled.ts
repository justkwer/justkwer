import styled from 'styled-components';

export const ButtonStyled = styled.button`
  padding: 15px 45px;
  border-radius: ${({ theme }) => theme.border.primary};
  text-decoration: ${({ theme }) => theme.buttons.decoration};
  cursor: ${({ theme }) => theme.buttons.cursor};
  border: ${({ theme }) => theme.buttons.border};
  outline: ${({ theme }) => theme.buttons.outline};
  letter-spacing: ${({ theme }) => theme.fonts.spacing.secondary};
  font-size: ${({ theme }) => theme.fonts.size};
  color: ${({ theme }) => theme.colors.white};
  max-width: max-content;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.magenta} 0%,
    ${({ theme }) => theme.colors.primary} 100%
  );

  &:hover {
    transform: translate(0, -15%);
    filter: drop-shadow(0 0 15px ${({ theme }) => theme.colors.white});
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.grey};
    cursor: ${({ theme }) => theme.buttons.cursorD};
  }
`;
