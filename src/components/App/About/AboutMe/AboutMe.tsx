import React from 'react';
import MyPhoto from './MyPhoto/MyPhoto';
import { BorderLeft, H2, P } from '../../../../styled/tags';
import { AboutMeStyled } from './styled';
import { getMyFoolYears } from '../../../../functions/functions';

const AboutMe = () => {
  return (
    <AboutMeStyled>
      <MyPhoto />
      <figcaption>
        <H2>About me</H2>
        <BorderLeft />
        <P>
          Hi there! I’m Alex. I’m a passionate extrovert who loves building things with code,
          between playing games. I am {getMyFoolYears()} years old and i am the best guy you've ever
          seen. An initiative person with a desire to learn everything new. I want to become a
          website developer for people with good taste. At the moment Seriously, if you want a
          positive and cheerful person to join your team, you are on the right page.
        </P>
      </figcaption>
    </AboutMeStyled>
  );
};

export default AboutMe;
