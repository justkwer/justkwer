import styled from 'styled-components';

export const ProjectsStyled = styled.main`
  text-align: center;
  animation: ${({ theme }) => theme.keyframes.animation.title}
    ${({ theme }) => theme.keyframes.duration[0]} forwards;
`;
