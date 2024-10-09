import * as S from './styled';

import ThemeDark from '~svg/theme-dark.svg';
import ThemeLight from '~svg/theme-light.svg';
import { useTheme } from '~hooks';

export const Theme = () => {
  const { isLightTheme, toggleIsLightTheme } = useTheme();

  return (
    <S.Theme onClick={toggleIsLightTheme}>{isLightTheme ? <ThemeLight /> : <ThemeDark />}</S.Theme>
  );
};
