import { WhatIDoStyled } from '../WhatIWant/styled';
import { BorderDown, H2 } from '@core/theme';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../../smart/Map'), {
  ssr: false,
});

export const ContactMe = () => {
  return (
    <WhatIDoStyled>
      <H2>ContactMe</H2>
      <BorderDown />
      <Map />
    </WhatIDoStyled>
  );
};
