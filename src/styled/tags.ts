import styled from 'styled-components';

export const H1 = styled.h1`
  font-weight: 700;
  font-size: 4em;
  letter-spacing: ${({ theme }) => theme.fonts.spacing.secondary};
  line-height: ${({ theme }) => theme.fonts.height.secondary};
`;

export const H2 = styled.h1`
  font-weight: 700;
  font-size: 3em;
  letter-spacing: ${({ theme }) => theme.fonts.spacing.secondary};
  line-height: ${({ theme }) => theme.fonts.height.secondary};
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${({ theme }) => theme.colors.white};
`;

export const P = styled.p`
  max-width: 500px;
`;

export const Svg = styled.svg`
  fill: url(#gradient) #fff;

  #gradient {
    --color-stop: ${({ theme }) => theme.colors.magenta};
    --color-bot: ${({ theme }) => theme.colors.primary};
  }
`;

export const SvgLink = styled(Svg)`
  &:hover {
    transform: translate(0, -15%);
    filter: drop-shadow(0 0 15px ${({ theme }) => theme.colors.white});
  }
`;

export const BorderLeft = styled.span`
  position: relative;
  top: -9px;
  font-size: 1.8em;
  line-height: 150%;
  border-left: 4px solid ${({ theme }) => theme.colors.white};
  border-radius: 2px;
  box-shadow: 0 0 16px 0 ${({ theme }) => theme.colors.magenta},
    0 0 12px 2px ${({ theme }) => theme.colors.magenta},
    0 0 8px 0 ${({ theme }) => theme.colors.magenta},
    0 0 6px 0 ${({ theme }) => theme.colors.magenta};
`;

export const BorderDown = styled(BorderLeft)`
  width: 1.8em;
  border-bottom: 4px solid ${({ theme }) => theme.colors.white};
`;

export const Section = styled.section`
  min-width: ${({ theme }) => theme.sizes.container.width[0]}px;
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
