import * as S from './styled';
import { BorderLeft, H2 } from '~styles';
import { WhatIWantToDo } from './WhatIWantToDo';
import Web from '~svg/web.svg';
import Mobile from '~svg/mobile.svg';
import Games from '~svg/games.svg';
import { useDictionary } from '~hooks';

export const WhatIWant = () => {
  const {
    WHAT_I_WANT: {
      WHAT_I_WANT_TO_DO,
      WEB_DEVELOPMENT_TITLE,
      WEB_DEVELOPMENT_SUB_TITLE,
      MOBILE_APPS_TITLE,
      MOBILE_APPS_SUB_TITLE,
      GAMES_TITLE,
      GAMES_SUB_TITLE,
    },
  } = useDictionary();
  
  const whatIWantToDo = [
    {
      title: WEB_DEVELOPMENT_TITLE,
      subtitle: WEB_DEVELOPMENT_SUB_TITLE,
      svg: <Web />,
    },
    {
      title: MOBILE_APPS_TITLE,
      subtitle: MOBILE_APPS_SUB_TITLE,
      svg: <Mobile />,
    },
    {
      title: GAMES_TITLE,
      subtitle: GAMES_SUB_TITLE,
      svg: <Games />,
    },
  ];

  return (
    <S.WhatIWant>
      <H2>{WHAT_I_WANT_TO_DO}</H2>
      <BorderLeft />
      <S.WhatIWantToDoWrapper>
        {whatIWantToDo.map((toDo) => (
          <WhatIWantToDo {...toDo} key={toDo.title} />
        ))}
      </S.WhatIWantToDoWrapper>
    </S.WhatIWant>
  );
};
