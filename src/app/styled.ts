import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { P, Section } from '~styles';

export const Body = styled.body`
  width: 100dvw;
  height: 100dvh;

  letter-spacing: var(--letter-spacing-primary);
  display: flex;
  flex-direction: column;

  ${({
    theme: {
      colors: { white, magenta, primary },
      fonts: { familyPrimary, fontWeight, fontSize },
    },
  }) => css`
    font-family: ${familyPrimary};
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    color: ${white};
    --color-stop: ${magenta};
    --color-bot: ${primary};
  `};
`;

export const Main = styled.main`
  width: 100%;
  flex-grow: 3;
`;

export const Error = styled(Section)`
  width: 100%;
  height: 100%;

  ${({
    theme: {
      flex: { flexRow },
    },
  }) => css`
    ${flexRow};

  }
  `};
`;

export const ErrorFigure = styled.figure`
  ${({
    theme: {
      flex: { flexRow },
      media: { mediaMedium, mediaSmall, mediaMobile },
    },
  }) => css`
    ${flexRow};

    img {
      max-width: 800px;
      height: 100%;

      @media (${mediaMedium}) {
        max-width: 300px;
      }

      @media (${mediaSmall}) {
        max-width: 200px;
      }
    }

    @media (${mediaMobile}) {
      flex-direction: column;
    }
  `}
`;

export const ErrorFigcaption = styled.figcaption`
  padding: 20px 60px;

  gap: 40px;
  align-items: center;
  text-align: center;

  ${({
    theme: {
      flex: { flexColumn },
      media: { mediaMobile },
    },
  }) => css`
    ${flexColumn};

    @media (${mediaMobile}) {
      padding: 10px 30px;
    }
  `}
`;

export const ErrorMessage = styled(P)`
  font-size: 1.4rem;
  max-width: 500px;

  ${({
    theme: {
      fonts: { familyPrimary },
      media: { mediaMedium, mediaMobile, mediaSmall },
    },
  }) => css`
    font-family: ${familyPrimary};

    @media (${mediaMedium}) {
      font-size: 1.2rem;
      max-width: 300px;
    }

    @media (${mediaSmall}) {
      font-size: 1rem;
    }

    @media (${mediaMobile}) {
      font-size: 0.9rem;
    }
  `}
`;
