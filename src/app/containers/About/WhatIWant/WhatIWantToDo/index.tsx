import type { FC } from 'react';

import * as S from './styled';
import type { WhatIWantToDoProps } from './models';
import { H3, P } from '~styles';

export const WhatIWantToDo: FC<WhatIWantToDoProps> = ({ title, subtitle, svg }) => {
  return (
    <S.WhatIWantToDo>
      {svg}
      <figcaption>
        <H3>{title}</H3>
        <P>{subtitle}</P>
      </figcaption>
    </S.WhatIWantToDo>
  );
};
