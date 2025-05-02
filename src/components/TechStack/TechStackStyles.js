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
      background-color: var(--primary-color);
    }
  }
  
  p {
    color: var(--gray-color);
    max-width: 600px;
    margin: 0 auto;
  }
`;

export const TechStackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 2rem;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 1.5rem;
  }
`;

export const TechItem = styled.div`
  perspective: 1000px;
  height: 150px;
  
  @media (max-width: 768px) {
    height: 120px;
  }
`;

export const TechCube = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: rotateX(-15deg) rotateY(15deg);
  transition: transform 0.5s ease;
  
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
  border-radius: ${({ theme }) => theme.borderRadius.default};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  color: white;
  
  &.front {
    transform: translateZ(75px);
  }
  
  &.back {
    transform: rotateY(180deg) translateZ(75px);
  }
  
  &.top {
    transform: rotateX(90deg) translateZ(75px);
  }
  
  &.bottom {
    transform: rotateX(-90deg) translateZ(75px);
  }
  
  &.left {
    transform: rotateY(-90deg) translateZ(75px);
  }
  
  &.right {
    transform: rotateY(90deg) translateZ(75px);
  }
  
  @media (max-width: 768px) {
    &.front, &.back, &.top, &.bottom, &.left, &.right {
      transform: ${props => props.transform && props.transform.replace('75px', '60px')};
    }
  }
`;

export const TechIcon = styled.div`
  font-size: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const TechName = styled.div`
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
