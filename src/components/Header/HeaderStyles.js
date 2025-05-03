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
        ? 'rgba(15, 23, 42, 0.85)'
        : 'rgba(255, 255, 255, 0.85)'
      : theme.isDarkMode
        ? 'rgba(15, 23, 42, 0.65)'
        : 'rgba(255, 255, 255, 0.65)'};
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(20px)' : 'blur(15px)'};
  border-bottom: ${({ scrolled, theme }) =>
    theme.isDarkMode
      ? scrolled
        ? '1px solid rgba(56, 189, 248, 0.2)'
        : '1px solid rgba(56, 189, 248, 0.1)'
      : scrolled
        ? '1px solid rgba(226, 232, 240, 0.8)'
        : '1px solid rgba(226, 232, 240, 0.5)'};
  box-shadow: ${({ scrolled, theme }) =>
    scrolled
      ? theme.isDarkMode
        ? '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 15px rgba(56, 189, 248, 0.1)'
        : '0 10px 30px -10px rgba(0, 0, 0, 0.15), 0 0 15px rgba(56, 189, 248, 0.05)'
      : 'none'};
  transition: all 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  padding: ${({ scrolled }) => (scrolled ? '0.5rem 0' : '0.8rem 0')};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme, scrolled }) =>
      scrolled && theme.isDarkMode
        ? 'radial-gradient(circle at top right, rgba(56, 189, 248, 0.2), transparent 60%), radial-gradient(circle at bottom left, rgba(147, 51, 234, 0.1), transparent 50%)'
        : scrolled && !theme.isDarkMode
          ? 'radial-gradient(circle at top right, rgba(56, 189, 248, 0.15), transparent 60%), radial-gradient(circle at bottom left, rgba(147, 51, 234, 0.05), transparent 50%)'
          : theme.isDarkMode
            ? 'radial-gradient(circle at top right, rgba(56, 189, 248, 0.1), transparent 50%)'
            : 'radial-gradient(circle at top right, rgba(56, 189, 248, 0.05), transparent 50%)'};
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
  background: ${({ theme }) =>
    theme.isDarkMode
      ? 'rgba(15, 23, 42, 0.5)'
      : 'rgba(255, 255, 255, 0.5)'};
  border-radius: 50px;
  padding: 0.3rem;
  backdrop-filter: blur(10px);
  border: ${({ theme }) =>
    theme.isDarkMode
      ? '1px solid rgba(56, 189, 248, 0.15)'
      : '1px solid rgba(226, 232, 240, 0.8)'};
  box-shadow: ${({ theme }) =>
    theme.isDarkMode
      ? '0 4px 20px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(56, 189, 248, 0.05)'
      : '0 4px 20px rgba(0, 0, 0, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.5)'};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 80%;
    height: 100vh;
    background-color: ${({ theme }) =>
      theme.isDarkMode
        ? 'rgba(15, 23, 42, 0.95)'
        : 'rgba(255, 255, 255, 0.95)'};
    padding: 5rem 2rem 2rem;
    transition: all 0.5s cubic-bezier(0.65, 0, 0.35, 1);
    box-shadow: ${({ theme }) =>
      theme.isDarkMode
        ? '-10px 0 30px rgba(0, 0, 0, 0.7), 0 0 15px rgba(56, 189, 248, 0.1)'
        : '-10px 0 30px rgba(0, 0, 0, 0.15), 0 0 15px rgba(56, 189, 248, 0.05)'};
    z-index: 1;
    justify-content: flex-start;
    align-items: flex-start;
    border-left: ${({ theme }) =>
      theme.isDarkMode
        ? '1px solid rgba(56, 189, 248, 0.2)'
        : '1px solid rgba(226, 232, 240, 0.8)'};
    border-radius: 0;
    overflow-y: auto;
    max-height: 100vh;
    backdrop-filter: blur(20px);
  }
