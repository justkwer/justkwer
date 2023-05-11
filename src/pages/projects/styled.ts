import styled from 'styled-components';

export const ProjectsStyled = styled.main`
  z-index: -1;
  text-align: center;
  animation: ${({ theme }) => theme.keyframes.animation.title}
    ${({ theme }) => theme.keyframes.duration[0]} forwards;
`;
