import styled from 'styled-components';

export const MainGreetingsStyled = styled.figcaption`
  ${({ theme }) => theme.flex.column};
  align-items: flex-start;
  gap: 10px;
`;
