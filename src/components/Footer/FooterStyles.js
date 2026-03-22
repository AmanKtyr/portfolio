import styled, { keyframes } from 'styled-components';

// ── Animations ──────────────────────────────────────────────────────────────
const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`;

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
`;

const gridPulse = keyframes`
  0%, 100% { opacity: 0.03; }
  50% { opacity: 0.07; }
`;

// ── Main Footer Container ───────────────────────────────────────────────────
export const FooterContainer = styled.footer`
  position: relative;
  background: linear-gradient(180deg, #0a0000 0%, #110000 40%, #0d0000 100%);
  color: rgba(255, 255, 255, 0.85);
  overflow: hidden;

  /* Animated grid pattern overlay */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(128, 0, 0, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(128, 0, 0, 0.05) 1px, transparent 1px);
    background-size: 60px 60px;
    animation: ${gridPulse} 6s ease-in-out infinite;
    pointer-events: none;
    z-index: 0;
  }

  /* Subtle radial glow */
  &::after {
    content: '';
    position: absolute;
    top: -200px;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 400px;
    background: radial-gradient(ellipse, rgba(128, 0, 0, 0.12) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }
`;

// ── Glowing Top Divider ─────────────────────────────────────────────────────
export const FooterTopDivider = styled.div`
  position: relative;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(128, 0, 0, 0.3) 15%,
    rgba(128, 0, 0, 0.8) 50%,
    rgba(128, 0, 0, 0.3) 85%,
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
      rgba(128, 0, 0, 0.05) 15%,
      rgba(128, 0, 0, 0.15) 50%,
      rgba(128, 0, 0, 0.05) 85%,
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
    gap: 3rem 2.5rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

// ── Brand Column ────────────────────────────────────────────────────────────
export const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.55);
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
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  border: 1px solid rgba(255, 255, 255, 0.06);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 10px;
    background: linear-gradient(135deg, var(--primary-color), #cc3d3d);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  svg {
    font-size: 1.1rem;
    position: relative;
    z-index: 1;
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover {
    color: white;
    transform: translateY(-4px);
    box-shadow:
      0 8px 24px rgba(128, 0, 0, 0.35),
      0 0 0 1px rgba(128, 0, 0, 0.3);
    border-color: transparent;

    &::before {
      opacity: 1;
    }

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
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.75rem;
  position: relative;
  padding-bottom: 0.85rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

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
      color: rgba(255, 255, 255, 0.5);
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
        color: rgba(255, 255, 255, 0.95);
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
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.92rem;
  line-height: 1.5;
  letter-spacing: 0.01em;
  transition: color 0.3s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
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
  background: rgba(128, 0, 0, 0.12);
  border: 1px solid rgba(128, 0, 0, 0.15);
  color: rgba(200, 80, 80, 0.9);
  font-size: 0.85rem;
  transition: all 0.35s ease;

  ${ContactItem}:hover & {
    background: rgba(128, 0, 0, 0.22);
    color: #ff6b6b;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(128, 0, 0, 0.2);
  }
`;

export const ContactText = styled.span`
  padding-top: 6px;
`;

// ── Middle Divider ──────────────────────────────────────────────────────────
export const FooterDivider = styled.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.06) 20%,
    rgba(255, 255, 255, 0.06) 80%,
    transparent 100%
  );
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
  color: rgba(255, 255, 255, 0.35);
  font-size: 0.82rem;
  letter-spacing: 0.03em;
  margin: 0;
`;

export const FooterMadeWith = styled.p`
  color: rgba(255, 255, 255, 0.35);
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
  gap: 0.5rem;
  padding: 0.45rem 1rem;
  border-radius: 100px;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.15);
  font-size: 0.78rem;
  color: rgba(16, 185, 129, 0.9);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 0.5rem;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #10b981;
    box-shadow: 0 0 8px rgba(16, 185, 129, 0.5);
    animation: ${pulseGlow} 2s ease-in-out infinite;
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
    background: radial-gradient(circle, rgba(128, 0, 0, 0.06) 0%, transparent 70%);
    animation: ${float} 8s ease-in-out infinite;
  }

  &.orb-2 {
    width: 200px;
    height: 200px;
    top: 40px;
    left: -60px;
    background: radial-gradient(circle, rgba(128, 0, 0, 0.04) 0%, transparent 70%);
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
  background: linear-gradient(135deg, var(--primary-color), #a52a2a);
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
  box-shadow: 0 4px 20px rgba(128, 0, 0, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(128, 0, 0, 0.45);
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
  background: rgba(128, 0, 0, 0.06);
  border: 1px solid rgba(128, 0, 0, 0.12);
  border-radius: 16px;
  padding: 2.5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 3rem;
  backdrop-filter: blur(12px);
  transition: all 0.4s ease;

  &:hover {
    border-color: rgba(128, 0, 0, 0.22);
    background: rgba(128, 0, 0, 0.08);
    box-shadow: 0 8px 40px rgba(128, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1.5rem;
  }
`;

export const CTAContent = styled.div`
  flex: 1;
`;

export const CTATitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
`;

export const CTASubtext = styled.p`
  color: rgba(255, 255, 255, 0.45);
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
  background: linear-gradient(135deg, var(--primary-color), #a52a2a);
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.03em;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  white-space: nowrap;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 16px rgba(128, 0, 0, 0.25);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(128, 0, 0, 0.4);
    background: linear-gradient(135deg, #991111, #c0392b);
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
  gap: 0.35rem;
  padding: 0.3rem 0.7rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.7);
    border-color: rgba(128, 0, 0, 0.2);
    background: rgba(128, 0, 0, 0.08);
  }
`;
