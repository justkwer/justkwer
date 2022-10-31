import React from 'react';
import { LogoStyled } from './styled';
import { useToggleLightMode } from '../Theme/Theme';

export const Logo = ({ isOn }: { isOn: boolean }) => {
  const { toggleLightMode } = useToggleLightMode();

  return (
    <LogoStyled onClick={toggleLightMode}>
      <figure>
        <img src={require('../../assets/img/ease.webp')} alt={'Error'} />
      </figure>
      <figcaption>
        <h2>ease</h2>
      </figcaption>
    </LogoStyled>
  );
};

export default Logo;
