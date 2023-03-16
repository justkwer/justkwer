import styled from 'styled-components';

export const WhatIDoStyled = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 10px;
  height: 100%;

  h2 {
    opacity: 0;
    animation: ${({ theme }) => theme.keyframes.animation.subtitleRotate}
        ${({ theme }) => theme.keyframes.duration[0]} forwards,
      ${({ theme }) => theme.keyframes.animation.shine}
        ${({ theme }) => theme.keyframes.duration[0]} forwards;
    animation-delay: ${({ theme }) => theme.keyframes.delay[0]};
  }

  span {
    opacity: 0;
    animation: ${({ theme }) => theme.keyframes.animation.opacity}
      ${({ theme }) => theme.keyframes.duration[0]} forwards;
    animation-delay: ${({ theme }) => theme.keyframes.delay[1]};
  }
`;

export const WhatIDoDivStyled = styled.div`
  ${({ theme }) => theme.flex.row};
  gap: 50px;
  opacity: 0;
  animation: ${({ theme }) => theme.keyframes.animation.opacity}
    ${({ theme }) => theme.keyframes.duration[0]} forwards;
  animation-delay: ${({ theme }) => theme.keyframes.delay[1]};

  @media (${({ theme }) => theme.media.small}) {
    flex-wrap: wrap;
    gap: 10px;
    flex-grow: 1;
    figure {
      max-width: 100%;
    }
  }
`;
