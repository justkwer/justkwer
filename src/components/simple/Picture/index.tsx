import { H2 } from '@core/theme';
import { PictureStyled } from './styled';
import MainPicture from '@public/svg/main-picture.svg';

export const Picture = () => (
  <PictureStyled>
    <MainPicture />
    <figcaption>
      <H2>is real</H2>
    </figcaption>
  </PictureStyled>
);
