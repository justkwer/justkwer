import React from 'react';
import { BorderDown, H2 } from '../../../../styled/tags';
import { WhatIDoDivStyled, WhatIDoStyled } from './styled';
import { whatIWantToDo } from '../../../../constants/constants';
import WantGenerator from './WantGenerator/WantGenerator';

const WhatIWant = () => {
  return (
    <WhatIDoStyled>
      <H2>What I want to do</H2>
      <BorderDown />
      <WhatIDoDivStyled>
        {whatIWantToDo.map(({ title, subtitle, svg }) => (
          <WantGenerator title={title} subtitle={subtitle} svg={svg} key={title} />
        ))}
      </WhatIDoDivStyled>
    </WhatIDoStyled>
  );
};

export default WhatIWant;
