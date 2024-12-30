import * as S from './styled';
import MainPicture from '~svg/main-picture.svg';
import Link from 'next/link';
import { PATH_ABOUT } from '~constants';
import { useDictionary } from '~hooks';

export const Picture = () => {
  const {
    CHANGE_LIFE: { CLICK, IS_REAL, TO_DOWNLOAD_OR, READ, ABOUT_ME },
  } = useDictionary();

  return (
    <S.Picture>
      <MainPicture />
      <figcaption>
        <S.Title>{IS_REAL}</S.Title>
        <S.Subtitle>
          <a href="/Alex-Moore.pdf" download="Alex Moore.pdf">
            {CLICK}
          </a>
          &ensp;{TO_DOWNLOAD_OR}&ensp;
          <Link href={PATH_ABOUT}>{READ}</Link>
          {ABOUT_ME}
        </S.Subtitle>
      </figcaption>
    </S.Picture>
  );
};
