import React from 'react';
import { FaCode, FaLaptopCode, FaServer, FaDownload, FaPhotoVideo } from 'react-icons/fa';
import { AboutContainer, AboutContent, AboutImage, AboutText, AboutInfo, InfoItem, AboutSkills, SkillItem, ResumeButton, WatermarkText } from './AboutStyles';
import SectionHeading from '../../ui/SectionHeading/SectionHeading';
import aboutImg from '../../../assets/aman-about.png';
import resumePdf from '../../../assets/Aman_Katiyar_Resume.pdf';
import ScrollAnimation from '../../animations/ScrollAnimation/ScrollAnimation';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <AboutContainer id="about">
      <div className="container">
        <SectionHeading 
          number="1"
          title="MISSION"
          accent="STRATEGY"
          subtitle={t('about.aboutMeText')}
        />

        <AboutContent>
          <AboutImage>
            <ScrollAnimation animation="fadeLeft">
              <img src={aboutImg} alt="About Me" />
            </ScrollAnimation>
          </AboutImage>

          <AboutText>
            <ScrollAnimation animation="fadeRight">
              <h3>{t('about.aboutMeHeader')}</h3>
            </ScrollAnimation>

            <AboutInfo>
              <ScrollAnimation animation="fadeUp" delay={0.3}>
                <InfoItem>
                  <strong>{t('about.name')}</strong> Aman Katiyar
                </InfoItem>
              </ScrollAnimation>

              <ScrollAnimation animation="fadeUp" delay={0.4}>
                <InfoItem>
                  <strong>{t('about.email')}</strong> amankatiyar.tech01@gmail.com
                </InfoItem>
              </ScrollAnimation>

              <ScrollAnimation animation="fadeUp" delay={0.5}>
                <InfoItem>
                  <strong>{t('about.location')}</strong> Lucknow, UP, India
                </InfoItem>
              </ScrollAnimation>

              <ScrollAnimation animation="fadeUp" delay={0.6}>
                <InfoItem>
                  <strong>{t('about.freelance')}</strong> {t('about.available')}
                </InfoItem>
              </ScrollAnimation>

              <ScrollAnimation animation="fadeUp" delay={0.7}>
                <ResumeButton href={resumePdf} download="Aman_Katiyar_Resume.pdf">
                  <FaDownload /> {t('about.downloadCV')}
                </ResumeButton>
              </ScrollAnimation>
            </AboutInfo>

            <AboutSkills>
              <ScrollAnimation animation="zoom" delay={0.7}>
                <SkillItem>
                  <FaCode />
                  <h4>{t('about.skillItems.webDev')}</h4>
                </SkillItem>
              </ScrollAnimation>

              <ScrollAnimation animation="zoom" delay={0.8}>
                <SkillItem>
                  <FaLaptopCode />
                  <h4>{t('about.skillItems.crmDev')}</h4>
                </SkillItem>
              </ScrollAnimation>

              <ScrollAnimation animation="zoom" delay={0.9}>
                <SkillItem>
                  <FaPhotoVideo />
                  <h4>{t('about.skillItems.genAI')}</h4>
                </SkillItem>
              </ScrollAnimation>

              <ScrollAnimation animation="zoom" delay={1.0}>
                <SkillItem>
                  <FaServer />
                  <h4>{t('about.skillItems.seo')}</h4>
                </SkillItem>
              </ScrollAnimation>
            </AboutSkills>
          </AboutText>
        </AboutContent>
      </div>
    </AboutContainer>
  );
};

export default About;

