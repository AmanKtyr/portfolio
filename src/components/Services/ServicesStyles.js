import styled from 'styled-components';

export const ServicesContainer = styled.section`
  padding: 6rem 0;
  background-color: #f1f5f9;
  
  .btn-primary {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background-color: var(--primary-color);
    color: white;
    border-radius: var(--border-radius);
    font-weight: 500;
    transition: var(--transition);
    
    &:hover {
      background-color: var(--secondary-color);
    }
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .btn-text {
    display: inline-block;
    color: var(--primary-color);
    font-weight: 500;
    margin-top: auto;
    padding-top: 1rem;
    transition: var(--transition);
    
    &:hover {
      color: var(--secondary-color);
      text-decoration: underline;
    }
  }
`;

export const ServiceIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: rgba(37, 99, 235, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  
  svg {
    font-size: 2rem;
    color: var(--primary-color);
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 0.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: var(--primary-color);
  }
`;

export const ServiceText = styled.p`
  color: var(--gray-color);
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;
