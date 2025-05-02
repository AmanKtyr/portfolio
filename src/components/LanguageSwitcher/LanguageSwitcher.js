import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe, FaChevronDown } from 'react-icons/fa';
import { LanguageSwitcherContainer, LanguageButton, LanguageDropdown, LanguageOption } from './LanguageSwitcherStyles';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिंदी' }
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
    // Save language preference
    localStorage.setItem('language', code);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Get current language
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <LanguageSwitcherContainer ref={dropdownRef}>
      <LanguageButton onClick={toggleDropdown}>
        <FaGlobe />
        <span>{currentLanguage.name}</span>
        <FaChevronDown className={isOpen ? 'rotate' : ''} />
      </LanguageButton>
      
      {isOpen && (
        <LanguageDropdown>
          {languages.map((language) => (
            <LanguageOption
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              active={i18n.language === language.code}
            >
              {language.name}
            </LanguageOption>
          ))}
        </LanguageDropdown>
      )}
    </LanguageSwitcherContainer>
  );
};

export default LanguageSwitcher;
