import { keyframes } from 'styled-components';

export const titleKeyframes = keyframes`
  0% {
    position: relative;
    top: -100px;
    opacity: 0;
  }
  99% {
    top: 0;
    position: relative;
    opacity: 1;
  }
  100% {
    position: static;
    opacity: 1;
  }
`;

export const subtitleKeyframes = keyframes`
  0% {
    position: relative;
    left: 100px;
    opacity: 0;
  }
  99% {
    left: 0;
    position: relative;
  }
  100% {
    position: static;
    opacity: 1;
  }
`;

export const subtitleRotateKeyframes = keyframes`
  0% {
    position: relative;
    bottom: 100px;
    opacity: 0;
  }
  99% {
    bottom: 0;
    position: relative;
  }
  100% {
    position: static;
    opacity: 1;
  }
`;

export const shineKeyframes = keyframes`
  40% {
    -webkit-text-fill-color: initial;
    -webkit-text-stroke-width: 0;
  }
  50% {
    text-shadow: white 0 0 20px;
  }
  100% {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 3px;
  }
`;

export const opacityKeyframes = keyframes`
  50% {
    text-shadow: white 0 0 20px;
  }
  100% {
    opacity: 1;
  }
`;

export const opacityKeyframesButton = keyframes`
  100% {
    opacity: .8;
  }
`;

export const pictureKeyframes = keyframes`
  0% {
    position: relative;
    left: -100px;
    opacity: 0;
  }
  99% {
    left: 0;
    position: relative;
  }
  100% {
    opacity: 1;
  }
`;
