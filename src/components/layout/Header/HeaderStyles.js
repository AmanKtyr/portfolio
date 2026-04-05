import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${({ scrolled, theme }) =>
    scrolled
      ? theme.colors.background
      : 'transparent'};
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(20px)' : 'none'};
  border-bottom: ${({ scrolled, theme }) =>
    scrolled
      ? theme.isDarkMode
        ? '1px solid rgba(255, 255, 255, 0.05)'
        : '1px solid rgba(0, 0, 0, 0.05)'
      : 'none'};
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  padding: ${({ scrolled }) => (scrolled ? '0.4rem 0' : '0.8rem 0')};
`;

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  width: 95%;
  max-width: 1400px;
  margin: 0 auto;
  gap: 2rem;

  @media (max-width: 1100px) {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
  }
`;

export const NavMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0.2rem;
  background: ${({ theme }) =>
    theme.isDarkMode
      ? 'rgba(15, 23, 42, 0.4)'
      : 'rgba(255, 255, 255, 0.6)'};
  border-radius: 8px;
  backdrop-filter: blur(16px);
  border: 1px solid ${({ theme }) =>
    theme.isDarkMode
      ? 'rgba(255, 255, 255, 0.08)'
      : 'rgba(0, 0, 0, 0.08)'};
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

export const NavItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  color: ${({ active, theme }) =>
    active === 'true'
      ? 'var(--primary-color)'
      : theme.colors.text};
  font-weight: 600;
  font-size: 0.8rem;
  padding: 0.6rem 0.7rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  border-radius: 2px;
  transition: all 0.3s ease;
  font-family: 'monospace';
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ active }) => (active === 'true' ? '12px' : '0')};
    height: 2px;
    background: var(--primary-color);
    transition: width 0.3s ease;
    border-radius: 1px;
    margin-bottom: 2px;
  }

  svg {
    font-size: 0.85rem;
    opacity: ${({ active }) => (active === 'true' ? '1' : '0.6')};
  }

  &:hover {
    color: var(--primary-color);
    background: ${({ theme }) =>
      theme.isDarkMode
        ? 'rgba(var(--primary-rgb), 0.1)'
        : 'rgba(var(--primary-rgb), 0.05)'};
    
    &::after {
      width: 12px;
    }

    svg {
      opacity: 1;
      transform: scale(1.1);
    }
  }
`;

export const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-color);
  width: 45px;
  height: 45px;
  border-radius: 12px;
  background: ${({ theme }) =>
    theme.isDarkMode ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 0.5)'};
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) =>
    theme.isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};

  @media (max-width: 1100px) {
    display: flex;
  }
`;

export const ScrollProgressContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: transparent;
  z-index: 1001;
`;

export const ScrollProgressBar = styled(motion.div)`
  height: 100%;
  background: var(--primary-color);
  transform-origin: 0%;
`;

export const FloatingElement = styled(motion.div)`
  display: none;
`;

export const PrimaryButton = styled.div`
  .btn-primary {
    padding: 0.6rem 1.2rem;
    background: var(--primary-color);
    color: white;
    border-radius: 2px;
    font-weight: 700;
    font-size: 0.75rem;
    font-family: 'monospace';
    text-transform: uppercase;
    letter-spacing: 1px;
    text-decoration: none;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(var(--primary-rgb), 0.3);
      filter: brightness(1.1);
    }
  }
`;

export const LanguageToggleWrapper = styled.div``;
export const ThemeToggleWrapper = styled.div``;

export const MobileMenuBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  backdrop-filter: blur(20px);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  overflow-y: auto;

  .mobile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
  }

  .mobile-links {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  .mobile-actions {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-top: 2rem;
    border-top: 1px solid ${({ theme }) =>
      theme.isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  }
`;

export const MobileNavLink = styled(Link)`
  font-size: 1.8rem;
  font-weight: 800;
  color: ${({ active, theme }) =>
    active === 'true' ? 'var(--primary-color)' : theme.colors.text};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 1.4rem;
  }
`;



