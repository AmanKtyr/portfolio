import styled from 'styled-components';

export const ContactContainer = styled.section`
  padding: 6rem 0;
  background-color: transparent;
  position: relative;
  overflow: hidden;

  /* Subtle background grid */
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background-image: linear-gradient(rgba(128,0,0,0.04) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(128,0,0,0.04) 1px, transparent 1px);
    background-size: 40px 40px;
    z-index: -2;
    transform: rotate(-10deg);
  }

  /* Glow blob */
  &::after {
    content: '';
    position: absolute;
    bottom: -10%;
    right: -10%;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: ${({ theme }) =>
      theme.isDarkMode
        ? 'radial-gradient(circle, rgba(128, 0, 0, 0.15) 0%, transparent 70%)'
        : 'radial-gradient(circle, rgba(128, 0, 0, 0.07) 0%, transparent 70%)'};
    z-index: -1;
    pointer-events: none;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.65rem;
    padding: 1rem 2.2rem;
    background: var(--primary-color);
    color: white;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    width: 100%;
    position: relative;
    overflow: hidden;
    z-index: 1;
    letter-spacing: 0.5px;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    svg {
      transition: transform 0.4s ease;
      font-size: 0.9rem;
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 28px rgba(128, 0, 0, 0.4);

      &::before { opacity: 1; }
      svg { transform: translateX(4px) rotate(-45deg); }
    }

    &:disabled {
      background: var(--gray-color);
      cursor: not-allowed;
      box-shadow: none;
      transform: none;
    }

    .loading-text {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      &::after {
        content: '';
        width: 12px; height: 12px;
        border-radius: 50%;
        border: 2px solid rgba(255,255,255,0.3);
        border-top-color: white;
        animation: spin 0.8s linear infinite;
      }
    }

    @keyframes spin { to { transform: rotate(360deg); } }
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
    padding: 0.5rem 1.2rem;
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.2);
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    color: #10b981;

    .dot {
      width: 8px;
      height: 8px;
      background: #10b981;
      border-radius: 50%;
      animation: pulse 1.5s ease infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.4); }
    }
  }
`;

export const ContactDetail = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 0.85rem;
  padding: 1rem 1.25rem;
  border-radius: 14px;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  background-color: transparent;
  border: 1px solid transparent;
  text-decoration: none;
  cursor: pointer;

  .arrow {
    margin-left: auto;
    opacity: 0;
    transform: translateX(-8px);
    color: var(--primary-color);
    font-weight: bold;
    font-size: 1.1rem;
    transition: all 0.3s ease;
  }

  &:hover {
    background-color: ${({ theme }) =>
      theme.isDarkMode ? 'rgba(30, 41, 59, 0.5)' : 'rgba(255, 255, 255, 0.7)'};
    border-color: rgba(128, 0, 0, 0.12);
    transform: translateX(6px);

    .icon {
      background: var(--primary-color);
      color: white;
      box-shadow: 0 5px 15px rgba(128, 0, 0, 0.3);
    }
    .text h4 { color: var(--primary-color); }
    .arrow { opacity: 1; transform: translateX(0); }
  }

  .icon {
    width: 50px;
    height: 50px;
    min-width: 50px;
    border-radius: 12px;
    background-color: ${({ theme }) =>
      theme.isDarkMode ? 'rgba(128, 0, 0, 0.12)' : 'rgba(128, 0, 0, 0.06)'};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    color: var(--primary-color);
    font-size: 1.2rem;
    transition: all 0.35s ease;
  }

  .text {
    h4 {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 0.2rem;
      font-weight: 700;
      color: var(--gray-color);
      transition: color 0.3s ease;
    }
    p {
      margin: 0;
      color: var(--text-color);
      font-size: 0.93rem;
      font-weight: 500;
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
