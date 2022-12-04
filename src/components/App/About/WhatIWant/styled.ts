import styled from 'styled-components';

export const WhatIDoStyled = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 10px;
`;

export const WhatIDoDivStyled = styled.div`
  ${({ theme }) => theme.flex.row};
  gap: 50px;
`;
