import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const scan = keyframes`
  0% { transform: translateY(-100%); opacity: 0; }
  50% { opacity: 0.5; }
  100% { transform: translateY(100%); opacity: 0; }
`;

export const ServicesContainer = styled.section`
  padding: 10rem 0;
  background-color: transparent;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(var(--primary-rgb), 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(var(--primary-rgb), 0.05) 1px, transparent 1px);
    background-size: 80px 80px;
    z-index: 0;
    mask-image: radial-gradient(ellipse at center, black, transparent 80%);
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const ServiceCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 3rem;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--primary-color);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.6s ease;
  }

  &:hover {
    border-color: rgba(var(--primary-rgb), 0.3);
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

    &::before {
      transform: scaleX(1);
    }

    .service-footer {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--primary-rgb), 0.08);
  border-radius: 4px;
  color: var(--primary-color);
  font-size: 1.8rem;
  transition: all 0.4s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    border: 1px solid rgba(var(--primary-rgb), 0.2);
    border-radius: 4px;
    opacity: 0;
    transition: all 0.4s ease;
  }

  ${ServiceCard}:hover & {
    background: var(--primary-color);
    color: white;
    transform: scale(1.1) rotate(5deg);
    
    &::after {
      opacity: 1;
      inset: -5px;
    }
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'monospace';
  margin: 0;
`;

export const ServiceText = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-secondary-color);
  margin: 0;
  opacity: 0.8;
  flex-grow: 1;
`;

export const ServiceFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  opacity: 0.5;
  transition: all 0.4s ease;
  transform: translateY(10px);

  .btn-text {
    font-family: 'monospace';
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--primary-color);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .status {
    font-family: 'monospace';
    font-size: 0.6rem;
    color: ${({ theme }) => theme.isDarkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'};
    letter-spacing: 1px;
  }
`;

export const TechBadge = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-family: 'monospace';
  font-size: 0.6rem;
  background: ${({ theme }) => theme.isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'};
  padding: 0.3rem 0.6rem;
  border-radius: 2px;
  color: var(--primary-color);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
`;


