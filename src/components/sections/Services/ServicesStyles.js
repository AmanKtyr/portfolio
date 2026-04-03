import styled from 'styled-components';

export const ServicesContainer = styled.section`
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
    opacity: ${({ theme }) => theme.isDarkMode ? 0.05 : 0.02};
    animation: gridDrift 20s linear infinite;
    z-index: 0;
  }
`;

export const WatermarkText = styled.div`
  position: absolute;
  font-size: clamp(8rem, 20vw, 22rem);
  font-weight: 900;
  color: ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)'};
  letter-spacing: -15px;
  text-transform: uppercase;
  z-index: 0;
  left: -2%;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  font-family: 'monospace';
  writing-mode: vertical-lr;
  rotate: 180deg;
`;

export const TechBadge = styled.div`
  position: absolute;
  padding: 0.4rem 0.8rem;
  background: ${({ theme }) => theme.colors.cardBg};
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

export const ServicesContainerInner = styled.div`
  .btn-primary {
    display: inline-block;
    padding: 1rem 2.5rem;
    background: var(--primary-color);
    color: white;
    font-family: 'monospace';
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    z-index: 1;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(128, 0, 0, 0.2);
    }
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 2.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
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

  &::after {
    content: 'S_LINK_ESTABLISHED';
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    font-family: 'monospace';
    font-size: 0.6rem;
    color: var(--primary-color);
    opacity: 0.1;
    letter-spacing: 1px;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

    &::before {
      display: block;
      animation: scan 2s linear infinite;
    }

    &::after {
      opacity: 0.4;
    }
  }

  .btn-text {
    display: inline-flex;
    align-items: center;
    color: var(--primary-color);
    font-weight: 500;
    margin-top: auto;
    padding-top: 1rem;
    transition: all 0.3s ease;

    svg {
      opacity: 0;
      transform: translateX(-10px);
      transition: all 0.3s ease;
      margin-left: 5px;
    }

    &:hover {
      color: var(--secondary-color);

      svg {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
`;

export const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.cardBg};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 2px;
    background: transparent;
    border: 2px solid var(--primary-color);
    
    
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${ServiceCard}:hover & {
    transform: rotate(10deg);

    &::before {
      opacity: 1;
    }
  }

  svg {
    font-size: 2.5rem;
    color: var(--primary-color);
    transition: all 0.3s ease;
  }

  ${ServiceCard}:hover svg {
    transform: scale(1.1);
    color: var(--secondary-color);
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-family: 'monospace';
  text-transform: uppercase;
  letter-spacing: -1px;
  position: relative;
  transition: all 0.3s ease;

  span {
    display: block;
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--primary-color);
    letter-spacing: 2px;
    margin-bottom: 0.5rem;
  }

  ${ServiceCard}:hover & {
    letter-spacing: 0px;
    color: var(--primary-color);
  }
`;

export const ServiceText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;


