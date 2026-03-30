import styled from 'styled-components';

export const AboutContainer = styled.section`
  @keyframes scan {
    0% { top: -100%; }
    100% { top: 100%; }
  }

  background-color: transparent;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: 
      radial-gradient(var(--primary-color) 1px, transparent 1px);
    background-size: 50px 50px;
    opacity: 0.05;
    z-index: 0;
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
  right: -2%;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  font-family: 'monospace';
  writing-mode: vertical-lr;
`;

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const AboutImage = styled.div`
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;

  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.neumorphism.shadow1}, ${({ theme }) => theme.neumorphism.shadow2};
    transition: transform 0.5s ease;
    transform: rotateY(5deg) rotateX(5deg);

    &:hover {
      transform: rotateY(-5deg) rotateX(-5deg);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 60px;
    height: 60px;
    border-top: 3px solid var(--primary-color);
    border-left: 3px solid var(--primary-color);
    z-index: -1;
    animation: pulse 2s infinite alternate;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    right: -20px;
    width: 60px;
    height: 60px;
    border-bottom: 3px solid var(--primary-color);
    border-right: 3px solid var(--primary-color);
    z-index: -1;
    animation: pulse 2s infinite alternate-reverse;
  }

  @keyframes pulse {
    0% {
      opacity: 0.5;
      transform: scale(1);
    }
    100% {
      opacity: 1;
      transform: scale(1.1);
    }
  }

  @media (max-width: 992px) {
    max-width: 450px;
    margin: 0 auto;
    
    img {
      transform: none !important;
    }
    
    &::before, &::after {
      display: none;
    }
  }

  @media (max-width: 768px) {
    max-width: 320px;
  }
`;

export const AboutText = styled.div`
  padding: 3rem;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  backdrop-filter: blur(${({ theme }) => theme.glassmorphism.blur});
  background-color: ${({ theme }) => theme.glassmorphism.background};
  border: ${({ theme }) => theme.glassmorphism.border};
  box-shadow: ${({ theme }) => theme.glassmorphism.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }

  h3 {
    letter-spacing: -1px;
    text-transform: uppercase;
    font-family: 'monospace';
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 4px;
      background: var(--primary-color);
    }
  }

  p {
    margin-bottom: 2rem;
    color: var(--gray-color);
    line-height: 1.6;
    font-size: 1.1rem;
    border-left: 4px solid var(--primary-color);
    padding-left: 1.5rem;
    font-weight: 300;
  }
`;

export const AboutInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  background-color: ${({ theme }) =>
    theme.isDarkMode
      ? 'rgba(30, 41, 59, 0.5)'
      : 'rgba(255, 255, 255, 0.5)'};
  backdrop-filter: blur(5px);
  border: ${({ theme }) => theme.glassmorphism.border};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }

  strong {
    margin-right: 0.5rem;
    color: var(--primary-color);
    font-weight: 600;
  }
`;

export const AboutSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.isDarkMode ? 'rgba(15, 23, 42, 0.4)' : '#ffffff'};
  border: 1px solid ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &::before {
    content: '';
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--primary-color);
    box-shadow: 0 0 15px var(--primary-color);
    z-index: 5;
    display: none;
  }

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

    &::before {
      display: block;
      animation: scan 2s linear infinite;
    }

    svg {
      color: var(--primary-color);
      transform: scale(1.1);
    }
  }

  svg {
    font-size: 1.5rem;
    color: var(--gray-color);
    transition: all 0.3s ease;
  }

  h4 {
    font-size: 0.9rem;
    font-weight: 700;
    font-family: 'monospace';
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: var(--primary-color);
  color: white;
  border-radius: var(--border-radius);
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: 1rem;
  grid-column: 1 / -1;
  width: fit-content;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--primary-color);
    transition: width 0.3s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

    &:before {
      width: 100%;
    }

    svg {
      transform: translateX(3px);
    }
  }

  svg {
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }

  @media (max-width: 576px) {
    width: 100%;
    justify-content: center;
  }
`;


