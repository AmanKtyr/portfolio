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
  background-color: ${({ theme }) =>
    theme.isDarkMode
      ? theme.glassmorphism.background
      : theme.glassmorphism.background};
  backdrop-filter: blur(5px);
  box-shadow: ${({ theme }) => theme.glassmorphism.shadow};
  border: ${({ theme }) => theme.glassmorphism.border};

  svg {
    position: absolute;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }

  &:hover {
    transform: scale(1.1);
  }
`;
