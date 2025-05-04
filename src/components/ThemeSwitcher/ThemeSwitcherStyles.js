import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ThemeSwitcherContainer = styled.div`
  margin-left: 1rem;
  position: relative;
`;

export const ThemeToggle = styled(motion.button)`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) =>
    theme.isDarkMode
      ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.8))'
      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(241, 245, 249, 0.8))'};
  backdrop-filter: blur(10px);
  box-shadow: ${({ theme }) =>
    theme.isDarkMode
      ? '0 8px 32px 0 rgba(0, 0, 0, 0.37), 0 0 0 1px rgba(56, 189, 248, 0.1), inset 0 0 0 1px rgba(56, 189, 248, 0.05)'
      : '0 8px 32px 0 rgba(31, 38, 135, 0.07), 0 0 0 1px rgba(255, 255, 255, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.2)'};
  border: ${({ theme }) =>
    theme.isDarkMode
      ? '1px solid rgba(56, 189, 248, 0.18)'
      : '1px solid rgba(255, 255, 255, 0.18)'};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: ${({ theme }) =>
      theme.isDarkMode
        ? 'conic-gradient(from 0deg at 50% 50%, rgba(56, 189, 248, 0) 0%, rgba(56, 189, 248, 0.1) 50%, rgba(56, 189, 248, 0) 100%)'
        : 'conic-gradient(from 0deg at 50% 50%, rgba(59, 130, 246, 0) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(59, 130, 246, 0) 100%)'};
    animation: rotate 8s linear infinite;
    z-index: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  svg {
    position: relative;
    z-index: 1;
    font-size: 1.4rem;
    filter: ${({ theme }) =>
      theme.isDarkMode
        ? 'drop-shadow(0 0 3px rgba(56, 189, 248, 0.5))'
        : 'drop-shadow(0 0 3px rgba(59, 130, 246, 0.3))'};
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) =>
      theme.isDarkMode
        ? '0 10px 40px 0 rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(56, 189, 248, 0.2), inset 0 0 0 1px rgba(56, 189, 248, 0.1)'
        : '0 10px 40px 0 rgba(31, 38, 135, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.6), inset 0 0 0 1px rgba(255, 255, 255, 0.3)'};
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const TooltipText = styled(motion.span)`
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) =>
    theme.isDarkMode
      ? 'rgba(15, 23, 42, 0.9)'
      : 'rgba(255, 255, 255, 0.9)'};
  color: ${({ theme }) => theme.colors.text};
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.8rem;
  white-space: nowrap;
  pointer-events: none;
  box-shadow: ${({ theme }) => theme.shadows.small};
  backdrop-filter: blur(5px);
  border: ${({ theme }) =>
    theme.isDarkMode
      ? '1px solid rgba(56, 189, 248, 0.1)'
      : '1px solid rgba(226, 232, 240, 0.8)'};
  z-index: 10;
`;
