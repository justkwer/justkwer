import React from 'react';
import photo from '../../../../../assets/img/me.webp';
import { MyPhotoStyled } from './styled';

const MyPhoto = () => {
  return (
    <MyPhotoStyled>
      <div></div>
      <img src={photo} alt="avatar" />
    </MyPhotoStyled>
  );
};

export default MyPhoto;
