import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WatermarkText = styled.div`
  position: absolute;
  font-size: clamp(8rem, 20vw, 22rem);
  font-weight: 900;
  color: ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'};
  letter-spacing: -15px;
  text-transform: uppercase;
  z-index: 0;
  left: -2%;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  font-family: 'monospace';
  writing-mode: vertical-lr;
  rotate: 180deg;
`;

export const TechBadge = styled.div`
  position: absolute;
  padding: 0.4rem 0.8rem;
  background: ${({ theme }) => theme.isDarkMode ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
  border: 1px solid var(--primary-color);
  font-family: 'monospace';
  font-size: 0.6rem;
  color: var(--primary-color);
  border-radius: 2px;
  backdrop-filter: blur(10px);
  z-index: 15;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  letter-spacing: 1px;
  pointer-events: none;

  &::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    background: var(--primary-color);
    border-radius: 50%;
    margin-right: 8px;
    animation: blink 1.5s infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
`;

export const ServicesPageContainer = styled.div`
  .section-title {
    text-align: center;
    margin-bottom: 5rem;
    position: relative;
    padding: 0 1rem;

    h2 {
      font-size: clamp(2.5rem, 6vw, 3.5rem);
      font-weight: 800;
      position: relative;
      display: inline-block;
      margin-bottom: 1.5rem;
      letter-spacing: -1.5px;

      &::after {
        content: '';
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
        width: clamp(60px, 12vw, 100px);
        height: 4px;
        background: var(--primary-color);
        border-radius: 2px;
        box-shadow: 0 0 15px rgba(var(--primary-rgb), 0.4);
      }
    }

    p {
      color: var(--gray-color);
      max-width: 650px;
      margin: 0 auto;
      font-size: clamp(1rem, 2.5vw, 1.25rem);
      font-weight: 400;
      line-height: 1.6;
      opacity: 0.9;
    }
  }

  @keyframes float {
    0% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
    100% { transform: translateY(0) rotate(0deg); }
  }

  .btn-primary {
    display: inline-block;
    padding: 1rem 2rem;
    background: var(--primary-color);
    color: white;
    border-radius: 12px;
    font-weight: 700;
    transition: all 0.3s ease;
    box-shadow: 0 10px 20px rgba(var(--primary-rgb), 0.2);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 15px 30px rgba(var(--primary-rgb), 0.3);
    }
  }
`;

export const ServicesBanner = styled.div`
  padding: 8rem 0 6rem;
  position: relative;
  background: ${({ theme }) => theme.isDarkMode ? '#030712' : '#f8fafc'};
  border-bottom: 2px solid var(--primary-color);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background-image: 
      radial-gradient(var(--primary-color) 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: 0.05;
    z-index: 0;
    top: -50%;
    left: -50%;
    animation: drift 60s linear infinite;
  }

  @keyframes drift {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

export const ServicesBannerContent = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  gap: 4rem;
  position: relative;
  z-index: 10;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .banner-text {
    h1 {
      font-size: clamp(3rem, 10vw, 6rem);
      font-weight: 900;
      line-height: 0.85;
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.text};
      font-family: 'monospace';
      letter-spacing: -4px;
      text-transform: uppercase;
      
      span {
        display: block;
        position: relative;
        transition: letter-spacing 0.5s ease;

        &:hover {
          letter-spacing: 1px;
        }
        
        &::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          color: var(--primary-color);
          -webkit-text-stroke: 1px var(--primary-color);
          overflow: hidden;
          transition: width 0.5s ease-in-out;
        }

        &:hover::after {
          width: 100%;
        }
      }
    }

    p {
      font-size: 1.15rem;
      color: var(--gray-color);
      max-width: 550px;
      line-height: 1.5;
      border-left: 5px solid var(--primary-color);
      padding-left: 2rem;
      font-weight: 300;
      backdrop-filter: blur(5px);
      font-family: inherit;

      @media (max-width: 992px) {
        border-left: none;
        padding-left: 0;
        margin: 0 auto;
      }
    }
  }
`;

