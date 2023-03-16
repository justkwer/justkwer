import styled, { css } from 'styled-components';

const font = css`
  letter-spacing: ${({ theme }) => theme.fonts.spacing.secondary};
  line-height: ${({ theme }) => theme.fonts.height.secondary};
`;

export const hover = css`
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

export const Svg = css`
  fill: url(#gradient) #fff;

  #gradient {
    --color-stop: ${({ theme }) => theme.colors.magenta};
    --color-bot: ${({ theme }) => theme.colors.primary};
  }

  @media (${({ theme }) => theme.media.large}) {
    width: 42px;
    height: 42px;
  }

  @media (${({ theme }) => theme.media.medium}) {
    width: 40px;
    height: 40px;
  }

  @media (${({ theme }) => theme.media.small}) {
    width: 38px;
    height: 38px;
  }

  @media (${({ theme }) => theme.media.mobile}) {
    width: 35px;
    height: 35px;
  }
`;

export const SvgLink = css`
  ${Svg};

  &:hover {
    transform: translateY(-15%);
    filter: drop-shadow(0 0 15px ${({ theme }) => theme.colors.white});
  }
`;

export const H1 = styled.h1`
  font-weight: 700;
  font-size: 4rem;
  ${font};
  font-family: ${({ theme }) => theme.fonts.familyS};

  @media (${({ theme }) => theme.media.large}) {
    font-size: 3.5rem;
  }

  @media (${({ theme }) => theme.media.medium}) {
    font-size: 3rem;
  }

  @media (${({ theme }) => theme.media.small}) {
    font-size: 2.2rem;
  }

  @media (${({ theme }) => theme.media.mobile}) {
    font-size: 1.2rem;
  }
`;

export const H2 = styled.h2`
  ${font};
  font-family: ${({ theme }) => theme.fonts.familyS};
  font-weight: 700;
  font-size: 3rem;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${({ theme }) => theme.colors.white};

  @media (${({ theme }) => theme.media.large}) {
    font-size: 2.5rem;
  }

  @media (${({ theme }) => theme.media.medium}) {
    font-size: 2rem;
  }

  @media (${({ theme }) => theme.media.small}) {
    font-size: 1.5rem;
  }

  @media (${({ theme }) => theme.media.mobile}) {
    font-size: 1.2rem;
  }
`;

export const P = styled.p`
  max-width: 500px;

  @media (${({ theme }) => theme.media.medium}) {
    font-size: 0.9rem;
  }

  @media (${({ theme }) => theme.media.small}) {
    font-size: 0.8rem;
  }

  @media (${({ theme }) => theme.media.mobile}) {
    font-size: 0.5rem;
  }
`;

export const Span = styled.span`
  font-size: 1.2rem;

  @media (${({ theme }) => theme.media.large}) {
    font-size: 1.1rem;
  }

  @media (${({ theme }) => theme.media.small}) {
    font-size: 1rem;
  }

  @media (${({ theme }) => theme.media.mobile}) {
    font-size: 0.9rem;
  }
`;

export const BorderLeft = styled.span`
  position: relative;
  top: -9px;
  font-size: 1.8rem;
  line-height: 150%;
  border-left: 4px solid ${({ theme }) => theme.colors.white};
  border-radius: 2px;
  box-shadow: 0 0 16px 0 ${({ theme }) => theme.colors.magenta},
    0 0 12px 2px ${({ theme }) => theme.colors.magenta},
    0 0 8px 0 ${({ theme }) => theme.colors.magenta},
    0 0 6px 0 ${({ theme }) => theme.colors.magenta};

  @media (${({ theme }) => theme.media.mobile}) {
    gap: 30px;
    border-bottom: 4px solid ${({ theme }) => theme.colors.white};
    border-left: none;
  }
`;

export const BorderDown = styled(BorderLeft)`
  width: 1.8em;
  border-bottom: 4px solid ${({ theme }) => theme.colors.white};
`;

export const Section = styled.section`
  padding: ${({ theme }) => theme.sizes.container.padding[0]};

  @media (${({ theme }) => theme.media.large}) {
    max-width: ${({ theme }) => theme.sizes.container.width[1]}px;
    padding: ${({ theme }) => theme.sizes.container.padding[1]};
  }
  @media (${({ theme }) => theme.media.medium}) {
    max-width: ${({ theme }) => theme.sizes.container.width[2]}px;
    padding: ${({ theme }) => theme.sizes.container.padding[2]};
  }
  @media (${({ theme }) => theme.media.small}) {
    max-width: ${({ theme }) => theme.sizes.container.width[3]}px;
    padding: ${({ theme }) => theme.sizes.container.padding[3]};
  }
  @media (${({ theme }) => theme.media.mobile}) {
    max-width: ${({ theme }) => theme.sizes.container.width[4]}px;
    padding: ${({ theme }) => theme.sizes.container.padding[4]};
  }
`;
