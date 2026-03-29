import styled, { keyframes } from 'styled-components';

export const WatermarkText = styled.div`
  position: absolute;
  font-size: clamp(8rem, 20vw, 22rem);
  font-weight: 900;
  color: ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'};
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

export const SkillsPageContainer = styled.div`
  .container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 2rem;

    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }

  .section-title {
    text-align: center;
    margin-bottom: 4rem;
    position: relative;

    h2 {
      font-size: 3rem;
      font-weight: 800;
      position: relative;
      display: inline-block;
      margin-bottom: 1.5rem;
      letter-spacing: -1px;

      /* Glowing underline */
      &::after {
        content: '';
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 4px;
        background: var(--primary-color);
        border-radius: 2px;
        box-shadow: 0 0 15px rgba(128, 0, 0, 0.5);
      }

      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
    }

    p {
      color: #334155;
      max-width: 600px;
      margin: 0 auto;
      font-size: 1.2rem;
      font-weight: 300;
      letter-spacing: 0.5px;
    }

    /* Decorative elements */
    &::before, &::after {
      content: '';
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--primary-color);
      opacity: 0.1;
      filter: blur(5px);
      z-index: -1;
    }

    &::before {
      top: -20px;
      left: 30%;
      animation: float 8s ease-in-out infinite;
    }

    &::after {
      bottom: -20px;
      right: 30%;
      animation: float 10s ease-in-out infinite reverse;
    }
  }
`;

export const SkillsBanner = styled.div`
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

export const SkillsBannerContent = styled.div`
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
      font-family: 'monospace';
      letter-spacing: -4px;
      text-transform: uppercase;
      
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
      font-family: inherit;

      @media (max-width: 992px) {
        border-left: none;
        padding-left: 0;
        margin: 0 auto;
      }
    }
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

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
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
  font-size: 1.7rem;
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

export const SkillsContent = styled.div`
  margin-bottom: 5rem;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: var(--transition);
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

export const SkillIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: rgba(128, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;

  svg {
    font-size: 2.5rem;
    color: var(--primary-color);
    transition: all 0.3s ease;
  }

  ${SkillCard}:hover svg {
    transform: scale(1.1);
  }
`;

export const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
  }

  ${SkillCard}:hover &::after {
    width: 50px;
  }
`;

export const SkillText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

export const SkillList = styled.ul`
  margin-top: 1rem;
  margin-bottom: 1.5rem;

  li {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.95rem;

    &::before {
      content: '•';
      color: var(--primary-color);
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-right: 0.5rem;
    }
  }
`;

export const TechStackSection = styled.section`
  margin-bottom: 5rem;
`;

export const TechStackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 2rem;
  position: relative;

  /* Animated background */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--primary-color);
    opacity: 0.05;
    filter: blur(40px);
    z-index: -1;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 1.5rem;
  }
`;

export const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
  border-radius: var(--border-radius);
  background-color: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: var(--transition);
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.small};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
    border-color: var(--primary-color);
  }
`;

export const TechIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  color: var(--primary-color);

  ${TechItem}:hover & {
    transform: scale(1.1);
  }
`;

export const TechName = styled.h4`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  transition: var(--transition);
`;

export const SkillsTimeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto 5rem;

  /* Glowing timeline line */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 20px;
    width: 3px;
    height: 100%;
    background: var(--primary-color);
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(128, 0, 0, 0.3);
    opacity: 0.7;
  }

  /* Animated particles along the timeline */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 20px;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 1;
  }

  @keyframes floatParticles {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 0 100px;
    }
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 4rem;

  &:last-child {
    margin-bottom: 0;
  }

  /* Staggered animation for timeline items */
  &:nth-child(1) {
    .timeline-animation {
      transition-delay: 0.1s;
    }
  }
  &:nth-child(2) {
    .timeline-animation {
      transition-delay: 0.2s;
    }
  }
  &:nth-child(3) {
    .timeline-animation {
      transition-delay: 0.3s;
    }
  }
  &:nth-child(4) {
    .timeline-animation {
      transition-delay: 0.4s;
    }
  }
  &:nth-child(5) {
    .timeline-animation {
      transition-delay: 0.5s;
    }
  }
  &:nth-child(6) {
    .timeline-animation {
      transition-delay: 0.6s;
    }
  }
`;

export const TimelineDot = styled.div`
  position: absolute;
  top: 0;
  left: 20px;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 2;
  box-shadow: 0 0 15px rgba(128, 0, 0, 0.5);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  /* Pulsing animation */
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: inherit;
    opacity: 0.3;
    z-index: -1;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.3;
    }
    50% {
      transform: scale(1.5);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 0.3;
    }
  }

  svg {
    font-size: 1.5rem;
    filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.2));
  }

  ${TimelineItem}:hover & {
    transform: translateX(-50%) scale(1.1);
    box-shadow: 0 0 20px rgba(90, 0, 0, 0.6);
  }
`;

export const TimelineConnector = styled.div`
  position: absolute;
  top: 50px;
  left: 20px;
  transform: translateX(-50%);
  width: 3px;
  height: calc(100% + 4rem);
  background: var(--primary-color);
  opacity: 0.3;
  border-radius: 3px;
`;

export const TimelineContent = styled.div`
  position: relative;
  width: calc(100% - 70px);
  padding: 2rem;
  border-radius: var(--border-radius);
  background-color: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  margin-left: 70px;
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
    color: var(--primary-color);
    font-weight: 700;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.7;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;



