import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ServicesPageContainer = styled.div`
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
      color: ${({ theme }) => theme.colors.textSecondary};
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
  background: ${({ theme }) => theme.colors.background};
  padding: 10rem 0 6rem;
  margin-bottom: 6rem;
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

export const ServicesBannerContent = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
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
    color: ${({ theme }) => theme.colors.textSecondary};
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
