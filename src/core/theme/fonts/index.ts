import { css } from 'styled-components';

export const fonts = css`
  @font-face {
    font-family: 'Equinox Bold';
    font-weight: 400;
    src: localFont({src: local('./equinox/equinox-regular.woff')});
  }
  @font-face {
    font-family: 'Equinox Bold';
    font-weight: 700;
    src: localFont({src: local('./equinox/equinox-bold.woff')});
  }
  @font-face {
    font-family: 'Nunito Sans';
    font-weight: 400;
    src: localFont({src: local('./nunito/nunito-regular.ttf')});
  }
  @font-face {
    font-family: 'Nunito Sans';
    font-weight: 700;
    src: localFont({src: local('./nunito/nunito-bold.ttf')});
  }
`;
