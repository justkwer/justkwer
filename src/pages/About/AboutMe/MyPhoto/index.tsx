import { me } from '../../../../assets';
import React from 'react';
import { MyPhotoStyled } from './styled';

export const MyPhoto = () => {
  return (
    <MyPhotoStyled>
      <div />
      <img src={me} alt="avatar" />
    </MyPhotoStyled>
  );
};
