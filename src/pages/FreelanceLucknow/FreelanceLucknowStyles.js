import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.05); }
`;

export const PageContainer = styled.main`
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  padding-top: 80px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const HeroSection = styled.section`
  position: relative;
  padding: 5rem 1.5rem 4rem;
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 3rem 1rem 3rem;
  }
`;

export const LocationBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background: ${({ theme }) =>
    theme.isDarkMode ? 'rgba(8, 203, 0, 0.1)' : 'rgba(217, 44, 84, 0.08)'};
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.2);

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--primary-color);
    animation: ${pulse} 2s infinite ease-in-out;
  }
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.2rem, 5.5vw, 4.2rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -1.5px;
  margin-bottom: 1.5rem;
  max-width: 1050px;
  margin-left: auto;
  margin-right: auto;

  .highlight {
    color: var(--primary-color);
    text-shadow: 0 0 25px rgba(var(--primary-rgb), 0.35);
  }
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(1.05rem, 2vw, 1.3rem);
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.gray};
  max-width: 850px;
  margin: 0 auto 2.5rem;
  font-weight: 400;
`;

export const HeroActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  flex-wrap: wrap;
  margin-bottom: 3.5rem;
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.95rem 2rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
  background: var(--primary-color);
  color: ${({ theme }) => (theme.isDarkMode ? '#030712' : '#ffffff')} !important;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 10px 25px rgba(var(--primary-rgb), 0.35);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(var(--primary-rgb), 0.5);
    color: ${({ theme }) => (theme.isDarkMode ? '#030712' : '#ffffff')} !important;
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.95rem 1.8rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  background: ${({ theme }) =>
    theme.isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)'};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) =>
      theme.isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'};
    border-color: var(--primary-color);
    color: var(--primary-color);
    transform: translateY(-3px);
  }
`;

export const WhatsAppPill = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.95rem 1.8rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
  background: #25d366;
  color: #030712 !important;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(37, 211, 102, 0.45);
    color: #030712 !important;
  }
`;

export const QuickStatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 1050px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  padding: 1.5rem 1.2rem;
  border-radius: 12px;
  background: ${({ theme }) =>
    theme.isDarkMode ? 'rgba(15, 23, 42, 0.6)' : 'rgba(241, 245, 249, 0.8)'};
  border: 1px solid ${({ theme }) => theme.colors.border};
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(var(--primary-rgb), 0.15);
  }

  .stat-number {
    font-size: 2.2rem;
    font-weight: 800;
    color: var(--primary-color);
    line-height: 1;
    margin-bottom: 0.4rem;
    font-family: 'monospace';
  }

  .stat-label {
    font-size: 0.9rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

/* AEO Box: Target for Google Snippets & AI Overviews */
export const AEOAnswerCard = styled.article`
  max-width: 1050px;
  margin: 4rem auto 2rem;
  padding: 2rem 2.5rem;
  border-radius: 14px;
  background: ${({ theme }) =>
    theme.isDarkMode
      ? 'linear-gradient(135deg, rgba(8, 203, 0, 0.08) 0%, rgba(15, 23, 42, 0.9) 100%)'
      : 'linear-gradient(135deg, rgba(217, 44, 84, 0.06) 0%, rgba(248, 250, 252, 0.9) 100%)'};
  border: 1px solid var(--primary-color);
  box-shadow: 0 12px 35px rgba(var(--primary-rgb), 0.12);
  text-align: left;
  position: relative;

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 2.5rem 1rem;
  }

  .badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: var(--primary-color);
    color: ${({ theme }) => (theme.isDarkMode ? '#030712' : '#ffffff')};
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 4px;
    margin-bottom: 0.9rem;
  }

  h2 {
    font-size: clamp(1.3rem, 2.8vw, 1.8rem);
    font-weight: 700;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    font-size: 1.05rem;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 1rem;

    strong {
      color: ${({ theme }) => theme.colors.text};
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.6rem 1.5rem;
    margin: 1.2rem 0 0;
    padding-left: 1.2rem;

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }

    li {
      color: ${({ theme }) => theme.colors.textSecondary};
      font-size: 0.95rem;
      line-height: 1.5;

      &::marker {
        color: var(--primary-color);
      }
    }
  }
`;

export const SectionWrapper = styled.section`
  padding: 5rem 1.5rem;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    padding: 3.5rem 1rem;
  }
`;

export const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3.5rem;

  .badge {
    font-family: 'monospace';
    color: var(--primary-color);
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
    display: block;
  }

  h2 {
    font-size: clamp(2rem, 4.5vw, 3rem);
    font-weight: 800;
    letter-spacing: -1px;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.gray};
    line-height: 1.6;
  }
`;

