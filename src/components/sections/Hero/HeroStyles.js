import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 2px solid var(--primary-color);
  overflow: hidden;
  padding: 80px 0;

  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background-image: 
      radial-gradient(var(--primary-color) 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: ${({ theme }) => theme.isDarkMode ? 0.05 : 0.02};
    z-index: 0;
    top: -50%;
    left: -50%;
    animation: drift 60s linear infinite;
  }

  @keyframes drift {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @media (max-width: 768px) {
    padding: 100px 0 60px;
    min-height: auto;
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

  @media (max-width: 768px) {
    font-size: 0.6rem;
    opacity: 0.2;
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

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    gap: 2.5rem;
  }
`;

export const HeroText = styled.div`
  position: relative;
  z-index: 10;
  padding: 2rem 0;

  @media (max-width: 992px) {
    text-align: center;
  }

  h4 {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    font-family: 'monospace';
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  h1 {
    font-size: clamp(2.5rem, 12vw, 6.5rem);
    font-weight: 900;
    line-height: 1;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: -4px;
    text-transform: uppercase;
    font-family: 'monospace';

    @media (max-width: 768px) {
      letter-spacing: -2px;
      line-height: 1.1;
      margin-bottom: 1.5rem;
    }
    
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

  h2 {
    font-size: clamp(1.2rem, 3vw, 1.8rem);
    font-weight: 700;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: 1px;
    text-transform: uppercase;
    font-family: 'monospace';
    border-left: 5px solid var(--primary-color);
    padding-left: 2rem;
    
    @media (max-width: 992px) {
      border-left: none;
      padding-left: 0;
    }
  }

  p {
    font-size: clamp(1rem, 2.5vw, 1.15rem);
    margin-bottom: 2.5rem;
    max-width: 600px;
    color: var(--gray-color);
    line-height: 1.7;
    opacity: 0.9;

    @media (max-width: 992px) {
      margin: 0 auto 2.5rem;
    }
  }
`;

export const HeroBtns = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 992px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1.25rem;
    width: 100%;

    .btn-primary, .btn-outline {
      width: 100%;
      justify-content: center;
      padding: 0.9rem 1.5rem;
    }
  }

  .btn-primary {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: var(--primary-color);
    color: white;
    border-radius: var(--border-radius);
    font-weight: 600;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    z-index: 1;
    box-shadow: 0 10px 20px rgba(128, 0, 0, 0.2);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: var(--secondary-color);
      transition: width 0.3s ease;
      z-index: -1;
    }

    svg {
      transition: transform 0.3s ease;
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(128, 0, 0, 0.3);

      &::before {
        width: 100%;
      }

      svg {
        transform: translateX(5px);
      }
    }
  }

  .btn-outline {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border: 2px solid var(--primary-color);
    background: transparent;
    color: var(--primary-color);
    border-radius: var(--border-radius);
    font-weight: 600;
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
      background: var(--primary-color);
      transition: width 0.3s ease;
      z-index: -1;
      opacity: 0.1;
    }

    &:hover {
      color: ${({ theme }) => theme.isDarkMode ? 'white' : 'var(--dark-color)'};
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

      &::before {
        width: 100%;
      }
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

export const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--light-color);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-color);
  font-size: 1.2rem;
  transition: var(--transition);
  border: 1px solid var(--primary-color);

  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-3px);
  }
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

  @media (max-width: 768px) {
    padding: 0.3rem 0.6rem;
    font-size: 0.55rem;
    
    &.status-top {
      top: 80px !important;
      right: 1.5rem !important;
    }
    
    &.status-bottom {
      display: none;
    }
  }
`;

export const VisualEngine = styled.div`
  position: relative;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    transform: scale(0.8);
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export const RotatingRing = styled.div`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: 1px solid ${({ color }) => color || 'rgba(128, 0, 0, 0.1)'};
  border-radius: 50%;
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

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

// Removed VisualNode as it is no longer used in the overhauled Hero system.
export const TechBar = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

export const TechBarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'monospace';
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  border-left: 2px solid var(--primary-color);
  padding-left: 0.6rem;
  height: 20px;
  transition: all 0.3s ease;

  svg {
    color: var(--primary-color);
    font-size: 0.9rem;
  }

  span {
    letter-spacing: 1px;
  }

  &:hover {
    opacity: 1;
    transform: translateX(3px);
    background: ${({ theme }) => theme.isDarkMode ? 'rgba(128, 0, 0, 0.05)' : 'rgba(128, 0, 0, 0.02)'};
  }
`;

export const HeroImage = styled.div`
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;

  .image-wrapper {
    position: relative;
    z-index: 5;
    
    img {
      width: 100%;
      max-width: 450px;
      height: auto;
      object-fit: contain;
      filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
      animation: laptopFloat 6s ease-in-out infinite;
    }
  }

  @keyframes laptopFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  @media (max-width: 992px) {
    max-width: 450px;
    margin: 0 auto;
    height: 350px;
  }

  @media (max-width: 768px) {
    max-width: 320px;
    height: 240px;
  }
`;

// End of tech bar styles


export const ScrollDown = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--gray-color);
  font-size: 0.9rem;

  .mouse {
    width: 30px;
    height: 50px;
    border: 2px solid var(--gray-color);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    margin-bottom: 0.5rem;
  }

  .wheel {
    width: 4px;
    height: 8px;
    background-color: var(--gray-color);
    border-radius: 2px;
    margin-top: 10px;
    animation: scroll 1.5s infinite;
  }

  @keyframes scroll {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(15px);
      opacity: 0;
    }
  }
`;


