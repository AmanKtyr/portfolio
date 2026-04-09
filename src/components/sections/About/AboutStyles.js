import styled, { keyframes } from 'styled-components';

const scan = keyframes`
  0% { transform: translateY(-100%); opacity: 0; }
  50% { opacity: 0.5; }
  100% { transform: translateY(100%); opacity: 0; }
`;

export const AboutContainer = styled.section`
  padding: 3rem 0;
  background-color: transparent;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: 
      radial-gradient(rgba(var(--primary-rgb), 0.08) 1px, transparent 1px);
    background-size: 80px 80px;
    z-index: 0;
    mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  position: relative;
  z-index: 1;
`;

export const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 6rem;
  align-items: center;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

export const VisualSection = styled.div`
  position: relative;
`;

export const AboutImageContainer = styled.div`
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 100px;
    height: 100px;
    border-top: 2px solid var(--primary-color);
    border-left: 2px solid var(--primary-color);
    z-index: -1;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -20px;
    right: -20px;
    width: 100px;
    height: 100px;
    border-bottom: 2px solid var(--primary-color);
    border-right: 2px solid var(--primary-color);
    z-index: -1;
    opacity: 0.3;
  }
`;

export const AboutImage = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.cardBg};
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.4);

  img {
    width: 100%;
    height: auto;
    display: block;
    filter: grayscale(10%) contrast(1.05);
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover img {
    transform: scale(1.08);
  }

  .scan-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: var(--primary-color);
    box-shadow: 0 0 20px var(--primary-color);
    z-index: 2;
    animation: ${scan} 4s linear infinite;
  }
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const HeaderArea = styled.div`
  .pre-title {
    font-family: 'monospace';
    color: var(--primary-color);
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 0.75rem;
    font-weight: 700;
    margin-bottom: 1rem;
    display: block;
  }

  h3 {
    font-size: clamp(2rem, 5vw, 3rem);
    line-height: 1.1;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: -2px;
    margin: 0;
    text-transform: uppercase;
    font-family: 'monospace';
  }
`;

export const BioText = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--text-secondary-color);
  margin: 0;
  opacity: 0.9;
  position: relative;
  padding-left: 2rem;
  border-left: 4px solid var(--primary-color);
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  margin-top: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const InfoItem = styled.div`
  .label {
    font-family: 'monospace';
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
    display: block;
  }

  .value {
    font-size: 1.1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const SkillsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 3rem;
  background: ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)'};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`;

export const SkillBox = styled.div`
  .icon-row {
    color: var(--primary-color);
    font-size: 1.5rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: rgba(var(--primary-rgb), 0.2);
    }
  }

  h4 {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: 'monospace';
    font-weight: 800;
    margin: 0 0 0.5rem 0;
    color: ${({ theme }) => theme.colors.text};
  }

  span {
    font-size: 0.75rem;
    color: var(--text-secondary-color);
    opacity: 0.6;
    letter-spacing: 1px;
  }
`;

export const ActionArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  padding: 1.5rem 3rem;
  background: var(--primary-color);
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem;
  }
`;

export const ResumeBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  color: white;
  text-decoration: none;
  font-family: 'monospace';
  font-weight: 800;
  font-size: 1rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  transition: all 0.3s ease;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    transform: translateX(10px);
    opacity: 0.8;
  }
`;

export const AvailabilityIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: 'monospace';
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;

  .dot {
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 10px #fff;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.4); opacity: 0.5; }
    100% { transform: scale(1); opacity: 1; }
  }
`;


