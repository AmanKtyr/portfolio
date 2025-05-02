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
        ? 'radial-gradient(circle at 10% 10%, rgba(30, 64, 175, 0.1), transparent 40%)'
        : 'radial-gradient(circle at 10% 10%, rgba(219, 234, 254, 0.5), transparent 40%)'};
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
        ? 'radial-gradient(circle at 90% 90%, rgba(147, 51, 234, 0.1), transparent 40%)'
        : 'radial-gradient(circle at 90% 90%, rgba(243, 232, 255, 0.5), transparent 40%)'};
    z-index: -1;
  }

  .btn-primary {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
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
      background: linear-gradient(90deg, var(--secondary-color), var(--primary-color));
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
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  backdrop-filter: blur(${({ theme }) => theme.glassmorphism.blur});
  background-color: ${({ theme }) => theme.glassmorphism.background};
  border: ${({ theme }) => theme.glassmorphism.border};
  box-shadow: ${({ theme }) => theme.glassmorphism.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 1rem;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 3px;
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
      transition: width 0.3s ease;
    }

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  p {
    margin-bottom: 2rem;
    color: var(--gray-color);
    line-height: 1.8;
  }
`;

export const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) =>
      theme.isDarkMode
        ? 'rgba(30, 41, 59, 0.3)'
        : 'rgba(255, 255, 255, 0.5)'};
    transform: translateX(10px);

    .icon {
      transform: scale(1.1) rotate(10deg);
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      color: white;
    }
  }

  .icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${({ theme }) =>
      theme.isDarkMode
        ? 'rgba(59, 130, 246, 0.2)'
        : 'rgba(219, 234, 254, 0.5)'};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    color: var(--primary-color);
    font-size: 1.2rem;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  .text {
    h4 {
      font-size: 1.1rem;
      margin-bottom: 0.3rem;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    p {
      margin-bottom: 0;
      color: var(--gray-color);
      transition: all 0.3s ease;
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
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
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
    background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
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
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: ${({ theme }) => theme.glassmorphism.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
`;

export const FormControl = styled.input`
  width: 100%;
  padding: 1rem 1.2rem;
  background-color: ${({ theme }) =>
    theme.isDarkMode
      ? 'rgba(30, 41, 59, 0.3)'
      : 'rgba(255, 255, 255, 0.5)'};
  border: 1px solid ${({ theme }) =>
    theme.isDarkMode
      ? 'rgba(51, 65, 85, 0.5)'
      : 'rgba(226, 232, 240, 0.8)'};
  border-radius: var(--border-radius);
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
    transform: translateY(-2px);
  }

  &.error {
    border-color: var(--danger-color);
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
  }

  &::placeholder {
    color: ${({ theme }) =>
      theme.isDarkMode
        ? 'rgba(148, 163, 184, 0.7)'
        : 'rgba(160, 174, 192, 0.7)'};
    transition: all 0.3s ease;
  }

  &:focus::placeholder {
    opacity: 0.5;
    transform: translateX(5px);
  }
`;

export const ErrorMessage = styled.small`
  color: var(--danger-color);
  position: absolute;
  bottom: -20px;
  left: 0;
  font-size: 0.8rem;
`;
