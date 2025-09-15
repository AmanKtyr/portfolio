import React from 'react';
import { FaCode, FaLaptopCode, FaMobileAlt, FaServer, FaDownload, FaPhotoVideo } from 'react-icons/fa';
import { AboutContainer, AboutContent, AboutImage, AboutText, AboutInfo, InfoItem, AboutSkills, SkillItem, ResumeButton } from './AboutStyles';
import aboutImg from '../../assets/aman-about.jpeg'; // You'll need to add this image
import resumePdf from '../../assets/Aman_Katiyar_Resume.pdf'; // Add your resume PDF
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <AboutContainer id="about">
      <div className="container">
        <ScrollAnimation animation="fadeUp" className="section-title">
          <h2>{t('about.title')}</h2>
          <p>{t('about.subtitle')}</p>
        </ScrollAnimation>

        <AboutContent>
          <AboutImage>
            <ScrollAnimation animation="fadeLeft">
              <img src={aboutImg} alt="About Me" />
            </ScrollAnimation>
          </AboutImage>

          <AboutText>
            <ScrollAnimation animation="fadeRight">
              <h3>I'm a Web Developer from Lucknow, UP</h3>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeRight" delay={0.1}>
              <p>I create a unique and appealing website in line with your brand and vision. I seamlessly blend creativity in design with excellence in functionality to deliver exceptional user experiences.</p>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeRight" delay={0.2}>
              <p>My approach is client-focused, ensuring that every project meets the unique needs and goals of the businesses I work with. I'm dedicated to delivering high-quality solutions that help my clients achieve their online objectives.</p>
            </ScrollAnimation>

            <AboutInfo>
              <ScrollAnimation animation="fadeUp" delay={0.3}>
                <InfoItem>
                  <strong>{t('about.name')}</strong> AmAn-KtYr
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
                  <FaDownload /> {t('Download_Resume')}
                </ResumeButton>
              </ScrollAnimation>
            </AboutInfo>

            <AboutSkills>
              <ScrollAnimation animation="zoom" delay={0.7}>
                <SkillItem>
                  <FaCode />
                  <h4>Web Development</h4>
                </SkillItem>
              </ScrollAnimation>

              <ScrollAnimation animation="zoom" delay={0.8}>
                <SkillItem>
                  <FaLaptopCode />
                  <h4>CRM Development</h4>
                </SkillItem>
              </ScrollAnimation>

              <ScrollAnimation animation="zoom" delay={0.9}>
                <SkillItem>
                  <FaPhotoVideo />
                  <h4>Gen/Agentic AI</h4>
                </SkillItem>
              </ScrollAnimation>

              <ScrollAnimation animation="zoom" delay={1.0}>
                <SkillItem>
                  <FaServer />
                  <h4>SEO Marketing</h4>
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