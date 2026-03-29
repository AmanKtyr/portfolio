import styled from 'styled-components';

export const ContactContainer = styled.section`
  @keyframes scan {
    0% { top: -100%; }
    100% { top: 100%; }
  }

  @keyframes gridDrift {
    0% { background-position: 0 0; }
    100% { background-position: 100px 100px; }
  }

  padding: 4.5rem 0;
  background-color: transparent;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: 
      radial-gradient(var(--primary-color) 1px, transparent 1px);
    background-size: 50px 50px;
    opacity: 0.05;
    animation: gridDrift 20s linear infinite;
    z-index: 0;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1.2rem 2.5rem;
    background: var(--primary-color);
    color: white;
    font-family: 'monospace';
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 2px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: -100%;
      left: 0;
      width: 100%;
      height: 4px;
      background: rgba(255, 255, 255, 0.3);
      filter: blur(2px);
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(128, 0, 0, 0.3);

      &::before {
        animation: scan 2s linear infinite;
      }
    }

    &:disabled {
      background: var(--gray-color);
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  .success-message {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: rgba(16, 185, 129, 0.1);
    color: #10b981;
    padding: 1.1rem 1.4rem;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    font-weight: 500;
    border: 1px solid rgba(16, 185, 129, 0.25);
    backdrop-filter: blur(5px);
  }
`;

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const ContactInfo = styled.div`
  padding: 2.5rem;
  border-radius: 24px;
  backdrop-filter: blur(${({ theme }) => theme.glassmorphism.blur});
  background-color: ${({ theme }) => theme.glassmorphism.background};
  border: ${({ theme }) => theme.glassmorphism.border};
  box-shadow: ${({ theme }) => theme.glassmorphism.shadow};
  position: sticky;
  top: 6rem;
  transition: all 0.4s ease;

  &:hover {
    border-color: rgba(128, 0, 0, 0.15);
    box-shadow: 0 25px 50px rgba(0,0,0,0.1);
  }

  h3 {
    font-size: clamp(1.5rem, 3vw, 1.9rem);
    margin-bottom: 1rem;
    font-weight: 800;
    color: var(--primary-color);
    position: relative;
    padding-bottom: 1rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 3px;
      background: var(--primary-color);
      border-radius: 2px;
      box-shadow: 0 0 10px rgba(128, 0, 0, 0.4);
    }

    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 0.8rem;
    }
  }
  }

  > p {
    margin-bottom: 2rem;
    color: var(--gray-color);
    line-height: 1.8;
    font-size: 0.97rem;
    opacity: 0.9;
  }

  .availability-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.5rem 1rem;
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid #10b981;
    font-family: 'monospace';
    font-size: 0.7rem;
    font-weight: 700;
    color: #10b981;
    text-transform: uppercase;
    letter-spacing: 1px;

    .dot {
      width: 6px;
      height: 6px;
      background: #10b981;
      border-radius: 50%;
      animation: blink 1.5s infinite;
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }
  }
`;

export const ContactDetail = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1.2rem;
  border: 1px solid ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  background: ${({ theme }) => theme.isDarkMode ? 'rgba(30, 41, 59, 0.2)' : 'rgba(255, 255, 255, 0.2)'};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary-color);
    transform: translateX(5px);
    background: ${({ theme }) => theme.isDarkMode ? 'rgba(30, 41, 59, 0.4)' : 'rgba(255, 255, 255, 0.4)'};

    .icon {
      color: var(--primary-color);
      transform: scale(1.1);
    }
  }

  .icon {
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--gray-color);
    font-size: 1.2rem;
    border-right: 1px solid ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
    margin-right: 1.2rem;
    transition: all 0.3s ease;
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    
    .icon {
      width: 35px;
      height: 35px;
      font-size: 1rem;
      margin-right: 0.8rem;
    }
  }

  .text {
    h4 {
      font-size: 0.65rem;
      font-family: 'monospace';
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--primary-color);
      margin-bottom: 0.3rem;
    }
    p {
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.text};
      font-weight: 500;
      word-break: break-all;

      @media (max-width: 480px) {
        font-size: 0.85rem;
      }
    }
  }
`;


export const ContactSocial = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
`;

export const SocialLink = styled.a`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${({ theme }) =>
    theme.isDarkMode ? 'rgba(128, 0, 0, 0.1)' : 'rgba(128, 0, 0, 0.06)'};
  border: 1px solid rgba(128, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-color);
  font-size: 1.1rem;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(128, 0, 0, 0.3);
    border-color: var(--primary-color);
  }
`;

export const ContactForm = styled.form`
  backdrop-filter: blur(${({ theme }) => theme.glassmorphism.blur});
  background-color: ${({ theme }) => theme.glassmorphism.background};
  border: ${({ theme }) => theme.glassmorphism.border};
  padding: 2.5rem;
  border-radius: 24px;
  box-shadow: ${({ theme }) => theme.glassmorphism.shadow};
  transition: all 0.4s ease;

  &:hover {
    border-color: rgba(128, 0, 0, 0.15);
    box-shadow: 0 25px 50px rgba(0,0,0,0.1);
  }

  .form-header {
    margin-bottom: 2rem;
    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary-color);
      margin-bottom: 0.4rem;
    }
    p {
      font-size: 0.92rem;
      color: var(--gray-color);
      opacity: 0.85;
    }
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.75rem;
  position: relative;

  label {
    display: block;
    font-size: 0.82rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: var(--gray-color);
    margin-bottom: 0.55rem;
  }
`;

export const FormControl = styled.input`
  width: 100%;
  padding: 1rem 1.2rem;
  background-color: ${({ theme }) =>
    theme.isDarkMode ? 'rgba(15, 23, 42, 0.4)' : 'rgba(255, 255, 255, 0.6)'};
  border: 1.5px solid ${({ theme }) =>
    theme.isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'};
  border-radius: 12px;
  font-family: inherit;
  font-size: 0.97rem;
  transition: all 0.3s ease;
  color: var(--text-color);
  resize: ${({ as: tag }) => (tag === 'textarea' ? 'vertical' : 'none')};

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    background-color: ${({ theme }) =>
      theme.isDarkMode ? 'rgba(15, 23, 42, 0.6)' : '#fff'};
    box-shadow: 0 0 0 4px rgba(128, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  &.error {
    border-color: #ef4444;
    box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1);
  }

  &::placeholder {
    color: var(--gray-color);
    opacity: 0.5;
  }
`;

export const ErrorMessage = styled.small`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #ef4444;
  position: absolute;
  bottom: -22px;
  left: 4px;
  font-size: 0.75rem;
  font-weight: 600;
`;
