import React, { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '../../context/ThemeContext';
import { ThemeSwitcherContainer, ThemeToggle } from './ThemeSwitcherStyles';

const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeSwitcherContainer>
      <ThemeToggle onClick={toggleTheme}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </ThemeToggle>
    </ThemeSwitcherContainer>
  );
};

export default ThemeSwitcher;
