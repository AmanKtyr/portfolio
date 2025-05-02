import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: ${({ scrolled, theme }) =>
    scrolled
      ? theme.isDarkMode
        ? 'rgba(15, 23, 42, 0.95)'
        : 'rgba(255, 255, 255, 0.95)'
      : theme.isDarkMode
        ? 'rgba(15, 23, 42, 0.7)'
        : 'rgba(255, 255, 255, 0.7)'};
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(15px)' : 'blur(10px)'};
  border-bottom: ${({ scrolled, theme }) =>
    theme.isDarkMode
      ? '1px solid rgba(51, 65, 85, 0.5)'
      : '1px solid rgba(226, 232, 240, 0.8)'};
  box-shadow: ${({ scrolled, theme }) =>
    scrolled
      ? theme.isDarkMode
        ? '0 10px 30px -10px rgba(0, 0, 0, 0.5)'
        : '0 10px 30px -10px rgba(0, 0, 0, 0.15)'
      : 'none'};
  transition: all 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  padding: ${({ scrolled }) => (scrolled ? '0.5rem 0' : '1rem 0')};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme, scrolled }) =>
      scrolled && theme.isDarkMode
        ? 'radial-gradient(circle at top right, rgba(59, 130, 246, 0.2), transparent 50%)'
        : scrolled && !theme.isDarkMode
          ? 'radial-gradient(circle at top right, rgba(59, 130, 246, 0.15), transparent 50%)'
          : 'transparent'};
    pointer-events: none;
    z-index: -1;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--primary-color);
  position: relative;
  z-index: 2;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 8px;
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
        ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))'
        : 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))'};
    border-radius: 8px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  span {
    position: relative;
    background: linear-gradient(90deg,
      var(--primary-color) 0%,
      var(--secondary-color) 50%,
      var(--primary-color) 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    transition: all 0.5s ease;

    &:hover {
      background-position: right center;
      transform: translateY(-2px);
    }

    span {
      color: var(--dark-color);
      background: none;
      -webkit-text-fill-color: currentColor;
      text-fill-color: currentColor;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
        border-radius: 4px;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
      }
    }

    &:hover span::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

export const NavMenuWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  position: relative;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 80%;
    height: 100vh;
    background-color: ${({ theme }) =>
      theme.isDarkMode
        ? 'rgba(15, 23, 42, 0.98)'
        : 'rgba(255, 255, 255, 0.98)'};
    padding: 5rem 2rem 2rem;
    transition: all 0.5s cubic-bezier(0.65, 0, 0.35, 1);
    box-shadow: ${({ theme }) =>
      theme.isDarkMode
        ? '-10px 0 30px rgba(0, 0, 0, 0.7)'
        : '-10px 0 30px rgba(0, 0, 0, 0.15)'};
    z-index: 1;
    justify-content: flex-start;
    align-items: flex-start;
    border-left: ${({ theme }) =>
      theme.isDarkMode
        ? '1px solid rgba(51, 65, 85, 0.5)'
        : '1px solid rgba(226, 232, 240, 0.8)'};
    overflow-y: auto;
    max-height: 100vh;
  }
`;

export const NavIndicator = styled(motion.div)`
  position: absolute;
  height: 4px;
  bottom: -8px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color), var(--accent-color));
  background-size: 200% 100%;
  animation: gradientMove 3s ease infinite;
  border-radius: 4px;
  transition: width 0.3s ease;
  z-index: 0;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.5);

  @keyframes gradientMove {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  &::before, &::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--primary-color);
    top: -2px;
    opacity: 0.9;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.9;
    }
    50% {
      transform: scale(1.2);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0.9;
    }
  }

  &::before {
    left: -2px;
    box-shadow: 0 0 10px 2px rgba(59, 130, 246, 0.5);
  }

  &::after {
    right: -2px;
    box-shadow: 0 0 10px 2px rgba(59, 130, 246, 0.5);
    animation-delay: 1s;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ScrollProgressContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: ${({ theme }) =>
    theme.isDarkMode
      ? 'rgba(255, 255, 255, 0.05)'
      : 'rgba(0, 0, 0, 0.05)'};
  overflow: hidden;
  z-index: 1;
`;

export const ScrollProgressBar = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg,
    var(--primary-color),
    var(--secondary-color),
    var(--accent-color),
    var(--primary-color));
  background-size: 300% 100%;
  animation: gradientShift 5s linear infinite;

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const NavItem = styled.li`
  margin-left: 1.8rem;
  position: relative;
  list-style: none;

  @media (max-width: 768px) {
    margin: 0.8rem 0;
    width: 100%;
  }

  &.has-dropdown {
    .dropdown-toggle {
      display: flex;
      align-items: center;
      gap: 0.3rem;

      svg.dropdown-icon {
        font-size: 0.8rem;
        transition: transform 0.3s ease;
      }

      &:hover svg.dropdown-icon {
        transform: translateY(2px);
      }
    }
  }
`;

export const PrimaryButton = styled.div`
  .btn-primary {
    display: inline-block;
    padding: 0.7rem 1.5rem;
    background: linear-gradient(90deg, #2563eb, #1e40af);
    color: white;
    border-radius: 30px;
    font-weight: 600;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.4);
    position: relative;
    overflow: hidden;
    z-index: 1;
    border: 1px solid rgba(255, 255, 255, 0.2);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, #1e40af, #2563eb);
      z-index: -1;
      transition: opacity 0.3s ease;
      opacity: 0;
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(37, 99, 235, 0.5);

      &::before {
        opacity: 1;
      }
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 4px 10px rgba(37, 99, 235, 0.4);
    }
  }
