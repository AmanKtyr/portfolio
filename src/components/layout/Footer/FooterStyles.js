import styled, { keyframes } from 'styled-components';

// ── Animations ──────────────────────────────────────────────────────────────

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`;

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
`;

// ── Main Footer Container ───────────────────────────────────────────────────
export const FooterContainer = styled.footer`
  position: relative;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  overflow: hidden;
  border-top: 2px solid var(--primary-color);

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
    animation: footerDrift 60s linear infinite;
  }

  @keyframes footerDrift {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

// ── Glowing Top Divider ─────────────────────────────────────────────────────
export const FooterTopDivider = styled.div`
  position: relative;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(var(--primary-rgb), 0.3) 15%,
    rgba(var(--primary-rgb), 0.8) 50%,
    rgba(var(--primary-rgb), 0.3) 85%,
    transparent 100%
  );

  &::after {
    content: '';
    position: absolute;
    top: -4px;
    left: 0;
    right: 0;
    height: 10px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(var(--primary-rgb), 0.05) 15%,
      rgba(var(--primary-rgb), 0.15) 50%,
      rgba(var(--primary-rgb), 0.05) 85%,
      transparent 100%
    );
    filter: blur(4px);
  }
`;

// ── Inner Wrapper ───────────────────────────────────────────────────────────
export const FooterInner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
`;

// ── Main Grid ───────────────────────────────────────────────────────────────
export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
  gap: 3rem;
  padding: 4.5rem 0 3.5rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem 1.5rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 3.5rem 0 2.5rem;
  }
`;

// ── Brand Column ────────────────────────────────────────────────────────────
export const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(15, 23, 42, 0.6)'};
  line-height: 1.85;
  font-size: 0.95rem;
  max-width: 380px;
  letter-spacing: 0.01em;
`;

// ── Social Links Row ────────────────────────────────────────────────────────
export const FooterSocial = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.25rem;
`;

export const SocialLink = styled.a`
  width: 42px;
  height: 42px;
  border-radius: 2px;
  background: ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'};
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-color);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  border: 1px solid var(--primary-color);
  position: relative;
  overflow: hidden;

  svg {
    font-size: 1.1rem;
    position: relative;
    z-index: 1;
  }

  &:hover {
    color: white;
    background: var(--primary-color);
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(var(--primary-rgb), 0.35);

    svg {
      transform: scale(1.15);
    }
  }
`;

// ── Column Section ──────────────────────────────────────────────────────────
export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColumnTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--primary-color);
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 0.85rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'monospace';

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 28px;
    height: 2px;
    background: var(--primary-color);
    border-radius: 2px;
    transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover::after {
    width: 50px;
  }
`;

// ── Links List ──────────────────────────────────────────────────────────────
export const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;

  li {
    a {
      color: ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(15, 23, 42, 0.5)'};
      font-size: 0.92rem;
      text-decoration: none;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      display: inline-flex;
      align-items: center;
      gap: 0;
      position: relative;
      padding-left: 0;
      letter-spacing: 0.01em;

      &::before {
        content: '';
        display: inline-block;
        width: 0;
        height: 1px;
        background: var(--primary-color);
        transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        margin-right: 0;
        vertical-align: middle;
      }

      &:hover {
        color: ${({ theme }) => theme.colors.text};
        padding-left: 4px;

        &::before {
          width: 16px;
          margin-right: 10px;
        }
      }
    }
  }
`;

// ── Contact Info Items ──────────────────────────────────────────────────────
export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  color: ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(15, 23, 42, 0.5)'};
  font-size: 0.92rem;
  line-height: 1.5;
  letter-spacing: 0.01em;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

export const ContactIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  min-width: 34px;
  border-radius: 8px;
  background: rgba(var(--primary-rgb), 0.12);
  border: 1px solid rgba(var(--primary-rgb), 0.15);
  color: var(--primary-color);
  opacity: 0.9;
  font-size: 0.85rem;
  transition: all 0.35s ease;

  ${ContactItem}:hover & {
    background: ${({ theme }) => theme.isDarkMode ? 'rgba(var(--primary-rgb), 0.22)' : 'rgba(var(--primary-rgb), 0.1)'};
    color: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.1);
  }
`;

