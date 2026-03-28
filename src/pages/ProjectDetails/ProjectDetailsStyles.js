import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProjectDetailsContainer = styled.section`
  padding: 8rem 0 6rem;
  background-color: white;
`;

export const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--gray-color);
  margin-bottom: 2rem;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
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
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 1rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: var(--primary-color);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
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
  margin-bottom: 1rem;
  
  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: var(--gray-color);
  }
  
  .technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    
    span {
      background-color: rgba(128, 0, 0, 0.1);
      color: var(--primary-color);
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      font-size: 0.9rem;
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
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  transition: var(--transition);
  background-color: ${({ primary }) => (primary === 'true' ? 'var(--primary-color)' : 'white')};
  color: ${({ primary }) => (primary === 'true' ? 'white' : 'var(--primary-color)')};
  border: 1px solid var(--primary-color);
  
  &:hover {
    background-color: ${({ primary }) => (primary === 'true' ? 'var(--secondary-color)' : 'var(--primary-color)')};
    color: white;
    border-color: ${({ primary }) => (primary === 'true' ? 'var(--secondary-color)' : 'var(--primary-color)')};
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
