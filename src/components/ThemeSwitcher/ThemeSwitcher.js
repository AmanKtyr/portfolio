import React, { useContext, useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '../../context/ThemeContext';
import { ThemeSwitcherContainer, ThemeToggle, TooltipText } from './ThemeSwitcherStyles';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [showTooltip, setShowTooltip] = useState(false);
  const { t } = useTranslation();
  const [playSound, setPlaySound] = useState(false);

  const sunVariants = {
    initial: { scale: 0, opacity: 0, y: -10, rotate: -180 },
    animate: {
      scale: 1,
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    },
    exit: {
      scale: 0,
      opacity: 0,
      y: 10,
      rotate: 180,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const moonVariants = {
    initial: { scale: 0, opacity: 0, y: 10, rotate: 180 },
    animate: {
      scale: 1,
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    },
    exit: {
      scale: 0,
      opacity: 0,
      y: -10,
      rotate: -180,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const tooltipVariants = {
    hidden: { opacity: 0, y: 5, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  // Play sound effect when toggling theme
  const handleToggleTheme = () => {
    toggleTheme();
    setPlaySound(true);
  };

  // Reset sound play state after playing
  useEffect(() => {
    if (playSound) {
      setTimeout(() => setPlaySound(false), 300);
    }
  }, [playSound]);

  return (
    <ThemeSwitcherContainer>
      <ThemeToggle
        onClick={handleToggleTheme}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileTap={{ scale: 0.9 }}
        whileHover={{
          rotate: isDarkMode ? -15 : 15,
          boxShadow: isDarkMode
            ? '0 10px 40px 0 rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(56, 189, 248, 0.2), 0 0 15px rgba(56, 189, 248, 0.15)'
            : '0 10px 40px 0 rgba(31, 38, 135, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.3), 0 0 15px rgba(59, 130, 246, 0.15)'
        }}
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

      <AnimatePresence>
        {showTooltip && (
          <TooltipText
            variants={tooltipVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {isDarkMode ? t('theme.switchToLight', 'Switch to Light Mode') : t('theme.switchToDark', 'Switch to Dark Mode')}
          </TooltipText>
        )}
      </AnimatePresence>

      {/* Sound effect when toggling theme */}
      {playSound && (
        <audio
          src={isDarkMode ? "/sounds/light-mode-on.mp3" : "/sounds/dark-mode-on.mp3"}
          autoPlay
          style={{ display: 'none' }}
        />
      )}
    </ThemeSwitcherContainer>
  );
};

export default ThemeSwitcher;
