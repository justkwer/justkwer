import React from 'react';
import { MainStyled } from './styled';
import { H1, Section } from '../../core/theme';
import { Picture } from './Picture';

const Main = () => {
  return (
    <MainStyled>
      <Section>
        <H1>Change Your Life</H1>
        <Picture />
      </Section>
    </MainStyled>
  );
};

export default Main;
