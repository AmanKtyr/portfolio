import styled from 'styled-components';

export const TestimonialsContainer = styled.section`
  padding: 6rem 0;
  background-color: ${({ theme }) => theme.isDarkMode ? 'var(--dark-color)' : 'white'};
  
  .testimonials-slider {
    padding-bottom: 4rem;
    
    .swiper-pagination-bullet {
      background-color: var(--primary-color);
      opacity: 0.5;
      
      &-active {
        opacity: 1;
      }
    }
    
    .swiper-button-next,
    .swiper-button-prev {
      color: var(--primary-color);
      
      &:after {
        font-size: 1.5rem;
      }
    }
  }
`;

export const TestimonialItem = styled.div`
  background-color: ${({ theme }) => theme.isDarkMode ? 'var(--card-bg-color)' : '#f8fafc'};
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const QuoteIcon = styled.div`
  color: var(--primary-color);
  font-size: 2rem;
  margin-bottom: 1rem;
  opacity: 0.3;
`;

export const TestimonialText = styled.p`
  color: var(--text-color);
  margin-bottom: 2rem;
  line-height: 1.8;
  flex-grow: 1;
  font-style: italic;
`;

export const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
`;

export const AuthorImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;
  border: 3px solid var(--primary-color);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AuthorInfo = styled.div``;

export const AuthorName = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: var(--text-color);
`;

export const AuthorPosition = styled.p`
  font-size: 0.9rem;
  color: var(--primary-color);
`;
