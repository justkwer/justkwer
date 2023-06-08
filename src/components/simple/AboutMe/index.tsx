import Image from 'next/image';
import { BorderLeft, H2, P } from '@core/theme';
import { AboutMeStyled, MyPhotoStyled } from './styled';
import me from '@public/image/me.webp';
import { aboutMe } from '@core/constants';

export const AboutMe = () => {
  return (
    <AboutMeStyled>
      <MyPhotoStyled>
        <div />
        <Image src={me} alt="avatar" priority={true} />
      </MyPhotoStyled>
      <figcaption>
        <H2>About me</H2>
        <BorderLeft />
        <P>{aboutMe}</P>
      </figcaption>
    </AboutMeStyled>
  );
};
