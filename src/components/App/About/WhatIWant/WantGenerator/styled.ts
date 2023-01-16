import styled from 'styled-components';

export const WantGeneratorStyled = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 20px;
  max-width: 300px;
`;