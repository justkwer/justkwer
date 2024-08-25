import React from 'react';
import { NAVIGATION_LIST } from './constants';
import * as S from './styled';
import Link from 'next/link';

export const Navigation = () => (
  <S.Navigation>
    <ul>
      {NAVIGATION_LIST.map(({ href, text }) => (
        <S.NavigationLi key={text}>
          <Link href={href}>{text}</Link>
        </S.NavigationLi>
      ))}
    </ul>
  </S.Navigation>
);
