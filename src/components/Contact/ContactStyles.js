import styled from 'styled-components';

export const ContactContainer = styled.section`
  padding: 6rem 0;
  background-color: transparent;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      theme.isDarkMode
        ? 'var(--primary-color), transparent 40%)'
        : 'var(--primary-color), transparent 40%)'};
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      theme.isDarkMode
        ? 'var(--primary-color), transparent 40%)'
        : 'var(--primary-color), transparent 40%)'};
    z-index: -1;
  }

  .btn-primary {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background: var(--primary-color);
    color: white;
    border-radius: var(--border-radius);
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    position: relative;
    overflow: hidden;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: var(--secondary-color);
      transition: width 0.3s ease;
      z-index: -1;
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

      &::before {
        width: 100%;
      }
    }

    &:disabled {
      background: var(--gray-color);
      cursor: not-allowed;

      &::before {
        display: none;
      }
    }
  }

  .success-message {
    background-color: rgba(16, 185, 129, 0.1);
    color: var(--success-color);
    padding: 1rem;
    border-radius: var(--border-radius);
    margin-bottom: 1.5rem;
    text-align: center;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(16, 185, 129, 0.2);
    animation: fadeIn 0.5s ease;

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const ContactInfo = styled.div`
  padding: 2.5rem;
  border-radius: 20px;
  backdrop-filter: blur(${({ theme }) => theme.glassmorphism.blur});
  background-color: ${({ theme }) => theme.glassmorphism.background};
  border: ${({ theme }) => theme.glassmorphism.border};
  box-shadow: ${({ theme }) => theme.glassmorphism.shadow};
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(128, 0, 0, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: clamp(1.8rem, 4vw, 2.2rem);
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 1rem;
    font-weight: 800;
    color: var(--primary-color);

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: clamp(40px, 8vw, 60px);
      height: 4px;
      background: var(--primary-color);
      border-radius: 2px;
    }
  }

  p {
    margin-bottom: 2.5rem;
    color: var(--gray-color);
    line-height: 1.8;
    font-size: clamp(0.95rem, 2vw, 1.05rem);
    opacity: 0.9;
  }
`;

export const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.75rem;
  padding: 1.25rem;
  border-radius: 12px;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  background-color: transparent;
  border: 1px solid transparent;

  &:hover {
    background-color: ${({ theme }) =>
      theme.isDarkMode
        ? 'rgba(30, 41, 59, 0.4)'
        : 'rgba(255, 255, 255, 0.6)'};
    border-color: rgba(128, 0, 0, 0.1);
    transform: translateX(10px);

    .icon {
      transform: scale(1.1) rotate(5deg);
      background: var(--primary-color);
      color: white;
      box-shadow: 0 5px 15px rgba(128, 0, 0, 0.3);
    }

    .text h4 {
      color: var(--primary-color);
    }
  }

  .icon {
    width: 55px;
    height: 55px;
    border-radius: 12px;
    background-color: ${({ theme }) =>
      theme.isDarkMode
        ? 'rgba(128, 0, 0, 0.1)'
        : 'rgba(128, 0, 0, 0.05)'};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1.25rem;
    color: var(--primary-color);
    font-size: 1.4rem;
    transition: all 0.4s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }

  .text {
    h4 {
      font-size: 1.1rem;
      margin-bottom: 0.3rem;
      font-weight: 700;
      transition: all 0.3s ease;
    }

    p {
      margin-bottom: 0;
      color: var(--gray-color);
      font-size: 0.95rem;
      opacity: 0.85;
    }
  }
`;

export const ContactSocial = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

export const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--secondary-color);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  svg {
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px) rotate(10deg);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);

    &::before {
      opacity: 1;
    }

    svg {
      transform: scale(1.2);
    }
  }
`;

export const ContactForm = styled.form`
  backdrop-filter: blur(${({ theme }) => theme.glassmorphism.blur});
  background-color: ${({ theme }) => theme.glassmorphism.background};
  border: ${({ theme }) => theme.glassmorphism.border};
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.glassmorphism.shadow};
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(128, 0, 0, 0.2);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 2rem;
  position: relative;
`;

export const FormControl = styled.input`
  width: 100%;
  padding: 1.1rem 1.4rem;
  background-color: ${({ theme }) =>
    theme.isDarkMode
      ? 'rgba(15, 23, 42, 0.4)'
      : 'rgba(255, 255, 255, 0.5)'};
  border: 1px solid ${({ theme }) =>
    theme.isDarkMode
      ? 'rgba(128, 0, 0, 0.1)'
      : 'rgba(128, 0, 0, 1)'};
  border-radius: 12px;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  color: var(--text-color);

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    background-color: ${({ theme }) =>
      theme.isDarkMode ? 'rgba(15, 23, 42, 0.6)' : '#fff'};
    box-shadow: 0 0 0 4px rgba(128, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  &.error {
    border-color: var(--danger-color);
    box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.15);
  }

  &::placeholder {
    color: var(--gray-color);
    opacity: 0.6;
    transition: all 0.3s ease;
  }

  &:focus::placeholder {
    opacity: 0.4;
    transform: translateX(5px);
  }
`;

export const ErrorMessage = styled.small`
  color: var(--danger-color);
  position: absolute;
  bottom: -22px;
  left: 5px;
  font-size: 0.75rem;
  font-weight: 600;
`;


