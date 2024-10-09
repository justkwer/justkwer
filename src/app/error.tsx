'use client';
import * as S from './styled';

import { useRouter } from 'next/navigation';
import { PATH_MAIN } from '~constants';
import { type FC } from 'react';
import Image from 'next/image';
import errorImage from '~images/webp/404.webp';
import { Button } from '~components';
import { useDictionary } from '~hooks';
import type { ErrorProps } from './models';
import { H1 } from '~styles';

export const Error: FC<ErrorProps> = ({ error, callback }) => {
  const { push } = useRouter();
  const {
    ERROR: { BACK_HOME, ERROR_TITLE, ERROR_MESSAGE },
  } = useDictionary();

  const onClickButton = () => {
    if (callback) {
      callback();
      return;
    }

    push(PATH_MAIN);
  };

  return (
    <S.Error>
      <S.ErrorFigure>
        <Image src={errorImage} alt="Error" />
        <S.ErrorFigcaption>
          <H1>{error ? error.title : ERROR_TITLE}</H1>
          <S.ErrorMessage>{error ? error.message : ERROR_MESSAGE}</S.ErrorMessage>
          <Button callback={onClickButton} label={error ? error.button : BACK_HOME} />
        </S.ErrorFigcaption>
      </S.ErrorFigure>
    </S.Error>
  );
};

export default Error;
