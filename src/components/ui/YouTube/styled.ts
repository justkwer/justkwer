import styled from 'styled-components';

export const YouTubeStyled = styled.iframe`
  border: none;
  opacity: 0;
  animation: ${({ theme }) => theme.keyframes.animation.opacity}
    ${({ theme }) => theme.keyframes.duration[0]} forwards;
  animation-delay: ${({ theme }) => theme.keyframes.delay[1]};

  @media (${({ theme }) => theme.media.medium}) {
    max-width: 100%;
    max-height: 190px;
  }
`;
