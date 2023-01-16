import React from 'react';
import { StarStyled } from '../styled';
import { getRandom } from '../../../functions/functions';

const Star = ({ top, left }: { top: string; left: string }) => {
  return (
    <StarStyled style={{ top, left, animationDuration: `${getRandom(30, 100)}s` }}></StarStyled>
  );
};

export default Star;