`;

export const NavLink = styled(Link).attrs(props => ({
  onClick: props.onClick || (() => {}),
}))`
  color: ${({ active, theme }) =>
    active === 'true'
      ? theme.isDarkMode
        ? '#60a5fa' // Brighter blue for dark mode
        : '#2563eb' // Darker blue for light mode
      : theme.isDarkMode
        ? '#f1f5f9' // Very light gray for dark mode
        : '#0f172a'}; // Very dark blue for light mode
  font-weight: 600;
  position: relative;
  padding: 0.5rem 0.8rem;
  text-decoration: none;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  overflow: hidden;
  z-index: 1;
  text-shadow: ${({ theme, active }) =>
    active === 'true' && theme.isDarkMode
      ? '0 0 8px rgba(96, 165, 250, 0.5)'
      : 'none'};

  svg {
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme, index }) => {
      const colors = [
        theme.isDarkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)',
        theme.isDarkMode ? 'rgba(147, 51, 234, 0.2)' : 'rgba(147, 51, 234, 0.1)',
        theme.isDarkMode ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.1)'
      ];
      return colors[index % 3] || colors[0];
    }};
    z-index: -1;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s cubic-bezier(0.65, 0, 0.35, 1);
    border-radius: 8px;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: ${({ active }) => (active === 'true' ? '80%' : '0')};
    height: 3px;
    background: ${({ index }) => {
      const colors = [
        'linear-gradient(90deg, #3b82f6, #60a5fa)',
        'linear-gradient(90deg, #9333ea, #c084fc)',
        'linear-gradient(90deg, #10b981, #34d399)'
      ];
      return colors[index % 3] || colors[0];
    }};
    transform: translateX(-50%);
    transition: width 0.3s ease;
    border-radius: 3px;
    box-shadow: ${({ active }) =>
      active === 'true'
        ? '0 2px 8px rgba(59, 130, 246, 0.5)'
        : 'none'};
  }

  &:hover::after {
    width: 80%;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.8rem 1rem;
    width: 100%;
    border-radius: 8px;
    background: ${({ theme, active, index }) => {
      if (active === 'true') {
        return theme.isDarkMode
          ? 'linear-gradient(90deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))'
          : 'linear-gradient(90deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))';
      }
      const colors = [
        theme.isDarkMode ? 'rgba(30, 41, 59, 0.7)' : 'rgba(241, 245, 249, 0.7)',
        theme.isDarkMode ? 'rgba(30, 41, 59, 0.6)' : 'rgba(241, 245, 249, 0.6)',
        theme.isDarkMode ? 'rgba(30, 41, 59, 0.65)' : 'rgba(241, 245, 249, 0.65)'
      ];
      return colors[index % 3] || colors[0];
    }};
    border: ${({ theme, active }) =>
      active === 'true'
        ? theme.isDarkMode
          ? '1px solid rgba(96, 165, 250, 0.3)'
          : '1px solid rgba(37, 99, 235, 0.3)'
        : theme.isDarkMode
          ? '1px solid rgba(51, 65, 85, 0.5)'
          : '1px solid rgba(226, 232, 240, 0.8)'};
    box-shadow: ${({ active }) =>
      active === 'true'
        ? '0 4px 12px rgba(59, 130, 246, 0.2)'
        : 'none'};

    &::before {
      display: none;
    }

    &::after {
      bottom: 10px;
      height: 3px;
      width: ${({ active }) => (active === 'true' ? '40px' : '0')};
    }

    &:hover {
      background: ${({ theme, active }) =>
        active === 'true'
          ? theme.isDarkMode
            ? 'linear-gradient(90deg, rgba(59, 130, 246, 0.4), rgba(147, 51, 234, 0.4))'
            : 'linear-gradient(90deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))'
          : theme.isDarkMode
            ? 'rgba(30, 41, 59, 0.8)'
            : 'rgba(241, 245, 249, 0.8)'
      };

      &::after {
        width: 40px;
      }
    }
  }

  &:hover {
    color: ${({ theme }) =>
      theme.isDarkMode
        ? '#60a5fa' // Brighter blue for dark mode
        : '#2563eb'}; // Darker blue for light mode
    transform: translateY(-2px);

    svg {
      transform: translateY(-2px) scale(1.2);
      filter: drop-shadow(0 2px 4px rgba(59, 130, 246, 0.3));
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;
  z-index: 2;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    cursor: none;
    color: var(--text-color);
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: ${({ theme, isOpen }) =>
      isOpen
        ? 'linear-gradient(90deg, #2563eb, #1e40af)'
        : theme.isDarkMode
          ? 'rgba(30, 41, 59, 0.8)'
          : 'rgba(241, 245, 249, 0.8)'};
    box-shadow: ${({ isOpen, theme }) =>
      isOpen
        ? '0 4px 15px rgba(37, 99, 235, 0.5)'
        : theme.isDarkMode
          ? '0 2px 10px rgba(0, 0, 0, 0.3)'
          : '0 2px 10px rgba(0, 0, 0, 0.15)'};
    transition: all 0.3s ease;
    border: ${({ theme, isOpen }) =>
      isOpen
        ? '1px solid rgba(255, 255, 255, 0.3)'
        : theme.isDarkMode
          ? '1px solid rgba(51, 65, 85, 0.5)'
          : '1px solid rgba(226, 232, 240, 0.8)'};

    svg {
      color: ${({ isOpen, theme }) =>
        isOpen
          ? 'white'
          : theme.isDarkMode
            ? '#f1f5f9'
            : '#0f172a'};
      transition: all 0.3s ease;
      filter: ${({ isOpen }) =>
        isOpen
          ? 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.5))'
          : 'none'};
    }

    &:hover {
      transform: scale(1.1);
      background: ${({ theme, isOpen }) =>
        isOpen
          ? 'linear-gradient(90deg, #1e40af, #2563eb)'
          : theme.isDarkMode
            ? 'rgba(30, 41, 59, 0.9)'
            : 'rgba(241, 245, 249, 0.9)'};
    }
  }
