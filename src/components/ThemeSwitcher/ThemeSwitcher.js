import React, { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '../../context/ThemeContext';
import { ThemeSwitcherContainer, ThemeToggle } from './ThemeSwitcherStyles';
import { AnimatePresence, motion } from 'framer-motion';

const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const sunVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { scale: 1, rotate: 0, transition: { duration: 0.5 } },
    exit: { scale: 0, rotate: 180, transition: { duration: 0.5 } }
  };

  const moonVariants = {
    initial: { scale: 0, rotate: 180 },
    animate: { scale: 1, rotate: 0, transition: { duration: 0.5 } },
    exit: { scale: 0, rotate: -180, transition: { duration: 0.5 } }
  };

  return (
    <ThemeSwitcherContainer>
      <ThemeToggle
        onClick={toggleTheme}
        whileTap={{ scale: 0.9 }}
        whileHover={{ rotate: isDarkMode ? -30 : 30 }}
      >
        <AnimatePresence mode="wait">
          {isDarkMode ? (
            <motion.div
              key="sun"
              variants={sunVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <FaSun />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              variants={moonVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <FaMoon />
            </motion.div>
          )}
        </AnimatePresence>
      </ThemeToggle>
    </ThemeSwitcherContainer>
  );
};

export default ThemeSwitcher;
