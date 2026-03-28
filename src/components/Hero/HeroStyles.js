import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: transparent;
  overflow: hidden;
  padding: 80px 0;

  @media (max-width: 768px) {
    padding: 60px 0;
    height: auto;
  }

  &::before {
    content: '';
    position: absolute;
    top: -10%;
    right: -10%;
    width: 600px;
    height: 600px;
    background: ${({ theme }) =>
    theme.isDarkMode
      ? 'radial-gradient(circle, rgba(128, 0, 0, 0.15) 0%, transparent 70%)'
      : 'radial-gradient(circle, rgba(128, 0, 0, 0.1) 0%, transparent 70%)'};
    border-radius: 50%;
    z-index: -1;
    animation: float 20s ease-in-out infinite alternate;
    filter: blur(40px);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -15%;
    left: -10%;
    width: 500px;
    height: 500px;
    background: ${({ theme }) =>
    theme.isDarkMode
      ? 'radial-gradient(circle, rgba(255, 77, 77, 0.1) 0%, transparent 70%)'
      : 'radial-gradient(circle, rgba(128, 0, 0, 0.05) 0%, transparent 70%)'};
    border-radius: 50%;
    z-index: -1;
    animation: float 25s ease-in-out infinite alternate-reverse;
    filter: blur(50px);
  }

  @keyframes float {
    0% {
      transform: translate(0, 0) scale(1);
    }
    50% {
      transform: translate(5%, 5%) scale(1.1);
    }
    100% {
      transform: translate(10%, 10%) scale(1);
    }
  }
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
  padding: 3rem;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  backdrop-filter: blur(${({ theme }) => theme.glassmorphism.blur});
  background-color: ${({ theme }) => theme.glassmorphism.background};
  border: ${({ theme }) => theme.glassmorphism.border};
  box-shadow: ${({ theme }) => theme.glassmorphism.shadow};
  position: relative;
  overflow: hidden;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.1) 0%, 
      rgba(255, 255, 255, 0) 50%, 
      rgba(128, 0, 0, 0.05) 100%
    );
    transform: rotate(30deg);
    animation: shimmer 7s linear infinite;
    z-index: -1;
  }

  @keyframes shimmer {
    0% {
      transform: rotate(30deg) translate(-100%, -100%);
    }
    100% {
      transform: rotate(30deg) translate(100%, 100%);
    }
  }

  h4 {
    font-size: 1.2rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 1rem;
    display: inline-block;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 40px;
      height: 3px;
      background: var(--primary-color);
      animation: width 3s ease-in-out infinite alternate;
    }

    @keyframes width {
      0% {
        width: 30px;
      }
      100% {
        width: 70px;
      }
    }
  }

  h1 {
    font-size: clamp(2.8rem, 10vw, 4.5rem);
    font-weight: 800;
    margin-bottom: 1rem;
    line-height: 1.1;
    letter-spacing: -0.02em;
    background: linear-gradient(120deg, var(--primary-color), #ff4d4d, var(--primary-color));
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textShine 5s linear infinite;

    @keyframes textShine {
      0% {
        background-position: 0% center;
      }
      100% {
        background-position: 200% center;
      }
    }
  }

  h2 {
    font-size: clamp(1.4rem, 4vw, 2.2rem);
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--gray-color);
    position: relative;
    display: inline-block;
    line-height: 1.3;

    .highlight {
      color: var(--primary-color);
      position: relative;
      display: inline-block;
      z-index: 1;

      &::after {
        content: '';
        position: absolute;
        bottom: 2px;
        left: 0;
        width: 100%;
        height: 6px;
        background-color: rgba(128, 0, 0, 0.15);
        z-index: -1;
      }
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

export const HeroImage = styled.div`
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
    animation: laptopFloat 6s ease-in-out infinite;
    transform-style: preserve-3d;
    perspective: 1000px;
    transition: all 0.5s ease;

    &:hover {
      transform: rotateY(-10deg) rotateX(5deg);
      filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.3)) brightness(1.1);
    }
  }

  @keyframes laptopFloat {
    0% {
      transform: translateY(0) rotateY(0);
    }
    50% {
      transform: translateY(-20px) rotateY(5deg);
    }
    100% {
      transform: translateY(0) rotateY(0);
    }
  }

  &::before {
    content: '';
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: ${({ theme }) =>
    theme.isDarkMode
      ? 'radial-gradient(circle, rgba(128, 0, 0, 0.4) 0%, transparent 70%)'
      : 'radial-gradient(circle, rgba(128, 0, 0, 0.2) 0%, transparent 70%)'};
    top: 10%;
    right: 10%;
    filter: blur(20px);
    z-index: -1;
    animation: pulse 5s ease-in-out infinite alternate;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: ${({ theme }) =>
    theme.isDarkMode
      ? 'radial-gradient(circle, rgba(255, 77, 77, 0.3) 0%, transparent 70%)'
      : 'radial-gradient(circle, rgba(128, 0, 0, 0.15) 0%, transparent 70%)'};
    bottom: 10%;
    left: 10%;
    filter: blur(15px);
    z-index: -1;
    animation: pulse 7s ease-in-out infinite alternate-reverse;
  }

  @keyframes pulse {
    0% {
      opacity: 0.5;
      transform: scale(0.8);
    }
    100% {
      opacity: 0.8;
      transform: scale(1.2);
    }
  }

  @media (max-width: 992px) {
    max-width: 450px;
    margin: 0 auto;
    height: 350px;
  }

  @media (max-width: 768px) {
    max-width: 320px;
    height: 280px;
  }

  @media (max-width: 480px) {
    max-width: 280px;
    height: 240px;
  }
`;

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


