import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) =>
    theme.isDarkMode
      ? 'var(--dark-color)'
      : 'linear-gradient(180deg, #f1f5f9, #0f172a)'};
  background-image: ${({ theme }) =>
    theme.isDarkMode
      ? 'linear-gradient(180deg, #0f172a, #020617)'
      : 'linear-gradient(180deg, #f1f5f9, #0f172a)'};
  color: white;
  padding: 4rem 0 2rem;
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
        ? 'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1), transparent 40%)'
        : 'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1), transparent 40%)'};
    z-index: 0;
  }
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 0.5rem;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 30px;
      height: 2px;
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 50px;
    }
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterLogo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  display: inline-block;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }

  span {
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const FooterText = styled.p`
  color: #cbd5e1;
  margin-bottom: 1.5rem;
  line-height: 1.8;
`;

export const FooterLinks = styled.ul`
  li {
    margin-bottom: 0.8rem;
    color: #cbd5e1;
    position: relative;
    transition: all 0.3s ease;
    padding-left: 0;

    &::before {
      content: '→';
      position: absolute;
      left: 0;
      opacity: 0;
      transform: translateX(-10px);
      transition: all 0.3s ease;
      color: var(--primary-color);
    }

    &:hover {
      padding-left: 20px;

      &::before {
        opacity: 1;
        transform: translateX(0);
      }
    }

    a {
      color: #cbd5e1;
      transition: all 0.3s ease;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 1px;
        background: linear-gradient(90deg, var(--primary-color), transparent);
        transition: width 0.3s ease;
      }

      &:hover {
        color: white;

        &::after {
          width: 100%;
        }
      }
    }
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
  }

  svg {
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px) rotate(10deg);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

    &::before {
      opacity: 1;
    }

    svg {
      transform: scale(1.2);
    }
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid rgba(51, 65, 85, 0.5);
  padding-top: 2rem;
  text-align: center;
  color: #cbd5e1;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    z-index: 2;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }

    svg {
      color: #ef4444;
      animation: heartbeat 1.5s infinite;

      @keyframes heartbeat {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.2);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;
