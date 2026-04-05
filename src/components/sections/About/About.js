import React from 'react';
import { FaCode, FaLaptopCode, FaServer, FaDownload, FaBrain, FaShieldAlt } from 'react-icons/fa';
import {
  AboutContainer,
  AboutContent,
  MainLayout,
  VisualSection,
  AboutImageContainer,
  AboutImage,
  TextSection,
  HeaderArea,
  BioText,
  InfoGrid,
  InfoItem,
  SkillsSection,
  SkillBox,
  ActionArea,
  ResumeBtn,
  AvailabilityIndicator
} from './AboutStyles';
import SectionHeading from '../../ui/SectionHeading/SectionHeading';
import aboutImg from '../../../assets/aman-about.png';
import resumePdf from '../../../assets/Aman_Katiyar_Resume.pdf';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <AboutContainer id="about">
      <div className="container">
        <SectionHeading
          number="01"
          title="MISSION"
          accent="STRATEGY"
          subtitle={t('about.aboutMeText')}
        />

        <AboutContent>
          <MainLayout>
            <VisualSection>
              <AboutImageContainer>
                <AboutImage>
                  <img src={aboutImg} alt="Aman Katiyar" />
                  <div className="scan-line"></div>
                </AboutImage>
              </AboutImageContainer>
            </VisualSection>

            <TextSection>
              <HeaderArea>
                <span className="pre-title">Profile Identity</span>
                <h3>{t('about.aboutMeHeader')}</h3>
              </HeaderArea>

              <BioText>
                I am a Full-Stack Systems Architect dedicated to engineering high-performance digital ecosystems. My approach bridges the gap between advanced business requirements and robust technical execution.
              </BioText>

              <InfoGrid>
                <InfoItem>
                  <span className="label">{t('about.name')}</span>
                  <span className="value">Aman Katiyar</span>
                </InfoItem>
                <InfoItem>
                  <span className="label">Endpoint_Email</span>
                  <span className="value">amankatiyar.tech01@gmail.com</span>
                </InfoItem>
                <InfoItem>
                  <span className="label">Location_Node</span>
                  <span className="value">Lucknow, UP, India</span>
                </InfoItem>
                <InfoItem>
                  <span className="label">Professional_Title</span>
                  <span className="value">Full-Stack Architect</span>
                </InfoItem>
              </InfoGrid>
            </TextSection>
          </MainLayout>

          <SkillsSection>
            <SkillBox>
              <div className="icon-row"><FaCode /></div>
              <h4>{t('about.skillItems.webDev')}</h4>
              <span>Scalable Architectures</span>
            </SkillBox>
            <SkillBox>
              <div className="icon-row"><FaLaptopCode /></div>
              <h4>{t('about.skillItems.crmDev')}</h4>
              <span>Enterprise Logic</span>
            </SkillBox>
            <SkillBox>
              <div className="icon-row"><FaBrain /></div>
              <h4>{t('about.skillItems.genAI')}</h4>
              <span>Agentic Systems</span>
            </SkillBox>
            <SkillBox>
              <div className="icon-row"><FaShieldAlt /></div>
              <h4>{t('about.skillItems.security')}</h4>
              <span>Resilient Ecosystems</span>
            </SkillBox>
          </SkillsSection>

          <ActionArea>
            <ResumeBtn href={resumePdf} download="Aman_Katiyar_Resume.pdf">
              <FaDownload /> {t('about.downloadCV')}
            </ResumeBtn>
            <AvailabilityIndicator>
              <div className="dot"></div>
              {t('about.available')}
            </AvailabilityIndicator>
          </ActionArea>
        </AboutContent>
      </div>
    </AboutContainer>
  );
};

export default About;
