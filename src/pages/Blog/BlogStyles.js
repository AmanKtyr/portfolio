import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BlogPageContainer = styled.div`
  .container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 2rem;

    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }
`;

export const BlogBanner = styled.div`
  background: #0F172A; /* Dark blue background for dark theme */
  padding: 10rem 0 6rem;
  margin-bottom: 4rem;
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

export const BlogBannerContent = styled.div`
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

export const BlogContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const BlogCard = styled.div`
  backdrop-filter: blur(${({ theme }) => theme.glassmorphism.blur});
  background-color: ${({ theme }) => theme.glassmorphism.background};
  border: ${({ theme }) => theme.glassmorphism.border};
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.glassmorphism.shadow};
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.isDarkMode
      ? '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(56, 189, 248, 0.1)'
      : '0 10px 30px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(226, 232, 240, 0.8)'};
  }
`;

export const BlogImage = styled.div`
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${BlogCard}:hover img {
    transform: scale(1.05);
  }

  .category {
    position: absolute;
    bottom: 15px;
    left: 15px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
    z-index: 2;
  }
`;

export const BlogCardContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: var(--gray-color);

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const BlogTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  line-height: 1.4;

  a {
    color: var(--text-color);
    transition: all 0.3s ease;
    position: relative;

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

    &:hover {
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      &::after {
        width: 100%;
      }
    }
  }
`;

export const BlogExcerpt = styled.p`
  color: var(--text-secondary-color);
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

export const BlogLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: auto;
  position: relative;
  padding: 0.5rem 0;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, var(--primary-color), transparent);
    transform: scaleX(0.3);
    transform-origin: left;
    opacity: 0.5;
    transition: all 0.3s ease;
  }

  svg {
    transition: all 0.3s ease;
  }

  &:hover {
    color: var(--secondary-color);
    gap: 0.8rem;

    &::before {
      transform: scaleX(1);
      opacity: 1;
    }

    svg {
      transform: translateX(3px);
    }
  }
`;

export const BlogSidebar = styled.div`
  position: sticky;
  top: 100px;
`;

export const SidebarWidget = styled.div`
  backdrop-filter: blur(${({ theme }) => theme.glassmorphism.blur});
  background-color: ${({ theme }) => theme.glassmorphism.background};
  border: ${({ theme }) => theme.glassmorphism.border};
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: ${({ theme }) => theme.glassmorphism.shadow};

  .recent-posts {
    .recent-post {
      display: flex;
      margin-bottom: 1rem;

      &:last-child {
        margin-bottom: 0;
      }

      a {
        display: flex;
        align-items: center;
        gap: 1rem;
        color: var(--text-color);
        transition: color 0.3s ease;

        &:hover {
          color: var(--primary-color);
        }

        img {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 8px;
        }

        h4 {
          font-size: 0.9rem;
          margin-bottom: 0.3rem;
          line-height: 1.4;
        }

        span {
          font-size: 0.8rem;
          color: var(--gray-color);
        }
      }
    }
  }
`;

export const SidebarTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  }
`;

export const SearchForm = styled.form`
  display: flex;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background-color: ${({ theme }) => theme.isDarkMode ? 'rgba(15, 23, 42, 0.5)' : 'rgba(255, 255, 255, 0.5)'};
  color: var(--text-color);
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.2);
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--gray-color);
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

export const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const CategoryItem = styled.li`
  margin-bottom: 0.8rem;

  &:last-child {
    margin-bottom: 0;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--text-color);
    transition: color 0.3s ease;
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--border-color);

    svg {
      margin-right: 0.5rem;
      color: var(--primary-color);
    }

    span {
      background-color: ${({ theme }) => theme.isDarkMode ? 'rgba(15, 23, 42, 0.5)' : 'rgba(241, 245, 249, 0.8)'};
      padding: 0.2rem 0.5rem;
      border-radius: 20px;
      font-size: 0.8rem;
    }

    &:hover {
      color: var(--primary-color);
    }
  }
`;

export const TagCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const TagItem = styled.div`
  a {
    display: inline-flex;
    align-items: center;
    background-color: ${({ theme }) => theme.isDarkMode ? 'rgba(15, 23, 42, 0.5)' : 'rgba(241, 245, 249, 0.8)'};
    color: var(--text-color);
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    transition: all 0.3s ease;

    svg {
      margin-right: 0.3rem;
      font-size: 0.7rem;
    }

    &:hover {
      background-color: var(--primary-color);
      color: white;
    }
  }
`;
