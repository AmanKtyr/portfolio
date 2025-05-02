import styled from 'styled-components';

export const ContactContainer = styled.section`
  padding: 6rem 0;
  background-color: white;
  
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
  
  .success-message {
    background-color: rgba(16, 185, 129, 0.1);
    color: var(--success-color);
    padding: 1rem;
    border-radius: var(--border-radius);
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
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
