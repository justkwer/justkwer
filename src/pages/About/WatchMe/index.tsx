import React from 'react';
import { BorderLeft, H2, P } from '../../../core/theme';
import { AboutMeStyled } from '../AboutMe/styled';
import { YouTube } from '../../../components/ui';

const WatchMe = () => {
  return (
    <AboutMeStyled>
      <figure>
        <YouTube />
      </figure>
      <figcaption>
        <H2>Watch me</H2>
        <BorderLeft />
        <P>
          If you, like me, do not trust the "dry text" and in order to recognize a person you need
          to look at him, then especially for you I recorded a short video about me. It was so cold
          that my tongue stuttered and my mind forgot the words.
        </P>
      </figcaption>
    </AboutMeStyled>
  );
};

export default WatchMe;
