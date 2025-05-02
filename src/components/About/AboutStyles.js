import styled from 'styled-components';

export const AboutContainer = styled.section`
  padding: 6rem 0;
  background-color: transparent;
  position: relative;
  overflow: hidden;
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
    max-width: 500px;
    margin: 0 auto;
  }
`;

export const AboutText = styled.div`
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  backdrop-filter: blur(${({ theme }) => theme.glassmorphism.blur});
  background-color: ${({ theme }) => theme.glassmorphism.background};
  border: ${({ theme }) => theme.glassmorphism.border};
  box-shadow: ${({ theme }) => theme.glassmorphism.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 1rem;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 3px;
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    }

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  p {
    margin-bottom: 1.5rem;
    color: var(--gray-color);
    line-height: 1.8;
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
  gap: 1.5rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  background-color: ${({ theme }) => theme.neumorphism.background};
  box-shadow: ${({ theme }) => theme.neumorphism.shadow1}, ${({ theme }) => theme.neumorphism.shadow2};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.neumorphism.shadow1.replace('10px', '15px')},
                ${({ theme }) => theme.neumorphism.shadow2.replace('-10px', '-15px')};

    svg {
      transform: rotate(10deg) scale(1.2);
    }
  }

  &:active {
    box-shadow: ${({ theme }) => theme.neumorphism.activeShadow1},
                ${({ theme }) => theme.neumorphism.activeShadow2};
  }

  svg {
    font-size: 1.5rem;
    color: var(--primary-color);
    transition: transform 0.3s ease;
  }

  h4 {
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

export const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
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
    background: linear-gradient(90deg, var(--secondary-color), var(--primary-color));
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
