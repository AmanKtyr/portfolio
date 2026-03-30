import styled, { keyframes, css } from 'styled-components';

const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(128, 0, 0, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(128, 0, 0, 0); }
  100% { box-shadow: 0 0 0 0 rgba(128, 0, 0, 0); }
`;

const scan = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

export const ProjectsPageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(to right, rgba(128, 0, 0, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(128, 0, 0, 0.05) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
    z-index: 0;
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 4rem;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      padding: 0 1.5rem;
    }
  }

  .no-results {
    text-align: center;
    padding: 6rem 2rem;
    border: 1px dashed var(--primary-color);
    background: ${({ theme }) => theme.isDarkMode ? 'rgba(128, 0, 0, 0.05)' : 'rgba(0, 0, 0, 0.02)'};
    border-radius: 4px;
    grid-column: 1 / -1;

    h3 {
      font-size: 2rem;
      font-family: 'monospace';
      color: var(--primary-color);
      margin-bottom: 1rem;
    }
  }

  .btn-text {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    font-size: 0.9rem;
    font-family: 'monospace';
    text-transform: uppercase;
    letter-spacing: 2px;
    text-decoration: none;
    padding: 0.8rem 2rem;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    background-color: transparent;
    position: relative;
    z-index: 5;
    margin-top: auto;

    svg {
      transition: transform 0.3s ease;
      font-size: 1.1rem;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: #ffffff;
      box-shadow: 0 10px 25px ${({ theme }) => theme.isDarkMode ? 'rgba(0, 0, 0, 0.4)' : 'rgba(128, 0, 0, 0.25)'};
      transform: translateY(-2px);
      
      svg {
        transform: translateX(5px);
        color: #ffffff;
      }
    }

    @media (max-width: 480px) {
      padding: 0.7rem 1.5rem;
      font-size: 0.8rem;
    }
  }
`;

export const WatermarkText = styled.div`
  position: absolute;
  font-size: clamp(8rem, 20vw, 22rem);
  font-weight: 900;
  color: ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'};
  letter-spacing: -15px;
  text-transform: uppercase;
  z-index: 0;
  bottom: -2%;
  right: -2%;
  pointer-events: none;
  font-family: 'monospace';
`;

export const ProjectsBanner = styled.div`
  padding: 8rem 0 6rem;
  position: relative;
  background: ${({ theme }) => theme.isDarkMode ? '#030712' : '#f8fafc'};
  border-bottom: 2px solid var(--primary-color);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background-image: 
      radial-gradient(var(--primary-color) 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: 0.05;
    z-index: 0;
    top: -50%;
    left: -50%;
    animation: drift 60s linear infinite;
  }

  @keyframes drift {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

export const ProjectsBannerContent = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  gap: 4rem;
  position: relative;
  z-index: 10;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .banner-text {
    h1 {
      font-size: clamp(3rem, 10vw, 6rem);
      font-weight: 900;
      line-height: 0.85;
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.text};
      letter-spacing: -4px;
      text-transform: uppercase;
      font-family: 'monospace';
      
      span {
        display: block;
        position: relative;
        transition: letter-spacing 0.5s ease;

        &:hover {
          letter-spacing: 1px;
        }
        
        &::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          color: var(--primary-color);
          -webkit-text-stroke: 1px var(--primary-color);
          overflow: hidden;
          transition: width 0.5s ease-in-out;
        }

        &:hover::after {
          width: 100%;
        }
      }
    }

    p {
      font-size: 1.15rem;
      color: var(--gray-color);
      max-width: 550px;
      line-height: 1.5;
      border-left: 5px solid var(--primary-color);
      padding-left: 2rem;
      font-weight: 300;
      backdrop-filter: blur(5px);

      @media (max-width: 992px) {
        border-left: none;
        padding-left: 0;
        margin: 0 auto;
      }
    }
  }
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
  z-index: 15;
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

export const VisualEngine = styled.div`
  position: relative;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    transform: scale(0.7);
    height: 350px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const RotatingRing = styled.div`
  position: absolute;
  border: 1px solid ${({ color }) => color || 'rgba(128, 0, 0, 0.1)'};
  border-radius: 50%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  animation: rotate ${({ duration }) => duration}s linear infinite;
  animation-direction: ${({ reverse }) => reverse ? 'reverse' : 'normal'};

  &::after {
    content: '';
    position: absolute;
    top: -5px;
    left: 50%;
    width: 10px;
    height: 10px;
    background: var(--primary-color);
    border-radius: 50%;
    box-shadow: 0 0 15px var(--primary-color);
  }
`;

export const GridCoordinates = styled.div`
  position: absolute;
  font-family: 'monospace';
  font-size: 0.7rem;
  color: var(--primary-color);
  opacity: 0.3;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 1;

  span {
    display: block;
  }
`;

export const VisualNode = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.isDarkMode ? '#0f172a' : '#ffffff'};
  border: 1px solid var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: var(--primary-color);
  box-shadow: 0 0 20px rgba(128, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-color);
    color: white;
    box-shadow: 0 0 30px var(--primary-color);
    transform: scale(1.2) rotate(-360deg);
  }
