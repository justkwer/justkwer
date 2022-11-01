import styled from 'styled-components';

export const Svg = styled.svg`
  fill: url(#gradient) #fff;

  &:hover {
    transform: translate(0, -15%);
    filter: drop-shadow(0 0 15px ${({ theme }) => theme.colors.white});
  }

  #gradient {
    --color-stop: ${({ theme }) => theme.colors.magenta};
    --color-bot: ${({ theme }) => theme.colors.primary};
  }
`;
