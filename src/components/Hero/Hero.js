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
import { FaPython, FaNodeJs, FaReact, FaDatabase, FaArrowRight, FaGithub, FaLinkedin, FaCodepen, FaQuora } from 'react-icons/fa';
// import laptopImage from '../../assets/laptop-code.svg';
import laptopImage from '../../assets/hero-image.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <HeroContainer id="home">
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
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span data-text="Aman">Aman</span>
            <span data-text="Katiyar">Katiyar</span>
          </motion.h1>
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
              { Icon: FaReact, name: "REACT" },
              { Icon: FaPython, name: "PYTHON" },
              { Icon: FaNodeJs, name: "NODEJS" },
              { Icon: FaDatabase, name: "SQL_DB" }
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
              >
                <SocialIcon
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-text={social.label}
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
            <RotatingRing size={350} duration={25} reverse={true} color="rgba(128, 0, 0, 0.2)" />
            <RotatingRing size={250} duration={15} color="rgba(128, 0, 0, 0.3)" />

            <motion.div className="image-wrapper"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img src={laptopImage} alt="Aman Katiyar Portfolio" loading="lazy" />
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

