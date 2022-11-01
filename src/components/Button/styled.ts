import styled from 'styled-components';

export const ButtonStyled = styled.button`
  padding: 15px 45px;
  border-radius: ${({ theme }) => theme.border.primary};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.background};
  max-width: max-content;

  &:hover {
    background: ${({ theme }) => theme.colors.blue4};
    transform: translate(0, -15%);
    filter: drop-shadow(0 0 15px ${({ theme }) => theme.colors.white});
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.grey};
  }
`;
