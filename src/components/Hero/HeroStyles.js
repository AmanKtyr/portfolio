import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: transparent;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -10%;
    right: -10%;
    width: 500px;
    height: 500px;
    background: ${({ theme }) =>
      theme.isDarkMode
        ? 'radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent 70%)'
        : 'radial-gradient(circle, rgba(219, 234, 254, 0.7), transparent 70%)'};
    border-radius: 50%;
    z-index: -1;
    animation: float 15s ease-in-out infinite alternate;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10%;
    left: -10%;
    width: 400px;
    height: 400px;
    background: ${({ theme }) =>
      theme.isDarkMode
        ? 'radial-gradient(circle, rgba(147, 51, 234, 0.1), transparent 70%)'
        : 'radial-gradient(circle, rgba(243, 232, 255, 0.5), transparent 70%)'};
    border-radius: 50%;
    z-index: -1;
    animation: float 20s ease-in-out infinite alternate-reverse;
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
    gap: 2rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const HeroText = styled.div`
  padding: 2.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  backdrop-filter: blur(${({ theme }) => theme.glassmorphism.blur});
  background-color: ${({ theme }) => theme.glassmorphism.background};
  border: ${({ theme }) => theme.glassmorphism.border};
  box-shadow: ${({ theme }) => theme.glassmorphism.shadow};
  position: relative;
  overflow: hidden;
  z-index: 1;

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
    font-weight: 600;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
      animation: width 3s ease-in-out infinite alternate;
    }

    @keyframes width {
      0% {
        width: 40px;
      }
      100% {
        width: 100px;
      }
    }
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
    line-height: 1.2;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color), var(--primary-color));
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient 5s linear infinite;

    @keyframes gradient {
      0% {
        background-position: 0% center;
      }
      100% {
        background-position: 200% center;
      }
    }

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--gray-color);
    position: relative;
    display: inline-block;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    .highlight {
      color: var(--primary-color);
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 8px;
        background-color: rgba(59, 130, 246, 0.2);
        z-index: -1;
      }
    }
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    max-width: 600px;
    color: var(--gray-color);
    line-height: 1.8;

    @media (max-width: 992px) {
      margin: 0 auto 2rem;
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
    gap: 1rem;
  }

  .btn-primary {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    color: white;
    border-radius: var(--border-radius);
    font-weight: 600;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    z-index: 1;
    box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);

    &::before {
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

    svg {
      transition: transform 0.3s ease;
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(37, 99, 235, 0.3);

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
    border: 2px solid transparent;
    background: linear-gradient(white, white) padding-box,
               linear-gradient(90deg, var(--primary-color), var(--secondary-color)) border-box;
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
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
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
        ? 'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent 70%)'
        : 'radial-gradient(circle, rgba(219, 234, 254, 0.8), transparent 70%)'};
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
        ? 'radial-gradient(circle, rgba(147, 51, 234, 0.3), transparent 70%)'
        : 'radial-gradient(circle, rgba(243, 232, 255, 0.8), transparent 70%)'};
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
    max-width: 500px;
    margin: 0 auto;
    height: 300px;
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
