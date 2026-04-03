import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaPalette, FaSearch, FaArrowRight, FaPhotoVideo, FaDesktop } from 'react-icons/fa';
import { ServicesContainer, ServicesGrid, ServiceCard, ServiceIcon, ServiceTitle, ServiceText, WatermarkText, TechBadge } from './ServicesStyles';
import SectionHeading from '../../ui/SectionHeading/SectionHeading';
import { useTranslation } from 'react-i18next';

const homeIcons = [<FaCode />, <FaMobileAlt />, <FaPhotoVideo />, <FaSearch />, <FaDesktop />, <FaPalette />];

const Services = () => {
  const { t } = useTranslation();
  const homeCards = t('services.homeCards', { returnObjects: true }) || [];

  return (
    <ServicesContainer id="services">
      <div className="container">
        <SectionHeading 
          number="3"
          title="EXPERT"
          accent="SOLUTIONS"
          subtitle="Specializing in the development of robust, scalable, and user-centric digital products. From AI integration to high-performance web architecture, I provide the technical foundation for your vision."
        />

        <ServicesGrid>
          {Array.isArray(homeCards) && homeCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard>
                <TechBadge style={{ top: '1rem', right: '1rem' }}>
                  STATUS: ONLINE
                </TechBadge>
                <ServiceIcon>{homeIcons[index]}</ServiceIcon>
                <ServiceTitle>{card.title}</ServiceTitle>
                <ServiceText>{card.desc}</ServiceText>
                <Link to="/services" className="btn-text" data-cursor-text="View Service" data-cursor-variant="link">
                  {t('services.learnMore')} <FaArrowRight />
                </Link>
              </ServiceCard>
            </motion.div>
          ))}
        </ServicesGrid>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          style={{ marginTop: '3rem' }}
        >
          <Link to="/contact" className="btn-primary" data-cursor-text="Contact" data-cursor-variant="button">
            {t('services.scaleVision')}
          </Link>
        </motion.div>
      </div>
    </ServicesContainer>
  );
};

export default Services;
