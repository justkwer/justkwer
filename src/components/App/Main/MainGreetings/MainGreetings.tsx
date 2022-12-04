import React, { Component } from 'react';
import { H1, H2 } from '../../../../styled/tags';
import { MainGreetingsStyled } from './styled';

class MainGreetings extends Component {
  render() {
    return (
      <MainGreetingsStyled>
        <H1>Сhange life</H1>
        <H2>is real</H2>
      </MainGreetingsStyled>
    );
  }
}

export default MainGreetings;
