import React, { useEffect, useRef } from 'react';
import { FaCode, FaLaptopCode, FaServer, FaDownload, FaPhotoVideo } from 'react-icons/fa';
import { gsap } from 'gsap';
import { AboutContainer, AboutContent, AboutImage, AboutText, AboutInfo, InfoItem, AboutSkills, SkillItem, ResumeButton } from './AboutStyles';
import SectionHeading from '../../ui/SectionHeading/SectionHeading';
import aboutImg from '../../../assets/aman-about.png';
import resumePdf from '../../../assets/Aman_Katiyar_Resume.pdf';
import ScrollAnimation from '../../animations/ScrollAnimation/ScrollAnimation';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const aboutRef = useRef(null);

  useEffect(() => {
    const magneticElements = aboutRef.current.querySelectorAll('.magnetic-target');
    
    magneticElements.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const bounds = el.getBoundingClientRect();
        const x = e.clientX - bounds.left - bounds.width / 2;
        const y = e.clientY - bounds.top - bounds.height / 2;
        
        gsap.to(el, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.6,
          ease: "power2.out"
        });
      });

      el.addEventListener('mouseleave', () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.3)"
        });
      });
    });
  }, []);

  return (
    <AboutContainer id="about" ref={aboutRef}>
      <div className="container">
        <SectionHeading 
          number="1"
          title="MISSION"
          accent="STRATEGY"
          subtitle={t('about.aboutMeText')}
        />

        <AboutContent>
          <AboutImage>
            <img src={aboutImg} alt="About Me" />
          </AboutImage>

          <AboutText>
            <h3>{t('about.aboutMeHeader')}</h3>

            <AboutInfo>
              <InfoItem>
                <strong>{t('about.name')}</strong> Aman Katiyar
              </InfoItem>

              <InfoItem>
                <strong>{t('about.email')}</strong> amankatiyar.tech01@gmail.com
              </InfoItem>

              <InfoItem>
                <strong>{t('about.location')}</strong> Lucknow, UP, India
              </InfoItem>

              <InfoItem>
                <strong>{t('about.freelance')}</strong> {t('about.available')}
              </InfoItem>

              <ResumeButton href={resumePdf} download="Aman_Katiyar_Resume.pdf" className="magnetic-target">
                <FaDownload /> {t('about.downloadCV')}
              </ResumeButton>
            </AboutInfo>

            <AboutSkills>
              <SkillItem className="magnetic-target">
                <FaCode />
                <h4>{t('about.skillItems.webDev')}</h4>
              </SkillItem>

              <SkillItem className="magnetic-target">
                <FaLaptopCode />
                <h4>{t('about.skillItems.crmDev')}</h4>
              </SkillItem>

              <SkillItem className="magnetic-target">
                <FaPhotoVideo />
                <h4>{t('about.skillItems.genAI')}</h4>
              </SkillItem>

              <SkillItem className="magnetic-target">
                <FaServer />
                <h4>{t('about.skillItems.seo')}</h4>
              </SkillItem>
            </AboutSkills>
          </AboutText>
        </AboutContent>
      </div>
    </AboutContainer>
  );
};

export default About;

