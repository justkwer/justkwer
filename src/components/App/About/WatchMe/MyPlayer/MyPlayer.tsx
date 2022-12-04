import React from 'react';
import { MyPlayerStyled } from './styled';

const MyPlayer = () => {
  return (
    <MyPlayerStyled
      width="560"
      height="315"
      src="https://www.youtube.com/embed/X-P1GJphfEc"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></MyPlayerStyled>
  );
};

export default MyPlayer;
