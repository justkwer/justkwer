import styled from 'styled-components';

export const ButtonStyled = styled.button`
  padding: 15px 45px;
  border-radius: ${({ theme }) => theme.border.primary};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
  max-width: max-content;

  &:hover {
    background: ${({ theme }) => theme.colors.blue4};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.grey};
  }
`;
