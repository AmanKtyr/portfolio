import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ServicesPageContainer = styled.div`
  .section-title {
    text-align: center;
    margin-bottom: 3rem;
    
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
      
      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }
    
    p {
      color: var(--gray-color);
      max-width: 600px;
      margin: 0 auto;
    }
  }
  
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

export const ServicesBanner = styled.div`
  background-color: var(--primary-color);
  padding: 8rem 0 4rem;
  margin-bottom: 6rem;
`;

export const ServicesBannerContent = styled.div`
  text-align: center;
  color: white;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 6rem;
  
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
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
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
`;

export const ServiceFeatures = styled.ul`
  margin-top: 1.5rem;
`;

export const ServiceFeature = styled.li`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  
  &::before {
    content: '•';
    color: var(--primary-color);
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-right: 0.5rem;
  }
`;

export const PricingSection = styled.section`
  padding: 6rem 0;
  background-color: #f1f5f9;
`;

export const PricingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
`;

export const PricingCard = styled.div`
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  transition: var(--transition);
  position: relative;
  border: ${({ recommended }) => (recommended ? '2px solid var(--primary-color)' : '1px solid #e2e8f0')};
  transform: ${({ recommended }) => (recommended ? 'scale(1.05)' : 'scale(1)')};
  z-index: ${({ recommended }) => (recommended ? '1' : '0')};
  
  &:hover {
    transform: ${({ recommended }) => (recommended ? 'scale(1.08)' : 'scale(1.03)')};
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .recommended-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--primary-color);
    color: white;
    padding: 0.3rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
  }
  
  @media (max-width: 992px) {
    transform: scale(1);
    
    &:hover {
      transform: scale(1.03);
    }
  }
`;

export const PricingHeader = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: var(--gray-color);
    font-size: 0.9rem;
  }
`;

export const PricingPrice = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  
  h4 {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }
  
  p {
    color: var(--gray-color);
    font-size: 0.9rem;
  }
`;

export const PricingFeatures = styled.ul`
  margin-bottom: 2rem;
`;

export const PricingFeature = styled.li`
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  
  &::before {
    content: '✓';
    color: var(--success-color);
    font-weight: bold;
    display: inline-block;
    width: 1.5em;
    margin-right: 0.5rem;
  }
`;

export const PricingButton = styled(Link)`
  display: block;
  text-align: center;
  padding: 0.8rem 1.5rem;
  background-color: ${({ recommended }) => (recommended ? 'var(--primary-color)' : 'white')};
  color: ${({ recommended }) => (recommended ? 'white' : 'var(--primary-color)')};
  border: 1px solid var(--primary-color);
  border-radius: var(--border-radius);
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    background-color: ${({ recommended }) => (recommended ? 'var(--secondary-color)' : 'var(--primary-color)')};
    color: white;
    border-color: ${({ recommended }) => (recommended ? 'var(--secondary-color)' : 'var(--primary-color)')};
  }
`;

export const FAQSection = styled.section`
  padding: 6rem 0;
  background-color: white;
`;

export const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const FAQItem = styled.div`
  margin-bottom: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: var(--transition);
  
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }
`;

export const FAQQuestion = styled.div`
  padding: 1.5rem;
  background-color: ${({ active }) => (active ? 'var(--primary-color)' : 'white')};
  color: ${({ active }) => (active ? 'white' : 'var(--dark-color)')};
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: var(--transition);
  
  .icon {
    font-size: 1.5rem;
    font-weight: 700;
  }
  
  &:hover {
    background-color: ${({ active }) => (active ? 'var(--primary-color)' : 'rgba(37, 99, 235, 0.1)')};
  }
`;

export const FAQAnswer = styled.div`
  padding: ${({ active }) => (active ? '1.5rem' : '0 1.5rem')};
  max-height: ${({ active }) => (active ? '500px' : '0')};
  overflow: hidden;
  transition: all 0.3s ease;
  line-height: 1.8;
  color: var(--gray-color);
`;

export const CTASection = styled.section`
  padding: 6rem 0;
  background-color: var(--primary-color);
  color: white;
`;

export const CTAContent = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
  
  .btn-primary {
    background-color: white;
    color: var(--primary-color);
    
    &:hover {
      background-color: var(--dark-color);
      color: white;
    }
  }
`;
