import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: var(--light-color);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: rgba(37, 99, 235, 0.1);
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: rgba(37, 99, 235, 0.05);
    z-index: 0;
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
  h4 {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }
  
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    line-height: 1.2;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--gray-color);
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  
  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    max-width: 600px;
    color: var(--gray-color);
    
    @media (max-width: 992px) {
      margin: 0 auto 2rem;
    }
  }
`;

export const HeroBtns = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
  
  .btn-primary, .btn-outline {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.5rem;
    border-radius: var(--border-radius);
    font-weight: 500;
    transition: var(--transition);
  }
  
  .btn-primary {
    background-color: var(--primary-color);
    color: white;
    
    &:hover {
      background-color: var(--secondary-color);
    }
  }
  
  .btn-outline {
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
    
    &:hover {
      background-color: var(--primary-color);
      color: white;
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
  
  img {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 100%;
    height: 100%;
    border: 2px solid var(--primary-color);
    border-radius: 20px;
    z-index: -1;
  }
  
  @media (max-width: 992px) {
    max-width: 500px;
    margin: 0 auto;
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
