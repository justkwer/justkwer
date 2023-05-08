import styled from 'styled-components';

export const MyPhotoStyled = styled.figure`
  position: relative;

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 4px solid ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    box-shadow: 0 0 16px 0 ${({ theme }) => theme.colors.magenta},
      0 0 12px 2px ${({ theme }) => theme.colors.magenta},
      0 0 8px 0 ${({ theme }) => theme.colors.magenta},
      0 0 6px 0 ${({ theme }) => theme.colors.magenta},
      inset 0 0 100px ${({ theme }) => theme.colors.magenta};
  }

  img {
    position: relative;
    width: 100%;
    max-width: 400px;
    height: auto;
    z-index: -1;
    border-radius: 50%;
  }

  &:after,
  &:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0.4;
    mix-blend-mode: screen;
  }

  &:before {
    top: -7.5px;
    left: -7.5px;
    width: calc(100% + 15px);
    height: calc(100% + 15px);
    z-index: -2;
    opacity: 1;
    mix-blend-mode: normal;
  }

  &:after {
    z-index: -1;
  }
`;
