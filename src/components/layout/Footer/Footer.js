import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaHeart,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaArrowRight
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterTopDivider,
  FooterInner,
  FooterContent,
  FooterBrand,
  FooterText,
  FooterSocial,
  SocialLink,
  FooterColumn,
  ColumnTitle,
  FooterLinks,
  ContactList,
  ContactItem,
  ContactIcon,
  ContactText,
  FooterDivider,
  FooterBottom,
  FooterCopyright,
  FooterMadeWith,
  StatusBadge,
  FooterCTA,
  CTACard,
  CTAContent,
  CTATitle,
  CTASubtext,
  CTAButton,
  TechBadgeRow,
} from './FooterStyles';
import Logo from '../../ui/Logo/Logo';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      {/* Glowing top divider */}
      <FooterTopDivider />

      {/* CTA Section */}
      <FooterCTA>
        <CTACard>
          <CTAContent>
            <CTATitle>{t('footer.ctaTitle')}</CTATitle>
            <CTASubtext>
              {t('footer.ctaSubtext')}
            </CTASubtext>
          </CTAContent>
          <CTAButton href="/#contact">
            {t('footer.ctaButton')} <FaArrowRight />
          </CTAButton>
        </CTACard>
      </FooterCTA>

      {/* Main Footer Content */}
      <FooterInner>
        <FooterContent>
          {/* Brand Column */}
          <FooterBrand>
            <Logo isFooter size="large" />
            <FooterText>
              {t('footer.brandText')}
            </FooterText>
            <StatusBadge>AVAILABILITY: ACTIVE</StatusBadge>
            <FooterSocial>
              <SocialLink
                href="https://github.com/amanktyr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/amanktyr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </SocialLink>
              <SocialLink
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialLink>
            </FooterSocial>
          </FooterBrand>

          {/* Quick Links */}
          <FooterColumn>
            <ColumnTitle>{t('footer.navigation')}</ColumnTitle>
            <FooterLinks>
              <li><Link to="/">{t('header.home')}</Link></li>
              <li><Link to="/#about">{t('header.about')}</Link></li>
              <li><Link to="/#skills">{t('header.skills')}</Link></li>
              <li><Link to="/#projects">{t('header.projects')}</Link></li>
              <li><Link to="/#services">{t('header.services')}</Link></li>
              <li><Link to="/#contact">{t('header.contact')}</Link></li>
            </FooterLinks>
          </FooterColumn>

          {/* Services */}
          <FooterColumn>
            <ColumnTitle>{t('footer.solutions')}</ColumnTitle>
            <FooterLinks>
              <li><Link to="/services">{t('footer.webDev')}</Link></li>
              <li><Link to="/services">{t('footer.apiArch')}</Link></li>
              <li><Link to="/services">{t('footer.responsiveDesign')}</Link></li>
              <li><Link to="/services">{t('footer.ecommerce')}</Link></li>
              <li><Link to="/services">{t('footer.uiux')}</Link></li>
            </FooterLinks>
          </FooterColumn>

          {/* Contact Info */}
          <FooterColumn>
            <ColumnTitle>{t('footer.getInTouch')}</ColumnTitle>
            <ContactList>
              <ContactItem>
                <ContactIcon><FaMapMarkerAlt /></ContactIcon>
                <ContactText>Lucknow, Uttar Pradesh, India</ContactText>
              </ContactItem>
              <ContactItem as="a" href="mailto:amankatiyar.tech01@gmail.com" style={{ textDecoration: 'none' }}>
                <ContactIcon><FaEnvelope /></ContactIcon>
                <ContactText>amankatiyar.tech01@gmail.com</ContactText>
              </ContactItem>
              <ContactItem as="a" href="tel:+916387343245" style={{ textDecoration: 'none' }}>
                <ContactIcon><FaPhone /></ContactIcon>
                <ContactText>+91 6387343245</ContactText>
              </ContactItem>
            </ContactList>

            {/* Tech Badges */}
            <TechBadgeRow style={{ marginTop: '1.5rem' }}>
              {/* <TechBadge><FaLaptopCode /> AI_SOLUTIONS</TechBadge>
                <TechBadge><FaServer /> AGENTIC_SYSTEMS</TechBadge>
                <TechBadge><FaCode /> WEB_ARCHITECTURE</TechBadge>
                <TechBadge><FaRocket /> TECH_STRATEGY</TechBadge> */}
            </TechBadgeRow>
          </FooterColumn>
        </FooterContent>

        {/* Divider */}
        <FooterDivider />

        {/* Bottom Bar */}
        <FooterBottom>
          <FooterCopyright style={{ fontFamily: 'monospace' }}>
            {t('footer.copyright', { year: currentYear })} | SECURE_ACCESS
          </FooterCopyright>
          <div style={{ fontFamily: 'monospace', fontSize: '0.8rem', opacity: 0.4 }}>
            SYS_REV: 2.0.4 // UNIT: ARCHIVE_V1
          </div>
          <FooterMadeWith style={{ fontFamily: 'monospace' }}>
            BUILD: {t('footer.passion')} <FaHeart /> PRECISION
          </FooterMadeWith>
        </FooterBottom>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;