export const VisualEngine = styled.div`
  position: relative;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    transform: scale(0.7);
    height: 350px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const RotatingRing = styled.div`
  position: absolute;
  border: 1px solid ${({ color }) => color || 'rgba(var(--primary-rgb), 0.1)'};
  border-radius: 50%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  animation: rotate ${({ duration }) => duration}s linear infinite;
  animation-direction: ${({ reverse }) => reverse ? 'reverse' : 'normal'};

  &::after {
    content: '';
    position: absolute;
    top: -5px;
    left: 50%;
    width: 10px;
    height: 10px;
    background: var(--primary-color);
    border-radius: 50%;
    box-shadow: 0 0 15px var(--primary-color);
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

export const VisualNode = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.isDarkMode ? '#0f172a' : '#ffffff'};
  border: 1px solid var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  color: var(--primary-color);
  box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-color);
    color: white;
    box-shadow: 0 0 30px var(--primary-color);
    transform: scale(1.2) rotate(-360deg);
  }
`;

export const GridCoordinates = styled.div`
  position: absolute;
  font-family: 'monospace';
  font-size: 0.7rem;
  color: var(--primary-color);
  opacity: 0.3;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 1;

  span {
    display: block;
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
  background-color: ${({ theme }) => theme.colors.cardBg};
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: var(--transition);
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

export const ServiceIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: rgba(var(--primary-rgb), 0.1);
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
  color: ${({ theme }) => theme.colors.text};

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
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
`;

export const ServiceFeatures = styled.ul`
  margin-top: 1.5rem;
`;

export const ServiceFeature = styled.li`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSecondary};

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
  background-color: ${({ theme }) => theme.isDarkMode ? theme.colors.background : theme.colors.light};

  .currency-toggle {
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
    gap: 0.5rem;
  }

  .currency-btn {
    padding: 0.8rem 1.5rem;
    border: 2px solid var(--primary-color);
    background-color: transparent;
    color: var(--primary-color);
    border-radius: var(--border-radius);
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    &:hover {
      background-color: var(--primary-color);
      color: white;
    }

    &.active {
      background-color: var(--primary-color);
      color: white;
      box-shadow: ${({ theme }) => theme.shadows.medium};
    }
  }
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
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: var(--border-radius);
  box-shadow: ${({ theme }) => theme.shadows.medium};
  padding: 2rem;
  transition: var(--transition);
  position: relative;
  border: ${({ recommended }) => (recommended ? '2px solid var(--primary-color)' : '1px solid var(--border-color)')};
  transform: ${({ recommended }) => (recommended ? 'scale(1.05)' : 'scale(1)')};
  z-index: ${({ recommended }) => (recommended ? '1' : '0')};

  &:hover {
    transform: ${({ recommended }) => (recommended ? 'scale(1.08)' : 'scale(1.03)')};
    box-shadow: ${({ theme }) => theme.shadows.large};
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
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
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
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .other-currency {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.75rem;
    opacity: 0.7;
    font-style: italic;
  }
`;

export const PricingFeatures = styled.ul`
  margin-bottom: 2rem;
`;

export const PricingFeature = styled.li`
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSecondary};

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
  background-color: ${({ recommended }) => (recommended ? 'var(--primary-color)' : 'transparent')};
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
  background-color: ${({ theme }) => theme.colors.cardBg};
`;

export const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const FAQItem = styled.div`
  margin-bottom: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: var(--transition);

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export const FAQQuestion = styled.div`
  padding: 1.5rem;
  background-color: ${({ active, theme }) => (active ? 'var(--primary-color)' : theme.colors.cardBg)};
  color: ${({ active, theme }) => (active ? 'white' : theme.colors.text)};
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
    background-color: ${({ active, theme }) => (active ? 'var(--primary-color)' : theme.colors.border)};
  }
`;

export const FAQAnswer = styled.div`
  padding: ${({ active }) => (active ? '1.5rem' : '0 1.5rem')};
  max-height: ${({ active }) => (active ? '500px' : '0')};
  overflow: hidden;
  transition: all 0.3s ease;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
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


