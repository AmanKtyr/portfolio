import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaPalette, FaSearch, FaArrowRight, FaPhotoVideo, FaDesktop } from 'react-icons/fa';
import { ServicesContainer, ServicesGrid, ServiceCard, ServiceIcon, ServiceTitle, ServiceText } from './ServicesStyles';
import { useTranslation } from 'react-i18next';

const servicesData = [
  {
    id: 1,
    icon: <FaCode />,
    title: 'Enterprise Web Solutions',
    description: 'Transforming brands with high-performance, SEO-optimized web ecosystems built for scale and reliability using modern stacks like React, Node.js, and Python.',
  },
  {
    id: 2,
    icon: <FaMobileAlt />,
    title: 'Scalable App Architecture',
    description: 'Developing high-impact iOS and Android applications that provide seamless user experiences while maintaining code efficiency and cross-platform performance.',
  },
  {
    id: 3,
    icon: <FaPhotoVideo />,
    title: 'Photoshop',
    description: 'Enhance your visuals with our expert Photoshop services. We specialize in transforming ordinary images into extraordinary works of art.',
  },
  {
    id: 4,
    icon: <FaSearch />,
    title: 'SEO Marketing',
    description: 'Boost online visibility and audience reach with tailored SEO strategies. Optimize keywords, content, and links. Analyze performance for consistent high rankings.',
  },
  {
    id: 5,
    icon: <FaDesktop />,
    title: 'Responsive Design',
    description: 'To provide a seamless experience for your audience, we make your website responsive on all devices - desktop, tablet, and mobile.',
  },
  {
    id: 6,
    icon: <FaPalette />,
    title: 'Strategic Digital Growth',
    description: 'Driving measurable ROI through data-driven social media and SEO marketing strategies. I help businesses gain market visibility and convert clicks into long-term clients.',
  },
];

const Services = () => {
  const { t } = useTranslation();

  return (
    <ServicesContainer id="services">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>{t('services.title')}</h2>
          <p>{t('services.subtitle')}</p>
        </motion.div>

        <ServicesGrid>
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard>
                <ServiceIcon>
                  {service.icon}
                </ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceText>{service.description}</ServiceText>
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
            Let's Scale Your Vision Together
          </Link>
        </motion.div>
      </div>
    </ServicesContainer>
  );
};

export default Services;

