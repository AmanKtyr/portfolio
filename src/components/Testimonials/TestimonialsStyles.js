import styled from 'styled-components';

export const TestimonialsContainer = styled.section`
  padding: 4.5rem 0;
  background-color: transparent;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: ${({ theme }) =>
    theme.isDarkMode
      ? 'radial-gradient(circle, rgba(128, 0, 0, 0.15) 0%, transparent 40%)'
      : 'radial-gradient(circle, rgba(128, 0, 0, 0.1) 0%, transparent 40%)'};
    z-index: -1;
  }

  .testimonials-slider {
    padding-bottom: 4rem;

    .swiper-pagination-bullet {
      background: var(--primary-color);
      opacity: 0.5;
      transition: all 0.3s ease;

      &-active {
        opacity: 1;
        transform: scale(1.2);
      }
    }

    .swiper-button-next,
    .swiper-button-prev {
      color: var(--primary-color);
      background-color: ${({ theme }) => theme.glassmorphism.background};
      width: 40px;
      height: 40px;
      border-radius: 50%;
      backdrop-filter: blur(5px);
      transition: all 0.3s ease;

      &:after {
        font-size: 1.2rem;
      }

      &:hover {
        background-color: var(--primary-color);
        color: white;
        transform: scale(1.1);
      }
    }
  }
`;

export const TestimonialItem = styled.div`
  backdrop-filter: blur(${({ theme }) => theme.glassmorphism.blur});
  background-color: ${({ theme }) => theme.glassmorphism.background};
  border: ${({ theme }) => theme.glassmorphism.border};
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.glassmorphism.shadow};
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    right: -20px;
    width: 120px;
    background: ${({ theme }) =>
    theme.isDarkMode
      ? 'radial-gradient(circle, rgba(128, 0, 0, 0.2) 0%, transparent 70%)'
      : 'radial-gradient(circle, rgba(128, 0, 0, 0.15) 0%, transparent 70%)'};
    border-radius: 50%;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(128, 0, 0, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

export const QuoteIcon = styled.div`
  color: var(--primary-color);
  font-size: 3rem;
  margin-bottom: 1.5rem;
  opacity: 0.2;
  transition: all 0.4s ease;
  position: relative;
  z-index: 1;

  ${TestimonialItem}:hover & {
    transform: scale(1.1) rotate(5deg);
    opacity: 0.4;
    color: var(--secondary-color);
  }
`;

export const TestimonialText = styled.p`
  color: var(--text-color);
  margin-bottom: 2.5rem;
  line-height: 1.8;
  flex-grow: 1;
  font-style: italic;
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  opacity: 0.9;
  z-index: 1;
`;

export const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  z-index: 1;
`;

export const AuthorImage = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1.25rem;
  position: relative;
  transition: all 0.4s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border: 2px solid var(--primary-color);
  padding: 2px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    transition: transform 0.4s ease;
  }

  ${TestimonialItem}:hover & {
    transform: scale(1.1) rotate(5deg);
    
    img {
      transform: scale(1.1);
    }
  }
`;

export const AuthorInfo = styled.div``;

export const AuthorName = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: var(--text-color);
  transition: all 0.3s ease;
  
  ${TestimonialItem}:hover & {
    color: var(--primary-color);
  }
`;

export const AuthorPosition = styled.p`
  font-size: 0.85rem;
  background: var(--primary-color);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;


