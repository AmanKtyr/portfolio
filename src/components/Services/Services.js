import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaServer, FaShoppingCart, FaPalette, FaSearch, FaArrowRight, FaPhotoVideo, FaDesktop } from 'react-icons/fa';
import { ServicesContainer, ServicesGrid, ServiceCard, ServiceIcon, ServiceTitle, ServiceText } from './ServicesStyles';
import { useTranslation } from 'react-i18next';

const servicesData = [
  {
    id: 1,
    icon: <FaCode />,
    title: 'Web Development',
    description: 'We create a unique and appealing website in line with your brand and vision. We seamlessly blend creativity in design with excellence in functionality.',
  },
  {
    id: 2,
    icon: <FaMobileAlt />,
    title: 'App Development',
    description: 'Cross-platform Development: We leverage leading frameworks to develop apps that work seamlessly on both iOS and Android devices, reducing time and cost.',
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
    title: 'Social Media Marketing',
    description: 'Enhance brand presence with our Social Media Marketing. Tailored strategies, engaging content, platform optimization, ad management, and performance insights for success.',
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
            Hire Me For Your Project
          </Link>
        </motion.div>
      </div>
    </ServicesContainer>
  );
};

export default Services;
