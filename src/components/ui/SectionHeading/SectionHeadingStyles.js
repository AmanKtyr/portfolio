import styled from 'styled-components';

export const HeadingWrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto 2rem;
  padding: 0 1.5rem;
  position: relative;
  text-align: center;
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
  justify-content: center;
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
`;

export const MainTitle = styled.h2`
  font-size: clamp(2.2rem, 6vw, 3.2rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -2px;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-family: 'monospace';
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  overflow: hidden;

  .accent {
    color: var(--primary-color);
    -webkit-text-stroke: 1px var(--primary-color);
    -webkit-text-fill-color: transparent;
    letter-spacing: -1px;
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
  transform: translateY(20px);
  will-change: transform, opacity;
  opacity: 0;
  transition: transform 0.1s ease;
`;

export const SubHeadingText = styled.p`
  margin: 1.2rem auto 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  max-width: 800px;
  text-align: center;
  line-height: 1.6;
  font-weight: 400;
  opacity: 0;
  transform: translateY(20px);
`;
