import React from 'react';
import { useToggleLightMode } from '../../';
import { ChangeModeStyled } from './styled';
import { ThemeDark, ThemeLight } from '../../../assets';

export const ChangeMode = () => {
  const { toggleLightMode, isLightMode } = useToggleLightMode();

  return (
    <ChangeModeStyled onClick={toggleLightMode}>
      {isLightMode ? <ThemeLight /> : <ThemeDark />}
    </ChangeModeStyled>
  );
};
