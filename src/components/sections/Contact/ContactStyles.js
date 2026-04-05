import styled, { keyframes } from 'styled-components';

const scan = keyframes`
  0% { transform: translateY(-100%); opacity: 0; }
  50% { opacity: 0.5; }
  100% { transform: translateY(100%); opacity: 0; }
`;

export const ContactContainer = styled.section`
  padding: 8rem 0;
  background-color: transparent;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: 
      radial-gradient(var(--primary-color) 1px, transparent 1px);
    background-size: 60px 60px;
    opacity: ${({ theme }) => theme.isDarkMode ? 0.04 : 0.02};
    z-index: 0;
  }
`;

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 4rem;
  align-items: start;
  position: relative;
  z-index: 1;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InfoHeader = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: 800;
    font-family: 'monospace';
    text-transform: uppercase;
    letter-spacing: -1px;
    color: ${({ theme }) => theme.colors.text};
    margin: 0 0 1rem 0;

    span {
      color: var(--primary-color);
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--text-secondary-color);
    opacity: 0.8;
    margin: 0;
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
`;

export const ContactCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 0;
    background: var(--primary-color);
    transition: height 0.4s ease;
  }

  .icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(var(--primary-rgb), 0.08);
    border-radius: 4px;
    color: var(--primary-color);
    font-size: 1.2rem;
    transition: all 0.4s ease;
  }

  .details {
    h4 {
      font-family: 'monospace';
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--primary-color);
      margin: 0 0 0.25rem 0;
    }
    p {
      font-size: 1rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.text};
      margin: 0;
    }
  }

  &:hover {
    border-color: rgba(var(--primary-rgb), 0.3);
    transform: translateX(10px);
    background: ${({ theme }) => theme.isDarkMode ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)'};

    &::before {
      height: 100%;
    }

    .icon {
      background: var(--primary-color);
      color: white;
    }
  }
`;

export const SocialFrame = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const SocialBox = styled.a`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  transition: all 0.4s ease;

  &:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(var(--primary-rgb), 0.2);
  }
`;

export const ContactForm = styled.form`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 3rem;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--primary-color);
    box-shadow: 0 0 15px var(--primary-color);
  }

  .form-header {
    margin-bottom: 2.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    padding-bottom: 1rem;

    h4 {
      font-family: 'monospace';
      font-size: 0.8rem;
      color: var(--primary-color);
      letter-spacing: 4px;
      text-transform: uppercase;
      margin: 0 0 0.5rem 0;
    }
    span {
      font-family: 'monospace';
      font-size: 0.6rem;
      opacity: 0.4;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }

  .form-group {
    margin-bottom: 2rem;
    position: relative;

    label {
      font-family: 'monospace';
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: ${({ theme }) => theme.colors.text};
      opacity: 0.6;
      margin-bottom: 0.75rem;
      display: block;
    }

    input, textarea {
      width: 100%;
      background: ${({ theme }) => theme.isDarkMode ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)'};
      border: 1px solid ${({ theme }) => theme.colors.border};
      padding: 1rem 1.25rem;
      border-radius: 4px;
      color: ${({ theme }) => theme.colors.text};
      font-family: inherit;
      font-size: 1rem;
      transition: all 0.3s ease;

      &:focus {
        outline: none;
        border-color: var(--primary-color);
        background: ${({ theme }) => theme.isDarkMode ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'};
        box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.1);
      }
    }

    textarea {
      resize: none;
      min-height: 150px;
    }

    .error-msg {
      position: absolute;
      bottom: -18px;
      left: 0;
      font-family: 'monospace';
      font-size: 0.6rem;
      color: #ef4444;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }

  .submit-btn {
    width: 100%;
    padding: 1.25rem;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 4px;
    font-family: 'monospace';
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 3px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.4s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    box-shadow: 0 10px 20px rgba(var(--primary-rgb), 0.3);

    &:hover:not(:disabled) {
      transform: translateY(-3px);
      box-shadow: 0 15px 30px rgba(var(--primary-rgb), 0.4);
      filter: brightness(1.1);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    svg {
      font-size: 1.1rem;
      transition: transform 0.3s ease;
    }

    &:hover svg {
      transform: translateX(5px) scale(1.1);
    }
  }

  @media (max-width: 600px) {
    padding: 2rem;
  }
`;

export const ConnectionStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 2rem;
  padding: 0.75rem 1rem;
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 4px;
  width: fit-content;

  .dot {
    width: 8px;
    height: 8px;
    background: #10b981;
    border-radius: 50%;
    box-shadow: 0 0 10px #10b981;
    animation: blink 2s infinite;
  }

  span {
    font-family: 'monospace';
    font-size: 0.65rem;
    font-weight: 700;
    color: #10b981;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(1.2); }
  }
`;
