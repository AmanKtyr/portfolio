import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaServer, FaShoppingCart, FaPalette, FaSearch, FaDatabase, FaLaptopCode, FaTools } from 'react-icons/fa';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import Meta from '../../components/common/Meta/Meta';
import SectionHeading from '../../components/ui/SectionHeading/SectionHeading';
import { ServicesPageContainer, ServicesBanner, ServicesBannerContent, ServicesGrid, ServiceCard, ServiceIcon, ServiceTitle, ServiceText, ServiceFeatures, ServiceFeature, PricingSection, PricingContainer, PricingCard, PricingHeader, PricingPrice, PricingFeatures, PricingFeature, PricingButton, FAQSection, FAQContainer, FAQItem, FAQQuestion, FAQAnswer, CTASection, CTAContent, WatermarkText, TechBadge, VisualEngine, RotatingRing, VisualNode, GridCoordinates } from './ServicesStyles';

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
      <Meta 
        title="Expert Services" 
        description="Providing professional AI development, full-stack web solutions, and strategic technical consulting. Tailored services to help your business scale with intelligent systems." 
        url="https://aman.ktyr.in/services"
      />

      <Header />

      <ServicesPageContainer>
        <ServicesBanner>
          <WatermarkText>SERVICES_ARCHIVE</WatermarkText>
          <TechBadge style={{ top: '15%', right: '10%' }}>SYSTEM_STATUS: ONLINE</TechBadge>
          <TechBadge style={{ bottom: '15%', left: '10%' }}>V_BUILD: 2.0.4</TechBadge>
          
          <GridCoordinates style={{ top: '10%', left: '5%' }}>
            <span>LAT: 26.8467</span>
            <span>LON: 80.9462</span>
          </GridCoordinates>
          <GridCoordinates style={{ bottom: '10%', right: '5%' }}>
            <span>SEC: DELTA_9</span>
            <span>UNIT: SRV_PROCT</span>
          </GridCoordinates>

          <div className="container">
            <ServicesBannerContent>
              <div className="banner-text">
                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  {t('services.title').split(' ').map((word, i) => (
                    <span key={i} data-text={word}>{word} </span>
                  ))}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  {t('services.subtitle')}
                </motion.p>
              </div>

              <VisualEngine>
                <RotatingRing size={350} duration={40} />
                <RotatingRing size={270} duration={25} reverse={true} color="rgba(128, 0, 0, 0.2)" />
                <RotatingRing size={190} duration={15} color="rgba(128, 0, 0, 0.3)" />

                <VisualNode style={{ transform: 'translate(110px, -110px)' }} as={motion.div} whileHover={{ scale: 1.2 }}>
                  <FaCode />
                </VisualNode>
                <VisualNode style={{ transform: 'translate(-110px, 110px)' }} as={motion.div} whileHover={{ scale: 1.2 }}>
                  <FaMobileAlt />
                </VisualNode>
                <VisualNode style={{ transform: 'translate(110px, 110px)' }} as={motion.div} whileHover={{ scale: 1.2 }}>
                  <FaPalette />
                </VisualNode>
                <VisualNode style={{ transform: 'translate(-110px, -110px)' }} as={motion.div} whileHover={{ scale: 1.2 }}>
                  <FaSearch />
                </VisualNode>
              </VisualEngine>
            </ServicesBannerContent>
          </div>
        </ServicesBanner>

        <div className="container">
          <SectionHeading 
            number="8"
            title="EXPERT"
            accent="SOLUTIONS"
            subtitle={t('services.subtitle')}
          />

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
            <SectionHeading 
              number="9"
              title="STRATEGIC"
              accent="PRICING"
              subtitle={t('services.pricingSubtitle')}
            />

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
            <SectionHeading 
              number="10"
              title="COMMON"
              accent="QUERIES"
              subtitle={t('services.faqSubtitle')}
            />

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
