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
    margin-bottom: 4rem;
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
`;

export const SkillsBanner = styled.div`
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

export const SkillsBannerContent = styled.div`
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
  background-color: rgba(15, 23, 42, 0.7); /* Dark blue with transparency */
  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid rgba(56, 189, 248, 0.1); /* Subtle sky blue border */
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 100%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  /* Gradient border effect */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    padding: 1px; /* Border width */
    background: linear-gradient(
      135deg,
      rgba(56, 189, 248, 0.5), /* Sky blue */
      rgba(147, 51, 234, 0.5), /* Purple */
      rgba(56, 189, 248, 0.2)  /* Sky blue */
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  /* Shine effect */
  &::after {
    content: '';
    position: absolute;
    top: -100%;
    left: -100%;
    width: 300%;
    height: 300%;
    background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0)
    );
    transform: rotate(30deg);
    transition: transform 0.7s ease;
    z-index: 1;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
    background-color: rgba(15, 23, 42, 0.8);

    &::before {
      opacity: 1;
    }

    &::after {
      transform: rotate(30deg) translate(50%, 50%);
    }
  }
`;

export const SkillIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 2rem;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  width: 80px;
  height: 80px;

  /* Create a gradient text effect */
  svg {
    background: linear-gradient(135deg, #38BDF8, #9333EA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.3));
  }

  /* Glowing circle background */
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(56, 189, 248, 0.15) 0%,
      rgba(147, 51, 234, 0.05) 70%,
      transparent 100%
    );
    z-index: -1;
    transition: all 0.5s ease;
  }

  /* Animated ring */
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid rgba(56, 189, 248, 0.3);
    box-shadow: 0 0 15px rgba(56, 189, 248, 0.2);
    z-index: -1;
    transition: all 0.5s ease;
    animation: pulseRing 3s infinite;
  }

  @keyframes pulseRing {
    0% {
      transform: scale(0.95);
      opacity: 0.7;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.3;
    }
    100% {
      transform: scale(0.95);
      opacity: 0.7;
    }
  }

  ${SkillCard}:hover & {
    transform: scale(1.15) translateY(-5px);

    &::before {
      transform: scale(1.2);
      background: radial-gradient(
        circle,
        rgba(56, 189, 248, 0.25) 0%,
        rgba(147, 51, 234, 0.15) 70%,
        transparent 100%
      );
    }

    &::after {
      animation-duration: 1.5s;
      border-color: rgba(147, 51, 234, 0.5);
    }

    svg {
      background: linear-gradient(135deg, #38BDF8, #9333EA, #38BDF8);
      background-size: 200% 200%;
      animation: gradientShift 2s ease infinite;
    }
  }

  @keyframes gradientShift {
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

export const SkillTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 1.2rem;
  position: relative;
  padding-bottom: 0.8rem;
  font-weight: 700;
  text-align: center;
  background: linear-gradient(135deg, #38BDF8, #9333EA);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.4s ease;
  letter-spacing: -0.5px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 3px;
    background: linear-gradient(90deg, #38BDF8, #9333EA);
    border-radius: 3px;
    transition: all 0.4s ease;
    box-shadow: 0 0 10px rgba(56, 189, 248, 0.3);
  }

  ${SkillCard}:hover & {
    transform: scale(1.05);
    letter-spacing: 0;

    &::after {
      width: 60px;
      background: linear-gradient(90deg, #9333EA, #38BDF8);
      box-shadow: 0 0 15px rgba(147, 51, 234, 0.4);
    }
  }
`;

export const SkillText = styled.p`
  color: #F1F5F9; /* Light gray */
  margin-bottom: 1.8rem;
  text-align: center;
  line-height: 1.7;
  font-size: 1rem;
  transition: all 0.3s ease;

  ${SkillCard}:hover & {
    color: white;
  }
`;

export const SkillList = styled.ul`
  margin-bottom: 2rem;
  list-style: none;
  padding: 0;
  text-align: center;

  li {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    padding: 0.7rem 1rem;
    border-radius: 8px;
    background-color: rgba(15, 23, 42, 0.5);
    border: 1px solid rgba(56, 189, 248, 0.05);
    color: #F1F5F9;
    position: relative;
    overflow: hidden;

    /* Subtle glow effect on hover */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(56, 189, 248, 0.05),
        transparent
      );
      transform: translateX(-100%);
      transition: transform 0.6s ease;
    }

    &:hover {
      transform: translateY(-3px);
      background-color: rgba(15, 23, 42, 0.7);
      border-color: rgba(56, 189, 248, 0.1);
      color: white;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

      &::before {
        transform: translateX(100%);
      }
    }

    /* Arrow icon */
    &::after {
      content: '→';
      color: #38BDF8;
      font-weight: bold;
      margin-left: 0.8rem;
      opacity: 0;
      transform: translateX(-10px);
      transition: all 0.3s ease;
    }

    &:hover::after {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* Staggered animation for list items */
  ${SkillCard}:hover & li {
    &:nth-child(1) {
      transition-delay: 0.05s;
    }
    &:nth-child(2) {
      transition-delay: 0.1s;
    }
    &:nth-child(3) {
      transition-delay: 0.15s;
    }
    &:nth-child(4) {
      transition-delay: 0.2s;
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
    background: radial-gradient(circle at 30% 40%, rgba(56, 189, 248, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 70% 60%, rgba(147, 51, 234, 0.05) 0%, transparent 50%);
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
  padding: 1.8rem 1rem;
  border-radius: 12px;
  background-color: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(56, 189, 248, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-align: center;
  position: relative;
  overflow: hidden;

  /* Gradient border on hover */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px;
    padding: 1px;
    background: linear-gradient(
      135deg,
      rgba(56, 189, 248, 0.5),
      rgba(147, 51, 234, 0.5)
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  /* Shine effect */
  &::after {
    content: '';
    position: absolute;
    top: -100%;
    left: -100%;
    width: 300%;
    height: 300%;
    background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0)
    );
    transform: rotate(30deg);
    transition: transform 0.7s ease;
    z-index: 1;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    background-color: rgba(15, 23, 42, 0.8);

    &::before {
      opacity: 1;
    }

    &::after {
      transform: rotate(30deg) translate(50%, 50%);
    }
  }
`;

export const TechIcon = styled.div`
  font-size: 2.8rem;
  margin-bottom: 1.2rem;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  z-index: 2;

  /* Create a gradient text effect */
  svg {
    background: linear-gradient(135deg, #38BDF8, #9333EA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 5px rgba(56, 189, 248, 0.2));
    transition: all 0.5s ease;
  }

  /* Glowing circle */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(56, 189, 248, 0.1) 0%,
      rgba(147, 51, 234, 0.05) 60%,
      transparent 100%
    );
    z-index: -1;
    opacity: 0.5;
    transition: all 0.5s ease;
  }

  ${TechItem}:hover & {
    transform: scale(1.2) translateY(-5px);

    svg {
      filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.4));
      background: linear-gradient(135deg, #38BDF8, #9333EA, #38BDF8);
      background-size: 200% 200%;
      animation: gradientShift 2s ease infinite;
    }

    &::before {
      width: 70px;
      height: 70px;
      opacity: 0.8;
      background: radial-gradient(
        circle,
        rgba(56, 189, 248, 0.15) 0%,
        rgba(147, 51, 234, 0.1) 60%,
        transparent 100%
      );
    }
  }
`;

export const TechName = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  color: #F1F5F9;
  transition: all 0.3s ease;
  position: relative;

  /* Underline effect */
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #38BDF8, #9333EA);
    transition: width 0.3s ease;
    opacity: 0;
  }

  ${TechItem}:hover & {
    color: white;
    transform: translateY(-2px);

    &::after {
      width: 70%;
      opacity: 1;
    }
  }
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
    background: linear-gradient(to bottom, #38BDF8, #9333EA);
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(56, 189, 248, 0.3);
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
    background-image:
      radial-gradient(circle at 20px 15%, rgba(56, 189, 248, 0.3) 0, transparent 8px),
      radial-gradient(circle at 20px 35%, rgba(147, 51, 234, 0.3) 0, transparent 6px),
      radial-gradient(circle at 20px 55%, rgba(56, 189, 248, 0.3) 0, transparent 10px),
      radial-gradient(circle at 20px 75%, rgba(147, 51, 234, 0.3) 0, transparent 7px);
    background-size: 100% 100px;
    background-repeat: repeat-y;
    animation: floatParticles 10s linear infinite;
    opacity: 0.5;
    pointer-events: none;
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
  background: linear-gradient(135deg, #38BDF8, #9333EA);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 2;
  box-shadow: 0 0 15px rgba(56, 189, 248, 0.5);
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
    box-shadow: 0 0 20px rgba(147, 51, 234, 0.6);
  }
`;

export const TimelineConnector = styled.div`
  position: absolute;
  top: 50px;
  left: 20px;
  transform: translateX(-50%);
  width: 3px;
  height: calc(100% + 4rem);
  background: linear-gradient(to bottom, rgba(56, 189, 248, 0.2), rgba(147, 51, 234, 0.2));
  opacity: 0.3;
  border-radius: 3px;
`;

export const TimelineContent = styled.div`
  position: relative;
  width: calc(100% - 70px);
  padding: 2rem;
  border-radius: 16px;
  background-color: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(56, 189, 248, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  margin-left: 70px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  /* Arrow pointer */
  &::before {
    content: '';
    position: absolute;
    top: 15px;
    left: -12px;
    width: 24px;
    height: 24px;
    background-color: rgba(15, 23, 42, 0.7);
    border-left: 1px solid rgba(56, 189, 248, 0.1);
    border-bottom: 1px solid rgba(56, 189, 248, 0.1);
    transform: rotate(45deg);
    backdrop-filter: blur(10px);
  }

  /* Gradient border on hover */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    padding: 1px;
    background: linear-gradient(
      135deg,
      rgba(56, 189, 248, 0.5),
      rgba(147, 51, 234, 0.5)
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  ${TimelineItem}:hover & {
    transform: translateY(-5px) translateX(5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);

    &::after {
      opacity: 1;
    }
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
    background: linear-gradient(135deg, #38BDF8, #9333EA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
  }

  p {
    color: #F1F5F9;
    line-height: 1.7;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
