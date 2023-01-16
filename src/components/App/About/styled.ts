import styled from 'styled-components';

export const AboutStyled = styled.main`
  height: 100%;

  section {
    ${({ theme }) => theme.flex.column};
    height: 100%;
    justify-content: space-between;

    h1 {
      animation: ${({ theme }) => theme.keyframes.animation.title}
        ${({ theme }) => theme.keyframes.duration[0]} forwards;
    }
  }
`;
