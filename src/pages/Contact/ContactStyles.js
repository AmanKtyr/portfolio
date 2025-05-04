import styled from 'styled-components';

export const ContactPageContainer = styled.div``;

export const ContactBanner = styled.div`
  background: #0F172A; /* Dark blue background for dark theme */
  padding: 10rem 0 6rem;
  margin-bottom: 6rem;
  position: relative;
  overflow: hidden;

  /* Animated gradient background */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      125deg,
      rgba(147, 51, 234, 0.15) 0%, /* Purple */
      rgba(56, 189, 248, 0.15) 50%, /* Sky blue */
      rgba(147, 51, 234, 0.15) 100% /* Purple */
    );
    background-size: 200% 200%;
    animation: gradientAnimation 15s ease infinite;
    z-index: 1;
  }

  /* Particle effect */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:
      radial-gradient(circle at 20% 30%, rgba(56, 189, 248, 0.3) 0, transparent 10px),
      radial-gradient(circle at 80% 40%, rgba(147, 51, 234, 0.3) 0, transparent 10px),
      radial-gradient(circle at 40% 80%, rgba(56, 189, 248, 0.3) 0, transparent 8px),
      radial-gradient(circle at 60% 10%, rgba(147, 51, 234, 0.3) 0, transparent 12px),
      radial-gradient(circle at 10% 60%, rgba(56, 189, 248, 0.3) 0, transparent 6px),
      radial-gradient(circle at 90% 90%, rgba(147, 51, 234, 0.3) 0, transparent 8px);
    z-index: 2;
  }

  /* Grid pattern overlay */
  .grid-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(56, 189, 248, 0.05) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(56, 189, 248, 0.05) 1px, transparent 1px);
    background-size: 30px 30px;
    z-index: 3;
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const ContactBannerContent = styled.div`
  text-align: center;
  color: white;
  position: relative;
  z-index: 10;

  h1 {
    font-size: 4.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    background: linear-gradient(to right, #38BDF8, #9333EA); /* Sky blue to purple gradient */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
    letter-spacing: -1px;

    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1.4rem;
    max-width: 600px;
    margin: 0 auto;
    color: #F1F5F9; /* Light gray */
    font-weight: 300;
    letter-spacing: 0.5px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 80px;
      height: 4px;
      background: linear-gradient(to right, #38BDF8, #9333EA);
      margin: 1.5rem auto 0;
      border-radius: 2px;
    }

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  /* Floating elements for visual interest */
  .floating-element {
    position: absolute;
    border-radius: 50%;
    filter: blur(10px);
    opacity: 0.5;
    z-index: -1;
  }

  .element-1 {
    width: 100px;
    height: 100px;
    background: #38BDF8; /* Sky blue */
    top: -50px;
    left: 20%;
    animation: float 8s ease-in-out infinite;
  }

  .element-2 {
    width: 150px;
    height: 150px;
    background: #9333EA; /* Purple */
    bottom: -70px;
    right: 15%;
    animation: float 10s ease-in-out infinite reverse;
  }

  @keyframes float {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
    100% {
      transform: translateY(0) rotate(0deg);
    }
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
    background-color: rgba(37, 99, 235, 0.1);
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
  background-color: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 1.5rem;
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
  }

  .success-message {
    background-color: rgba(16, 185, 129, 0.1);
    color: var(--success-color);
    padding: 1rem;
    border-radius: var(--border-radius);
    margin-bottom: 1.5rem;
  }

  .btn-primary {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background-color: var(--primary-color);
    color: white;
    border-radius: var(--border-radius);
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: var(--transition);
    width: 100%;

    &:hover {
      background-color: var(--secondary-color);
    }

    &:disabled {
      background-color: var(--gray-color);
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
  padding: 0.8rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: var(--border-radius);
  font-family: inherit;
  font-size: 1rem;
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  &.error {
    border-color: var(--danger-color);
  }

  &::placeholder {
    color: #a0aec0;
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
  height: 450px;
  width: 100%;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;
