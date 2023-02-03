import React from 'react';
import { SvgGenerator } from '../../SvgGenerator/SvgGenerator';
import { useToggleLightMode } from '../../ordinary';

export const ChangeMode = ({ isOn }: { isOn: boolean }) => {
  const { toggleLightMode } = useToggleLightMode();
  return (
    <div onClick={toggleLightMode}>
      <SvgGenerator id={isOn ? 'light' : 'dark'} />
    </div>
  );
};
