import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WatermarkText = styled.div`
  position: absolute;
  font-size: clamp(8rem, 20vw, 22rem);
  font-weight: 900;
  color: ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'};
  letter-spacing: -15px;
  text-transform: uppercase;
  z-index: 0;
  left: -2%;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  font-family: 'monospace';
  writing-mode: vertical-lr;
  rotate: 180deg;
`;

export const TechBadge = styled.div`
  position: absolute;
  padding: 0.4rem 0.8rem;
  background: ${({ theme }) => theme.isDarkMode ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
  border: 1px solid var(--primary-color);
  font-family: 'monospace';
  font-size: 0.6rem;
  color: var(--primary-color);
  border-radius: 2px;
  backdrop-filter: blur(10px);
  z-index: 5;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  letter-spacing: 1px;
  pointer-events: none;

  &::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    background: var(--primary-color);
    border-radius: 50%;
    margin-right: 8px;
    animation: blink 1.5s infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
`;

export const ProjectDetailsContainer = styled.section`
  @keyframes scan {
    0% { top: -100%; }
    100% { top: 100%; }
  }

  @keyframes gridDrift {
    0% { background-position: 0 0; }
    100% { background-position: 100px 100px; }
  }

  position: relative;
  overflow: hidden;
  padding: 10rem 0 8rem;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: 
      radial-gradient(var(--primary-color) 1px, transparent 1px);
    background-size: 60px 60px;
    opacity: 0.04;
    animation: gridDrift 30s linear infinite;
    z-index: 0;
  }
`;

export const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--primary-color);
  font-family: 'monospace';
  text-transform: uppercase;
  font-weight: 800;
  font-size: 0.8rem;
  letter-spacing: 2px;
  margin-bottom: 3rem;
  padding: 0.8rem 1.5rem;
  border: 1px solid rgba(128, 0, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;
  z-index: 10;
  
  &:hover {
    background: var(--primary-color);
    color: white;
    transform: translateX(-5px);
  }
`;

export const ProjectDetailsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const ProjectImage = styled.div`
  img {
    width: 100%;
    border-radius: var(--border-radius);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const ProjectInfo = styled.div``;

export const ProjectCategory = styled.span`
  color: var(--primary-color);
  font-weight: 500;
  font-size: 1rem;
  display: block;
  margin-bottom: 0.5rem;
`;

export const ProjectTitle = styled.h2`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 950;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-family: 'monospace';
  text-transform: uppercase;
  letter-spacing: -2px;
  line-height: 0.9;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const ProjectDescription = styled.p`
  color: var(--gray-color);
  margin-bottom: 2rem;
  line-height: 1.8;
`;

export const ProjectMeta = styled.div`
  margin-bottom: 2rem;
`;

export const MetaItem = styled.div`
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  background: ${({ theme }) => theme.isDarkMode ? 'rgba(30, 41, 59, 0.2)' : 'rgba(255, 255, 255, 0.2)'};
  
  h4 {
    font-size: 0.65rem;
    font-family: 'monospace';
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--primary-color);
    margin-bottom: 0.8rem;
  }
  
  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }
  
  .technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    
    span {
      background: transparent;
      border: 1px solid var(--primary-color);
      color: var(--primary-color);
      padding: 0.4rem 1rem;
      font-family: 'monospace';
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 1px;
    }
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1.2rem 2.5rem;
  background: ${({ primary }) => (primary === 'true' ? 'var(--primary-color)' : 'transparent')};
  color: ${({ primary }) => (primary === 'true' ? 'white' : 'var(--primary-color)')};
  border: 1px solid var(--primary-color);
  font-family: 'monospace';
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  flex: 1;

  &::before {
    content: '';
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 4px;
    background: rgba(255, 255, 255, 0.3);
    filter: blur(2px);
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(128, 0, 0, 0.2);
    background: var(--primary-color);
    color: white;

    &::before {
      animation: scan 2s linear infinite;
    }
  }
`;

export const FeatureList = styled.div`
  margin: 2.5rem 0;
  
  h3 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    &::before {
      content: '';
      width: 4px;
      height: 24px;
      background: var(--primary-color);
      border-radius: 2px;
    }
  }
  
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    list-style: none;
    padding: 0;
    
    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
    
    li {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      color: var(--gray-color);
      font-size: 1rem;
      padding: 0.8rem;
      border-radius: 8px;
      background: ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)'};
      border: 1px solid ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateX(5px);
        border-color: var(--primary-color);
        background: ${({ theme }) => theme.isDarkMode ? 'rgba(128, 0, 0, 0.1)' : 'rgba(128, 0, 0, 0.05)'};
      }
      
      svg {
        color: var(--primary-color);
        flex-shrink: 0;
      }
    }
  }
`;

export const ProjectHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  ${ProjectCategory} {
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  
  ${ProjectTitle} {
    display: inline-block;
    padding-bottom: 0;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
    }
  }
`;

export const SectionContainer = styled.div`
  background-color: ${({ theme }) => theme.isDarkMode ? '#0f172a' : '#ffffff'};
  color: ${({ theme }) => theme.isDarkMode ? '#f8fafc' : '#1e293b'};
  min-height: 100vh;
  transition: all 0.3s ease;
`;

export const ImageGallery = styled.div`
  margin-bottom: 4rem;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.neumorphism.shadow1}, ${({ theme }) => theme.neumorphism.shadow2};
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  &:hover img {
    transform: scale(1.02);
  }
`;
