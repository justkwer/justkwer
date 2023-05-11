import styled from 'styled-components';

export const BackgroundStyled = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -5;

  img {
    width: 100%;
    height: 100%;
    filter: brightness(60%);
  }
`;

export const StarStyled = styled.span`
  position: absolute;
  width: 2px;
  height: 2px;
  border-radius: 2px;
  background-color: white;
  box-shadow: 0 0 2px white;
  animation: star-scale infinite alternate;

  @keyframes star-scale {
    0% {
      transform: scale(1) translate(-1vw, -2vh);
      opacity: 1;
    }
    25% {
      transform: scale(0.9) translate(-3vw, -5vh);
      opacity: 0.8;
    }
    50% {
      transform: scale(1) translate(5vw, -2vh);
      opacity: 0.9;
    }
    75% {
      transform: scale(0.2) translate(10vw, 0vh);
      opacity: 0.2;
    }
    100% {
      transform: scale(0.9) translate(2vw, 0vh);
      opacity: 0.9;
    }
  }
`;
