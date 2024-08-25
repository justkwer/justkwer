import Image from 'next/image';
import { BorderLeft, H2, P } from '~styles';
import * as S from './styled';
import myPhoto from '~images/webp/me.webp';
import { getYearsFromDate } from '~utils';
import { useDictionary } from '~hooks';
import { START_PROGRAMMING_DATA } from './constants';

export const AboutMe = () => {
  const {
    ABOUT_ME: { ABOUT_ME, ABOUT_FIRST, ABOUT_SECOND },
  } = useDictionary();

  return (
    <S.AboutMe>
      <S.MyPhoto>
        <div />
        <Image src={myPhoto} alt="avatar" priority={true} />
      </S.MyPhoto>
      <figcaption>
        <H2>{ABOUT_ME}</H2>
        <BorderLeft />
        <P>{`${ABOUT_FIRST} ${getYearsFromDate(START_PROGRAMMING_DATA)} ${ABOUT_SECOND}`}</P>
      </figcaption>
    </S.AboutMe>
  );
};
