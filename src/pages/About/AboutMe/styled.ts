import styled from 'styled-components';

export const AboutMeStyled = styled.figure`
  ${({ theme }) => theme.flex.row};
  gap: 150px;
  position: relative;
  height: 100%;

  & > img {
    opacity: 0;
    animation: ${({ theme }) => theme.keyframes.animation.opacity}
      ${({ theme }) => theme.keyframes.duration[0]} forwards;
    animation-delay: ${({ theme }) => theme.keyframes.delay[1]};
  }

  figcaption {
    h2 {
      opacity: 0;
      animation: ${({ theme }) => theme.keyframes.animation.subtitle}
          ${({ theme }) => theme.keyframes.duration[0]} forwards,
        ${({ theme }) => theme.keyframes.animation.shine}
          ${({ theme }) => theme.keyframes.duration[0]} forwards;
      animation-delay: ${({ theme }) => theme.keyframes.delay[0]};
      -webkit-text-fill-color: initial;
      -webkit-text-stroke-width: 0;
    }

    span {
      opacity: 0;
      animation: ${({ theme }) => theme.keyframes.animation.opacity}
        ${({ theme }) => theme.keyframes.duration[0]} forwards;
      animation-delay: ${({ theme }) => theme.keyframes.delay[1]};
    }

    p {
      opacity: 0;
      animation: ${({ theme }) => theme.keyframes.animation.opacity}
        ${({ theme }) => theme.keyframes.duration[0]} forwards;
      animation-delay: ${({ theme }) => theme.keyframes.delay[1]};
    }
  }

  @media (${({ theme }) => theme.media.large}) {
    gap: 80px;
  }

  @media (${({ theme }) => theme.media.medium}) {
    gap: 30px;
  }

  @media (${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
    gap: 10px;
    padding-bottom: 10px;

    & > img {
      flex-grow: 1;
      height: 50px;
    }

    figcaption {
      text-align: center;
    }
  }
`;
