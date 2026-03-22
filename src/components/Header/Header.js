import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaLaptopCode, FaCogs, FaBlog, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { scrollToSection } from '../../utils/scrollUtils';
import {
  HeaderContainer,
  Nav,
  NavMenu,
  NavItem,
  NavLink,
  MobileIcon,
  ThemeToggleWrapper,
  NavMenuWrapper,
  MobileMenuBackdrop,
  ScrollProgressContainer,
  ScrollProgressBar,
  FloatingElement,
  PrimaryButton,
  LanguageToggleWrapper,
  ActionGroup,
  MobileNavLink
} from './HeaderStyles';
import Logo from '../Logo/Logo';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { ThemeContext } from '../../context/ThemeContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext);

  // Handle navigation with hash links
  const handleNavigation = (e, to) => {
    e.preventDefault();

    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false);
      document.body.style.overflow = 'auto';
    }

    // Check if it's a hash link
    if (to.includes('#')) {
      const [path, hash] = to.split('#');

      // If we're already on the home page, just scroll to the section
      if (location.pathname === '/' || path === '/') {
        scrollToSection(hash);
      } else {
        // Navigate to home page first, then scroll to section after a delay
        navigate('/');
        setTimeout(() => {
          scrollToSection(hash);
        }, 100);
      }
    } else {
      // Regular navigation
      navigate(to);
    }
  };

  // Scroll progress animation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Disable body scroll when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
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

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }, [location]);

  // Removed logoVariants as they are now internal to the Logo component



  return (
    <HeaderContainer scrolled={scrolled}>
      {/* Scroll Progress Indicator */}
      <ScrollProgressContainer>
        <ScrollProgressBar style={{ scaleX }} />
      </ScrollProgressContainer>

      <Nav>
        {/* Logo on the left */}
        <Logo size={scrolled ? 'small' : 'medium'} showTagline={!scrolled} />

        {/* Navigation Menu (Center) */}
        <NavMenuWrapper>
          <NavMenu>
            <NavItem>
              <NavLink
                to="/"
                active={location.pathname === '/' && !window.location.hash ? 'true' : 'false'}
                onClick={(e) => handleNavigation(e, "/")}
              >
                <FaHome />
                {t('header.home')}
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                to="/about"
                active={location.pathname === '/about' ? 'true' : 'false'}
                onClick={(e) => handleNavigation(e, "/about")}
              >
                <FaUser />
                {t('header.about')}
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                to="/skills"
                active={location.pathname === '/skills' ? 'true' : 'false'}
                onClick={(e) => handleNavigation(e, "/skills")}
              >
                <FaCode />
                {t('header.skills')}
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                to="/projects"
                active={location.pathname === '/projects' || location.pathname.startsWith('/project/') ? 'true' : 'false'}
                onClick={(e) => handleNavigation(e, "/projects")}
              >
                <FaLaptopCode />
                {t('header.projects')}
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                to="/services"
                active={location.pathname === '/services' ? 'true' : 'false'}
                onClick={(e) => handleNavigation(e, "/services")}
              >
                <FaCogs />
                {t('header.services')}
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                to="/blog"
                active={location.pathname === '/blog' ? 'true' : 'false'}
                onClick={(e) => handleNavigation(e, "/blog")}
              >
                <FaBlog />
                {t('header.blog')}
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                to="/contact"
                active={location.pathname === '/contact' ? 'true' : 'false'}
                onClick={(e) => handleNavigation(e, "/contact")}
              >
                <FaEnvelope />
                {t('header.contact')}
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavMenuWrapper>

        {/* Actions (Right) */}
        <ActionGroup>
          <LanguageSwitcher />
          <ThemeSwitcher />
          <PrimaryButton>
            <Link to="/contact" className="btn-primary" onClick={(e) => handleNavigation(e, "/contact")}>
              {t('header.hireMe')}
            </Link>
          </PrimaryButton>
        </ActionGroup>

        {/* Mobile Toggle */}
        <MobileIcon onClick={toggleMenu}>
          <FaBars />
        </MobileIcon>
      </Nav>

      {/* Mobile Menu Backdrop (Full Screen) */}
      <AnimatePresence>
        {isOpen && (
          <MobileMenuBackdrop
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="mobile-header">
              <Logo size="medium" />
              <MobileIcon onClick={toggleMenu}>
                <FaTimes />
              </MobileIcon>
            </div>

            <div className="mobile-links">
              <MobileNavLink to="/" active={location.pathname === '/' ? 'true' : 'false'} onClick={(e) => handleNavigation(e, "/")}>
                <FaHome /> {t('header.home')}
              </MobileNavLink>
              <MobileNavLink to="/about" active={location.pathname === '/about' ? 'true' : 'false'} onClick={(e) => handleNavigation(e, "/about")}>
                <FaUser /> {t('header.about')}
              </MobileNavLink>
              <MobileNavLink to="/skills" active={location.pathname === '/skills' ? 'true' : 'false'} onClick={(e) => handleNavigation(e, "/skills")}>
                <FaCode /> {t('header.skills')}
              </MobileNavLink>
              <MobileNavLink to="/projects" active={location.pathname === '/projects' ? 'true' : 'false'} onClick={(e) => handleNavigation(e, "/projects")}>
                <FaLaptopCode /> {t('header.projects')}
              </MobileNavLink>
              <MobileNavLink to="/services" active={location.pathname === '/services' ? 'true' : 'false'} onClick={(e) => handleNavigation(e, "/services")}>
                <FaCogs /> {t('header.services')}
              </MobileNavLink>
              <MobileNavLink to="/blog" active={location.pathname === '/blog' ? 'true' : 'false'} onClick={(e) => handleNavigation(e, "/blog")}>
                <FaBlog /> {t('header.blog')}
              </MobileNavLink>
              <MobileNavLink to="/contact" active={location.pathname === '/contact' ? 'true' : 'false'} onClick={(e) => handleNavigation(e, "/contact")}>
                <FaEnvelope /> {t('header.contact')}
              </MobileNavLink>
            </div>

            <div className="mobile-actions">
              <LanguageSwitcher />
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <ThemeSwitcher />
                <span>{isDarkMode ? t('theme.switchToLight') : t('theme.switchToDark')}</span>
              </div>
              <PrimaryButton>
                <Link to="/contact" className="btn-primary" style={{ width: '100%', textAlign: 'center' }} onClick={(e) => handleNavigation(e, "/contact")}>
                  {t('header.hireMe')}
                </Link>
              </PrimaryButton>
            </div>
          </MobileMenuBackdrop>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;

