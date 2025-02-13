import Image from 'next/image';
import { BorderLeft, H2, P } from '~styles';
import * as S from './styled';
import myPhoto from '~images/webp/me.webp';
import { useDictionary } from '~hooks';

export const AboutMe = () => {
  const {
    ABOUT_ME: { ABOUT_ME, ABOUT_TEXT },
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
        <P>{ABOUT_TEXT}</P>
      </figcaption>
    </S.AboutMe>
  );
};
