import React from 'react';
import { MainStyled } from './styled';
import { H1, Section } from '../../../styled/tags';
import MainGreetings from './MainGreetings/MainGreetings';
import MainPicture from './MainPicture/MainPicture';

const Main = () => {
  return (
    <MainStyled>
      <H1>Change Your Life</H1>
      <Section>
        <MainPicture />
        <MainGreetings />
      </Section>
    </MainStyled>
  );
};

export default Main;
