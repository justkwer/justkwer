import { css, type SerializedStyles } from '@emotion/react';
import { fonts } from './fonts';

export const globalStyles: SerializedStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    margin-block: 0;
    margin-inline: 0;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  html,
  body {
    ${fonts};
    width: 100dvw;
    height: 100dvh;
  }

  section {
    margin: auto;
  }

  img,
  svg {
    display: block;
  }

  svg,
  button {
    border: none;
    background: none;
    cursor: pointer;
    outline: none;
  }

  button {
    font-size: 1rem;
    cursor: pointer;

    &:disabled {
      cursor: default;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style-type: none;
  }

  figure {
    margin-block: 0;
    margin-inline: 0;
  }

  textarea,
  input {
    border: none;
  }

  textarea:focus,
  input:focus {
    outline: none;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
