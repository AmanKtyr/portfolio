import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const ProjectsPageContainer = styled.div`
  .container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 2rem;

    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }

  .no-results {
    text-align: center;
    padding: 3rem;
    background-color: ${({ theme }) => theme.glassmorphism.background};
    border: ${({ theme }) => theme.glassmorphism.border};
    border-radius: var(--border-radius);
    box-shadow: ${({ theme }) => theme.glassmorphism.shadow};
    backdrop-filter: blur(${({ theme }) => theme.glassmorphism.blur});
    grid-column: 1 / -1;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--primary-color);
    }

    p {
      color: var(--gray-color);
    }
  }

  .btn-text {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary-color);
    font-weight: 600;
    font-size: 0.85rem;
    transition: all 0.3s ease;
    position: relative;
    padding: 0.4rem 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    svg {
      font-size: 0.75rem;
      transition: all 0.3s ease;
    }

    &:hover {
      color: var(--secondary-color);
      gap: 0.8rem;

      svg {
        transform: translateX(3px);
      }
    }
  }
`;

export const ProjectsBanner = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 10rem 0 6rem;
  margin-bottom: 6rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(-45deg, var(--primary-color) 0%, rgba(128, 0, 0, 0.15) 50%, rgba(90, 0, 0, 0.15) 100%);
    background-size: 200% 200%;
    animation: gradientAnimation 15s ease infinite;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:
      radial-gradient(var(--primary-color) 1px, transparent 1px),
      radial-gradient(var(--primary-color) 1px, transparent 1px);
    background-size: 20px 20px;
    background-position: 0 0, 10px 10px;
    z-index: 2;
  }

  .grid-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(128,0,0,0.2) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(128,0,0,0.2) 1px, transparent 1px);
    background-size: 30px 30px;
    z-index: 3;
  }

  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

export const ProjectsBannerContent = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  z-index: 10;

  h1 {
    font-size: 4.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    background: var(--primary-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 20px rgba(128, 0, 0, 0.3);
    letter-spacing: -1px;

    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1.4rem;
    max-width: 600px;
    margin: 0 auto;
    color: var(--text-color);
    font-weight: 300;
    letter-spacing: 0.5px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 80px;
      height: 4px;
      background: var(--primary-color);
      margin: 1.5rem auto 0;
      border-radius: 2px;
    }

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  .floating-element {
    position: absolute;
    border-radius: 50%;
    filter: blur(10px);
    opacity: 0.5;
    z-index: -1;
  }

  .element-1 {
    width: 100px;
    height: 100px;
    background: #800000;
    top: -50px;
    left: 20%;
    animation: float 8s ease-in-out infinite;
  }

  .element-2 {
    width: 150px;
    height: 150px;
    background: #5a0000;
    bottom: -70px;
    right: 15%;
    animation: float 10s ease-in-out infinite reverse;
  }

  @keyframes float {
    0% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
    100% { transform: translateY(0) rotate(0deg); }
  }
`;

export const SearchContainer = styled.div`
  margin-bottom: 2rem;
  form {
    display: flex;
    max-width: 600px;
    margin: 0 auto;
    position: relative;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1.2rem;
  padding-right: 3rem;
  border-radius: var(--border-radius);
  border: ${({ theme }) => theme.glassmorphism.border};
  background-color: ${({ theme }) => theme.glassmorphism.background};
  backdrop-filter: blur(${({ theme }) => theme.glassmorphism.blur});
  box-shadow: ${({ theme }) => theme.glassmorphism.shadow};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(128, 0, 0, 0.3);
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--primary-color);
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: var(--secondary-color);
    transform: translateY(-50%) scale(1.1);
  }
`;

export const ProjectsCategories = styled.div`
  margin-bottom: 3rem;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 30px;
      height: 2px;
      background: var(--primary-color);
    }
  }

  .categories-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
  }
`;

export const CategoryItem = styled.button`
  padding: 0.5rem 1.5rem;
  border: none;
  background-color: ${({ active, theme }) =>
    active === 'true'
      ? 'var(--primary-color)'
      : theme.glassmorphism.background};
  color: ${({ active }) =>
    active === 'true'
      ? 'white'
      : 'var(--gray-color)'};
  border-radius: var(--border-radius);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(${({ theme }) => theme.glassmorphism.blur});
  border: ${({ active, theme }) =>
    active === 'true'
      ? 'none'
      : theme.glassmorphism.border};
  box-shadow: ${({ active, theme }) =>
    active === 'true'
      ? '0 5px 15px rgba(128, 0, 0, 0.3)'
      : theme.glassmorphism.shadow};

  &:hover {
    background-color: ${({ active }) =>
    active === 'true'
      ? 'var(--secondary-color)'
      : 'rgba(128, 0, 0, 0.1)'};
    color: ${({ active }) =>
    active === 'true'
      ? 'white'
      : 'var(--primary-color)'};
    transform: translateY(-3px);
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  height: 100%;
  position: relative;
  background: ${({ theme }) =>
    theme.isDarkMode
      ? 'rgba(15, 23, 42, 0.6)'
      : 'rgba(255, 255, 255, 0.9)'};
  border: 1px solid ${({ theme }) =>
    theme.isDarkMode
      ? 'rgba(128, 0, 0, 0.12)'
      : 'rgba(128, 0, 0, 0.08)'};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(128, 0, 0, 0.15), 0 8px 20px rgba(0, 0, 0, 0.08);
    border-color: rgba(128, 0, 0, 0.2);
  }
`;

export const ProjectImg = styled.div`
  position: relative;
  overflow: hidden;
  height: 220px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.08);
  }
`;

export const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(128, 0, 0, 0.0) 0%,
    rgba(128, 0, 0, 0.4) 50%,
    rgba(60, 0, 0, 0.85) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 2;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const ProjectLink = styled.a`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-color);
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  transform: translateY(15px);
  opacity: 0;
  position: relative;
  z-index: 5;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  ${ProjectCard}:hover & {
    transform: translateY(0);
    opacity: 1;
  }

  &:nth-child(1) {
    transition-delay: 0.05s;
  }
  &:nth-child(2) {
    transition-delay: 0.1s;
  }

  &:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 6px 20px rgba(128, 0, 0, 0.4);
  }

  &:active {
    transform: translateY(0) scale(0.95);
  }
`;

export const ProjectInfo = styled.div`
  padding: 1.25rem 1.5rem 1.5rem;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 1.5rem;
    right: 1.5rem;
    height: 1px;
    background: linear-gradient(90deg,
      transparent,
      rgba(128, 0, 0, 0.15),
      transparent
    );
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  line-height: 1.4;

  a {
    color: ${({ theme }) =>
      theme.isDarkMode
        ? '#f1f5f9'
        : '#1e293b'};
    transition: color 0.3s ease;
    text-decoration: none;

    &:hover {
      color: var(--primary-color);
    }
  }
`;

export const ProjectCategory = styled.span`
  color: var(--primary-color);
  font-weight: 600;
  font-size: 0.75rem;
  display: inline-block;
  margin-bottom: 0.4rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: ${({ theme }) =>
    theme.isDarkMode
      ? 'rgba(128, 0, 0, 0.15)'
      : 'rgba(128, 0, 0, 0.08)'};
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
`;

export const ProjectDesc = styled.p`
  color: var(--gray-color);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
