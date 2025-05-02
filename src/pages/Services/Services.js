import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaServer, FaShoppingCart, FaPalette, FaSearch, FaDatabase, FaLaptopCode, FaTools } from 'react-icons/fa';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { ServicesPageContainer, ServicesBanner, ServicesBannerContent, ServicesGrid, ServiceCard, ServiceIcon, ServiceTitle, ServiceText, ServiceFeatures, ServiceFeature, PricingSection, PricingContainer, PricingCard, PricingHeader, PricingPrice, PricingFeatures, PricingFeature, PricingButton, FAQSection, FAQContainer, FAQItem, FAQQuestion, FAQAnswer, CTASection, CTAContent } from './ServicesStyles';

const servicesData = [
  {
    id: 1,
    icon: <FaCode />,
    title: 'Web Development',
    description: 'Custom website development using modern technologies like React, Vue, and Angular to create responsive and user-friendly web applications.',
    features: [
      'Custom website design and development',
      'Responsive design for all devices',
      'Interactive UI/UX design',
      'Cross-browser compatibility',
      'Performance optimization'
    ]
  },
  {
    id: 2,
    icon: <FaMobileAlt />,
    title: 'Mobile App Development',
    description: 'Creating cross-platform mobile applications using React Native and Flutter that work seamlessly on both iOS and Android devices.',
    features: [
      'Cross-platform app development',
      'Native app development',
      'UI/UX design for mobile',
      'App testing and deployment',
      'App maintenance and updates'
    ]
  },
  {
    id: 3,
    icon: <FaServer />,
    title: 'API Development',
    description: 'Building robust and scalable APIs using Node.js, Express, and other backend technologies to power your web and mobile applications.',
    features: [
      'RESTful API development',
      'GraphQL API development',
      'API documentation',
      'API testing and optimization',
      'Third-party API integration'
    ]
  },
  {
    id: 4,
    icon: <FaShoppingCart />,
    title: 'E-commerce Solutions',
    description: 'Developing online stores with secure payment gateways, product management systems, and user-friendly interfaces to boost your online sales.',
    features: [
      'Custom e-commerce website development',
      'Shopping cart and checkout functionality',
      'Payment gateway integration',
      'Inventory management system',
      'Order tracking and management'
    ]
  },
  {
    id: 5,
    icon: <FaPalette />,
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually appealing user interfaces that enhance user experience and engagement with your digital products.',
    features: [
      'User interface design',
      'User experience design',
      'Wireframing and prototyping',
      'Design system creation',
      'Usability testing'
    ]
  },
  {
    id: 6,
    icon: <FaSearch />,
    title: 'SEO Optimization',
    description: 'Implementing best practices for search engine optimization to improve your website\'s visibility and ranking in search results.',
    features: [
      'On-page SEO optimization',
      'Technical SEO audit',
      'Content optimization',
      'Performance optimization',
      'SEO reporting and analytics'
    ]
  },
  {
    id: 7,
    icon: <FaDatabase />,
    title: 'Database Design',
    description: 'Designing and implementing efficient database structures for your applications using SQL and NoSQL databases.',
    features: [
      'Database architecture design',
      'SQL database implementation',
      'NoSQL database implementation',
      'Data migration and integration',
      'Database performance optimization'
    ]
  },
  {
    id: 8,
    icon: <FaLaptopCode />,
    title: 'Web Maintenance',
    description: 'Providing ongoing maintenance and support for your websites and web applications to ensure they remain secure and up-to-date.',
    features: [
      'Regular website updates',
      'Security monitoring and updates',
      'Performance optimization',
      'Content updates',
      'Technical support'
    ]
  },
  {
    id: 9,
    icon: <FaTools />,
    title: 'Consulting Services',
    description: 'Offering expert advice and guidance on web development, technology stack selection, and digital strategy.',
    features: [
      'Technology stack consultation',
      'Digital transformation strategy',
      'Project planning and management',
      'Code review and optimization',
      'Team training and workshops'
    ]
  }
];

const pricingData = [
  {
    id: 1,
    title: 'Basic',
    price: '$499',
    description: 'Perfect for small businesses and startups',
    features: [
      'Custom website design',
      'Up to 5 pages',
      'Mobile responsive design',
      'Contact form',
      'Basic SEO setup',
      '1 month of support'
    ],
    recommended: false
  },
  {
    id: 2,
    title: 'Standard',
    price: '$999',
    description: 'Ideal for growing businesses',
    features: [
      'Everything in Basic',
      'Up to 10 pages',
      'Content management system',
      'Blog setup',
      'Social media integration',
      'E-commerce functionality (up to 20 products)',
      '3 months of support'
    ],
    recommended: true
  },
  {
    id: 3,
    title: 'Premium',
    price: '$1999',
    description: 'For established businesses with complex needs',
    features: [
      'Everything in Standard',
      'Unlimited pages',
      'Advanced e-commerce functionality',
      'Custom functionality development',
      'Advanced SEO optimization',
      'Performance optimization',
      'Security enhancements',
      '6 months of support'
    ],
    recommended: false
  }
];

