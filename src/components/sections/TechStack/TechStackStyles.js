import styled, { keyframes } from 'styled-components';

const marqueeLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const marqueeRight = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;



export const TechStackContainer = styled.section`
  padding: 12rem 0;
  background-color: transparent;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    height: 150%;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle at center, rgba(128, 0, 0, 0.03) 0%, transparent 70%);
    pointer-events: none;
  }
`;

export const TechStackTitle = styled.div`
  max-width: var(--max-width);
  margin: 0 auto 8rem;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: flex-end;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2rem;
    left: 2rem;
    right: 2rem;
    height: 1px;
    background: ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
    justify-items: center;
  }
`;

export const MainHeading = styled.h2`
  font-size: clamp(3.5rem, 10vw, 8rem);
  font-weight: 900;
  line-height: 0.85;
  letter-spacing: -6px;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-family: 'monospace';
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  span.accent {
    color: var(--primary-color);
    -webkit-text-stroke: 1px var(--primary-color);
    -webkit-text-fill-color: transparent;
    letter-spacing: -2px;
    margin-top: -0.5rem;
  }
`;

export const CharSpan = styled.span`
  display: inline-block;
  transform: translateY(110%);
  will-change: transform, opacity;
`;

export const SectionLabel = styled.div`
  font-family: 'monospace';
  font-size: 0.7rem;
  color: var(--primary-color);
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  opacity: 0.8;

  &::before {
    content: '01';
    font-weight: 900;
    font-size: 1.2rem;
    letter-spacing: 0;
  }

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

export const MarqueeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transform: rotate(-3deg) scale(1.1); /* Slanted layout for unique edge */
  margin: 5rem 0;
  filter: grayscale(0.5);
  transition: filter 0.5s ease;

  &:hover {
    filter: grayscale(0);
  }
`;

export const MarqueeRow = styled.div`
  display: flex;
  white-space: nowrap;
  animation: ${({ reverse }) => (reverse ? marqueeRight : marqueeLeft)} ${({ duration }) => duration || '30s'} linear infinite;
  width: max-content;
  
  &:hover {
    animation-play-state: paused;
  }
`;

export const TechCard = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 3rem;
  margin: 0 1rem;
  background: ${({ theme }) => theme.colors.cardBg};
  backdrop-filter: blur(15px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 100px; /* Pill shape is very modern */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: var(--primary-color);
    border-color: var(--primary-color);
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 20px 40px rgba(128, 0, 0, 0.2);

    div, h3 { color: white !important; }
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const IconBox = styled.div`
  font-size: 2.5rem;
  color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const TechName = styled.h3`
  font-size: 1.2rem;
  font-weight: 800;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SignatureLine = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
  margin-top: 10rem;
  opacity: 0.3;
  position: relative;

  &::after {
    content: 'TECH_STACK_v2.0';
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Space Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 5px;
    color: var(--primary-color);
  }
`;
