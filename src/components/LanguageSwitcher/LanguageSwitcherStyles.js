import styled from 'styled-components';

export const LanguageSwitcherContainer = styled.div`
  position: relative;
  margin-left: 1rem;
`;

export const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
  }
  
  svg {
    font-size: 1.2rem;
  }
  
  .rotate {
    transform: rotate(180deg);
  }
  
  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
`;

export const LanguageDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${({ theme }) => theme.isDarkMode ? 'var(--card-bg-color)' : 'white'};
  border-radius: var(--border-radius);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  min-width: 120px;
  z-index: 10;
  overflow: hidden;
  margin-top: 0.5rem;
`;

export const LanguageOption = styled.div`
  padding: 0.8rem 1rem;
  cursor: pointer;
  transition: var(--transition);
  background-color: ${({ active, theme }) => 
    active 
      ? theme.isDarkMode 
        ? 'rgba(59, 130, 246, 0.2)' 
        : 'rgba(59, 130, 246, 0.1)' 
      : 'transparent'};
  color: ${({ active }) => active ? 'var(--primary-color)' : 'var(--text-color)'};
  
  &:hover {
    background-color: ${({ theme }) => 
      theme.isDarkMode 
        ? 'rgba(59, 130, 246, 0.3)' 
        : 'rgba(59, 130, 246, 0.2)'};
  }
`;
