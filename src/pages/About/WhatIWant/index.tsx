import React from 'react';
import { BorderDown, H2 } from '../../../core/theme';
import { WhatIDoDivStyled, WhatIDoStyled } from './styled';
import { whatIWantToDo } from '../../../core/constants';
import { Want } from '../../../components';

const WhatIWant = () => {
  return (
    <WhatIDoStyled>
      <H2>What I want to do</H2>
      <BorderDown />
      <WhatIDoDivStyled>
        {whatIWantToDo.map(toDo => (
          <Want {...toDo} key={toDo.title} />
        ))}
      </WhatIDoDivStyled>
    </WhatIDoStyled>
  );
};

export default WhatIWant;
