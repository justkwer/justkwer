'use client';
import * as S from './styled';
import { Span } from '~styles';
import { PATH_MAIN } from '~constants';
import { usePathname, useRouter } from 'next/navigation';
import { useDictionary } from '~hooks';

export const Logo = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const {
    META: { ALEX_YAKOVLEV },
  } = useDictionary();
  const handleClick = (): void => {
    if (pathname !== PATH_MAIN) {
      push(PATH_MAIN);
    }
  };

  return (
    <S.Logo onClick={handleClick}>
      <Span>{ALEX_YAKOVLEV}</Span>
    </S.Logo>
  );
};
