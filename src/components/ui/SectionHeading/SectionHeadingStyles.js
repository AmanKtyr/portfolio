import styled from 'styled-components';

export const HeadingWrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto 6rem;
  padding: 0 1.5rem;
  position: relative;
  text-align: left;
  
  @media (max-width: 992px) {
    text-align: center;
  }
`;

export const SectionLabel = styled.div`
  font-family: 'monospace';
  font-size: 0.75rem;
  color: var(--primary-color);
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  opacity: 0.9;
  font-weight: 700;

  &::before {
    content: '${props => props.number || '01'}';
    font-size: 1.1rem;
    font-weight: 900;
    letter-spacing: 0;
    padding: 2px 8px;
    background: ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
    border-radius: 4px;
  }

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

export const MainTitle = styled.h2`
  font-size: clamp(3.5rem, 10vw, 7rem);
  font-weight: 900;
  line-height: 0.85;
  letter-spacing: -5px;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-family: 'monospace';
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .accent {
    color: var(--primary-color);
    -webkit-text-stroke: 1px var(--primary-color);
    -webkit-text-fill-color: transparent;
    letter-spacing: -2px;
    transition: all 0.3s ease;
    
    &:hover {
      -webkit-text-fill-color: var(--primary-color);
    }
  }
`;

export const CharBox = styled.span`
  display: inline-block;
  overflow: hidden;
  height: 1.1em;
  vertical-align: bottom;
`;

export const CharSpan = styled.span`
  display: inline-block;
  transform: translateY(105%);
  will-change: transform, opacity;
  opacity: 0;
`;

export const SubHeadingText = styled.p`
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: clamp(1rem, 2vw, 1.15rem);
  max-width: 600px;
  border-left: 2px solid var(--primary-color);
  padding-left: 1.5rem;
  font-weight: 300;
  opacity: 0;
  transform: translateY(20px);
  
  @media (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
    text-align: left;
  }
`;
