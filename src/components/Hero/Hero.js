import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HeroContainer, HeroContent, HeroText, HeroImage, HeroBtns, SocialIcons, SocialIcon, ScrollDown } from './HeroStyles';
import ThreeModel from '../ThreeModel/ThreeModel';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroText>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, I'm
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your Name
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Web Developer & Freelancer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            I create stunning websites for businesses and individuals looking to stand out in the digital world. With expertise in modern web technologies, I deliver high-quality solutions that help my clients achieve their goals.
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
                Hire Me <FaArrowRight />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Link
                to="/projects"
                className="btn-outline"
                data-cursor-text="Projects"
                data-cursor-variant="link"
              >
                View Projects
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
                href="https://github.com"
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
              <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialIcon>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
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
            <ThreeModel />
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
          <span>Scroll Down</span>
        </div>
      </ScrollDown>
    </HeroContainer>
  );
};

export default Hero;
