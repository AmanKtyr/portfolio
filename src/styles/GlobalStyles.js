import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: ${({ theme }) => theme.colors.primary};
    --primary-rgb: ${({ theme }) => theme.colors.primaryRgb};
    --secondary-color: ${({ theme }) => theme.colors.secondary};
    --secondary-rgb: ${({ theme }) => theme.colors.secondaryRgb};
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

  button, title, h1, h2, h3, h4, h5, h6 {
    font-family: 'monospace', 'Courier New', Courier, monospace;
    font-weight: 700;
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
      font-size: clamp(1.4rem, 3.5vw, 1.8rem);
      font-weight: 800;
      position: relative;
      display: inline-block;
      margin-bottom: 1.2rem;
      letter-spacing: -0.01em;
      font-family: 'monospace', monospace;

      background: linear-gradient(120deg, var(--primary-color), #ff4d4d, var(--primary-color));
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: gShine 5s linear infinite;

      @keyframes gShine {
        0% { background-position: 0% center; }
        100% { background-position: 200% center; }
      }

      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 4px;
        background: var(--primary-color);
        border-radius: 2px;
        box-shadow: 0 0 10px rgba(var(--primary-rgb), 0.4);
      }
    }

    p {
      color: var(--gray-color);
      max-width: 600px;
      margin: 0 auto;
      font-size: clamp(0.9rem, 1.8vw, 1rem);
      opacity: 0.8;
      line-height: 1.6;
    }
  }

  .btn {
    display: inline-block;
    padding: 0.7rem 1.4rem;
    border-radius: var(--border-radius);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
    outline: none;
    text-align: center;
    font-family: 'monospace';
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.85rem;
  }

  .btn-primary {
    background-color: var(--primary-color);
    color: white;
    box-shadow: 0 4px 10px rgba(var(--primary-rgb), 0.2);

    &:hover {
      background-color: var(--secondary-color);
      transform: translateY(-2px);
      box-shadow: 0 6px 15px rgba(var(--primary-rgb), 0.3);
    }
  }

  .btn-outline {
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
    background: transparent;

    &:hover {
      background-color: var(--primary-color);
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 6px 15px rgba(var(--primary-rgb), 0.1);
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