`;

export const SearchContainer = styled.div`
  margin: 6rem 0 4rem;
  
  form {
    display: flex;
    max-width: 100%;
    background: ${({ theme }) => theme.isDarkMode ? '#0f172a' : '#ffffff'};
    border: 1px solid ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
    position: relative;
    box-shadow: 20px 20px 60px ${({ theme }) => theme.isDarkMode ? '#0a0f1c' : '#d1d9e6'};

    @media (max-width: 576px) {
      flex-direction: column;
    }
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  padding: 1.5rem 2rem;
  color: ${({ theme }) => theme.colors.text};
  font-family: 'monospace';
  font-size: 1.1rem;
  min-width: 0;
  
  &:focus {
    outline: none;
  }

  &::placeholder {
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 0.9rem;
    opacity: 0.4;
  }

  @media (max-width: 576px) {
    padding: 1rem;
    font-size: 1rem;
  }
`;

export const SearchButton = styled.button`
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0 2.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: black;
  }

  @media (max-width: 576px) {
    padding: 1rem;
    font-size: 1.2rem;
  }
`;

export const ProjectsCategories = styled.div`
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  gap: 3rem;
  border-bottom: 1px solid rgba(128, 0, 0, 0.1);
  padding-bottom: 1.5rem;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }

  @media (max-width: 992px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }

  h3 {
    font-family: 'monospace';
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: var(--primary-color);
    white-space: nowrap;
    
    &::before { content: '['; }
    &::after { content: ']'; }
  }

  .categories-list {
    display: flex;
    gap: 1.5rem;
  }
`;

export const CategoryItem = styled.button`
  padding: 0.6rem 2rem;
  background: ${({ active }) => active === 'true' ? 'var(--primary-color)' : 'transparent'};
  color: ${({ active, theme }) => active === 'true' ? 'white' : theme.colors.text};
  border: 1px solid ${({ active }) => active === 'true' ? 'var(--primary-color)' : 'rgba(128, 0, 0, 0.2)'};
  font-family: 'monospace';
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;

  &:hover {
    color: var(--primary-color);
    border-color: var(--primary-color);
    transform: translateY(-2px);
  }

  ${({ active }) => active === 'true' && css`
    &:hover { color: white; }
    box-shadow: 0 10px 20px rgba(128, 0, 0, 0.3);
  `}
`;

export const ProjectsGrid = styled.div`
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  margin-bottom: 12rem;
  display: grid;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const ProjectCard = styled.div`
  grid-column: span ${({ featured }) => featured ? '8' : '4'};
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.isDarkMode ? 'rgba(15, 23, 42, 0.4)' : '#ffffff'};
  border: 1px solid ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  position: relative;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);

  /* Industrial Corner Markers */
  &::before, &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-color: var(--primary-color);
    border-style: solid;
    z-index: 10;
    opacity: 0.3;
    transition: opacity 0.3s ease;
  }
  
  &::before {
    top: -1px;
    left: -1px;
    border-width: 2px 0 0 2px;
  }
  
  &::after {
    bottom: -1px;
    right: -1px;
    border-width: 0 2px 2px 0;
  }

  @media (max-width: 1200px) {
    grid-column: span 6;
  }
  @media (max-width: 768px) {
    grid-column: span 12;
  }

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);

    &::before, &::after {
      opacity: 1;
    }

    .scanning-line {
      display: block;
      animation: ${scan} 2s linear infinite;
    }

    .project-img img {
      filter: grayscale(0%) brightness(1.1);
    }
  }
`;

export const ProjectImg = styled.div`
  position: relative;
  height: clamp(250px, 40vh, 400px);
  background: ${({ theme }) => theme.isDarkMode ? '#000' : '#f1f5f9'};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    filter: none;
    transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .scanning-line {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--primary-color);
    box-shadow: 0 0 15px var(--primary-color);
    z-index: 5;
  }

  .card-id {
    position: absolute;
    top: 2rem;
    left: 2rem;
    font-family: 'monospace';
    font-weight: 900;
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.1);
    z-index: 6;
    transition: all 0.4s ease;
  }

  ${ProjectCard}:hover & .card-id {
    color: var(--primary-color);
    transform: scale(1.1);
  }
`;

export const ProjectOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 10;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ProjectLink = styled.a`
  width: 50px;
  height: 50px;
  background: var(--primary-color);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background: black;
    transform: translateY(-5px);
  }
`;

export const ProjectInfo = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ProjectCategory = styled.span`
  font-family: 'monospace';
  font-size: 0.75rem;
  color: var(--primary-color);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
  display: block;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: 1rem;
  font-family: 'monospace';
  
  a {
    color: inherit;
    text-decoration: none;
    &:hover { color: var(--primary-color); }
  }
`;

export const ProjectDesc = styled.p`
  color: var(--gray-color);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 90%;
`;
