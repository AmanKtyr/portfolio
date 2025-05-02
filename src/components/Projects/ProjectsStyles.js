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
  transition: var(--transition);
  height: 100%;
  position: relative;

  /* Neumorphism effect */
  background-color: ${({ theme }) => theme.neumorphism.background};
  box-shadow: ${({ theme }) => `${theme.neumorphism.shadow1}, ${theme.neumorphism.shadow2}`};

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => `${theme.neumorphism.shadow1.replace('10px', '15px')}, ${theme.neumorphism.shadow2.replace('-10px', '-15px')}`};
  }

  &:active {
    box-shadow: ${({ theme }) => `${theme.neumorphism.activeShadow1}, ${theme.neumorphism.activeShadow2}`};
  }
`;

export const ProjectImg = styled.div`
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: var(--transition);
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.1);
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
  backdrop-filter: blur(5px);
  background-color: ${({ theme }) =>
    theme.isDarkMode
      ? 'rgba(30, 41, 59, 0.8)'
      : 'rgba(255, 255, 255, 0.8)'};
  border-top: ${({ theme }) => theme.glassmorphism.border};

  .btn-text {
    display: inline-block;
    color: var(--primary-color);
    font-weight: 500;
    margin-top: 1rem;
    transition: var(--transition);

    &:hover {
      color: var(--secondary-color);
      text-decoration: underline;
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