`;

export const NavIndicator = styled(motion.div)`
  position: absolute;
  height: 100%;
  top: 0;
  background: ${({ theme }) =>
    theme.isDarkMode
      ? 'linear-gradient(90deg, rgba(56, 189, 248, 0.2), rgba(147, 51, 234, 0.2))'
      : 'linear-gradient(90deg, rgba(56, 189, 248, 0.15), rgba(147, 51, 234, 0.15))'};
  border-radius: 50px;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 0;
  box-shadow: ${({ theme }) =>
    theme.isDarkMode
      ? '0 0 15px rgba(56, 189, 248, 0.3), inset 0 0 0 1px rgba(56, 189, 248, 0.2)'
      : '0 0 15px rgba(56, 189, 248, 0.15), inset 0 0 0 1px rgba(56, 189, 248, 0.1)'};
  backdrop-filter: blur(5px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50px;
    background: linear-gradient(90deg,
      rgba(56, 189, 248, 0.3),
      rgba(147, 51, 234, 0.3),
      rgba(56, 189, 248, 0.3));
    background-size: 200% 100%;
    animation: gradientMove 6s linear infinite;
    opacity: 0.5;
    z-index: -1;
  }

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

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50px;
    box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.5);
    opacity: 0.2;
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
  margin-left: 0.3rem;
  position: relative;
  list-style: none;
  display: flex;
  align-items: center;

  &:first-child {
    margin-left: 0;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    width: 100%;
  }

  &.has-dropdown {
    .dropdown-toggle {
      display: flex;
      align-items: center;
      gap: 0.3rem;

      svg.dropdown-icon {
        font-size: 0.8rem;
        transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
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
    background: linear-gradient(90deg, #38BDF8, #9333EA);
    color: white;
    border-radius: 30px;
    font-weight: 600;
    letter-spacing: 0.5px;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 4px 15px rgba(56, 189, 248, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
    z-index: 1;
    border: 1px solid rgba(255, 255, 255, 0.2);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, #9333EA, #38BDF8);
      z-index: -1;
      transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      opacity: 0;
    }

    &::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        60deg,
        rgba(255, 255, 255, 0) 10%,
        rgba(255, 255, 255, 0.1) 30%,
        rgba(255, 255, 255, 0) 50%
      );
      transform: rotate(45deg);
      transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
      z-index: 1;
      opacity: 0;
    }

    &:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 8px 25px rgba(56, 189, 248, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.15);

      &::before {
        opacity: 1;
      }

      &::after {
        left: 100%;
        top: 100%;
        opacity: 1;
      }
    }

    &:active {
      transform: translateY(0) scale(0.98);
      box-shadow: 0 4px 10px rgba(56, 189, 248, 0.4);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;

    .btn-primary {
      width: 100%;
      text-align: center;
      padding: 0.8rem 1.5rem;
    }
  }
`;

export const NavLink = styled(Link).attrs(props => ({
  onClick: props.onClick || (() => {}),
}))`
  color: ${({ active, theme }) =>
    active === 'true'
      ? theme.isDarkMode
        ? '#38BDF8' // Sky blue for dark mode
        : '#0F172A' // Dark blue for light mode
      : theme.isDarkMode
        ? '#f1f5f9' // Very light gray for dark mode
        : '#0f172a'}; // Very dark blue for light mode
  font-weight: 600;
  position: relative;
  padding: 0.6rem 1.2rem;
  text-decoration: none;
  letter-spacing: 0.5px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 50px;
  overflow: hidden;
  z-index: 1;
  font-size: 0.95rem;
  text-shadow: ${({ theme, active }) =>
    active === 'true' && theme.isDarkMode
      ? '0 0 10px rgba(56, 189, 248, 0.5)'
      : 'none'};

  svg {
    font-size: 1rem;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    opacity: ${({ active }) => (active === 'true' ? '1' : '0.8')};
  }

  &:hover {
    color: ${({ theme }) =>
      theme.isDarkMode
        ? '#38BDF8' // Sky blue for dark mode
        : '#0F172A'}; // Dark blue for light mode
    transform: translateY(-1px);

    svg {
      transform: translateY(-1px) scale(1.1);
      opacity: 1;
      filter: drop-shadow(0 2px 4px rgba(56, 189, 248, 0.3));
    }
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0.8rem 1.2rem;
    width: 100%;
    border-radius: 12px;
    background: ${({ theme, active }) => {
      if (active === 'true') {
        return theme.isDarkMode
          ? 'linear-gradient(90deg, rgba(56, 189, 248, 0.2), rgba(147, 51, 234, 0.2))'
          : 'linear-gradient(90deg, rgba(56, 189, 248, 0.15), rgba(147, 51, 234, 0.15))';
      }
      return theme.isDarkMode
        ? 'rgba(30, 41, 59, 0.5)'
        : 'rgba(241, 245, 249, 0.5)';
    }};
    border: ${({ theme, active }) =>
      active === 'true'
        ? theme.isDarkMode
          ? '1px solid rgba(56, 189, 248, 0.3)'
          : '1px solid rgba(56, 189, 248, 0.2)'
        : theme.isDarkMode
          ? '1px solid rgba(51, 65, 85, 0.5)'
          : '1px solid rgba(226, 232, 240, 0.8)'};
    box-shadow: ${({ active }) =>
      active === 'true'
        ? '0 4px 12px rgba(56, 189, 248, 0.2)'
        : 'none'};
    backdrop-filter: blur(5px);
    margin-bottom: 0.5rem;

    &:hover {
      background: ${({ theme, active }) =>
        active === 'true'
          ? theme.isDarkMode
            ? 'linear-gradient(90deg, rgba(56, 189, 248, 0.25), rgba(147, 51, 234, 0.25))'
            : 'linear-gradient(90deg, rgba(56, 189, 248, 0.2), rgba(147, 51, 234, 0.2))'
          : theme.isDarkMode
            ? 'rgba(30, 41, 59, 0.6)'
            : 'rgba(241, 245, 249, 0.6)'
      };
      transform: translateY(-2px);
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
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: ${({ theme, isOpen }) =>
      isOpen
        ? 'linear-gradient(90deg, #38BDF8, #9333EA)'
        : theme.isDarkMode
          ? 'rgba(15, 23, 42, 0.7)'
          : 'rgba(241, 245, 249, 0.7)'};
    box-shadow: ${({ isOpen, theme }) =>
      isOpen
        ? '0 4px 20px rgba(56, 189, 248, 0.4), 0 0 0 1px rgba(56, 189, 248, 0.2)'
        : theme.isDarkMode
          ? '0 4px 15px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(56, 189, 248, 0.1)'
          : '0 4px 15px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(226, 232, 240, 0.8)'};
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    border: ${({ theme, isOpen }) =>
      isOpen
        ? '1px solid rgba(255, 255, 255, 0.3)'
        : theme.isDarkMode
          ? '1px solid rgba(56, 189, 248, 0.15)'
          : '1px solid rgba(226, 232, 240, 0.8)'};
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${({ isOpen }) =>
        isOpen
          ? 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2), transparent 50%)'
          : 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1), transparent 50%)'};
      opacity: 0.8;
      z-index: -1;
      border-radius: 50%;
    }

    svg {
      color: ${({ isOpen, theme }) =>
        isOpen
          ? 'white'
          : theme.isDarkMode
            ? '#f1f5f9'
            : '#0f172a'};
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      filter: ${({ isOpen }) =>
        isOpen
          ? 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.5))'
          : 'none'};
    }

    &:hover {
      transform: scale(1.05) translateY(-2px);
      background: ${({ theme, isOpen }) =>
        isOpen
          ? 'linear-gradient(90deg, #9333EA, #38BDF8)'
          : theme.isDarkMode
            ? 'rgba(15, 23, 42, 0.8)'
            : 'rgba(241, 245, 249, 0.8)'};
      box-shadow: ${({ isOpen, theme }) =>
        isOpen
          ? '0 8px 25px rgba(56, 189, 248, 0.5), 0 0 0 1px rgba(56, 189, 248, 0.3)'
          : theme.isDarkMode
            ? '0 8px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(56, 189, 248, 0.15)'
            : '0 8px 20px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(226, 232, 240, 0.9)'};
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
  width: 220px;
  background: ${({ theme }) =>
    theme.isDarkMode
      ? 'rgba(15, 23, 42, 0.85)'
      : 'rgba(255, 255, 255, 0.85)'};
  border-radius: 16px;
  padding: 1rem 0;
  margin-top: 0.8rem;
  box-shadow: ${({ theme }) =>
    theme.isDarkMode
      ? '0 15px 35px -5px rgba(0, 0, 0, 0.3), 0 10px 15px -5px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(56, 189, 248, 0.1)'
      : '0 15px 35px -5px rgba(0, 0, 0, 0.1), 0 10px 15px -5px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(226, 232, 240, 0.8)'};
  backdrop-filter: blur(15px);
  border: ${({ theme }) =>
    theme.isDarkMode
      ? '1px solid rgba(56, 189, 248, 0.15)'
      : '1px solid rgba(226, 232, 240, 0.8)'};
  z-index: 10;
  overflow: hidden;

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
        ? 'rgba(15, 23, 42, 0.85)'
        : 'rgba(255, 255, 255, 0.85)'};
    border-top: ${({ theme }) =>
      theme.isDarkMode
        ? '1px solid rgba(56, 189, 248, 0.15)'
        : '1px solid rgba(226, 232, 240, 0.8)'};
    border-left: ${({ theme }) =>
      theme.isDarkMode
        ? '1px solid rgba(56, 189, 248, 0.15)'
        : '1px solid rgba(226, 232, 240, 0.8)'};
    box-shadow: ${({ theme }) =>
      theme.isDarkMode
        ? '-3px -3px 5px rgba(0, 0, 0, 0.1)'
        : '-3px -3px 5px rgba(0, 0, 0, 0.02)'};
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) =>
      theme.isDarkMode
        ? 'radial-gradient(circle at top right, rgba(56, 189, 248, 0.1), transparent 70%), radial-gradient(circle at bottom left, rgba(147, 51, 234, 0.05), transparent 70%)'
        : 'radial-gradient(circle at top right, rgba(56, 189, 248, 0.05), transparent 70%), radial-gradient(circle at bottom left, rgba(147, 51, 234, 0.03), transparent 70%)'};
    z-index: -1;
    border-radius: 16px;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    position: static;
    transform: none;
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 0.8rem;
    background: ${({ theme }) =>
      theme.isDarkMode
        ? 'rgba(15, 23, 42, 0.5)'
        : 'rgba(241, 245, 249, 0.5)'};
    border-radius: 12px;
    padding: 0.8rem 0;

    &::before {
      display: none;
    }
  }
