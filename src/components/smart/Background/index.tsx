import React from 'react';
import { BackgroundStyled } from './styled';
import { Stars } from '../../simple';
import { background } from '../../../assets';

export const Background = () => (
  <BackgroundStyled>
    <img src={background} alt="background" />
    <Stars />
  </BackgroundStyled>
);
