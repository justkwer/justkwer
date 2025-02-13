import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const AboutMe = styled.figure`
  gap: 100px;
  position: relative;
  height: 100%;
  overflow-y: scroll;

  ${({
    theme: {
      flex: { flexRow },
      keyframes: {
        animation: { keyframesOpacity, keyframesSubtitle, keyframesShine },
        keyframesDuration,
        keyframesDelay,
      },
      media: { mediaMobile, mediaMedium, mediaLarge, mediaSmall },
    },
  }) => css`
    ${flexRow};

    & > img {
      opacity: 0;
      animation: ${keyframesOpacity} ${keyframesDuration[0]} forwards;
      animation-delay: ${keyframesDelay[1]};
      max-width: 300px;
      max-height: 300px;

      @media (${mediaSmall}) {
        max-height: 240px;
        max-width: 240px;
      }

      @media (${mediaMobile}) {
        max-height: 160px;
        max-width: 160px;
      }
    }

    figcaption {
      max-height: 100%;
      overflow-y: scroll;

      h2 {
        opacity: 0;
        animation:
          ${keyframesSubtitle} ${keyframesDuration[0]} forwards,
          ${keyframesShine} ${keyframesDuration[0]} forwards;
        animation-delay: ${keyframesDelay[0]};
        -webkit-text-fill-color: initial;
      }

      span,
      li,
      p {
        opacity: 0;
        animation: ${keyframesOpacity} ${keyframesDuration[0]} forwards;
        animation-delay: ${keyframesDelay[1]};
      }

      p {
        max-width: 500px;
      }
    }

    @media (${mediaLarge}) {
      gap: 80px;
    }

    @media (${mediaMedium}) {
      gap: 30px;
    }

    @media (${mediaMobile}) {
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
  `};
`;

export const MyPhoto = styled.div`
  position: relative;
  opacity: 0;
  margin-top: 10px;

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  img {
    position: relative;
    width: 100%;
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

  ${({
    theme: {
      colors: { white, magenta },
      keyframes: {
        keyframesDelay,
        keyframesDuration,
        animation: { keyframesOpacity },
      },
      media: { mediaSmall, mediaMobile },
    },
  }) => css`
    animation: ${keyframesOpacity} ${keyframesDuration[0]} forwards;
    animation-delay: ${keyframesDelay[1]};

    div {
      border: 4px solid ${white};
      box-shadow:
        0 0 16px 0 ${magenta},
        0 0 12px 2px ${magenta},
        0 0 8px 0 ${magenta},
        0 0 6px 0 ${magenta},
        inset 0 0 40px ${magenta};
    }

    max-width: 300px;

    & > img {
      @media (${mediaSmall}) {
        max-width: 240px;
      }

      @media (${mediaMobile}) {
        max-width: 160px;
      }
    }
  `};
`;
