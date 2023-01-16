import styled from 'styled-components';

export const MainStyled = styled.main`
  h1 {
    text-align: center;
    animation: ${({ theme }) => theme.keyframes.animation.title}
      ${({ theme }) => theme.keyframes.duration[0]} forwards;
  }

  section {
    ${({ theme }) => theme.flex.row};
    gap: 100px;
    margin: 0;
  }
`;
