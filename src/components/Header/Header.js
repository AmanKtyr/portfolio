import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HeaderContainer, Nav, Logo, NavMenu, NavItem, NavLink, MobileIcon, ThemeToggleWrapper, LanguageToggleWrapper } from './HeaderStyles';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <HeaderContainer scrolled={scrolled}>
      <Nav>
        <Logo to="/">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Dev<span>Portfolio</span>
          </motion.span>
        </Logo>

        <MobileIcon onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <NavMenu isOpen={isOpen}>
          <NavItem>
            <NavLink
              to="/"
              active={location.pathname === '/' ? 'true' : 'false'}
            >
              {t('header.home')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/services"
              active={location.pathname === '/services' ? 'true' : 'false'}
            >
              {t('header.services')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/contact"
              active={location.pathname === '/contact' ? 'true' : 'false'}
            >
              {t('header.contact')}
            </NavLink>
          </NavItem>
          <NavItem>
            <Link to="/contact" className="btn-primary">
              {t('header.hireMe')}
            </Link>
          </NavItem>
          <NavItem>
            <ThemeToggleWrapper>
              <ThemeSwitcher />
            </ThemeToggleWrapper>
          </NavItem>
          <NavItem>
            <LanguageToggleWrapper>
              <LanguageSwitcher />
            </LanguageToggleWrapper>
          </NavItem>
        </NavMenu>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
