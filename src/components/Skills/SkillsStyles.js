import styled from 'styled-components';

export const SkillsContainer = styled.section`
  @keyframes scan {
    0% { top: -100%; }
    100% { top: 100%; }
  }

  @keyframes gridDrift {
    0% { background-position: 0 0; }
    100% { background-position: 100px 100px; }
  }

  padding: 4.5rem 0;
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
    animation: gridDrift 20s linear infinite;
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
  z-index: 5;
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

export const SummaryWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
  
  p {
    color: var(--text-secondary-color);
    font-size: clamp(1.1rem, 2vw, 1.25rem);
    line-height: 1.8;
    margin-bottom: 3rem;
  }
`;

export const TechIconsGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 4rem;
`;

export const TechIconNode = styled.div`
  width: 90px;
  height: 90px;
  background: ${({ theme }) => theme.isDarkMode ? 'rgba(15, 23, 42, 0.6)' : 'rgba(255, 255, 255, 0.6)'};
  border: 1px solid ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  color: var(--gray-color);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &::before {
    content: '';
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 3px;
    background: var(--primary-color);
    box-shadow: 0 0 15px var(--primary-color);
    display: none;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid transparent;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px) scale(1.05);
    border-color: var(--primary-color);
    color: var(--primary-color);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);

    &::before {
      display: block;
      animation: scan 2s linear infinite;
    }

    &::after {
      border-color: var(--primary-color);
      inset: -5px;
      opacity: 0.1;
    }
  }
`;

export const ActionButton = styled.div`
  display: inline-block;
  
  a {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    padding: 0.7rem 1.8rem;
    background: var(--primary-color);
    color: white;
    font-weight: 800;
    font-size: 1rem;
    font-family: 'monospace';
    text-transform: uppercase;
    letter-spacing: 2px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    transition: all 0.4s ease;
    text-decoration: none;
    position: relative;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 25px rgba(128, 0, 0, 0.3);
      filter: brightness(1.1);

      svg {
        transform: translateX(5px);
      }
    }
  }
`;
