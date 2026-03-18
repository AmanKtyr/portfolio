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
    cursor: default;
  }

  body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--background-color);
    overflow-x: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;
    cursor: auto;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    cursor: pointer;
  }

  button {
    cursor: pointer;
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
    padding: 0 1.5rem;

    @media (max-width: 768px) {
      padding: 0 1.25rem;
    }

    @media (max-width: 480px) {
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
    margin-bottom: 4rem;

    @media (max-width: 768px) {
      margin-bottom: 2.5rem;
    }

    h2 {
      font-size: clamp(2rem, 5vw, 2.5rem);
      font-weight: 700;
      position: relative;
      display: inline-block;
      margin-bottom: 1.5rem;
      letter-spacing: -0.02em;

      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 4px;
        background: var(--primary-color);
        border-radius: 2px;
      }
    }

    p {
      color: var(--gray-color);
      max-width: 650px;
      margin: 0 auto;
      font-size: clamp(1rem, 2vw, 1.1rem);
      opacity: 0.9;
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


