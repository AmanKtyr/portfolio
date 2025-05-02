import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { HeaderContainer, Nav, Logo, NavMenu, NavItem, NavLink, MobileIcon } from './HeaderStyles';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="/services" 
              active={location.pathname === '/services' ? 'true' : 'false'}
            >
              Services
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="/contact" 
              active={location.pathname === '/contact' ? 'true' : 'false'}
            >
              Contact
            </NavLink>
          </NavItem>
          <NavItem>
            <Link to="/contact" className="btn-primary">
              Hire Me
            </Link>
          </NavItem>
        </NavMenu>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
