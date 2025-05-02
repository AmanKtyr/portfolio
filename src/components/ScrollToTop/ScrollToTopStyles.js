import styled from 'styled-components';

export const ScrollButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(20px)')};
  z-index: 99;
  
  &:hover {
    background-color: var(--secondary-color);
    transform: ${({ isVisible }) => (isVisible ? 'translateY(-5px)' : 'translateY(20px)')};
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    bottom: 20px;
    right: 20px;
    font-size: 1rem;
  }
`;
