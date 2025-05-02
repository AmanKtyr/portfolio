import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BlogContainer = styled.section`
  padding: 6rem 0;
  background-color: ${({ theme }) => theme.isDarkMode ? 'var(--card-bg-color)' : '#f1f5f9'};
  
  .btn-outline {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
    background: transparent;
    border-radius: var(--border-radius);
    font-weight: 500;
    transition: var(--transition);
    
    &:hover {
      background-color: var(--primary-color);
      color: white;
    }
  }
`;

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const BlogCard = styled.div`
  background-color: ${({ theme }) => theme.isDarkMode ? 'var(--dark-color)' : 'white'};
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const BlogImage = styled.div`
  position: relative;
  
  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
  }
  
  .category {
    position: absolute;
    bottom: 15px;
    left: 15px;
    background-color: var(--primary-color);
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
  }
`;

export const BlogContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: var(--gray-color);
  
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const BlogTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  line-height: 1.4;
  
  a {
    color: var(--text-color);
    transition: var(--transition);
    
    &:hover {
      color: var(--primary-color);
    }
  }
`;

export const BlogExcerpt = styled.p`
  color: var(--text-secondary-color);
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

export const BlogLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  font-weight: 500;
  transition: var(--transition);
  margin-top: auto;
  
  &:hover {
    color: var(--secondary-color);
    gap: 0.8rem;
  }
`;
