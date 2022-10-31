import styled from 'styled-components';

export const ErrorPageStyled = styled.main`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.blue5};

  section {
    padding: 5px 40px;
    ${({ theme }) => theme.flex.row};
    align-items: center;
    margin: auto;

    figure {
      img {
        max-width: 800px;
        height: 100%;
      }
    }

    figcaption {
      padding: 20px 60px;
      ${({ theme }) => theme.flex.colum}
      gap: 40px;
      align-items: center;
      text-align: center;

      h1 {
        font-weight: 700;
        font-size: 3em;
        letter-spacing: ${({ theme }) => theme.fonts.spacing};
      }

      p {
        font-family: ${({ theme }) => theme.fonts.familyS};
        letter-spacing: ${({ theme }) => theme.fonts.spacing.primary};
        color: ${({ theme }) => theme.colors.grey};
      }
      }
    }
  }
`;