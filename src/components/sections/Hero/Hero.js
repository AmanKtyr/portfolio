import { 
  HeroContainer, 
  HeroContent, 
  HeroText, 
  HeroImage, 
  HeroBtns, 
  SocialIcons, 
  SocialIcon, 
  ScrollDown,
  WatermarkText,
  TechBadge,
  VisualEngine,
  RotatingRing,
  GridCoordinates,
  TechBar,
  TechBarItem
} from './HeroStyles';
import { FaRocket, FaLaptopCode, FaServer, FaCode, FaArrowRight, FaGithub, FaLinkedin, FaCodepen, FaQuora } from 'react-icons/fa';
// import laptopImage from '../../../assets/laptop-code.svg';
import laptopImage from '../../../assets/hero-image.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const { t } = useTranslation();
  const heroRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    const nameChars = nameRef.current.querySelectorAll('.name-char');
    const magneticElements = heroRef.current.querySelectorAll('.magnetic-target');

    // Name Scramble Effect
    const tl = gsap.timeline();
    nameChars.forEach((char, i) => {
      const originalText = char.innerText;
      const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*@";
      
      tl.to(char, {
        opacity: 1,
        y: 0,
        direction: 'none',
        duration: 0.1,
        onStart: () => {
          let iterations = 0;
          const interval = setInterval(() => {
            char.innerText = possibleChars[Math.floor(Math.random() * possibleChars.length)];
            if (iterations >= 10) {
              clearInterval(interval);
              char.innerText = originalText;
            }
            iterations++;
          }, 40);
        }
      }, i * 0.05);
    });

    // Magnetic Effect Logic
    magneticElements.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const bounds = el.getBoundingClientRect();
        const x = e.clientX - bounds.left - bounds.width / 2;
        const y = e.clientY - bounds.top - bounds.height / 2;
        
        gsap.to(el, {
          x: x * 0.4,
          y: y * 0.4,
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

    return () => tl.kill();
  }, []);

  const renderName = (text) => {
    return text.split('').map((char, i) => (
      <span key={i} className="name-char" style={{ opacity: 0, display: 'inline-block', transform: 'translateY(10px)' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <HeroContainer id="home" ref={heroRef}>
      <WatermarkText>SYSTEM_CORE</WatermarkText>
      
      <TechBadge className="status-top" style={{ top: '15%', right: '5%' }}>
        SYSTEM_STATUS: OPTIMIZED
      </TechBadge>
      <TechBadge className="status-bottom" style={{ bottom: '5%', left: '5%' }}>
        ENCRYPTION: AES_256_ACTIVE
      </TechBadge>

      <GridCoordinates style={{ top: '10%', left: '2%' }}>
        <span>LAT: 26.8467</span>
        <span>LON: 80.9462</span>
      </GridCoordinates>
      <GridCoordinates style={{ bottom: '10%', right: '2%' }}>
        <span>CORE: INF_01</span>
        <span>UNIT: ARCHIVE</span>
      </GridCoordinates>

      <HeroContent>
        <HeroText>
          <motion.h4
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('hero.greeting')}
          </motion.h4>
          <h1 ref={nameRef}>
            <div className="name-line">{renderName("AMAN")}</div>
            <div className="name-line" style={{ color: 'var(--primary-color)' }}>{renderName("KATIYAR")}</div>
          </h1>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('hero.profession')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {t('hero.description')}
          </motion.p>

          <TechBar
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {[
              { Icon: FaLaptopCode, name: "AI_DEVELOPMENT" },
              { Icon: FaCode, name: "WEB_ARCHITECTURE" },
              { Icon: FaServer, name: "AGENTIC_SYSTEMS" },
              { Icon: FaRocket, name: "TECH_STRATEGY" }
            ].map((tech, i) => (
              <TechBarItem key={i}>
                <tech.Icon />
                <span>[{tech.name}]</span>
              </TechBarItem>
            ))}
          </TechBar>

          <HeroBtns>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="magnetic-target"
              style={{ display: 'inline-block' }}
            >
              <Link
                to="/contact"
                className="btn-primary"
                data-cursor-text="Contact"
                data-cursor-variant="button"
              >
                {t('hero.hireMe')} <FaArrowRight />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="magnetic-target"
              style={{ display: 'inline-block' }}
            >
              <Link
                to="/#projects"
                className="btn-outline"
                data-cursor-text="Projects"
                data-cursor-variant="link"
              >
                {t('hero.viewProjects')}
              </Link>
            </motion.div>
          </HeroBtns>

          <SocialIcons>
            {[
              { Icon: FaGithub, url: "https://github.com/AmanKtyr", label: "GitHub" },
              { Icon: FaLinkedin, url: "https://www.linkedin.com/in/amanktyr", label: "LinkedIn" },
              { Icon: FaCodepen, url: "https://codepen.io/amanktyr", label: "CodePen" },
              { Icon: FaQuora, url: "https://www.quora.com/profile/AmAn-KtYr-1", label: "Quora" }
            ].map((social, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.2 + idx * 0.1 }}
                className="magnetic-target"
              >
                <SocialIcon
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-text={social.label}
                  aria-label={`Visit Aman Katiyar's ${social.label} profile`}
                >
                  <social.Icon />
                </SocialIcon>
              </motion.div>
            ))}
          </SocialIcons>
        </HeroText>

        <HeroImage>
          <VisualEngine>
            <RotatingRing size={450} duration={40} />
            <RotatingRing size={350} duration={25} reverse={true} color="rgba(var(--primary-rgb), 0.2)" />
            <RotatingRing size={250} duration={15} color="rgba(var(--primary-rgb), 0.3)" />

            <motion.div className="image-wrapper"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img src={laptopImage} alt="Aman Katiyar - Full-Stack AI Engineer & Solutions Architect" loading="lazy" />
            </motion.div>
          </VisualEngine>
        </HeroImage>
      </HeroContent>

      <ScrollDown
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div>
          <span>{t('hero.scrollDown')}</span>
        </div>
      </ScrollDown>
    </HeroContainer>
  );
};

export default Hero;

