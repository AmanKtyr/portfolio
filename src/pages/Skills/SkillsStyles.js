import styled from 'styled-components';

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
    margin-bottom: 3rem;
    
    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      position: relative;
      display: inline-block;
      margin-bottom: 1rem;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
      }
      
      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }
    
    p {
      color: var(--gray-color);
      max-width: 600px;
      margin: 0 auto;
    }
  }
`;

export const SkillsBanner = styled.div`
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  padding: 8rem 0 4rem;
  margin-bottom: 4rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/path-to-pattern.svg') repeat;
    opacity: 0.1;
  }
`;

export const SkillsBannerContent = styled.div`
  text-align: center;
  color: white;
  position: relative;
  z-index: 1;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
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
  background-color: ${({ theme }) => theme.neumorphism.background};
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: ${({ theme }) => theme.neumorphism.shadow1}, ${({ theme }) => theme.neumorphism.shadow2};
  transition: all 0.3s ease;
  height: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0)
    );
    transform: rotate(30deg);
    transition: transform 0.7s ease;
    z-index: 1;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.neumorphism.shadow1.replace('10px', '15px')},
                ${({ theme }) => theme.neumorphism.shadow2.replace('-10px', '-15px')};

    &::before {
      transform: rotate(30deg) translate(100%, 100%);
    }
  }

  &:active {
    box-shadow: ${({ theme }) => theme.neumorphism.activeShadow1},
                ${({ theme }) => theme.neumorphism.activeShadow2};
  }
`;

export const SkillIcon = styled.div`
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
  display: inline-block;
  position: relative;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 60px;
    background: ${({ theme }) =>
      theme.isDarkMode
        ? 'rgba(59, 130, 246, 0.1)'
        : 'rgba(219, 234, 254, 0.5)'};
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.3s ease;
  }

  ${SkillCard}:hover & {
    transform: scale(1.1) rotate(5deg);

    &::after {
      width: 70px;
      height: 70px;
      background: ${({ theme }) =>
        theme.isDarkMode
          ? 'rgba(59, 130, 246, 0.2)'
          : 'rgba(219, 234, 254, 0.7)'};
    }
  }
`;

export const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 0.5rem;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    transition: width 0.3s ease;
  }

  ${SkillCard}:hover &::after {
    width: 50px;
  }
`;

export const SkillText = styled.p`
  color: var(--gray-color);
  margin-bottom: 1.5rem;
`;

export const SkillList = styled.ul`
  margin-bottom: 1.5rem;
  
  li {
    margin-bottom: 0.8rem;
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;
    padding: 0.5rem;
    border-radius: ${({ theme }) => theme.borderRadius.small};

    &:hover {
      transform: translateX(5px);
      background-color: ${({ theme }) =>
        theme.isDarkMode
          ? 'rgba(30, 41, 59, 0.3)'
          : 'rgba(255, 255, 255, 0.5)'};
    }

    &::before {
      content: '→';
      color: var(--primary-color);
      font-weight: bold;
      display: inline-block;
      width: 1.5em;
      margin-right: 0.5rem;
      transition: transform 0.3s ease;
    }

    &:hover::before {
      transform: translateX(3px);
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
  padding: 1.5rem;
  border-radius: var(--border-radius);
  background-color: ${({ theme }) => theme.neumorphism.background};
  box-shadow: ${({ theme }) => theme.neumorphism.shadow1}, ${({ theme }) => theme.neumorphism.shadow2};
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.neumorphism.shadow1.replace('10px', '15px')},
                ${({ theme }) => theme.neumorphism.shadow2.replace('-10px', '-15px')};
  }
`;

export const TechIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  
  ${TechItem}:hover & {
    transform: scale(1.2);
  }
`;

export const TechName = styled.h4`
  font-size: 0.9rem;
  font-weight: 500;
`;

export const SkillsTimeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto 5rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 20px;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, var(--primary-color), var(--secondary-color));
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 3rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const TimelineDot = styled.div`
  position: absolute;
  top: 0;
  left: 20px;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 2;
  
  svg {
    font-size: 1.2rem;
  }
`;

export const TimelineConnector = styled.div`
  position: absolute;
  top: 40px;
  left: 20px;
  transform: translateX(-50%);
  width: 2px;
  height: calc(100% + 3rem);
  background: transparent;
`;

export const TimelineContent = styled.div`
  position: relative;
  width: calc(100% - 60px);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  background-color: ${({ theme }) => theme.glassmorphism.background};
  border: ${({ theme }) => theme.glassmorphism.border};
  box-shadow: ${({ theme }) => theme.glassmorphism.shadow};
  backdrop-filter: blur(${({ theme }) => theme.glassmorphism.blur});
  margin-left: 60px;
  
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: -10px;
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.glassmorphism.background};
    border-left: ${({ theme }) => theme.glassmorphism.border};
    border-bottom: ${({ theme }) => theme.glassmorphism.border};
    transform: rotate(45deg);
  }
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  p {
    color: var(--gray-color);
  }
`;
