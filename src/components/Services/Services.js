import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaServer, FaShoppingCart, FaPalette, FaSearch, FaArrowRight } from 'react-icons/fa';
import { ServicesContainer, ServicesGrid, ServiceCard, ServiceIcon, ServiceTitle, ServiceText } from './ServicesStyles';

const servicesData = [
  {
    id: 1,
    icon: <FaCode />,
    title: 'Web Development',
    description: 'Custom website development using modern technologies like React, Vue, and Angular to create responsive and user-friendly web applications.',
  },
  {
    id: 2,
    icon: <FaMobileAlt />,
    title: 'Responsive Design',
    description: 'Creating websites that work flawlessly across all devices - from desktops to tablets and mobile phones, ensuring a consistent user experience.',
  },
  {
    id: 3,
    icon: <FaServer />,
    title: 'API Development',
    description: 'Building robust and scalable APIs using Node.js, Express, and other backend technologies to power your web and mobile applications.',
  },
  {
    id: 4,
    icon: <FaShoppingCart />,
    title: 'E-commerce Solutions',
    description: 'Developing online stores with secure payment gateways, product management systems, and user-friendly interfaces to boost your online sales.',
  },
  {
    id: 5,
    icon: <FaPalette />,
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually appealing user interfaces that enhance user experience and engagement with your digital products.',
  },
  {
    id: 6,
    icon: <FaSearch />,
    title: 'SEO Optimization',
    description: 'Implementing best practices for search engine optimization to improve your website\'s visibility and ranking in search results.',
  },
];

const Services = () => {
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
          <h2>My Services</h2>
          <p>What I offer as a freelancer</p>
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
                  Learn More <FaArrowRight />
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
