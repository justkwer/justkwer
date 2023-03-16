import React from 'react';
import { StarStyled } from '../../smart/Background/styled';
import { getRandom } from '../../../core/utils';

const Star = ({ top, left }: { top: string; left: string }) => {
  return (
    <StarStyled style={{ top, left, animationDuration: `${getRandom(30, 100)}s` }}></StarStyled>
  );
};

export default Star;
