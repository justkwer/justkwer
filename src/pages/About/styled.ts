import styled from 'styled-components';

export const AboutStyled = styled.main<{ page?: boolean }>`
  height: 100%;
  z-index: -1;
  section {
    ${({ theme }) => theme.flex.column};
    height: 100%;
    justify-content: space-between;

    & > button:first-child {
      visibility: ${({ page }) => (page ? 'hidden' : 'visible')};
    }

    h1 {
      animation: ${({ theme }) => theme.keyframes.animation.title}
        ${({ theme }) => theme.keyframes.duration[0]} forwards;
    }
  }
`;
