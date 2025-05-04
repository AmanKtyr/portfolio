import styled from 'styled-components';

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
    font-weight: 500;
    transition: all 0.3s ease;
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
  }
`;

export const ProjectsBanner = styled.div`
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  padding: 8rem 0 4rem;
  margin-bottom: 4rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/path-to-pattern.svg') repeat;
    opacity: 0.1;
  }
`;

export const ProjectsBannerContent = styled.div`
  text-align: center;
  color: white;
  position: relative;
  z-index: 1;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
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
    box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.3);
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
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
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
      ? '0 5px 15px rgba(56, 189, 248, 0.3)' 
      : theme.glassmorphism.shadow};
  
  &:hover {
    background-color: ${({ active }) => 
      active === 'true' 
        ? 'var(--secondary-color)' 
        : 'rgba(56, 189, 248, 0.1)'};
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
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: all 0.5s ease;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;

  /* Neumorphism effect */
  background-color: ${({ theme }) => theme.neumorphism.background};
  box-shadow: ${({ theme }) => `${theme.neumorphism.shadow1}, ${theme.neumorphism.shadow2}`};

  &:hover {
    transform: translateY(-10px) rotateX(5deg) rotateY(-5deg);
    box-shadow: ${({ theme }) => `${theme.neumorphism.shadow1.replace('10px', '20px')}, ${theme.neumorphism.shadow2.replace('-10px', '-20px')}`};

    .project-content {
      transform: translateZ(20px);
    }

    .project-img img {
      transform: scale(1.1);
    }
  }

  &:active {
    box-shadow: ${({ theme }) => `${theme.neumorphism.activeShadow1}, ${theme.neumorphism.activeShadow2}`};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg,
      transparent 0%,
      rgba(255, 255, 255, 0.05) 50%,
      transparent 100%);
    transform: translateZ(10px);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const ProjectImg = styled.div`
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      transparent 70%,
      rgba(0, 0, 0, 0.7) 100%
    );
    z-index: 1;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  ${ProjectCard}:hover &::after {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.7s ease, filter 0.5s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.1);
    filter: brightness(1.1) contrast(1.1);
  }
`;

export const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) =>
    theme.isDarkMode
      ? 'rgba(59, 130, 246, 0.8)'
      : 'rgba(37, 99, 235, 0.8)'};
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: var(--transition);

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ProjectLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-color);
  transition: var(--transition);

  &:hover {
    background-color: var(--dark-color);
    color: white;
  }
`;

export const ProjectInfo = styled.div`
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  background-color: ${({ theme }) =>
    theme.isDarkMode
      ? 'rgba(30, 41, 59, 0.8)'
      : 'rgba(255, 255, 255, 0.8)'};
  border-top: ${({ theme }) => theme.glassmorphism.border};
  transition: transform 0.5s ease;
  transform: translateZ(0);
  position: relative;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      transparent 0%,
      rgba(255, 255, 255, 0.05) 50%,
      transparent 100%
    );
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }

  ${ProjectCard}:hover &::before {
    opacity: 1;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;

  a {
    color: var(--dark-color);
    transition: var(--transition);

    &:hover {
      color: var(--primary-color);
    }
  }
`;

export const ProjectCategory = styled.span`
  color: var(--primary-color);
  font-weight: 500;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 0.5rem;
`;

export const ProjectDesc = styled.p`
  color: var(--gray-color);
  font-size: 0.95rem;
  margin-bottom: 1rem;
`;
