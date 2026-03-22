import styled from 'styled-components';

export const TechStackContainer = styled.section`
  padding: 6rem 0;
  background-color: transparent;
  position: relative;
  overflow: hidden;
`;

export const TechStackTitle = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  padding: 0 1rem;
  
  h2 {
    font-size: clamp(2rem, 5vw, 2.5rem);
    font-weight: 800;
    position: relative;
    display: inline-block;
    margin-bottom: 1.5rem;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: clamp(50px, 10vw, 80px);
      height: 4px;
      background: var(--primary-color);
      border-radius: 2px;
    }
  }
  
  p {
    color: var(--gray-color);
    max-width: 600px;
    margin: 0 auto;
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    opacity: 0.9;
    line-height: 1.6;
  }
`;

export const TechStackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 2.5rem;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
    gap: 1.5rem;
    padding: 0 1rem;
  }
`;

export const TechItem = styled.div`
  perspective: 1000px;
  height: 140px;
  
  @media (max-width: 768px) {
    height: 110px;
  }
`;

export const TechCube = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: rotateX(-15deg) rotateY(15deg);
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  
  &:hover {
    transform: rotateX(-15deg) rotateY(195deg);
  }
`;

export const CubeFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  color: white;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &.front { transform: translateZ(70px); }
  &.back { transform: rotateY(180deg) translateZ(70px); }
  &.top { transform: rotateX(90deg) translateZ(70px); }
  &.bottom { transform: rotateX(-90deg) translateZ(70px); }
  &.left { transform: rotateY(-90deg) translateZ(70px); }
  &.right { transform: rotateY(90deg) translateZ(70px); }
  
  @media (max-width: 768px) {
    &.front { transform: translateZ(55px); }
    &.back { transform: rotateY(180deg) translateZ(55px); }
    &.top { transform: rotateX(90deg) translateZ(55px); }
    &.bottom { transform: rotateX(-90deg) translateZ(55px); }
    &.left { transform: rotateY(-90deg) translateZ(55px); }
    &.right { transform: rotateY(90deg) translateZ(55px); }
  }
`;

export const TechIcon = styled.div`
  font-size: 2.8rem;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2));
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const TechName = styled.div`
  font-weight: 700;
  font-size: 0.95rem;
  text-align: center;
  padding: 0 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    letter-spacing: 0.5px;
  }
`;


