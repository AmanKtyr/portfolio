import styled from 'styled-components';

export const ProjectsContainer = styled.section`
  padding: 6rem 0;
  background-color: transparent;
`;

export const ProjectsFilter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const FilterBtn = styled.button`
  padding: 0.5rem 1.5rem;
  border: none;
  background-color: ${({ active }) => (active === 'true' ? 'var(--primary-color)' : 'transparent')};
  color: ${({ active }) => (active === 'true' ? 'white' : 'var(--gray-color)')};
  border-radius: var(--border-radius);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    background-color: ${({ active }) => (active === 'true' ? 'var(--secondary-color)' : 'rgba(37, 99, 235, 0.1)')};
    color: ${({ active }) => (active === 'true' ? 'white' : 'var(--primary-color)')};
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

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

  .btn-text {
    display: inline-flex;
    align-items: center;
    color: var(--primary-color);
    font-weight: 500;
    margin-top: 1rem;
    transition: all 0.3s ease;
    position: relative;

    svg {
      opacity: 0;
      transform: translateX(-10px);
      transition: all 0.3s ease;
      margin-left: 5px;
    }

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
      color: var(--secondary-color);

      &::after {
        width: 100%;
      }

      svg {
        opacity: 1;
        transform: translateX(0);
      }
    }
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
