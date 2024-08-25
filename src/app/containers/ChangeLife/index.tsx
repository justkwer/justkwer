import { H1 } from '~styles';
import * as S from './styled';
import { Picture } from './Picture';
import { useDictionary } from '~hooks';

export const ChangeLife = () => {
  const {
    CHANGE_LIFE: { CHANGE_YOUR_LIFE },
  } = useDictionary();

  return (
    <S.ChangeLife>
      <H1>{CHANGE_YOUR_LIFE}</H1>
      <Picture />
    </S.ChangeLife>
  );
};
