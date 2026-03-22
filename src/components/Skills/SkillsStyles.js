import styled from 'styled-components';

export const SkillsContainer = styled.section`
  padding: 2rem 0 6rem;
  background-color: transparent;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      theme.isDarkMode
        ? 'radial-gradient(circle at 0% 0%, rgba(128, 0, 0, 0.15) 0%, transparent 40%)'
        : 'radial-gradient(circle at 0% 0%, rgba(128, 0, 0, 0.1) 0%, transparent 40%)'};
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      theme.isDarkMode
        ? 'radial-gradient(circle at 100% 100%, rgba(128, 0, 0, 0.15) 0%, transparent 40%)'
        : 'radial-gradient(circle at 100% 100%, rgba(128, 0, 0, 0.1) 0%, transparent 40%)'};
    z-index: -1;
  }
`;

export const SummaryWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
  
  p {
    color: var(--text-secondary-color);
    font-size: clamp(1.1rem, 2vw, 1.25rem);
    line-height: 1.8;
    margin-bottom: 3rem;
  }
`;

export const TechIconsGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 4rem;
`;

export const TechIconCircle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: ${({ theme }) => theme.glassmorphism.background};
  border: ${({ theme }) => theme.glassmorphism.border};
  box-shadow: ${({ theme }) => theme.glassmorphism.shadow};
  backdrop-filter: blur(${({ theme }) => theme.glassmorphism.blur});
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: var(--primary-color);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-8px) scale(1.1);
    box-shadow: 0 15px 30px rgba(128, 0, 0, 0.2);
    border-color: rgba(128, 0, 0, 0.3);
    color: white;
    background: var(--primary-color);
  }
`;

export const ActionButton = styled.div`
  display: inline-block;
  
  a {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem 2.5rem;
    background: var(--primary-color);
    color: white;
    font-weight: 600;
    font-size: 1.1rem;
    border-radius: 30px;
    box-shadow: 0 8px 20px rgba(128, 0, 0, 0.3);
    transition: all 0.4s ease;
    text-decoration: none;

    svg {
      transition: transform 0.3s ease;
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 25px rgba(128, 0, 0, 0.4);
      background: var(--secondary-color);

      svg {
        transform: translateX(5px);
      }
    }
  }
`;
