import styled from 'styled-components';

export const AboutContainer = styled.section`
  padding: 6rem 0;
  background-color: white;
`;

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const AboutImage = styled.div`
  position: relative;

  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 60px;
    height: 60px;
    border-top: 3px solid var(--primary-color);
    border-left: 3px solid var(--primary-color);
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    right: -20px;
    width: 60px;
    height: 60px;
    border-bottom: 3px solid var(--primary-color);
    border-right: 3px solid var(--primary-color);
    z-index: -1;
  }

  @media (max-width: 992px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

export const AboutText = styled.div`
  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 1rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 3px;
      background-color: var(--primary-color);
    }

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  p {
    margin-bottom: 1.5rem;
    color: var(--gray-color);
    line-height: 1.8;
  }
`;

export const AboutInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;

  strong {
    margin-right: 0.5rem;
    color: var(--dark-color);
  }
`;

export const AboutSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 1.5rem;
    color: var(--primary-color);
  }

  h4 {
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

export const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: var(--border-radius);
  font-weight: 500;
  transition: var(--transition);
  margin-top: 1rem;
  grid-column: 1 / -1;
  width: fit-content;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background-color: var(--secondary-color);
    transform: translateY(-3px);
  }

  @media (max-width: 576px) {
    width: 100%;
    justify-content: center;
  }
`;
