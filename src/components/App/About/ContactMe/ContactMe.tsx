import React from 'react';
import { BorderDown, H2 } from '../../../../styled/tags';
import { WhatIDoStyled } from '../WhatIWant/styled';
import MeOnMap from './MeOnMap/MeOnMap';

const ContactMe = () => {
  return (
    <WhatIDoStyled>
      <H2>ContactMe</H2>
      <BorderDown />
      <MeOnMap />
    </WhatIDoStyled>
  );
};

export default ContactMe;
