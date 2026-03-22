import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #1a0000;
  color: white;
  padding: 4rem 0 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 0;
  }
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;

  h3 {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    position: relative;
    padding-bottom: 0.75rem;
    font-weight: 700;
    color: white;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 40px;
      height: 3px;
      background: var(--primary-color);
      border-radius: 2px;
      transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

// FooterLogo removed as it is now using the centralized Logo component

export const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  line-height: 1.8;
  font-size: 1.05rem;
  max-width: 400px;
`;

export const FooterLinks = styled.ul`
  li {
    margin-bottom: 1rem;
    transition: all 0.3s ease;

    a {
      color: rgba(255, 255, 255, 0.7);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      font-size: 1.05rem;
      display: inline-flex;
      align-items: center;
      gap: 0;

      &::before {
        content: '→';
        font-weight: bold;
        color: var(--primary-color);
        margin-right: 0;
        width: 0;
        opacity: 0;
        transition: all 0.3s ease;
      }

      &:hover {
        color: white;
        gap: 0.5rem;
        
        &::before {
          width: auto;
          opacity: 1;
        }
      }
    }
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: var(--primary-color);
    transform: translateY(-5px) rotate(5deg);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    border-color: transparent;
  }

  svg {
    font-size: 1.2rem;
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2.5rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.95rem;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`;


