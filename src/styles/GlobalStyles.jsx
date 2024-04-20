import { css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

import InterRegular from '../assets/fonts/Inter-Regular.ttf';
import InterMedium from '../assets/fonts/Inter-Medium.ttf';
import InterBold from '../assets/fonts/Inter-Bold.ttf';

export const GlobalStyles = css`
  ${emotionNormalize}

  /* ========================= Reset styles ========================= */
  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  img,
  ul,
  li,
  form,
  label,
  footer,
  header,
  nav,
  section {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  ul {
    list-style: none;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  /* ========================= Fonts ========================= */
  @font-face {
    font-family: 'Inter';
    font-weight: 400;
    src: url(${InterRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 500;
    src: url(${InterMedium}) format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 700;
    src: url(${InterBold}) format('truetype');
  }

  /* ========================= Common styles ========================= */
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    background-color: #fff;
  }

  /* ========================= /Scroll styles ========================= */

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #9ebbff;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(239, 237, 232, 0.1);
  }

  /* Firefox */
  * {
    scrollbar-color: #475467 rgba(239, 237, 232, 0.1);
  }

`;