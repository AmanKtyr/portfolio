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
  PrimaryButton
} from './HeaderStyles';
import Logo from '../Logo/Logo';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
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

      {/* Floating Elements */}
      <FloatingElement
        size="100px"
        blur="20px"
        opacity="0.3"
        color={isDarkMode ? 'rgba(128, 0, 0, 0.15)' : 'rgba(128, 0, 0, 0.08)'}
        style={{ top: '20%', left: '5%' }}
        animate={{
          y: [0, 15, 0],
          x: [0, 5, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <FloatingElement
        size="70px"
        blur="15px"
        opacity="0.2"
        color={isDarkMode ? 'rgba(90, 0, 0, 0.15)' : 'rgba(90, 0, 0, 0.08)'}
        style={{ top: '60%', right: '10%' }}
        animate={{
          y: [0, -20, 0],
          x: [0, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <Nav>
        {/* Logo on the left */}
        <Logo />

        {/* Mobile Menu Toggle */}
        <MobileIcon onClick={toggleMenu} isOpen={isOpen}>
          <AnimatePresence mode="wait">
            {isOpen ? <FaTimes /> : <FaBars />}
          </AnimatePresence>
        </MobileIcon>

        {/* Navigation Menu */}
        <NavMenuWrapper isOpen={isOpen}>
          <NavMenu isOpen={isOpen}>
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
                active={location.pathname === '/services' || window.location.hash === '#services' ? 'true' : 'false'}
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
                active={location.pathname === '/contact' || window.location.hash === '#contact' ? 'true' : 'false'}
                onClick={(e) => handleNavigation(e, "/contact")}
              >
                <FaEnvelope />
                {t('header.contact')}
              </NavLink>
            </NavItem>

            <NavItem>
              <PrimaryButton>
                <Link to="/contact" className="btn-primary" onClick={(e) => handleNavigation(e, "/contact")}>
                  {t('header.hireMe')}
                </Link>
              </PrimaryButton>
            </NavItem>

            <NavItem>
              <ThemeToggleWrapper>
                <ThemeSwitcher />
              </ThemeToggleWrapper>
            </NavItem>
          </NavMenu>
        </NavMenuWrapper>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <MobileMenuBackdrop
            isOpen={isOpen}
            onClick={() => setIsOpen(false)}
          />
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