/* Services Grid */
export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.div`
  padding: 2.2rem;
  border-radius: 14px;
  background: ${({ theme }) =>
    theme.isDarkMode ? 'rgba(15, 23, 42, 0.65)' : 'rgba(255, 255, 255, 0.9)'};
  border: 1px solid ${({ theme }) => theme.colors.border};
  backdrop-filter: blur(12px);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-6px);
    box-shadow: 0 15px 35px rgba(var(--primary-rgb), 0.18);
  }

  .icon-wrap {
    width: 54px;
    height: 54px;
    border-radius: 12px;
    background: ${({ theme }) =>
      theme.isDarkMode ? 'rgba(8, 203, 0, 0.12)' : 'rgba(217, 44, 84, 0.1)'};
    color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(var(--primary-rgb), 0.2);
  }

  h3 {
    font-size: 1.35rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;
    margin-bottom: 1.2rem;
    flex-grow: 1;
  }

  .service-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: auto;

    span {
      font-size: 0.75rem;
      padding: 0.25rem 0.6rem;
      border-radius: 4px;
      font-family: 'monospace';
      background: ${({ theme }) =>
        theme.isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
      color: ${({ theme }) => theme.colors.textSecondary};
      border: 1px solid ${({ theme }) => theme.colors.border};
    }
  }
`;

/* Comparison Table (Freelance vs Agency) */
export const ComparisonTableWrapper = styled.div`
  overflow-x: auto;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) =>
    theme.isDarkMode ? 'rgba(15, 23, 42, 0.7)' : 'rgba(255, 255, 255, 0.95)'};
  backdrop-filter: blur(10px);
  margin-top: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

export const ComparisonTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  th,
  td {
    padding: 1.2rem 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  th {
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    background: ${({ theme }) =>
      theme.isDarkMode ? 'rgba(30, 41, 59, 0.8)' : 'rgba(241, 245, 249, 0.9)'};

    &.highlight-col {
      color: var(--primary-color);
      border-bottom: 2px solid var(--primary-color);
    }
  }

  td {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.textSecondary};

    &.feature-name {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text};
    }

    &.freelancer-val {
      font-weight: 600;
      color: var(--primary-color);
    }

    &.agency-val {
      color: ${({ theme }) => theme.colors.gray};
    }
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

/* Lucknow Localities Section */
export const LocalitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
  margin-top: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const LocalityCard = styled.div`
  padding: 1.2rem;
  border-radius: 10px;
  background: ${({ theme }) =>
    theme.isDarkMode ? 'rgba(15, 23, 42, 0.5)' : 'rgba(241, 245, 249, 0.7)'};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.25s ease;

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-3px);
  }

  .area-name {
    font-weight: 700;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.3rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: var(--primary-color);
    }
  }

  .area-desc {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.gray};
    line-height: 1.4;
  }
`;

/* Project Showcase */
export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectItemCard = styled.div`
  border-radius: 14px;
  overflow: hidden;
  background: ${({ theme }) =>
    theme.isDarkMode ? 'rgba(15, 23, 42, 0.6)' : 'rgba(255, 255, 255, 0.9)'};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(var(--primary-rgb), 0.15);
  }

  .card-body {
    padding: 1.8rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .category {
    font-size: 0.75rem;
    font-family: 'monospace';
    text-transform: uppercase;
    color: var(--primary-color);
    font-weight: 700;
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;
    margin-bottom: 1.2rem;
    flex-grow: 1;
  }

  .tech-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-bottom: 1.2rem;

    span {
      font-size: 0.75rem;
      padding: 0.2rem 0.55rem;
      border-radius: 4px;
      background: ${({ theme }) =>
        theme.isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
      color: ${({ theme }) => theme.colors.gray};
    }
  }

  .links-row {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: auto;
    padding-top: 1rem;
    border-top: 1px solid ${({ theme }) => theme.colors.border};

    a {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--primary-color);
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

/* Workflow Timeline */
export const WorkflowGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

export const WorkflowStep = styled.div`
  padding: 1.8rem;
  border-radius: 12px;
  background: ${({ theme }) =>
    theme.isDarkMode ? 'rgba(15, 23, 42, 0.6)' : 'rgba(241, 245, 249, 0.7)'};
  border: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;

  .step-num {
    font-size: 2rem;
    font-weight: 900;
    font-family: 'monospace';
    color: var(--primary-color);
    opacity: 0.7;
    margin-bottom: 0.5rem;
  }

  h4 {
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.88rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.5;
  }
`;

/* Pricing Section */
export const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    max-width: 600px;
    margin: 2rem auto 0;
  }
`;

export const PricingCard = styled.div`
  padding: 2.5rem 2rem;
  border-radius: 16px;
  background: ${({ theme, featured }) =>
    featured
      ? theme.isDarkMode
        ? 'linear-gradient(180deg, rgba(8, 203, 0, 0.12) 0%, rgba(15, 23, 42, 0.85) 100%)'
        : 'linear-gradient(180deg, rgba(217, 44, 84, 0.1) 0%, rgba(255, 255, 255, 0.95) 100%)'
      : theme.isDarkMode
      ? 'rgba(15, 23, 42, 0.6)'
      : 'rgba(255, 255, 255, 0.9)'};
  border: 2px solid
    ${({ featured }) => (featured ? 'var(--primary-color)' : 'transparent')};
  box-shadow: ${({ featured }) =>
    featured ? '0 15px 40px rgba(var(--primary-rgb), 0.25)' : 'none'};
  display: flex;
  flex-direction: column;
  position: relative;

  .featured-tag {
    position: absolute;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--primary-color);
    color: ${({ theme }) => (theme.isDarkMode ? '#030712' : '#ffffff')};
    padding: 0.3rem 1rem;
    font-size: 0.75rem;
    font-weight: 800;
    border-radius: 50px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
  }

  .tier-desc {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.gray};
    margin-bottom: 1.5rem;
    min-height: 40px;
  }

  .price-wrap {
    margin-bottom: 1.8rem;

    .inr {
      font-size: 2.3rem;
      font-weight: 800;
      color: var(--primary-color);
      font-family: 'monospace';
    }

    .usd {
      font-size: 0.95rem;
      color: ${({ theme }) => theme.colors.gray};
      margin-left: 0.5rem;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem;
    flex-grow: 1;

    li {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.colors.textSecondary};
      margin-bottom: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.6rem;

      svg {
        color: var(--primary-color);
        flex-shrink: 0;
      }
    }
  }
