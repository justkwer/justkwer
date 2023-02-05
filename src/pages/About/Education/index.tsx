import React from 'react';
import { BorderLeft, H2, P } from '../../../core/theme';
import { getMyLearningFoolYears } from '../../../core/utils';
import { books } from '../../../assets';
import { AboutMeStyled } from '../AboutMe/styled';
import { AboutMeImgStyled } from './styled';

const Education = () => {
  return (
    <AboutMeStyled>
      <figcaption>
        <H2>Education</H2>
        <BorderLeft />
        <P>
          After I was born, my parents realized that I was useless and took me to school. It was
          1997. Without much effort I finished it and entered the university with a specialty:
          Lifting, construction, road machines and equipment. It was the worst year (2008) and bad
          idea :( I knew it wasn't for me. For 5 whole years I taught not what I wanted. Now I am
          finally strong enough to give up everything and do what I want. I have been learning JS
          and everything related to it for more than {getMyLearningFoolYears()} year.
        </P>
      </figcaption>
      <figure>
        <AboutMeImgStyled src={books} alt="Books" />
      </figure>
    </AboutMeStyled>
  );
};

export default Education;
