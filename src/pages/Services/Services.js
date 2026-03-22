import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaServer, FaShoppingCart, FaPalette, FaSearch, FaDatabase, FaLaptopCode, FaTools } from 'react-icons/fa';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { ServicesPageContainer, ServicesBanner, ServicesBannerContent, ServicesGrid, ServiceCard, ServiceIcon, ServiceTitle, ServiceText, ServiceFeatures, ServiceFeature, PricingSection, PricingContainer, PricingCard, PricingHeader, PricingPrice, PricingFeatures, PricingFeature, PricingButton, FAQSection, FAQContainer, FAQItem, FAQQuestion, FAQAnswer, CTASection, CTAContent } from './ServicesStyles';

const serviceIcons = [<FaCode />, <FaMobileAlt />, <FaServer />, <FaShoppingCart />, <FaPalette />, <FaSearch />, <FaDatabase />, <FaLaptopCode />, <FaTools />];

const Services = () => {
  const { t } = useTranslation();
  const [activeAccordion, setActiveAccordion] = React.useState(null);
  const [currency, setCurrency] = React.useState('USD');

  const priceData = [
    { priceUSD: '$499', priceINR: '₹39,999', recommended: false },
    { priceUSD: '$999', priceINR: '₹79,999', recommended: true },
    { priceUSD: '$1999', priceINR: '₹159,999', recommended: false }
  ];

  const cards = t('services.cards', { returnObjects: true }) || [];
  const pricing = t('services.pricing', { returnObjects: true }) || [];
  const faq = t('services.faq', { returnObjects: true }) || [];

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <>
      <Header />

      <ServicesPageContainer>
        <ServicesBanner>
          <div className="grid-overlay"></div>
          <div className="container">
            <ServicesBannerContent>
              <motion.div className="floating-element element-1" animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 5, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
              <motion.div className="floating-element element-2" animate={{ y: [0, 20, 0], x: [0, -15, 0], rotate: [0, -5, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />

              <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, type: "spring", stiffness: 100 }}>
                {t('services.title')}
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 50 }}>
                {t('services.servicesSubtext')}
              </motion.p>

              <motion.div style={{ position: "absolute", top: "50%", left: "5%", color: "rgba(128, 0, 0, 0.4)", fontSize: "1.2rem", fontFamily: "monospace", zIndex: 5 }} animate={{ opacity: [0.2, 0.8, 0.2], y: [0, -30, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                &lt;services&gt;
              </motion.div>
              <motion.div style={{ position: "absolute", bottom: "30%", right: "10%", color: "rgba(90, 0, 0, 0.4)", fontSize: "1.2rem", fontFamily: "monospace", zIndex: 5 }} animate={{ opacity: [0.2, 0.7, 0.2], y: [0, 20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                &lt;/services&gt;
              </motion.div>
            </ServicesBannerContent>
          </div>
        </ServicesBanner>

        <div className="container">
          <motion.div className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <h2>{t('services.title')}</h2>
            <p>{t('services.subtitle')}</p>
          </motion.div>

          <ServicesGrid>
            {Array.isArray(cards) && cards.map((card, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                <ServiceCard>
                  <ServiceIcon>{serviceIcons[index]}</ServiceIcon>
                  <ServiceTitle>{card.title}</ServiceTitle>
                  <ServiceText>{card.desc}</ServiceText>
                  <ServiceFeatures>
                    {card.features && card.features.map((feature, idx) => (
                      <ServiceFeature key={idx}>{feature}</ServiceFeature>
                    ))}
                  </ServiceFeatures>
                </ServiceCard>
              </motion.div>
            ))}
          </ServicesGrid>
        </div>

        <PricingSection>
          <div className="container">
            <motion.div className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              <h2>{t('services.pricingTitle')}</h2>
              <p>{t('services.pricingSubtitle')}</p>
            </motion.div>

            <motion.div className="currency-toggle" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
              <button className={`currency-btn ${currency === 'USD' ? 'active' : ''}`} onClick={() => setCurrency('USD')}>USD</button>
              <button className={`currency-btn ${currency === 'INR' ? 'active' : ''}`} onClick={() => setCurrency('INR')}>INR</button>
            </motion.div>

            <PricingContainer>
              {Array.isArray(pricing) && pricing.map((plan, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                  <PricingCard recommended={priceData[index]?.recommended}>
                    {priceData[index]?.recommended && <span className="recommended-badge">{t('services.recommended')}</span>}
                    <PricingHeader>
                      <h3>{plan.title}</h3>
                      <p>{plan.desc}</p>
                    </PricingHeader>
                    <PricingPrice>
                      <h4>{currency === 'USD' ? priceData[index]?.priceUSD : priceData[index]?.priceINR}</h4>
                      <p>{currency} - {t('services.oneTimePayment')}</p>
                      <small className="other-currency">
                        {t('services.alsoAvailable')} {currency === 'USD' ? `INR: ${priceData[index]?.priceINR}` : `USD: ${priceData[index]?.priceUSD}`}
                      </small>
                    </PricingPrice>
                    <PricingFeatures>
                      {plan.features && plan.features.map((feature, idx) => (
                        <PricingFeature key={idx}>{feature}</PricingFeature>
                      ))}
                    </PricingFeatures>
                    <PricingButton to="/contact" recommended={priceData[index]?.recommended}>
                      {t('services.getStarted')}
                    </PricingButton>
                  </PricingCard>
                </motion.div>
              ))}
            </PricingContainer>
          </div>
        </PricingSection>

        <FAQSection>
          <div className="container">
            <motion.div className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              <h2>{t('services.faqTitle')}</h2>
              <p>{t('services.faqSubtitle')}</p>
            </motion.div>

            <FAQContainer>
              {Array.isArray(faq) && faq.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <FAQItem active={activeAccordion === index}>
                    <FAQQuestion onClick={() => toggleAccordion(index)}>
                      {item.q}
                      <span className="icon">{activeAccordion === index ? '-' : '+'}</span>
                    </FAQQuestion>
                    <FAQAnswer active={activeAccordion === index}>
                      {item.a}
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
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                {t('services.ctaTitle')}
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
                {t('services.ctaSubtext')}
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
                <Link to="/contact" className="btn-primary">
                  {t('services.ctaButton')}
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