`;

export const DropdownItem = styled(motion.div)`
  padding: 0.6rem 1.2rem;
  margin: 0.2rem 0.8rem;
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  background: ${({ theme }) =>
    theme.isDarkMode
      ? 'rgba(15, 23, 42, 0)'
      : 'rgba(255, 255, 255, 0)'};

  &:hover {
    background: ${({ theme }) =>
      theme.isDarkMode
        ? 'rgba(56, 189, 248, 0.1)'
        : 'rgba(56, 189, 248, 0.05)'};
    box-shadow: ${({ theme }) =>
      theme.isDarkMode
        ? '0 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(56, 189, 248, 0.1)'
        : '0 4px 12px rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(56, 189, 248, 0.05)'};
  }

  a {
    color: ${({ theme }) =>
      theme.isDarkMode
        ? '#f1f5f9'
        : '#0f172a'};
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    padding: 0.2rem 0;
    font-size: 0.95rem;

    &:hover {
      color: ${({ theme }) =>
        theme.isDarkMode
          ? '#38BDF8'
          : '#0F172A'};
      transform: translateX(3px);
    }

    svg {
      font-size: 0.9rem;
      opacity: 0.8;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    &:hover svg {
      opacity: 1;
      transform: scale(1.1);
      color: ${({ theme }) =>
        theme.isDarkMode
          ? '#38BDF8'
          : '#0F172A'};
      filter: drop-shadow(0 2px 4px rgba(56, 189, 248, 0.3));
    }
  }

  @media (max-width: 768px) {
    margin: 0.2rem 0.5rem;
    padding: 0.5rem 1rem;
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
