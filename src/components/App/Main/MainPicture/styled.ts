import styled from 'styled-components';

export const MainPictureStyled = styled.figcaption`
  img {
    height: 100%;
    width: 100%;
    opacity: 0;
    animation: ${({ theme }) => theme.keyframes.animation.opacity}
      ${({ theme }) => theme.keyframes.duration[0]} forwards;
    animation-delay: ${({ theme }) => theme.keyframes.delay[0]};
  }
`;
