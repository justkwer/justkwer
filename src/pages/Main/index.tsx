import React from 'react';
import { MainStyled } from './styled';
import { H1, H2, Section } from '../../core/theme';
import { MainPicture } from '../../assets';

const Main = () => {
  return (
    <MainStyled>
      <Section>
        <H1>Change Your Life</H1>
        <MainPicture />
        <H2>is real</H2>
      </Section>
    </MainStyled>
  );
};

export default Main;
