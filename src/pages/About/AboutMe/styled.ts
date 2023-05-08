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

export const MyPhotoStyled = styled.div`
  position: relative;
  opacity: 0;
  animation: ${({ theme }) => theme.keyframes.animation.opacity}
    ${({ theme }) => theme.keyframes.duration[0]} forwards;
  animation-delay: ${({ theme }) => theme.keyframes.delay[1]};

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 4px solid ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    box-shadow: 0 0 16px 0 ${({ theme }) => theme.colors.magenta},
      0 0 12px 2px ${({ theme }) => theme.colors.magenta},
      0 0 8px 0 ${({ theme }) => theme.colors.magenta},
      0 0 6px 0 ${({ theme }) => theme.colors.magenta},
      inset 0 0 100px ${({ theme }) => theme.colors.magenta};
  }

  img {
    position: relative;
    width: 100%;
    max-width: 400px;
    height: auto;
    z-index: -1;
    border-radius: 50%;
  }

  &:after,
  &:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0.4;
    mix-blend-mode: screen;
  }

  &:before {
    top: -7.5px;
    left: -7.5px;
    width: calc(100% + 15px);
    height: calc(100% + 15px);
    z-index: -2;
    opacity: 1;
    mix-blend-mode: normal;
  }

  &:after {
    z-index: -1;
  }

  @media (${({ theme }) => theme.media.small}) {
    div {
      box-shadow: 0 0 16px 0 ${({ theme }) => theme.colors.magenta},
        0 0 12px 2px ${({ theme }) => theme.colors.magenta},
        0 0 8px 0 ${({ theme }) => theme.colors.magenta},
        0 0 6px 0 ${({ theme }) => theme.colors.magenta},
        inset 0 0 70px ${({ theme }) => theme.colors.magenta};
    }
  }

  @media (${({ theme }) => theme.media.mobile}) {
    flex-grow: 1;

    height: 50px;
    max-width: 160px;
    max-height: 160px;

    img {
      height: 100%;
    }

    div {
      box-shadow: 0 0 16px 0 ${({ theme }) => theme.colors.magenta},
        0 0 12px 2px ${({ theme }) => theme.colors.magenta},
        0 0 8px 0 ${({ theme }) => theme.colors.magenta},
        0 0 6px 0 ${({ theme }) => theme.colors.magenta},
        inset 0 0 40px ${({ theme }) => theme.colors.magenta};
    }
  }
`;
