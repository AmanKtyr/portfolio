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
      ? 'radial-gradient(circle, rgba(var(--primary-rgb), 0.15) 0%, transparent 40%)'
      : 'radial-gradient(circle, rgba(var(--primary-rgb), 0.1) 0%, transparent 40%)'};
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
      background-color: ${({ theme }) => theme.colors.cardBg};
      width: 40px;
      height: 40px;
      border-radius: 50%;
      backdrop-filter: blur(5px);
      border: 1px solid ${({ theme }) => theme.colors.border};
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
  background-color: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.small};
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  overflow: hidden;

  &::before {
    display: none;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary-color);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export const QuoteIcon = styled.div`
  color: var(--primary-color);
  font-size: 2rem;
  margin-bottom: 1.2rem;
  opacity: 0.15;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;

  ${TestimonialItem}:hover & {
    opacity: 0.3;
  }
`;

export const TestimonialText = styled.p`
  color: var(--text-color);
  margin-bottom: 2rem;
  line-height: 1.6;
  flex-grow: 1;
  font-size: 0.95rem;
  opacity: 0.8;
  z-index: 1;
`;

export const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  z-index: 1;
`;

export const AuthorImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid var(--primary-color);
  padding: 1px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  ${TestimonialItem}:hover & {
    transform: scale(1.05);
  }
`;

export const AuthorInfo = styled.div``;

export const AuthorName = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.1rem;
  color: var(--text-color);
  transition: all 0.3s ease;
  
  ${TestimonialItem}:hover & {
    color: var(--primary-color);
  }
`;

export const AuthorPosition = styled.p`
  font-size: 0.75rem;
  color: var(--gray-color);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  opacity: 0.7;
`;


