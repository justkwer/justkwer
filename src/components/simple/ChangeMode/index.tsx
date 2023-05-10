import { ChangeModeStyled } from './styled';
import { useToggleLightMode } from '@components';
import ThemeDark from '@public/svg/theme-dark.svg';
import ThemeLight from '@public/svg/theme-light.svg';

export const ChangeMode = () => {
  const { toggleLightMode, isLightMode } = useToggleLightMode();

  return (
    <ChangeModeStyled onClick={toggleLightMode}>
      {isLightMode ? <ThemeLight /> : <ThemeDark />}
    </ChangeModeStyled>
  );
};
