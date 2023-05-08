import { ChangeModeStyled } from './styled';
import ThemeDark from '../../../../public/svg/theme-dark.svg';
import ThemeLight from '../../../../public/svg/theme-light.svg';
import { useToggleLightMode } from '@components';

export const ChangeMode = () => {
  const { toggleLightMode, isLightMode } = useToggleLightMode();

  return (
    <ChangeModeStyled onClick={toggleLightMode}>
      {isLightMode ? <ThemeLight /> : <ThemeDark />}
    </ChangeModeStyled>
  );
};
