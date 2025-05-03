import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin, FaCodepen, FaQuora } from 'react-icons/fa';
import { HeroContainer, HeroContent, HeroText, HeroImage, HeroBtns, SocialIcons, SocialIcon, ScrollDown } from './HeroStyles';
import laptopImage from '../../assets/laptop-code.svg';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <HeroContainer>
      <HeroContent>
        <HeroText>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('hero.greeting')}
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            AmAn-KtYr
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Web <span className="highlight">Developer</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            I create a unique and appealing website in line with your brand and vision. I seamlessly blend creativity in design with excellence in functionality to deliver exceptional user experiences.
          </motion.p>

          <HeroBtns>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <SocialIcon
                href="https://github.com/AmanKtyr"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="GitHub"
                data-cursor-variant="text"
              >
                <FaGithub />
              </SocialIcon>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <SocialIcon href="https://www.linkedin.com/in/amanktyr" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialIcon>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <SocialIcon href="https://codepen.io/amanktyr" target="_blank" rel="noopener noreferrer">
                <FaCodepen />
              </SocialIcon>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <SocialIcon href="https://www.quora.com/profile/AmAn-KtYr-1" target="_blank" rel="noopener noreferrer">
                <FaQuora />
              </SocialIcon>
            </motion.div>
          </SocialIcons>
        </HeroText>

        <HeroImage>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ height: '100%' }}
          >
            <img src={laptopImage} alt="Laptop with code" />
          </motion.div>
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
