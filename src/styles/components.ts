import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from './theme';

export const Section = styled.section`
  ${({
    theme: {
      colors: { dark },
      sizes: {
        container: { padding, width },
      },
      media: { mediaLarge, mediaMedium, mediaMobile, mediaSmall },
    },
  }) => css`
    padding: ${padding[0]};

    @media (${mediaLarge}) {
      max-width: ${width[1]}px;
      padding: ${padding[1]};
    }
    @media (${mediaMedium}) {
      max-width: ${width[2]}px;
      padding: ${padding[2]};
    }
    @media (${mediaSmall}) {
      max-width: ${width[3]}px;
      padding: ${padding[3]};
    }
    @media (${mediaMobile}) {
      max-width: ${width[4]}px;
      padding: ${padding[4]};
    }

    h1,
    h2,
    h3,
    h4,
    p,
    span {
      text-shadow: 0 0 5px ${dark};
    }
  `};
`;

export const hover = css`
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

export const H1 = styled.h1`
  font-weight: 700;
  font-size: 4rem;

  ${({
    theme: {
      media: { mediaLarge, mediaSmall },
    },
  }) => css`
    @media (${mediaLarge}) {
      font-size: 4rem;
    }

    @media (${mediaSmall}) {
      font-size: 3.5rem;
    }

    @media (max-width: 474px) {
      font-size: 2.5rem;
    }
  `};
`;

export const H2 = styled.h2`
  ${({
    theme: {
      colors: { white },
      media: { mediaMobile, mediaSmall },
    },
  }) => css`
    font-weight: 700;
    font-size: 3.5rem;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${white};

    @media (${mediaSmall}) {
      font-size: 3rem;
    }

    @media (${mediaMobile}) {
      font-size: 2.5rem;
    }
  `}
`;

export const H3 = styled.h3`
  font-weight: 500;
  font-size: 2rem;
  ${({
    theme: {
      media: { mediaMedium, mediaMobile, mediaSmall },
    },
  }) => css`
    @media (${mediaMedium}) {
      font-size: 1.8rem;
    }

    @media (${mediaSmall}) {
      font-size: 1.6rem;
    }

    @media (${mediaMobile}) {
      font-size: 1.4rem;
    }
  `}
`;

export const H4 = styled.h4`
  font-size: 1.5rem;
  ${({
    theme: {
      media: { mediaMedium, mediaMobile, mediaSmall },
    },
  }) => css`
    @media (${mediaMedium}) {
      font-size: 1.4rem;
    }

    @media (${mediaSmall}) {
      font-size: 1.3rem;
    }

    @media (${mediaMobile}) {
      font-size: 1.2rem;
    }
  `}
`;
export const P = styled.p`
  font-size: 1.3rem;
  ${({
    theme: {
      media: { mediaMedium, mediaMobile, mediaSmall },
    },
  }) => css`
    @media (${mediaMedium}) {
      font-size: 1.2rem;
    }

    @media (${mediaSmall}) {
      font-size: 1.1rem;
    }

    @media (${mediaMobile}) {
      font-size: 1rem;
    }
  `}
`;

export const Span = styled.span`
  font-size: 1.3rem;

  ${({
    theme: {
      media: { mediaMobile, mediaSmall, mediaLarge },
    },
  }) => css`
    @media (${mediaLarge}) {
      font-size: 1.2rem;
    }

    @media (${mediaSmall}) {
      font-size: 1.1rem;
    }

    @media (${mediaMobile}) {
      font-size: 1rem;
    }
  `}
`;

export const BorderLeft = styled.span`
  position: relative;
  top: -4px;
  font-size: 1.8rem;
  line-height: 150%;
  border-radius: 2px;

  ${({
    theme: {
      colors: { magenta, white },
      media: { mediaMobile },
    },
  }) => css`
    border-color: ${white};
    border-width: 6px;
    border-left: solid;
    box-shadow: 0 0 16px 0 ${magenta},
    0 0 12px 2px ${magenta},
    0 0 8px 0 ${magenta},
    0 0 6px 0 ${magenta};

    @media (${mediaMobile}) {
      gap: 30px;
      font-size: 1rem;
    };
  }
  `};
`;

export const Svg = css`
  width: 32px;
  height: 32px;

  @media (${theme.media.mediaMobile}) {
    width: 24px;
    height: 24px;
  }
`;

export const SvgLink = css`
  ${Svg};

  &:hover {
    transform: translateY(-5%);
  }

  &:active {
    transform: none;
  }
`;
