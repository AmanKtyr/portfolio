import styled from 'styled-components';

export const SkillsContainer = styled.section`
  padding: 6rem 0;
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
        ? 'radial-gradient(circle at 30% 30%, rgba(30, 64, 175, 0.15), transparent 30%)'
        : 'radial-gradient(circle at 30% 30%, rgba(219, 234, 254, 0.7), transparent 30%)'};
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
        ? 'radial-gradient(circle at 70% 70%, rgba(30, 64, 175, 0.15), transparent 30%)'
        : 'radial-gradient(circle at 70% 70%, rgba(219, 234, 254, 0.7), transparent 30%)'};
    z-index: -1;
  }
`;

export const SkillsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillCard = styled.div`
  background-color: ${({ theme }) => theme.neumorphism.background};
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: ${({ theme }) => theme.neumorphism.shadow1}, ${({ theme }) => theme.neumorphism.shadow2};
  transition: all 0.3s ease;
  height: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0)
    );
    transform: rotate(30deg);
    transition: transform 0.7s ease;
    z-index: 1;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.neumorphism.shadow1.replace('10px', '15px')},
                ${({ theme }) => theme.neumorphism.shadow2.replace('-10px', '-15px')};

    &::before {
      transform: rotate(30deg) translate(100%, 100%);
    }
  }

  &:active {
    box-shadow: ${({ theme }) => theme.neumorphism.activeShadow1},
                ${({ theme }) => theme.neumorphism.activeShadow2};
  }
`;

export const SkillIcon = styled.div`
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
  display: inline-block;
  position: relative;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 60px;
    background: ${({ theme }) =>
      theme.isDarkMode
        ? 'rgba(59, 130, 246, 0.1)'
        : 'rgba(219, 234, 254, 0.5)'};
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.3s ease;
  }

  ${SkillCard}:hover & {
    transform: scale(1.1) rotate(5deg);

    &::after {
      width: 70px;
      height: 70px;
      background: ${({ theme }) =>
        theme.isDarkMode
          ? 'rgba(59, 130, 246, 0.2)'
          : 'rgba(219, 234, 254, 0.7)'};
    }
  }
`;

export const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 0.5rem;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 0.3s ease;

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

  ${SkillCard}:hover &::after {
    width: 50px;
  }
`;

export const SkillText = styled.p`
  color: var(--gray-color);
  margin-bottom: 1.5rem;
`;

export const SkillList = styled.ul`
  li {
    margin-bottom: 0.8rem;
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;
    padding: 0.5rem;
    border-radius: ${({ theme }) => theme.borderRadius.small};

    &:hover {
      transform: translateX(5px);
      background-color: ${({ theme }) =>
        theme.isDarkMode
          ? 'rgba(30, 41, 59, 0.3)'
          : 'rgba(255, 255, 255, 0.5)'};
    }

    &::before {
      content: '→';
      color: var(--primary-color);
      font-weight: bold;
      display: inline-block;
      width: 1.5em;
      margin-right: 0.5rem;
      transition: transform 0.3s ease;
    }

    &:hover::before {
      transform: translateX(3px);
    }
  }
`;