const faqData = [
  {
    id: 1,
    question: 'What is your development process?',
    answer: 'My development process typically includes the following steps: requirement gathering, planning, design, development, testing, deployment, and maintenance. I believe in an iterative approach with regular client feedback to ensure the final product meets all requirements and expectations.'
  },
  {
    id: 2,
    question: 'How long does it take to complete a website?',
    answer: 'The timeline for website development varies depending on the complexity and requirements of the project. A simple website might take 2-4 weeks, while more complex projects with custom functionality could take 2-3 months or more. I\'ll provide a detailed timeline during our initial consultation based on your specific needs.'
  },
  {
    id: 3,
    question: 'Do you provide website maintenance services?',
    answer: 'Yes, I offer website maintenance services to ensure your website remains secure, up-to-date, and performing optimally. This includes regular updates, security monitoring, performance optimization, content updates, and technical support.'
  },
  {
    id: 4,
    question: 'What technologies do you work with?',
    answer: 'I work with a wide range of modern web technologies including HTML, CSS, JavaScript, React, Vue.js, Node.js, Express, MongoDB, MySQL, and more. I stay up-to-date with the latest trends and best practices in web development to deliver high-quality solutions.'
  },
  {
    id: 5,
    question: 'How do we get started with a project?',
    answer: 'To get started, simply contact me through the contact form or email. We\'ll schedule an initial consultation to discuss your project requirements, goals, timeline, and budget. After gathering all necessary information, I\'ll provide a detailed proposal and quote for your project.'
  },
  {
    id: 6,
    question: 'Do you offer custom designs or use templates?',
    answer: 'I primarily create custom designs tailored to your brand and specific requirements. However, if you prefer, I can also work with premium templates that can be customized to match your brand identity, which can be a more cost-effective option for some projects.'
  }
];

const Services = () => {
  const [activeAccordion, setActiveAccordion] = React.useState(null);
  
  const toggleAccordion = (id) => {
    if (activeAccordion === id) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(id);
    }
  };
  
  return (
    <>
      <Header />
      
      <ServicesPageContainer>
        <ServicesBanner>
          <div className="container">
            <ServicesBannerContent>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                My Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Professional web development services to help your business grow online
              </motion.p>
            </ServicesBannerContent>
          </div>
        </ServicesBanner>
        
        <div className="container">
          <motion.div 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>What I Offer</h2>
            <p>Comprehensive web development services tailored to your needs</p>
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
                  <ServiceFeatures>
                    {service.features.map((feature, idx) => (
                      <ServiceFeature key={idx}>
                        {feature}
                      </ServiceFeature>
                    ))}
                  </ServiceFeatures>
                </ServiceCard>
              </motion.div>
            ))}
          </ServicesGrid>
        </div>
        
        <PricingSection>
          <div className="container">
            <motion.div 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2>Pricing Plans</h2>
              <p>Affordable pricing for quality web development services</p>
            </motion.div>
            
            <PricingContainer>
              {pricingData.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <PricingCard recommended={plan.recommended}>
                    {plan.recommended && <span className="recommended-badge">Recommended</span>}
                    <PricingHeader>
                      <h3>{plan.title}</h3>
                      <p>{plan.description}</p>
                    </PricingHeader>
                    <PricingPrice>
                      <h4>{plan.price}</h4>
                      <p>One-time payment</p>
                    </PricingPrice>
                    <PricingFeatures>
                      {plan.features.map((feature, idx) => (
                        <PricingFeature key={idx}>
                          {feature}
                        </PricingFeature>
                      ))}
                    </PricingFeatures>
                    <PricingButton to="/contact" recommended={plan.recommended}>
                      Get Started
                    </PricingButton>
                  </PricingCard>
                </motion.div>
              ))}
            </PricingContainer>
          </div>
        </PricingSection>
        
        <FAQSection>
          <div className="container">
            <motion.div 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2>Frequently Asked Questions</h2>
              <p>Answers to common questions about my services</p>
            </motion.div>
            
            <FAQContainer>
              {faqData.map((faq) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <FAQItem active={activeAccordion === faq.id}>
                    <FAQQuestion onClick={() => toggleAccordion(faq.id)}>
                      {faq.question}
                      <span className="icon">{activeAccordion === faq.id ? '-' : '+'}</span>
                    </FAQQuestion>
                    <FAQAnswer active={activeAccordion === faq.id}>
                      {faq.answer}
                    </FAQAnswer>
                  </FAQItem>
                </motion.div>
              ))}
            </FAQContainer>
          </div>
        </FAQSection>
        
        <CTASection>
          <div className="container">
            <CTAContent>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Ready to start your project?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Let's work together to create something amazing
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link to="/contact" className="btn-primary">
                  Contact Me
                </Link>
              </motion.div>
            </CTAContent>
          </div>
        </CTASection>
      </ServicesPageContainer>
      
      <Footer />
    </>
  );
};

export default Services;
