import styled from 'styled-components';

export const MainStyled = styled.main`
  section {
    ${({ theme }) => theme.flex.row};
    gap: 100px;
    margin: 0;

    h1 {
      text-align: center;
      animation: ${({ theme }) => theme.keyframes.animation.title}
        ${({ theme }) => theme.keyframes.duration[0]} forwards;
    }
  }
`;

/*
img {
    height: 100%;
    width: 100%;
    opacity: 0;
    animation: ${({ theme }) => theme.keyframes.animation.opacity}
      ${({ theme }) => theme.keyframes.duration[0]} forwards;
    animation-delay: ${({ theme }) => theme.keyframes.delay[0]};
  }
 */

/*  h2 {
    font-size: 5em;
    opacity: 0;
    animation: ${({ theme }) => theme.keyframes.animation.subtitle}
        ${({ theme }) => theme.keyframes.duration[0]} forwards,
      ${({ theme }) => theme.keyframes.animation.shine}
        ${({ theme }) => theme.keyframes.duration[0]} forwards;
    animation-delay: 0.5s;
    -webkit-text-fill-color: initial;
    -webkit-text-stroke-width: 0;
  }
*/
