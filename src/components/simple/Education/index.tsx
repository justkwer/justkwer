import { BorderLeft, H2, P } from '@core/theme';
import { AboutMeStyled } from '../AboutMe/styled';
import books from '@public/image/books.webp';
import { education } from '@core/constants';
import { AboutMeImgStyled } from './styled';

export const Education = () => {
  return (
    <AboutMeStyled>
      <figcaption>
        <H2>Education</H2>
        <BorderLeft />
        <P>{education}</P>
      </figcaption>
      <AboutMeImgStyled src={books} alt="Books" />
    </AboutMeStyled>
  );
};
