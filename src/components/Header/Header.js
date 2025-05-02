import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaLaptopCode, FaCogs, FaBlog, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { scrollToSection } from '../../utils/scrollUtils';
import {
  HeaderContainer,
  Nav,
  Logo,
  NavMenu,
  NavItem,
  NavLink,
  MobileIcon,
  ThemeToggleWrapper,
  LanguageToggleWrapper,
  NavMenuWrapper,
  NavIndicator,
  MobileMenuOverlay,
  ScrollProgressContainer,
  ScrollProgressBar,
  FloatingElement,
  DropdownMenu,
  DropdownItem,
  PrimaryButton
} from './HeaderStyles';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { ThemeContext } from '../../context/ThemeContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext);

  // Reference for the projects dropdown
  const projectsDropdownRef = useRef(null);

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

  // Refs for nav items to calculate indicator position
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const servicesRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  // State for indicator position
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0
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

  // Update indicator position based on active link
  const updateIndicator = () => {
    // Check if we're on the home page and determine which section is active
    const isHomePage = location.pathname === '/';
    const hash = window.location.hash;

    let activeRef = null;

    if (isHomePage) {
      if (hash === '#about') {
        activeRef = aboutRef.current;
      } else if (hash === '#skills') {
        activeRef = skillsRef.current;
      } else if (hash === '#projects') {
        activeRef = projectsRef.current;
      } else if (hash === '#services') {
        activeRef = servicesRef.current;
      } else if (hash === '#blog') {
        activeRef = blogRef.current;
      } else if (hash === '#contact') {
        activeRef = contactRef.current;
      } else {
        activeRef = homeRef.current;
      }
    } else {
      // For other pages
      activeRef =
        location.pathname === '/services' ? servicesRef.current :
        location.pathname === '/contact' ? contactRef.current :
        location.pathname.startsWith('/project/') ? projectsRef.current :
        null;
    }

    if (activeRef) {
      const rect = activeRef.getBoundingClientRect();
      setIndicatorStyle({
        left: rect.left,
        width: rect.width,
        opacity: 1
      });
    } else {
      setIndicatorStyle({
        opacity: 0
      });
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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';

    // Update indicator after a short delay to ensure refs are updated
    setTimeout(updateIndicator, 100);
  }, [location]);

  // Update indicator on window resize
  useEffect(() => {
    window.addEventListener('resize', updateIndicator);
    return () => {
      window.removeEventListener('resize', updateIndicator);
    };
  }, []);

  // Update indicator on hash change
  useEffect(() => {
    const handleHashChange = () => {
      setTimeout(updateIndicator, 100);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (projectsDropdownRef.current && !projectsDropdownRef.current.contains(event.target)) {
        setShowProjectsDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Animation variants
  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1 * custom,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    })
  };

  const mobileMenuVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  // Mobile menu background variants
  const mobileMenuBgVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      filter: 'blur(10px)',
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const mobileItemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    exit: {
      x: 20,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  // Dropdown animation variants
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.05,
        delayChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const dropdownItemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    exit: {
      x: -10,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

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
        color={isDarkMode ? 'rgba(59, 130, 246, 0.15)' : 'rgba(59, 130, 246, 0.08)'}
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
        color={isDarkMode ? 'rgba(147, 51, 234, 0.15)' : 'rgba(147, 51, 234, 0.08)'}
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
        <Logo to="/">
          <motion.span
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Dev<span>Portfolio</span>
          </motion.span>
        </Logo>

        <MobileIcon onClick={toggleMenu} isOpen={isOpen}>
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaTimes />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaBars />
              </motion.div>
            )}
          </AnimatePresence>
        </MobileIcon>

        <NavMenuWrapper>
          {/* Desktop Navigation Indicator */}
          <NavIndicator
            initial={{ opacity: 0 }}
            animate={{
              opacity: indicatorStyle.opacity,
              left: indicatorStyle.left,
              width: indicatorStyle.width,
              transition: { duration: 0.3, ease: 'easeInOut' }
            }}
          />

          {/* Desktop and Mobile Navigation */}
          <AnimatePresence>
            <NavMenu isOpen={isOpen}>
              <NavItem>
                <NavLink
                  ref={homeRef}
                  to="/"
                  active={location.pathname === '/' && !window.location.hash ? 'true' : 'false'}
                  as={motion.a}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                  index={0}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => handleNavigation(e, "/")}
                >
                  <FaHome />
                  {t('header.home')}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  ref={aboutRef}
                  to="/#about"
                  active={window.location.hash === '#about' ? 'true' : 'false'}
                  as={motion.a}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={2}
                  index={1}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => handleNavigation(e, "/#about")}
                >
                  <FaUser />
                  {t('header.about')}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  ref={skillsRef}
                  to="/#skills"
                  active={window.location.hash === '#skills' ? 'true' : 'false'}
                  as={motion.a}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={3}
                  index={2}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => handleNavigation(e, "/#skills")}
                >
                  <FaCode />
                  {t('header.skills')}
                </NavLink>
              </NavItem>
              <NavItem className="has-dropdown" ref={projectsDropdownRef}>
                <NavLink
                  ref={projectsRef}
                  to="/#projects"
                  active={window.location.hash === '#projects' || location.pathname.startsWith('/project/') ? 'true' : 'false'}
                  as={motion.a}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={4}
                  index={3}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setShowProjectsDropdown(!showProjectsDropdown);
                  }}
                  className="dropdown-toggle"
                >
                  <FaLaptopCode />
                  {t('header.projects')}
                  <FaChevronDown className="dropdown-icon" />
                </NavLink>

                <AnimatePresence>
                  {showProjectsDropdown && (
                    <DropdownMenu
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <DropdownItem variants={dropdownItemVariants}>
                        <a href="/#projects" onClick={(e) => handleNavigation(e, "/#projects")}>
                          <FaLaptopCode /> All Projects
                        </a>
                      </DropdownItem>
                      <DropdownItem variants={dropdownItemVariants}>
                        <a href="/project/1" onClick={(e) => handleNavigation(e, "/project/1")}>
                          <FaLaptopCode /> E-commerce Website
                        </a>
                      </DropdownItem>
                      <DropdownItem variants={dropdownItemVariants}>
                        <a href="/project/2" onClick={(e) => handleNavigation(e, "/project/2")}>
                          <FaLaptopCode /> Portfolio Website
                        </a>
                      </DropdownItem>
                      <DropdownItem variants={dropdownItemVariants}>
                        <a href="/project/3" onClick={(e) => handleNavigation(e, "/project/3")}>
                          <FaLaptopCode /> Mobile App
                        </a>
                      </DropdownItem>
                    </DropdownMenu>
                  )}
                </AnimatePresence>
              </NavItem>
              <NavItem>
                <NavLink
                  ref={servicesRef}
                  to="/services"
                  active={location.pathname === '/services' || window.location.hash === '#services' ? 'true' : 'false'}
                  as={motion.a}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={5}
                  index={4}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => handleNavigation(e, "/services")}
                >
                  <FaCogs />
                  {t('header.services')}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  ref={blogRef}
                  to="/#blog"
                  active={window.location.hash === '#blog' ? 'true' : 'false'}
                  as={motion.a}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={6}
                  index={5}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => handleNavigation(e, "/#blog")}
                >
                  <FaBlog />
                  {t('header.blog')}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  ref={contactRef}
                  to="/contact"
                  active={location.pathname === '/contact' || window.location.hash === '#contact' ? 'true' : 'false'}
                  as={motion.a}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={7}
                  index={6}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => handleNavigation(e, "/contact")}
                >
                  <FaEnvelope />
                  {t('header.contact')}
                </NavLink>
              </NavItem>
              <NavItem>
                <PrimaryButton>
                  <motion.div
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={8}
                    whileHover={{ y: -5 }}
                    whileTap={{ y: 0 }}
                  >
                    <Link to="/contact" className="btn-primary" onClick={(e) => handleNavigation(e, "/contact")}>
                      {t('header.hireMe')}
                    </Link>
                  </motion.div>
                </PrimaryButton>
              </NavItem>
              <NavItem>
                <ThemeToggleWrapper>
                  <motion.div
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={9}
                    whileHover={{ rotate: isDarkMode ? -15 : 15 }}
                  >
                    <ThemeSwitcher />
                  </motion.div>
                </ThemeToggleWrapper>
              </NavItem>
              <NavItem>
                <LanguageToggleWrapper>
                  <motion.div
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={10}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <LanguageSwitcher />
                  </motion.div>
                </LanguageToggleWrapper>
              </NavItem>
            </NavMenu>
          </AnimatePresence>
        </NavMenuWrapper>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <MobileMenuOverlay
              isOpen={isOpen}
              variants={mobileMenuBgVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
