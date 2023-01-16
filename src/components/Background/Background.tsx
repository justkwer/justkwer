import React from 'react';
import { BackgroundStyled } from './styled';
import Stars from './Stars/Stars';
import background from '../../assets/img/background.webp';

const Background = () => {
  return (
    <BackgroundStyled>
      <img src={background} alt="background" />
      <Stars />
    </BackgroundStyled>
  );
};

export default Background;
