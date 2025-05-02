import styled from 'styled-components';

export const ServicesContainer = styled.section`
  padding: 6rem 0;
  background-color: transparent;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background: ${({ theme }) =>
      theme.isDarkMode
        ? 'radial-gradient(circle, rgba(147, 51, 234, 0.1), transparent 70%)'
        : 'radial-gradient(circle, rgba(219, 234, 254, 0.7), transparent 70%)'};
    border-radius: 50%;
    z-index: -1;
  }

  .btn-primary {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    color: white;
    border-radius: var(--border-radius);
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    z-index: 1;

    &:before {
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

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

      &:before {
        width: 100%;
      }
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
  backdrop-filter: blur(${({ theme }) => theme.glassmorphism.blur});
  background-color: ${({ theme }) => theme.glassmorphism.background};
  border: ${({ theme }) => theme.glassmorphism.border};
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: ${({ theme }) => theme.glassmorphism.shadow};
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);

    &::before {
      transform: scaleX(1);
    }
  }

  .btn-text {
    display: inline-flex;
    align-items: center;
    color: var(--primary-color);
    font-weight: 500;
    margin-top: auto;
    padding-top: 1rem;
    transition: all 0.3s ease;

    svg {
      opacity: 0;
      transform: translateX(-10px);
      transition: all 0.3s ease;
      margin-left: 5px;
    }

    &:hover {
      color: var(--secondary-color);

      svg {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
`;

export const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: ${({ theme }) => theme.neumorphism.background};
  box-shadow: ${({ theme }) => theme.neumorphism.shadow1}, ${({ theme }) => theme.neumorphism.shadow2};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${ServiceCard}:hover & {
    transform: rotate(10deg);

    &::before {
      opacity: 1;
    }
  }

  svg {
    font-size: 2.5rem;
    color: var(--primary-color);
    transition: all 0.3s ease;
  }

  ${ServiceCard}:hover svg {
    transform: scale(1.1);
    color: var(--secondary-color);
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 0.5rem;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    transition: width 0.3s ease;
  }

  ${ServiceCard}:hover &::after {
    width: 50px;
  }

  ${ServiceCard}:hover & {
    transform: translateY(-2px);
  }
`;

export const ServiceText = styled.p`
  color: var(--gray-color);
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;
