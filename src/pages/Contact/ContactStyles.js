import styled from 'styled-components';

export const WatermarkText = styled.div`
  position: absolute;
  font-size: clamp(8rem, 20vw, 22rem);
  font-weight: 900;
  color: ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'};
  letter-spacing: -15px;
  text-transform: uppercase;
  z-index: 0;
  left: -2%;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  font-family: 'monospace';
  writing-mode: vertical-lr;
  rotate: 180deg;
`;

export const TechBadge = styled.div`
  position: absolute;
  padding: 0.4rem 0.8rem;
  background: ${({ theme }) => theme.isDarkMode ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
  border: 1px solid var(--primary-color);
  font-family: 'monospace';
  font-size: 0.6rem;
  color: var(--primary-color);
  border-radius: 2px;
  backdrop-filter: blur(10px);
  z-index: 5;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  letter-spacing: 1px;
  pointer-events: none;

  &::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    background: var(--primary-color);
    border-radius: 50%;
    margin-right: 8px;
    animation: blink 1.5s infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
`;

export const ContactPageContainer = styled.div`
  @keyframes scan {
    0% { top: -100%; }
    100% { top: 100%; }
  }

  @keyframes gridDrift {
    0% { background-position: 0 0; }
    100% { background-position: 100px 100px; }
  }

  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: 
      radial-gradient(var(--primary-color) 1px, transparent 1px);
    background-size: 60px 60px;
    opacity: 0.04;
    animation: gridDrift 30s linear infinite;
    z-index: 0;
  }
`;

export const ContactBanner = styled.div`
  padding: 8rem 0 6rem;
  position: relative;
  background: ${({ theme }) => theme.isDarkMode ? '#030712' : '#f8fafc'};
  border-bottom: 2px solid var(--primary-color);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background-image: 
      radial-gradient(var(--primary-color) 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: 0.05;
    z-index: 0;
    top: -50%;
    left: -50%;
    animation: drift 60s linear infinite;
  }

  @keyframes drift {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

export const ContactBannerContent = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  gap: 4rem;
  position: relative;
  z-index: 10;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .banner-text {
    h1 {
      font-size: clamp(3rem, 10vw, 6rem);
      font-weight: 900;
      line-height: 0.85;
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.text};
      font-family: 'monospace';
      letter-spacing: -4px;
      text-transform: uppercase;
      
      span {
        display: block;
        position: relative;
        transition: letter-spacing 0.5s ease;

        &:hover {
          letter-spacing: 1px;
        }
        
        &::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          color: var(--primary-color);
          -webkit-text-stroke: 1px var(--primary-color);
          overflow: hidden;
          transition: width 0.5s ease-in-out;
        }

        &:hover::after {
          width: 100%;
        }
      }
    }

    p {
      font-size: 1.15rem;
      color: var(--gray-color);
      max-width: 550px;
      line-height: 1.5;
      border-left: 5px solid var(--primary-color);
      padding-left: 2rem;
      font-weight: 300;
      backdrop-filter: blur(5px);
      font-family: inherit;

      @media (max-width: 992px) {
        border-left: none;
        padding-left: 0;
        margin: 0 auto;
      }
    }
  }
`;

export const VisualEngine = styled.div`
  position: relative;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    transform: scale(0.7);
    height: 350px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const RotatingRing = styled.div`
  position: absolute;
  border: 1px solid ${({ color }) => color || 'rgba(var(--primary-rgb), 0.1)'};
  border-radius: 50%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  animation: rotate ${({ duration }) => duration}s linear infinite;
  animation-direction: ${({ reverse }) => reverse ? 'reverse' : 'normal'};

  &::after {
    content: '';
    position: absolute;
    top: -5px;
    left: 50%;
    width: 10px;
    height: 10px;
    background: var(--primary-color);
    border-radius: 50%;
    box-shadow: 0 0 15px var(--primary-color);
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

export const VisualNode = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.isDarkMode ? '#0f172a' : '#ffffff'};
  border: 1px solid var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  color: var(--primary-color);
  box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-color);
    color: white;
    box-shadow: 0 0 30px var(--primary-color);
    transform: scale(1.2) rotate(-360deg);
  }
`;

export const GridCoordinates = styled.div`
  position: absolute;
  font-family: 'monospace';
  font-size: 0.7rem;
  color: var(--primary-color);
  opacity: 0.3;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 1;

  span {
    display: block;
  }
`;

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 6rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const ContactInfo = styled.div`
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
    margin-bottom: 2rem;
    color: var(--gray-color);
    line-height: 1.8;
  }
`;

export const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  .icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(var(--primary-rgb), 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    color: var(--primary-color);
    font-size: 1.2rem;
  }

  .text {
    h4 {
      font-size: 1.1rem;
      margin-bottom: 0.3rem;
    }

    p {
      margin-bottom: 0;
      color: var(--gray-color);
    }
  }
`;

export const ContactSocial = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

export const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: var(--transition);

  &:hover {
    background-color: var(--secondary-color);
    transform: translateY(-3px);
  }
`;

export const ContactForm = styled.form`
  background: ${({ theme }) => theme.isDarkMode ? 'rgba(15, 23, 42, 0.4)' : '#ffffff'};
  border: 1px solid ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  padding: 3rem;
  position: relative;
  overflow: hidden;

  h3 {
    font-size: 1.8rem;
    font-family: 'monospace';
    text-transform: uppercase;
    margin-bottom: 2rem;
    color: var(--primary-color);
  }

  .btn-primary {
    display: inline-block;
    padding: 1rem 2rem;
    background: var(--primary-color);
    color: white;
    font-family: 'monospace';
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 2px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: -100%;
      left: 0;
      width: 100%;
      height: 4px;
      background: rgba(255, 255, 255, 0.3);
      filter: blur(2px);
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(var(--primary-rgb), 0.2);

      &::before {
        animation: scan 2s linear infinite;
      }
    }

    &:disabled {
      background: var(--gray-color);
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
`;

export const FormControl = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.isDarkMode ? 'rgba(30, 41, 59, 0.3)' : 'rgba(255, 255, 255, 0.3)'};
  border: 1px solid ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  font-family: 'monospace';
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    background: ${({ theme }) => theme.isDarkMode ? 'rgba(30, 41, 59, 0.5)' : 'rgba(255, 255, 255, 0.5)'};
    box-shadow: 0 0 15px rgba(var(--primary-rgb), 0.1);
  }

  &::placeholder {
    color: var(--gray-color);
    opacity: 0.5;
  }
`;

export const ErrorMessage = styled.small`
  color: var(--danger-color);
  position: absolute;
  bottom: -20px;
  left: 0;
  font-size: 0.8rem;
`;

export const ContactMap = styled.div`
  margin: 0 0 4rem;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.glassmorphism.shadow};
  border: ${({ theme }) => theme.glassmorphism.border};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(var(--primary-rgb), 0.03);
    pointer-events: none;
    border-radius: 24px;
  }

  iframe {
    width: 100%;
    height: 420px;
    border: 0;
    display: block;
    filter: ${({ theme }) => theme.isDarkMode ? 'invert(90%) hue-rotate(180deg)' : 'none'};
  }
`;