export const ContactText = styled.span`
  padding-top: 6px;
`;

// ── Middle Divider ──────────────────────────────────────────────────────────
export const FooterDivider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'};
  width: 100%;
`;

// ── Bottom Bar ──────────────────────────────────────────────────────────────
export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.75rem 0;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

export const FooterCopyright = styled.p`
  color: ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.4)' : 'rgba(15, 23, 42, 0.4)'};
  font-size: 0.82rem;
  letter-spacing: 0.03em;
  margin: 0;
`;

export const FooterMadeWith = styled.p`
  color: ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.4)' : 'rgba(15, 23, 42, 0.4)'};
  font-size: 0.82rem;
  letter-spacing: 0.03em;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  svg {
    color: var(--primary-color);
    font-size: 0.75rem;
    animation: ${pulseGlow} 2s ease-in-out infinite;
  }
`;

// ── Status Indicator (Available for work) ───────────────────────────────────
export const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'};
  border-left: 3px solid #10b981;
  font-size: 0.75rem;
  color: #10b981;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: 'monospace';
  margin-top: 1rem;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #10b981;
    box-shadow: 0 0 10px #10b981;
    animation: blink 2s infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
`;

// ── Decorative floating orbs ────────────────────────────────────────────────
export const FloatingOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;

  &.orb-1 {
    width: 300px;
    height: 300px;
    bottom: -100px;
    right: -80px;
    background: radial-gradient(circle, rgba(var(--primary-rgb), 0.06) 0%, transparent 70%);
    animation: ${float} 8s ease-in-out infinite;
  }

  &.orb-2 {
    width: 200px;
    height: 200px;
    top: 40px;
    left: -60px;
    background: radial-gradient(circle, rgba(var(--primary-rgb), 0.04) 0%, transparent 70%);
    animation: ${float} 10s ease-in-out infinite 2s;
  }
`;

// ── Back to Top Button ──────────────────────────────────────────────────────
export const BackToTopButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  z-index: 99;
  opacity: ${props => (props.$visible ? '1' : '0')};
  transform: translateY(${props => (props.$visible ? '0' : '20px')});
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(var(--primary-rgb), 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(var(--primary-rgb), 0.45);
  }

  svg {
    font-size: 1rem;
  }
`;

// ── Newsletter / CTA Section ────────────────────────────────────────────────
export const FooterCTA = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const CTACard = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  border-radius: 4px;
  padding: 2.5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 3rem;
  backdrop-filter: blur(12px);
  transition: all 0.4s ease;

  &:hover {
    border-color: rgba(var(--primary-rgb, 128, 0, 0), 0.22);
    background: ${({ theme }) => theme.isDarkMode ? 'rgba(var(--primary-rgb, 128, 0, 0), 0.08)' : 'rgba(var(--primary-rgb, 128, 0, 0), 0.03)'};
    box-shadow: 0 8px 40px rgba(var(--primary-rgb, 128, 0, 0), 0.15);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
    gap: 1.5rem;
  }
`;

export const CTAContent = styled.div`
  flex: 1;
`;

export const CTATitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const CTASubtext = styled.p`
  color: ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(15, 23, 42, 0.5)'};
  font-size: 0.92rem;
  margin: 0;
  letter-spacing: 0.01em;
`;

export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 2rem;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.03em;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  white-space: nowrap;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 6px 20px rgba(var(--primary-rgb, 128, 0, 0), 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(var(--primary-rgb, 128, 0, 0), 0.45);
    background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
    filter: brightness(1.1);
  }

  svg {
    font-size: 0.85rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }
`;

// ── Tech Stack Badge Row ────────────────────────────────────────────────────
export const TechBadgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`;

export const TechBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.8rem;
  border-radius: 2px;
  background: ${({ theme }) => theme.isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'};
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  font-size: 0.7rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: 'monospace';
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-2px);
  }
`;
