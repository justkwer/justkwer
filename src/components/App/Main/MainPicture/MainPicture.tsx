import React from 'react';
import { MainPictureStyled } from './styled';
import { SvgGenerator } from '../../../SvgGenerator/SvgGenerator';

const MainPicture = () => {
  return (
    <MainPictureStyled>
      <SvgGenerator id="main" />
    </MainPictureStyled>
  );
};

export default MainPicture;
