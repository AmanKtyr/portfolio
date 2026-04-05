import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGlobe, FaCheck } from 'react-icons/fa';

// ── Languages Config ────────────────────────────────────────────────────────
const languages = [
  { code: 'en', label: 'English', flagCode: 'us' },
  { code: 'hi', label: 'हिन्दी', flagCode: 'in' },
  { code: 'ja', label: '日本語', flagCode: 'jp' },
  { code: 'fr', label: 'Français', flagCode: 'fr' },
  { code: 'es', label: 'Español', flagCode: 'es' },
  { code: 'ru', label: 'Русский', flagCode: 'ru' },
];

const getFlagUrl = (code) => `https://flagcdn.com/w40/${code}.png`;

// ── Animations ──────────────────────────────────────────────────────────────
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
`;

// ── Styled Components ───────────────────────────────────────────────────────
const SwitcherWrapper = styled.div`
  position: relative;
  z-index: 1000;
`;

const SwitcherButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.6rem;
  background: ${({ theme }) =>
    theme.isDarkMode
      ? 'rgba(var(--primary-rgb), 0.12)'
      : 'rgba(var(--primary-rgb), 0.05)'};
  border: 1px solid ${({ theme }) =>
    theme.isDarkMode
      ? 'rgba(var(--primary-rgb), 0.2)'
      : 'rgba(var(--primary-rgb), 0.1)'};
  border-radius: 50px;
  color: ${({ theme }) =>
    theme.isDarkMode
      ? '#f1f5f9'
      : '#0f172a'};
  font-size: 0.68rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  backdrop-filter: blur(10px);

  .globe-icon {
    font-size: 0.75rem;
    color: var(--primary-color);
    transition: color 0.3s ease;
  }

  .flag-img {
    width: 18px;
    height: 13px;
    object-fit: cover;
    border-radius: 2px;
    box-shadow: 0 0 2px rgba(0,0,0,0.15);
  }

  &:hover {
    background: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.3);

    .globe-icon {
      color: white;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 0.6rem;
  }
`;

const Dropdown = styled(motion.div)`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 170px;
  background: ${({ theme }) =>
    theme.isDarkMode
      ? 'rgba(15, 23, 42, 0.95)'
      : 'rgba(255, 255, 255, 0.97)'};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) =>
    theme.isDarkMode
      ? 'rgba(var(--primary-rgb), 0.2)'
      : 'rgba(var(--primary-rgb), 0.1)'};
  border-radius: 12px;
  padding: 0.35rem;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.25);
  animation: ${fadeIn} 0.2s ease;
  overflow: hidden;

  @media (max-width: 768px) {
    position: fixed;
    top: auto;
    bottom: 80px;
    left: 1rem;
    right: 1rem;
    min-width: unset;
  }
`;

const DropdownItem = styled.button`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  width: 100%;
  padding: 0.5rem 0.7rem;
  background: ${({ $active, theme }) =>
    $active
      ? theme.isDarkMode
        ? 'rgba(var(--primary-rgb), 0.18)'
        : 'rgba(var(--primary-rgb), 0.08)'
      : 'transparent'};
  border: none;
  border-radius: 8px;
  color: ${({ theme }) =>
    theme.isDarkMode
      ? '#f1f5f9'
      : '#1e293b'};
  font-size: 0.78rem;
  font-weight: ${({ $active }) => ($active ? '600' : '500')};
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;

  .flag-img {
    width: 22px;
    height: 16px;
    object-fit: cover;
    border-radius: 2px;
    box-shadow: 0 0 3px rgba(0,0,0,0.15);
  }

  .label {
    flex: 1;
  }

  .check {
    font-size: 0.6rem;
    color: var(--primary-color);
    opacity: ${({ $active }) => ($active ? '1' : '0')};
    transition: opacity 0.2s ease;
  }

  &:hover {
    background: ${({ theme }) =>
      theme.isDarkMode
        ? 'rgba(var(--primary-rgb), 0.22)'
        : 'rgba(var(--primary-rgb), 0.1)'};
  }
`;

// ── Component ───────────────────────────────────────────────────────────────
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  const handleSelect = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <SwitcherWrapper ref={dropdownRef}>
      <SwitcherButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Switch language"
        aria-expanded={isOpen}
      >
        <FaGlobe className="globe-icon" />
        <img className="flag-img" src={getFlagUrl(currentLang.flagCode)} alt={currentLang.label} />
        <span>{currentLang.label}</span>
      </SwitcherButton>

      <AnimatePresence>
        {isOpen && (
          <Dropdown
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            {languages.map((lang) => (
              <DropdownItem
                key={lang.code}
                $active={lang.code === i18n.language}
                onClick={() => handleSelect(lang.code)}
              >
                <img className="flag-img" src={getFlagUrl(lang.flagCode)} alt={lang.label} />
                <span className="label">{lang.label}</span>
                <FaCheck className="check" />
              </DropdownItem>
            ))}
          </Dropdown>
        )}
      </AnimatePresence>
    </SwitcherWrapper>
  );
};

export default LanguageSwitcher;
