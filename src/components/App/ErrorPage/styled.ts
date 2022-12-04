import styled from 'styled-components';

export const ErrorPageStyled = styled.main`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  ${({ theme }) => theme.flex.row};
  
  
  section {
    ${({ theme }) => theme.flex.row};

    figure {
      img {
        max-width: 800px;
        height: 100%;
      }
    }

    figcaption {
      padding: 20px 60px;
      ${({ theme }) => theme.flex.column}
      gap: 40px;
      align-items: center;
      text-align: center;
      
      p {
        font-family: ${({ theme }) => theme.fonts.familyS};
        letter-spacing: ${({ theme }) => theme.fonts.spacing.primary};
      }
    }
  }
}
`;
