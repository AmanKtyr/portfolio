import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaBrain, FaSearch, FaArrowRight, FaShieldAlt, FaLayerGroup } from 'react-icons/fa';
import { 
  ServicesContainer, 
  ServicesGrid, 
  ServiceCard, 
  ServiceIcon, 
  ServiceTitle, 
  ServiceText, 
  TechBadge,
  ServiceFooter
} from './ServicesStyles';
import SectionHeading from '../../ui/SectionHeading/SectionHeading';
import { useTranslation } from 'react-i18next';

const homeIcons = [
  <FaCode />, 
  <FaLayerGroup />, 
  <FaBrain />, 
  <FaSearch />, 
  <FaShieldAlt />, 
  <FaRocket />
];

const Services = () => {
  const { t } = useTranslation();
  const homeCards = t('services.homeCards', { returnObjects: true }) || [];

  return (
    <ServicesContainer id="services">
      <div className="container">
        <SectionHeading 
          number="02"
          title="EXPERT"
          accent="SOLUTIONS"
          subtitle={t('services.expertSolutionsSubtitle')}
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
                <TechBadge>CORE_{index + 1}</TechBadge>
                <ServiceIcon>{homeIcons[index]}</ServiceIcon>
                <ServiceTitle>{card.title}</ServiceTitle>
                <ServiceText>{card.desc}</ServiceText>
                
                <ServiceFooter className="service-footer">
                  <Link to="/services" className="btn-text">
                    {t('services.learnMore')} <FaArrowRight />
                  </Link>
                  <span className="status">SECURE_LINK</span>
                </ServiceFooter>
              </ServiceCard>
            </motion.div>
          ))}
        </ServicesGrid>

        <motion.div
          style={{ textAlign: 'center', marginTop: '5rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <Link to="/contact" className="btn-primary">
            {t('services.scaleVision')}
          </Link>
        </motion.div>
      </div>
    </ServicesContainer>
  );
};

export default Services;
