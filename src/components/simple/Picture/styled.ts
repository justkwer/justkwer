import styled from 'styled-components';

export const PictureStyled = styled.figure`
  height: 100%;
  ${({ theme }) => theme.flex.row};
  gap: 100px;

  svg {
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    z-index: -1;
    opacity: 0;
    animation: ${({ theme }) => theme.keyframes.animation.opacity}
      ${({ theme }) => theme.keyframes.duration[0]} forwards;
    animation-delay: ${({ theme }) => theme.keyframes.delay[0]};
  }

  h2 {
    font-size: 3.8em;
    opacity: 0;
    animation: ${({ theme }) => theme.keyframes.animation.subtitle}
        ${({ theme }) => theme.keyframes.duration[0]} forwards,
      ${({ theme }) => theme.keyframes.animation.shine}
        ${({ theme }) => theme.keyframes.duration[0]} forwards;
    animation-delay: ${({ theme }) => theme.keyframes.delay[0]};
    -webkit-text-fill-color: initial;
    -webkit-text-stroke-width: 0;
  }

  p {
    opacity: 0;
    animation: ${({ theme }) => theme.keyframes.animation.subtitle}
      ${({ theme }) => theme.keyframes.duration[0]} forwards;
    animation-delay: ${({ theme }) => theme.keyframes.delay[2]};

    strong,
    a {
      color: ${({ theme }) => theme.colors.yellow};
    }
  }

  @media (${({ theme }) => theme.media.large}) {
    h2 {
      font-size: 3.6rem;
    }
  }

  @media (${({ theme }) => theme.media.medium}) {
    h2 {
      font-size: 2.8rem;
    }
  }

  @media (${({ theme }) => theme.media.small}) {
    h2 {
      font-size: 2.5rem;
    }
  }

  @media (${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
    gap: 20px;

    h2 {
      font-size: 2rem;
    }
  }
`;
