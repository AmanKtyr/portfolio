import styled from 'styled-components';

export const TestimonialsContainer = styled.section`
  padding: 6rem 0;
  background-color: transparent;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      theme.isDarkMode
        ? 'radial-gradient(circle at 20% 80%, rgba(30, 64, 175, 0.1), transparent 40%)'
        : 'radial-gradient(circle at 20% 80%, rgba(219, 234, 254, 0.5), transparent 40%)'};
    z-index: -1;
  }

  .testimonials-slider {
    padding-bottom: 4rem;

    .swiper-pagination-bullet {
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
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
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: ${({ theme }) => theme.glassmorphism.shadow};
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: ${({ theme }) =>
      theme.isDarkMode
        ? 'radial-gradient(circle, rgba(59, 130, 246, 0.2), transparent 70%)'
        : 'radial-gradient(circle, rgba(219, 234, 254, 0.7), transparent 70%)'};
    border-radius: 50%;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

export const QuoteIcon = styled.div`
  color: var(--primary-color);
  font-size: 2.5rem;
  margin-bottom: 1rem;
  opacity: 0.3;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;

  ${TestimonialItem}:hover & {
    transform: scale(1.2) rotate(10deg);
    opacity: 0.5;
    color: var(--secondary-color);
  }
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
  position: relative;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    padding: 3px;
    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  ${TestimonialItem}:hover & {
    transform: scale(1.1);

    img {
      transform: scale(1.1);
    }
  }
`;

export const AuthorInfo = styled.div``;

export const AuthorName = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: var(--text-color);
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    transition: width 0.3s ease;
  }

  ${TestimonialItem}:hover & {
    transform: translateY(-2px);

    &::after {
      width: 100%;
    }
  }
`;

export const AuthorPosition = styled.p`
  font-size: 0.9rem;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;

  ${TestimonialItem}:hover & {
    transform: translateX(3px);
  }
`;
