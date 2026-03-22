import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  z-index: 1001;
  transition: all 0.3s ease;

  &:hover {
    .logo-svg {
      transform: scale(1.1) rotate(5deg);
      filter: drop-shadow(0 0 8px var(--primary-color));
    }
    
    .logo-text {
      span {
        color: var(--primary-color);
      }
    }
  }
`;

export const LogoSvg = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
  }

  /* Different sizes if needed */
  &.small {
    width: 32px;
    height: 32px;
  }

  &.large {
    width: 50px;
    height: 50px;
  }
`;

export const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;

  .name {
    font-size: 1.4rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: -0.5px;
    
    span {
      color: var(--primary-color);
      transition: color 0.3s ease;
    }
  }

  .tagline {
    font-size: 0.65rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
    color: var(--gray-color);
    margin-top: 2px;
    opacity: 0.8;
  }

  &.footer {
    .name {
      font-size: 1.8rem;
    }
    .tagline {
      font-size: 0.8rem;
    }
  }
`;
