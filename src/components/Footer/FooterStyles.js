import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: var(--dark-color);
  color: white;
  padding: 4rem 0 2rem;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 0.5rem;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 30px;
      height: 2px;
      background-color: var(--primary-color);
    }
  }
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterLogo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  display: inline-block;
  
  span {
    color: var(--primary-color);
  }
`;

export const FooterText = styled.p`
  color: #cbd5e1;
  margin-bottom: 1.5rem;
  line-height: 1.8;
`;

export const FooterLinks = styled.ul`
  li {
    margin-bottom: 0.8rem;
    color: #cbd5e1;
    
    a {
      color: #cbd5e1;
      transition: var(--transition);
      
      &:hover {
        color: white;
        padding-left: 5px;
      }
    }
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    transform: translateY(-3px);
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #334155;
  padding-top: 2rem;
  text-align: center;
  color: #cbd5e1;
  
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    
    svg {
      color: #ef4444;
    }
  }
`;
