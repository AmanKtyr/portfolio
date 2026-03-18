import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BlogContainer = styled.section`
  padding: 6rem 0;
  background-color: transparent;
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
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: -1;
  }

  .btn-outline {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
    background: transparent;
    border-radius: var(--border-radius);
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: var(--primary-color);
      transition: width 0.3s ease;
      z-index: -1;
      border-radius: calc(var(--border-radius) - 2px);
    }

    &:hover {
      color: white;

      &::before {
        width: 100%;
      }
    }
  }
`;

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const BlogCard = styled.div`
  backdrop-filter: blur(${({ theme }) => theme.glassmorphism.blur});
  background-color: ${({ theme }) => theme.glassmorphism.background};
  border: ${({ theme }) => theme.glassmorphism.border};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.glassmorphism.shadow};
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(128, 0, 0, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

export const BlogImage = styled.div`
  position: relative;
  overflow: hidden;
  height: 240px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  ${BlogCard}:hover img {
    transform: scale(1.05);
  }

  .category {
    position: absolute;
    top: 20px;
    right: 20px;
    background: var(--primary-color);
    color: white;
    padding: 0.4rem 1rem;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 700;
    z-index: 2;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const BlogContent = styled.div`
  padding: 2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  font-size: 0.85rem;
  color: var(--gray-color);
  opacity: 0.8;
  font-weight: 500;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const BlogTitle = styled.h3`
  font-size: clamp(1.2rem, 3vw, 1.4rem);
  margin-bottom: 1rem;
  line-height: 1.4;
  font-weight: 700;

  a {
    color: var(--text-color);
    transition: all 0.3s ease;

    &:hover {
      color: var(--primary-color);
    }
  }
`;

export const BlogExcerpt = styled.p`
  color: var(--gray-color);
  margin-bottom: 2rem;
  flex-grow: 1;
  line-height: 1.7;
  font-size: 0.95rem;
  opacity: 0.9;
`;

export const BlogLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  font-weight: 700;
  transition: all 0.3s ease;
  margin-top: auto;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    color: var(--secondary-color);
    gap: 0.75rem;

    svg {
      transform: translateX(3px);
    }
  }
`;


