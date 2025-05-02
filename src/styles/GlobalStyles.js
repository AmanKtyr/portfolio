import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: ${({ theme }) => theme.colors.primary};
    --secondary-color: ${({ theme }) => theme.colors.secondary};
    --accent-color: ${({ theme }) => theme.colors.accent};
    --dark-color: ${({ theme }) => theme.colors.dark};
    --light-color: ${({ theme }) => theme.colors.light};
    --gray-color: ${({ theme }) => theme.colors.gray};
    --success-color: ${({ theme }) => theme.colors.success};
    --warning-color: ${({ theme }) => theme.colors.warning};
    --danger-color: ${({ theme }) => theme.colors.danger};
    --background-color: ${({ theme }) => theme.colors.background};
    --card-bg-color: ${({ theme }) => theme.colors.cardBg};
    --text-color: ${({ theme }) => theme.colors.text};
    --text-secondary-color: ${({ theme }) => theme.colors.textSecondary};
    --border-color: ${({ theme }) => theme.colors.border};
    --transition: all 0.3s ease;
    --max-width: 1200px;
    --border-radius: 8px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--background-color);
    overflow-x: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;
    cursor: none; /* Hide default cursor for custom cursor */
  }

  .dark-mode {
    --primary-color: ${({ theme }) => theme.isDarkMode ? theme.colors.primary : ''};
    --secondary-color: ${({ theme }) => theme.isDarkMode ? theme.colors.secondary : ''};
    --accent-color: ${({ theme }) => theme.isDarkMode ? theme.colors.accent : ''};
    --dark-color: ${({ theme }) => theme.isDarkMode ? theme.colors.dark : ''};
    --light-color: ${({ theme }) => theme.isDarkMode ? theme.colors.light : ''};
    --gray-color: ${({ theme }) => theme.isDarkMode ? theme.colors.gray : ''};
    --background-color: ${({ theme }) => theme.isDarkMode ? theme.colors.background : ''};
    --card-bg-color: ${({ theme }) => theme.isDarkMode ? theme.colors.cardBg : ''};
    --text-color: ${({ theme }) => theme.isDarkMode ? theme.colors.text : ''};
    --text-secondary-color: ${({ theme }) => theme.isDarkMode ? theme.colors.textSecondary : ''};
    --border-color: ${({ theme }) => theme.isDarkMode ? theme.colors.border : ''};
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    cursor: none; /* Hide default cursor for custom cursor */
  }

  button {
    cursor: none; /* Hide default cursor for custom cursor */
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button, input, textarea {
    font-family: inherit;
  }

  .container {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 2rem;

    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }

  .section {
    padding: 5rem 0;

    @media (max-width: 768px) {
      padding: 4rem 0;
    }
  }

  .section-title {
    text-align: center;
    margin-bottom: 3rem;

    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      position: relative;
      display: inline-block;
      margin-bottom: 1rem;

      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        height: 3px;
        background-color: var(--primary-color);
      }

      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }

    p {
      color: var(--gray-color);
      max-width: 600px;
      margin: 0 auto;
    }
  }

  .btn {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    border-radius: var(--border-radius);
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
    border: none;
    outline: none;
    text-align: center;
  }

  .btn-primary {
    background-color: var(--primary-color);
    color: white;

    &:hover {
      background-color: var(--secondary-color);
    }
  }

  .btn-outline {
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
    background: transparent;

    &:hover {
      background-color: var(--primary-color);
      color: white;
    }
  }

  .text-center {
    text-align: center;
  }

  .grid {
    display: grid;
    gap: 2rem;
  }

  .flex {
    display: flex;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default GlobalStyles;
