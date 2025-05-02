import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: ${({ scrolled }) => 
    scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  box-shadow: ${({ scrolled }) => 
    scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.3s ease;
  padding: ${({ scrolled }) => (scrolled ? '0.5rem 0' : '1rem 0')};
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-color);
  
  span {
    span {
      color: var(--dark-color);
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 70px;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 80%;
    height: 100vh;
    background-color: white;
    padding: 2rem;
    transition: all 0.3s ease;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  }
`;

export const NavItem = styled.li`
  margin-left: 2rem;
  
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
  
  .btn-primary {
    display: inline-block;
    padding: 0.6rem 1.2rem;
    background-color: var(--primary-color);
    color: white;
    border-radius: var(--border-radius);
    transition: var(--transition);
    
    &:hover {
      background-color: var(--secondary-color);
    }
  }
`;

export const NavLink = styled(Link)`
  color: ${({ active }) => 
    active === 'true' ? 'var(--primary-color)' : 'var(--dark-color)'};
  font-weight: 500;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${({ active }) => (active === 'true' ? '100%' : '0')};
    height: 2px;
    background-color: var(--primary-color);
    transition: var(--transition);
  }
  
  &:hover {
    color: var(--primary-color);
    
    &::after {
      width: 100%;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--dark-color);
  }
`;
