import React from 'react';
import { MainStyled } from './styled';
import { Section } from '../../../styled/tags';
import MainGreetings from './MainGreetings/MainGreetings';
import MainPicture from './MainPicture/MainPicture';

const Main = () => {
  return (
    <MainStyled>
      <Section>
        <MainPicture />
        <MainGreetings />
      </Section>
    </MainStyled>
  );
};

export default Main;
