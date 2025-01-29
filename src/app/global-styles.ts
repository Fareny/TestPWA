"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Сброс базовых стилей */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Убираем стандартные стили у списков */
  ul, ol {
    list-style: none;
  }

  /* Убираем подчеркивание у ссылок */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Сброс стилей у кнопок и интерактивных элементов */
  button, input, textarea, select {
    font: inherit;
    border: none;
    background: none;
    outline: none;
  }

  button {
    cursor: pointer;
  }

  /* Убираем стандартные стили у изображений */
  img, svg {
    max-width: 100%;
    display: block;
  }

  /* Убираем выделение текста */
  ::selection {
    background: rgba(255, 255, 255, 0.2);
  }

  /* Базовые стили для всего документа */
  html {
    scroll-behavior: smooth;
    font-size: 16px; /* Базовый размер шрифта */
    -webkit-text-size-adjust: 100%; /* Запрещаем изменение размера шрифтов на iOS */
  }

  body {
    width: 100%;
    height: 100%;
    font-family: "Inter", sans-serif;
    background-color: #202020;
    color: #fff;
    line-height: 1.5;
    text-rendering: optimizeSpeed;
  }

  /* Улучшаем читаемость заголовков */
  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    line-height: 1.2;
  }

  /* Убираем стандартные отступы у параграфов */
  p {
    margin: 0 0 1rem;
  }

  /* Глобальные стили для контейнера */
  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 16px;
  }

  /* Адаптивная типографика */
  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 13px;
    }
  }
`;

export default GlobalStyles;
