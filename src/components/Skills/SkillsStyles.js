import styled from 'styled-components';

export const SkillsContainer = styled.section`
  padding: 6rem 0;
  background-color: #f1f5f9;
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

export const SkillIcon = styled.div`
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
`;

export const SkillTitle = styled.h3`
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

export const SkillText = styled.p`
  color: var(--gray-color);
  margin-bottom: 1.5rem;
`;

export const SkillList = styled.ul`
  li {
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
  }
`;
