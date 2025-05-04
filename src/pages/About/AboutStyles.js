import styled from 'styled-components';

export const AboutPageContainer = styled.div`
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
    margin-top: 5rem;
    position: relative;

    h2 {
      font-size: 3rem;
      font-weight: 800;
      position: relative;
      display: inline-block;
      margin-bottom: 1.5rem;
      background: linear-gradient(135deg, #38BDF8, #9333EA);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
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
        background: linear-gradient(90deg, #38BDF8, #9333EA);
        border-radius: 2px;
        box-shadow: 0 0 15px rgba(56, 189, 248, 0.5);
      }

      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
    }

    p {
      color: #F1F5F9;
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
      background: radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, transparent 70%);
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

  @keyframes float {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
    100% {
      transform: translateY(0) rotate(0deg);
    }
  }
`;

export const AboutBanner = styled.div`
  background: #0F172A; /* Dark blue background for dark theme */
  padding: 10rem 0 6rem;
  margin-bottom: 4rem;
  position: relative;
  overflow: hidden;

  /* Animated gradient background */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      125deg,
      rgba(147, 51, 234, 0.15) 0%, /* Purple */
      rgba(56, 189, 248, 0.15) 50%, /* Sky blue */
      rgba(147, 51, 234, 0.15) 100% /* Purple */
    );
    background-size: 200% 200%;
    animation: gradientAnimation 15s ease infinite;
    z-index: 1;
  }

  /* Particle effect */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:
      radial-gradient(circle at 20% 30%, rgba(56, 189, 248, 0.3) 0, transparent 10px),
      radial-gradient(circle at 80% 40%, rgba(147, 51, 234, 0.3) 0, transparent 10px),
      radial-gradient(circle at 40% 80%, rgba(56, 189, 248, 0.3) 0, transparent 8px),
      radial-gradient(circle at 60% 10%, rgba(147, 51, 234, 0.3) 0, transparent 12px),
      radial-gradient(circle at 10% 60%, rgba(56, 189, 248, 0.3) 0, transparent 6px),
      radial-gradient(circle at 90% 90%, rgba(147, 51, 234, 0.3) 0, transparent 8px);
    z-index: 2;
  }

  /* Grid pattern overlay */
  .grid-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(56, 189, 248, 0.05) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(56, 189, 248, 0.05) 1px, transparent 1px);
    background-size: 30px 30px;
    z-index: 3;
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const AboutBannerContent = styled.div`
  text-align: center;
  color: white;
  position: relative;
  z-index: 10;

  h1 {
    font-size: 4.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    background: linear-gradient(to right, #38BDF8, #9333EA); /* Sky blue to purple gradient */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
    letter-spacing: -1px;

    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1.4rem;
    max-width: 600px;
    margin: 0 auto;
    color: #F1F5F9; /* Light gray */
    font-weight: 300;
    letter-spacing: 0.5px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 80px;
      height: 4px;
      background: linear-gradient(to right, #38BDF8, #9333EA);
      margin: 1.5rem auto 0;
      border-radius: 2px;
    }

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  /* Floating elements for visual interest */
  .floating-element {
    position: absolute;
    border-radius: 50%;
    filter: blur(10px);
    opacity: 0.5;
    z-index: -1;
  }

  .element-1 {
    width: 100px;
    height: 100px;
    background: #38BDF8; /* Sky blue */
    top: -50px;
    left: 20%;
    animation: float 8s ease-in-out infinite;
  }

  .element-2 {
    width: 150px;
    height: 150px;
    background: #9333EA; /* Purple */
    bottom: -70px;
    right: 15%;
    animation: float 10s ease-in-out infinite reverse;
  }
`;

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;

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
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    right: -20px;
    width: 60px;
    height: 60px;
    border-bottom: 3px solid var(--secondary-color);
    border-right: 3px solid var(--secondary-color);
    z-index: -1;
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
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

    &:before {
      width: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const AboutStats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 5rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const StatItem = styled.div`
  text-align: center;
  padding: 2rem;
  border-radius: var(--border-radius);
  background-color: ${({ theme }) => theme.neumorphism.background};
  box-shadow: ${({ theme }) => theme.neumorphism.shadow1}, ${({ theme }) => theme.neumorphism.shadow2};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.neumorphism.shadow1.replace('10px', '15px')},
                ${({ theme }) => theme.neumorphism.shadow2.replace('-10px', '-15px')};
  }

  h3 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: var(--gray-color);
    font-weight: 500;
  }
`;

export const AboutTimeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto 5rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, var(--primary-color), var(--secondary-color));

    @media (max-width: 768px) {
      left: 20px;
    }
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
  left: 50%;
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

  @media (max-width: 768px) {
    left: 20px;
  }

  svg {
    font-size: 1.2rem;
  }
`;

export const TimelineConnector = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: calc(100% + 3rem);
  background: transparent;

  @media (max-width: 768px) {
    left: 20px;
  }
`;

export const TimelineContent = styled.div`
  position: relative;
  width: calc(50% - 50px);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  background-color: ${({ theme }) => theme.glassmorphism.background};
  border: ${({ theme }) => theme.glassmorphism.border};
  box-shadow: ${({ theme }) => theme.glassmorphism.shadow};
  backdrop-filter: blur(${({ theme }) => theme.glassmorphism.blur});
  margin-left: calc(50% + 50px);

  @media (max-width: 768px) {
    width: calc(100% - 60px);
    margin-left: 60px;
  }

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

    @media (max-width: 768px) {
      left: -10px;
    }
  }

  ${TimelineItem}:nth-child(even) & {
    margin-left: 0;
    margin-right: calc(50% + 50px);

    @media (max-width: 768px) {
      margin-left: 60px;
      margin-right: 0;
    }

    &::before {
      left: auto;
      right: -10px;
      border-left: none;
      border-right: ${({ theme }) => theme.glassmorphism.border};
      border-top: ${({ theme }) => theme.glassmorphism.border};
      border-bottom: none;

      @media (max-width: 768px) {
        left: -10px;
        right: auto;
        border-left: ${({ theme }) => theme.glassmorphism.border};
        border-right: none;
        border-top: none;
        border-bottom: ${({ theme }) => theme.glassmorphism.border};
      }
    }
  }

  .date {
    display: inline-block;
    padding: 0.3rem 0.8rem;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    color: white;
    border-radius: 20px;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--gray-color);
    margin-bottom: 0.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
