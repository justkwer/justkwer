import styled from 'styled-components';

export const MainPageStyled = styled.main`
  section {
    height: 100%;
    ${({ theme }) => theme.flex.column};
    justify-content: space-between;

    h1 {
      z-index: -1;
      text-align: center;
      animation: ${({ theme }) => theme.keyframes.animation.title}
        ${({ theme }) => theme.keyframes.duration[0]} forwards;
    }
  }
`;
