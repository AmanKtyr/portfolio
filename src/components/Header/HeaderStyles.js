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
      ? theme.isDarkMode
        ? 'rgba(15, 23, 42, 0.8)'
        : 'rgba(255, 255, 255, 0.8)'
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
  gap: 0.2rem;
  list-style: none;
  margin: 0;
  padding: 0.3rem;
  background: ${({ theme }) =>
    theme.isDarkMode
      ? 'rgba(30, 41, 59, 0.3)'
      : 'rgba(241, 245, 249, 0.3)'};
  border-radius: 100px;
  backdrop-filter: blur(8px);
  border: 1px solid ${({ theme }) =>
    theme.isDarkMode
      ? 'rgba(255, 255, 255, 0.05)'
      : 'rgba(0, 0, 0, 0.05)'};
  box-shadow: 0 2px 15px -5px rgba(0, 0, 0, 0.05);
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
  font-weight: 700;
  font-size: 0.8rem;
  padding: 0.5rem 0.8rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  border-radius: 50px;
  transition: all 0.2s ease;
  background: ${({ active, theme }) =>
    active === 'true'
      ? theme.isDarkMode
        ? 'rgba(128, 0, 0, 0.1)'
        : 'rgba(128, 0, 0, 0.05)'
      : 'transparent'};

  svg {
    font-size: 0.9rem;
    opacity: ${({ active }) => (active === 'true' ? '1' : '0.7')};
  }

  &:hover {
    color: var(--primary-color);
    background: ${({ theme }) =>
      theme.isDarkMode
        ? 'rgba(128, 0, 0, 0.05)'
        : 'rgba(128, 0, 0, 0.03)'};
    
    svg {
      opacity: 1;
      transform: translateY(-1px);
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
    padding: 0.55rem 1.1rem;
    background: var(--primary-color);
    color: white;
    border-radius: 50px;
    font-weight: 700;
    font-size: 0.78rem;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(128, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      transform: translateY(-1.5px);
      box-shadow: 0 6px 18px rgba(128, 0, 0, 0.35);
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
  background: ${({ theme }) =>
    theme.isDarkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)'};
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



