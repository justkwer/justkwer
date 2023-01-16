import React from 'react';
import { MainPictureStyled } from './styled';
import main from '../../../../assets/svg/main.svg';

const MainPicture = () => {
  return (
    <MainPictureStyled>
      <img src={main} alt="hidden power" />
    </MainPictureStyled>
  );
};

export default MainPicture;
