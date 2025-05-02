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
    background: ${({ theme }) =>
      theme.isDarkMode
        ? 'radial-gradient(ellipse at top left, rgba(30, 64, 175, 0.1), transparent 50%)'
        : 'radial-gradient(ellipse at top left, rgba(219, 234, 254, 0.5), transparent 50%)'};
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      theme.isDarkMode
        ? 'radial-gradient(ellipse at bottom right, rgba(147, 51, 234, 0.1), transparent 50%)'
        : 'radial-gradient(ellipse at bottom right, rgba(243, 232, 255, 0.5), transparent 50%)'};
    z-index: -1;
  }

  .btn-outline {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    border: 2px solid transparent;
    border-image: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    border-image-slice: 1;
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
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
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
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const BlogCard = styled.div`
  backdrop-filter: blur(${({ theme }) => theme.glassmorphism.blur});
  background-color: ${({ theme }) => theme.glassmorphism.background};
  border: ${({ theme }) => theme.glassmorphism.border};
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.glassmorphism.shadow};
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -100%;
    left: -100%;
    width: 300%;
    height: 300%;
    background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0)
    );
    transform: rotate(30deg);
    transition: transform 0.7s ease;
    z-index: 1;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);

    &::before {
      transform: rotate(30deg) translate(50%, 50%);
    }
  }
`;

export const BlogImage = styled.div`
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent 70%,
      rgba(0, 0, 0, 0.7) 100%
    );
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${BlogCard}:hover &::before {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    transition: transform 0.5s ease;

    ${BlogCard}:hover & {
      transform: scale(1.1);
    }
  }

  .category {
    position: absolute;
    bottom: 15px;
    left: 15px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
    z-index: 2;
    transform: translateY(10px);
    opacity: 0;
    transition: all 0.3s ease;

    ${BlogCard}:hover & {
      transform: translateY(0);
      opacity: 1;
    }
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
  position: relative;
  display: inline-block;

  a {
    color: var(--text-color);
    transition: all 0.3s ease;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
      transition: width 0.3s ease;
    }

    &:hover {
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      &::after {
        width: 100%;
      }
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
  transition: all 0.3s ease;
  margin-top: auto;
  position: relative;
  padding: 0.5rem 0;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, var(--primary-color), transparent);
    transform: scaleX(0.3);
    transform-origin: left;
    opacity: 0.5;
    transition: all 0.3s ease;
  }

  svg {
    transition: all 0.3s ease;
  }

  &:hover {
    color: var(--secondary-color);
    gap: 0.8rem;

    &::before {
      transform: scaleX(1);
      opacity: 1;
    }

    svg {
      transform: translateX(3px);
    }
  }
`;