`;

export const ThemeToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;

  @media (max-width: 768px) {
    margin: 1.5rem 0 0;
    width: 100%;
    justify-content: flex-start;
  }
`;

export const LanguageToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;

  @media (max-width: 768px) {
    margin: 1.5rem 0 0;
    width: 100%;
    justify-content: flex-start;
  }
`;

export const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) =>
    theme.isDarkMode
      ? 'rgba(0, 0, 0, 0.7)'
      : 'rgba(0, 0, 0, 0.5)'};
  backdrop-filter: blur(8px);
  z-index: 0;
  display: none;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`;

export const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  background: ${({ theme }) =>
    theme.isDarkMode
      ? 'rgba(15, 23, 42, 0.95)'
      : 'rgba(255, 255, 255, 0.95)'};
  border-radius: 8px;
  padding: 0.8rem 0;
  margin-top: 0.5rem;
  box-shadow: ${({ theme }) =>
    theme.isDarkMode
      ? '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)'
      : '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'};
  backdrop-filter: blur(10px);
  border: ${({ theme }) =>
    theme.isDarkMode
      ? '1px solid rgba(51, 65, 85, 0.5)'
      : '1px solid rgba(226, 232, 240, 0.8)'};
  z-index: 10;

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 12px;
    height: 12px;
    background: ${({ theme }) =>
      theme.isDarkMode
        ? 'rgba(15, 23, 42, 0.95)'
        : 'rgba(255, 255, 255, 0.95)'};
    border-top: ${({ theme }) =>
      theme.isDarkMode
        ? '1px solid rgba(51, 65, 85, 0.5)'
        : '1px solid rgba(226, 232, 240, 0.8)'};
    border-left: ${({ theme }) =>
      theme.isDarkMode
        ? '1px solid rgba(51, 65, 85, 0.5)'
        : '1px solid rgba(226, 232, 240, 0.8)'};
  }

  @media (max-width: 768px) {
    position: static;
    transform: none;
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    background: ${({ theme }) =>
      theme.isDarkMode
        ? 'rgba(30, 41, 59, 0.5)'
        : 'rgba(241, 245, 249, 0.5)'};

    &::before {
      display: none;
    }
  }
`;

export const DropdownItem = styled(motion.div)`
  padding: 0.5rem 1.2rem;

  a {
    color: ${({ theme }) =>
      theme.isDarkMode
        ? '#f1f5f9'
        : '#0f172a'};
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) =>
        theme.isDarkMode
          ? '#60a5fa'
          : '#2563eb'};
      transform: translateX(5px);
    }

    svg {
      font-size: 0.9rem;
    }
  }
`;

export const FloatingElement = styled(motion.div)`
  position: absolute;
  width: ${({ size }) => size || '50px'};
  height: ${({ size }) => size || '50px'};
  border-radius: 50%;
  background: ${({ color, theme }) =>
    color || (theme.isDarkMode
      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))'
      : 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))')};
  filter: blur(${({ blur }) => blur || '0px'});
  opacity: ${({ opacity }) => opacity || '0.5'};
  z-index: -1;
  pointer-events: none;
`;
