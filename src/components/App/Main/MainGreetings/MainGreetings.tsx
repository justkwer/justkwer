import React, { Component } from 'react';
import { H2 } from '../../../../styled/tags';
import { MainGreetingsStyled } from './styled';

class MainGreetings extends Component {
  render() {
    return (
      <MainGreetingsStyled>
        <H2>is real</H2>
      </MainGreetingsStyled>
    );
  }
}

export default MainGreetings;
