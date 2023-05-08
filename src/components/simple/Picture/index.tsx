import { MainPicture } from '@components';
import { H2 } from '@core/theme';
import { PictureStyled } from './styled';

export const Picture = () => {
  return (
    <PictureStyled>
      <MainPicture />
      <figcaption>
        <H2>is real</H2>
      </figcaption>
    </PictureStyled>
  );
};
