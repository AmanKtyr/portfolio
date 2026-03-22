import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGlobe } from 'react-icons/fa';

const SwitcherContainer = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.7rem;
  background: ${({ theme }) => 
    theme.isDarkMode 
      ? 'rgba(128, 0, 0, 0.12)' 
      : 'rgba(128, 0, 0, 0.05)'};
  border: 1px solid ${({ theme }) => 
    theme.isDarkMode 
      ? 'rgba(128, 0, 0, 0.2)' 
      : 'rgba(128, 0, 0, 0.1)'};
  border-radius: 50px;
  color: ${({ theme }) => 
    theme.isDarkMode 
      ? '#f1f5f9' 
      : '#0f172a'};
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  backdrop-filter: blur(10px);

  svg {
    font-size: 0.9rem;
    color: var(--primary-color);
  }

  &:hover {
    background: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(128, 0, 0, 0.3);

    svg {
      color: white;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 0.8rem;
  }
`;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <SwitcherContainer
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
    >
      <FaGlobe />
      <span>{i18n.language === 'en' ? 'हिन्दी' : 'English'}</span>
    </SwitcherContainer>
  );
};

export default LanguageSwitcher;