`;

/* FAQ Accordion */
export const FAQList = styled.div`
  max-width: 900px;
  margin: 2rem auto 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FAQItem = styled.div`
  border-radius: 12px;
  background: ${({ theme }) =>
    theme.isDarkMode ? 'rgba(15, 23, 42, 0.6)' : 'rgba(255, 255, 255, 0.9)'};
  border: 1px solid
    ${({ isOpen }) => (isOpen ? 'var(--primary-color)' : 'rgba(255, 255, 255, 0.08)')};
  overflow: hidden;
  transition: all 0.3s ease;
`;

export const FAQQuestion = styled.button`
  width: 100%;
  padding: 1.4rem 1.8rem;
  text-align: left;
  background: transparent;
  border: none;
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  cursor: pointer;

  &:hover {
    color: var(--primary-color);
  }

  .icon {
    font-size: 1.1rem;
    color: var(--primary-color);
    transition: transform 0.3s ease;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;

export const FAQAnswer = styled.div`
  padding: 0 1.8rem 1.5rem;
  font-size: 0.95rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
  border-top: 1px solid
    ${({ theme }) =>
      theme.isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  padding-top: 1rem;
`;

/* Final CTA Section */
export const FinalCTAContainer = styled.div`
  max-width: 1050px;
  margin: 4rem auto 0;
  padding: 3.5rem 3rem;
  border-radius: 20px;
  background: ${({ theme }) =>
    theme.isDarkMode
      ? 'linear-gradient(135deg, rgba(8, 203, 0, 0.15) 0%, rgba(15, 23, 42, 0.95) 100%)'
      : 'linear-gradient(135deg, rgba(217, 44, 84, 0.12) 0%, rgba(248, 250, 252, 0.95) 100%)'};
  border: 1px solid var(--primary-color);
  box-shadow: 0 20px 50px rgba(var(--primary-rgb), 0.2);
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 2.5rem 1.8rem;
    gap: 2rem;
  }

  .cta-info {
    h2 {
      font-size: clamp(2rem, 4vw, 2.8rem);
      font-weight: 800;
      line-height: 1.2;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.05rem;
      line-height: 1.6;
      color: ${({ theme }) => theme.colors.textSecondary};
      margin-bottom: 1.8rem;
    }

    .direct-contacts {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      a {
        color: ${({ theme }) => theme.colors.text};
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        font-size: 0.95rem;
        font-weight: 600;

        &:hover {
          color: var(--primary-color);
        }

        svg {
          color: var(--primary-color);
        }
      }
    }
  }
`;

export const QuickInquiryCard = styled.form`
  padding: 2rem;
  border-radius: 14px;
  background: ${({ theme }) =>
    theme.isDarkMode ? 'rgba(3, 7, 18, 0.8)' : 'rgba(255, 255, 255, 0.95)'};
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 0.85rem 1rem;
    border-radius: 8px;
    background: ${({ theme }) =>
      theme.isDarkMode ? '#0b1329' : '#f8fafc'};
    border: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.9rem;
    font-family: inherit;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 10px rgba(var(--primary-rgb), 0.3);
    }
  }

  select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2308cb00' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1.1em;
    padding-right: 2.5rem;

    option {
      background-color: ${({ theme }) => (theme.isDarkMode ? '#0f172a' : '#ffffff')} !important;
      color: ${({ theme }) => (theme.isDarkMode ? '#f8fafc' : '#0f172a')} !important;
      padding: 0.8rem 1rem;
    }
  }

  option {
    background-color: ${({ theme }) => (theme.isDarkMode ? '#0f172a' : '#ffffff')} !important;
    color: ${({ theme }) => (theme.isDarkMode ? '#f8fafc' : '#0f172a')} !important;
    padding: 0.8rem 1rem;
  }

  textarea {
    resize: vertical;
    min-height: 80px;
  }

  button {
    padding: 0.95rem;
    border-radius: 8px;
    border: none;
    background: var(--primary-color);
    color: ${({ theme }) => (theme.isDarkMode ? '#030712' : '#ffffff')};
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(var(--primary-rgb), 0.4);
    }
  }
`;
