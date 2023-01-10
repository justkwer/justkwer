import styled from 'styled-components';

export const MainGreetingsStyled = styled.figcaption`
  h2 {
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
`;
