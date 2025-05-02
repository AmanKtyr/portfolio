import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #3b82f6;
    --dark-color: #1e293b;
    --light-color: #f8fafc;
    --gray-color: #64748b;
    --success-color: #10b981;
    --warning-color: #f59e0b;
    --danger-color: #ef4444;
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
    color: var(--dark-color);
    background-color: var(--light-color);
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
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
