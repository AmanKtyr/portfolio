import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaRocket,
  FaLaptopCode,
  FaWordpress,
  FaBullhorn,
  FaRobot,
  FaCogs,
  FaShoppingCart,
  FaTachometerAlt,
  FaSearchLocation,
  FaChevronDown,
  FaExternalLinkAlt
} from 'react-icons/fa';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import {
  PageContainer,
  HeroSection,
  LocationBadge,
  HeroTitle,
  HeroSubtitle,
  HeroActions,
  PrimaryButton,
  SecondaryButton,
  WhatsAppPill,
  QuickStatsGrid,
  StatCard,
  AEOAnswerCard,
  SectionWrapper,
  SectionHeader,
  ServicesGrid,
  ServiceCard,
  ComparisonTableWrapper,
  ComparisonTable,
  LocalitiesGrid,
  LocalityCard,
  ProjectsGrid,
  ProjectItemCard,
  WorkflowGrid,
  WorkflowStep,
  PricingGrid,
  PricingCard,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  FinalCTAContainer,
  QuickInquiryCard
} from './FreelanceLucknowStyles';

const FreelanceLucknow = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Complete IT & Digital Growth Package',
    message: ''
  });

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? -1 : idx);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, service, message } = formData;
    const text = encodeURIComponent(
      `*COMPLETE IT & DIGITAL INQUIRY (LUCKNOW)*\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Phone:* ${phone}\n` +
      `*Service Required:* ${service}\n` +
      `*Project Details:* ${message}`
    );
    window.open(`https://wa.me/916387343245?text=${text}`, '_blank');
  };

  // Structured Data Schemas
  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness'],
    '@id': 'https://aman.ktyr.in/freelance-web-developer-lucknow#service',
    name: 'Aman Katiyar - Complete IT Services, Web & AI Solutions in Lucknow',
    alternateName: 'Aman Ktyr Full-Service IT & Web Development',
    description:
      'Complete IT and digital solutions in Lucknow. Specializing in custom React/Next.js websites, WordPress, SEO & AEO, Google My Business (GMB), Google & Meta Ads, and AI automation for businesses in Lucknow and globally.',
    url: 'https://aman.ktyr.in/freelance-web-developer-lucknow',
    telephone: '+91-6387343245',
    email: 'amankatiyar.tech01@gmail.com',
    priceRange: '₹14,999 - ₹1,50,000',
    currenciesAccepted: 'INR, USD, EUR',
    paymentAccepted: 'UPI, Bank Transfer, Razorpay, Stripe, PayPal',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Gomti Nagar / Hazratganj Area',
      addressLocality: 'Lucknow',
      addressRegion: 'Uttar Pradesh',
      postalCode: '226010',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '26.8467',
      longitude: '80.9462'
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Lucknow' },
      { '@type': 'AdministrativeArea', name: 'Gomti Nagar, Lucknow' },
      { '@type': 'AdministrativeArea', name: 'Hazratganj, Lucknow' },
      { '@type': 'AdministrativeArea', name: 'Indira Nagar, Lucknow' },
      { '@type': 'AdministrativeArea', name: 'Alambagh, Lucknow' },
      { '@type': 'AdministrativeArea', name: 'Vibhuti Khand, Lucknow' },
      { '@type': 'AdministrativeArea', name: 'Shaheed Path, Lucknow' },
      { '@type': 'AdministrativeArea', name: 'Uttar Pradesh' },
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'Global / Remote' }
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '09:00',
        closes: '21:00'
      }
    ],
    sameAs: [
      'https://github.com/AmanKtyr',
      'https://www.linkedin.com/in/amanktyr',
      'https://twitter.com/AmanKtyr',
      'https://codepen.io/amanktyr',
      'https://www.quora.com/profile/AmAn-KtYr-1'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '24',
      bestRating: '5'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Complete IT & Digital Solutions Lucknow',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Web & Full-Stack Development',
            description:
              'High-performance websites and web applications built with React, Next.js, and Python/Django.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'WordPress & CMS Development',
            description:
              'Fast, secure, and modern custom WordPress websites and WooCommerce stores.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO, AEO & Google My Business (GMB) Optimization',
            description:
              'Top rankings on Google Search, Google Maps, and AI answer engines like ChatGPT and Perplexity.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Google Ads & Meta Ads Management',
            description:
              'Targeted PPC and social media advertising campaigns designed to generate consistent leads and sales.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Integration & Workflow Automation',
            description:
              'Custom ChatGPT assistants, WhatsApp automation, and business process automation.'
          }
        }
      ]
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you provide complete IT services in Lucknow?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Aman Katiyar offers end-to-end IT and digital services under one roof. This includes custom web development (React, Next.js), WordPress websites, SEO & AEO optimization, Google My Business (GMB) local ranking, Google and Meta ad campaigns, and custom AI automation.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can you build and optimize WordPress websites?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We build clean, modern, and high-speed WordPress websites and WooCommerce online stores. Every WordPress site is custom-tailored, easy for your team to manage, and optimized to load in under two seconds.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do SEO, AEO, and Google My Business (GMB) help my local business in Lucknow?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SEO and GMB optimization ensure your business ranks on the first page of Google Search and Google Maps when local customers look for your services in Gomti Nagar, Hazratganj, and across Lucknow. AEO (Answer Engine Optimization) ensures that AI search engines like ChatGPT, Claude, and Perplexity actively recommend your business.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you manage Google Ads and Meta (Facebook / Instagram) Ads?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We create, manage, and optimize data-backed Google Search PPC campaigns and Meta social media ads designed to generate qualified business leads, calls, and online sales with a positive return on investment.'
        }
      },
      {
        '@type': 'Question',
        name: 'What kind of AI integration and automation do you build?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We build custom ChatGPT and Claude assistants, 24/7 automated WhatsApp customer support bots, automated billing reminders, lead routing systems, and internal workflow automations that save your team hours of manual work.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does complete website development and IT support cost in Lucknow?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pricing starts at ₹14,999 to ₹24,999 for essential business and WordPress websites, ₹44,999 to ₹69,999 for custom web apps or marketing bundles, and ₹89,999+ for full enterprise AI systems. You get transparent milestone-based pricing with zero hidden fees.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can we meet in person in Lucknow for project discussions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Aman is physically located in Lucknow and is available for in-person project meetings across Gomti Nagar, Hazratganj, Indira Nagar, Vibhuti Khand, and Shaheed Path, as well as remote video consultations.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do we get started on my project?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Simply reach out via WhatsApp at +91 6387343245 or email amankatiyar.tech01@gmail.com. We will discuss your goals and provide a free 15-minute technical consultation with an exact timeline and quote within 24 hours.'
        }
      }
    ]
  };

  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'Full-Stack Web & Python Development',
      desc: 'Scalable, high-performance web applications and backend systems engineered with Python, Django, FastAPI, React, and Next.js. Clean architecture, robust database design, and mobile-first responsive interfaces.',
      tags: ['Python / Django', 'React.js', 'Next.js', 'PostgreSQL', 'FastAPI']
    },
    {
      icon: <FaRobot />,
      title: 'AI Systems, Chatbots & Automation',
      desc: 'Custom artificial intelligence solutions for modern businesses. We build custom ChatGPT and Claude assistants, autonomous multi-agent workflows, and 24/7 WhatsApp customer support bots that save hours of manual work.',
      tags: ['Custom GPTs', 'Claude AI', 'Multi-Agent AI', 'WhatsApp Cloud API', 'Automation']
    },
    {
      icon: <FaShoppingCart />,
      title: 'E-Commerce & Online Stores',
      desc: 'High-converting online shopping platforms with fast checkout, automated inventory tracking, and seamless payment gateway integrations including Razorpay, Stripe, and UPI.',
      tags: ['E-Commerce', 'Razorpay & Stripe', 'UPI Payments', 'Order Automation']
    },
    {
      icon: <FaWordpress />,
      title: 'WordPress & CMS Development',
      desc: 'Clean, modern, and easily manageable WordPress websites and WooCommerce stores. Custom themes, secure plugins, and speed optimization for under-two-second page loads without template bloat.',
      tags: ['WordPress', 'WooCommerce', 'Custom Themes', 'Fast & Secure']
    },
    {
      icon: <FaSearchLocation />,
      title: 'SEO, AEO & Google My Business (GMB)',
      desc: 'Dominate search results across Google Search, Google Maps, and AI answer engines (ChatGPT, Perplexity). Full technical SEO, rich schema markup, and Google Business Profile optimization to drive local leads.',
      tags: ['Local SEO', 'AEO (AI Search)', 'Google Maps (GMB)', 'Rich Schema']
    },
    {
      icon: <FaBullhorn />,
      title: 'Google Ads & Meta Ads Management',
      desc: 'Data-driven paid advertising campaigns on Google Search, Facebook, and Instagram. Precise audience targeting, persuasive ad creatives, and conversion tracking designed to maximize client acquisition.',
      tags: ['Google Ads', 'Meta Ads', 'PPC Campaigns', 'High ROI']
    },
    {
      icon: <FaTachometerAlt />,
      title: 'Speed Optimization & Core Web Vitals',
      desc: 'Transform slow, sluggish websites into lightning-fast platforms. Guaranteed 95+ Google PageSpeed score, zero layout shift (CLS 0), instant LCP, and top-tier user experience.',
      tags: ['95+ PageSpeed', 'Zero CLS', 'LCP Optimization', 'Clean Code']
    },
    {
      icon: <FaCogs />,
      title: 'Cloud DevOps, Security & Maintenance',
      desc: 'Comprehensive technical upkeep for your digital infrastructure. Docker containerization, Linux server management, SSL certificates, daily database backups, and proactive maintenance.',
      tags: ['Docker & Linux', 'SSL & Security', 'Database Backups', 'DevOps Support']
    }
  ];

  const localities = [
    { name: 'Gomti Nagar', desc: 'Vibhuti Khand, Patrakar Puram, Cyber Heights, Shaheed Path' },
    { name: 'Hazratganj', desc: 'Vidhan Sabha Marg, Ashok Marg, MG Marg & Central Business Hub' },
    { name: 'Indira Nagar', desc: 'Munshipulia, Ring Road, Bhootnath & Residential Commercial Zones' },
    { name: 'Alambagh', desc: 'Kanpur Road, Singarnagar, Transport Nagar & Industrial Hubs' },
    { name: 'Vibhuti Khand', desc: 'IT Parks, Tech Startups, Corporate Parks & Coworking Spaces' },
    { name: 'Shaheed Path & IT City', desc: 'Sultanpur Road, HCL IT City, Ekana Stadium Commercial' },
    { name: 'Mahanagar & Aliganj', desc: 'Kapoorthala, Engineering College, Dandiya & North Lucknow' },
    { name: 'Global & Remote', desc: 'Serving clients across India, US, UK, UAE, and Europe' }
  ];

  const projects = [
    {
      category: 'AI Systems & Frameworks',
      title: 'Tailor AI Coding Agent',
      desc: 'Open-source Spec-Driven Development framework featuring Model Context Protocol (MCP) server, published on NPM and Glama registry with 40+ stars.',
      tech: ['TypeScript', 'Node.js', 'MCP', 'Multi-Agent'],
      link: 'https://github.com/AmanKtyr/Tailor'
    },
    {
      category: 'SaaS Platform',
      title: 'FitStack Gym Management SaaS',
      desc: 'Production multi-tenant SaaS serving fitness enterprises with automated WhatsApp billing notifications, role-based access, and financial analytics.',
      tech: ['Python', 'Django', 'PostgreSQL', 'WhatsApp API'],
      link: 'http://fitstack.nextgenapplication.com/'
    },
    {
      category: 'Recruitment Ecosystem',
      title: 'SimplyJob Portal',
      desc: 'High-throughput recruitment portal featuring Boolean search filtering, candidate workflow pipelines, recruiter dashboard, and REST API architecture.',
      tech: ['Django REST', 'React.js', 'PostgreSQL', 'Tailwind'],
      link: 'https://simplyjob.in/'
    }
  ];

  const faqs = [
    {
      q: 'Do you provide complete IT services in Lucknow?',
      a: 'Yes. Aman Katiyar provides complete IT and digital services under one roof. Whether you need custom web development, a WordPress site, local SEO, Google My Business (GMB) optimization, Google or Meta ad management, or custom AI automation, you get end-to-end execution without hiring multiple agencies.'
    },
    {
      q: 'Can you build or redesign our WordPress website?',
      a: 'Absolutely. We design and develop clean, fast, and secure WordPress websites and WooCommerce stores. Every build is customized for your brand, easy for your staff to edit, and optimized to load quickly on mobile devices.'
    },
    {
      q: 'How do SEO, AEO, and Google My Business (GMB) help my business in Lucknow?',
      a: 'When prospective clients search for your services in Lucknow, SEO and GMB optimization ensure your business appears at the top of Google Search and Google Maps. AEO (Answer Engine Optimization) prepares your content so AI assistants like ChatGPT, Claude, and Perplexity quote and recommend your business directly.'
    },
    {
      q: 'Do you manage Google Ads and Meta (Facebook / Instagram) Ads?',
      a: 'Yes. We run targeted paid advertising campaigns focused on genuine ROI. We handle keyword targeting, compelling ad creatives, landing page optimization, and conversion tracking so you receive qualified customer leads rather than wasted clicks.'
    },
    {
      q: 'How can AI integration and workflow automation help my business?',
      a: 'AI integration allows you to offer 24/7 instant customer service through custom ChatGPT or WhatsApp bots. Workflow automation connects your website, payment gateway, CRM, and WhatsApp so invoices, reminders, and notifications are sent automatically without manual effort.'
    },
    {
      q: 'How much does website development and IT support cost in Lucknow?',
      a: 'Starter business and WordPress websites start from ₹14,999 to ₹24,999. Custom web applications and growth marketing packages range from ₹44,999 to ₹69,999, while custom AI platforms start at ₹89,999+. We work with transparent milestone pricing and provide full source code ownership.'
    },
    {
      q: 'Can we meet in person in Lucknow for project discussions?',
      a: 'Yes. Aman is based in Lucknow and is available for face-to-face discovery meetings across Gomti Nagar, Hazratganj, Indira Nagar, Vibhuti Khand, and Shaheed Path, as well as seamless remote collaboration.'
    },
    {
      q: 'How do we get started on my project?',
      a: 'You can start immediately by clicking the WhatsApp button or calling +91 6387343245. We will discuss your goals, recommend the right solution, and provide a clear timeline and quote within 24 hours.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Complete IT Services & Freelance Web Developer in Lucknow | Aman Katiyar</title>
        <meta
          name="title"
          content="Complete IT Services & Freelance Web Developer in Lucknow | Aman Katiyar"
        />
        <meta
          name="description"
          content="Looking for complete IT services in Lucknow? Aman Katiyar provides custom web development, WordPress, SEO & AEO, GMB optimization, Google & Meta Ads, and AI automation."
        />
        <meta
          name="keywords"
          content="Complete IT Services Lucknow, Freelance Web Developer in Lucknow, WordPress Developer Lucknow, SEO Services Lucknow, GMB Optimization Lucknow, AEO Consultant Lucknow, Google Ads Freelancer Lucknow, Meta Ads Lucknow, AI Automation Lucknow, AI Integration Lucknow, Best Freelancer Lucknow, React Developer Lucknow"
        />
        <meta name="author" content="Aman Katiyar (Aman Ktyr)" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link
          rel="canonical"
          href="https://aman.ktyr.in/freelance-web-developer-lucknow"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://aman.ktyr.in/freelance-web-developer-lucknow"
        />
        <meta
          property="og:title"
          content="Complete IT Services & Freelance Web Developer in Lucknow | Aman Katiyar"
        />
        <meta
          property="og:description"
          content="Complete IT solutions in Lucknow: Custom Web Development, WordPress, SEO & GMB, Google & Meta Ads, and AI Automation by Aman Katiyar."
        />
        <meta
          property="og:image"
          content="https://aman.ktyr.in/og-image.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Complete IT Services & Freelance Web Developer in Lucknow | Aman Katiyar"
        />
        <meta
          name="twitter:description"
          content="End-to-end IT, Web & AI Solutions in Lucknow. Custom websites, WordPress, SEO, Ads & Automation with proven results."
        />
        <meta
          name="twitter:image"
          content="https://aman.ktyr.in/og-image.png"
        />

        {/* Structured Data: Local Business / Professional Service */}
        <script type="application/ld+json">
          {JSON.stringify(professionalServiceSchema)}
        </script>

        {/* Structured Data: FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>

        {/* Structured Data: BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://aman.ktyr.in'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Complete IT Services & Web Developer in Lucknow',
                item: 'https://aman.ktyr.in/freelance-web-developer-lucknow'
              }
            ]
          })}
        </script>
      </Helmet>

      <Header />

      <PageContainer>
        {/* HERO SECTION */}
        <HeroSection>
          <LocationBadge>
            <span className="dot" />
            <span>📍 Lucknow, UP • Complete IT & AI Development Services</span>
          </LocationBadge>

          <HeroTitle>
            Full-Stack Python, Web Architecture & <span className="highlight">AI Solutions</span> in Lucknow
          </HeroTitle>

          <HeroSubtitle>
            Engineering high-demand digital systems: Full-Stack Web Applications (Python, Django, React, Next.js),
            cutting-edge AI systems & automation, scalable e-commerce, modern WordPress websites, and high-ROI SEO
            & Paid Ads (Google & Meta). Direct senior engineer collaboration with 100% source code ownership.
          </HeroSubtitle>

          <HeroActions>
            <WhatsAppPill
              href="https://wa.me/916387343245?text=Hi%20Aman,%20I'm%20looking%20for%20Full-Stack%20Python%20and%20AI%20development%20in%20Lucknow."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Chat with Aman Katiyar"
            >
              <FaWhatsapp aria-hidden="true" />
              Chat on WhatsApp
            </WhatsAppPill>

            <PrimaryButton href="#inquiry">
              <FaRocket aria-hidden="true" />
              Get Free Project Quote
            </PrimaryButton>

            <SecondaryButton href="tel:+916387343245">
              <FaPhoneAlt aria-hidden="true" />
              +91 6387343245
            </SecondaryButton>
          </HeroActions>

          <QuickStatsGrid>
            <StatCard>
              <div className="stat-number">35+</div>
              <div className="stat-label">Production Systems & Websites Delivered</div>
            </StatCard>
            <StatCard>
              <div className="stat-number">5.0★</div>
              <div className="stat-label">Client Rating & Satisfaction</div>
            </StatCard>
            <StatCard>
              <div className="stat-number">3+ Yrs</div>
              <div className="stat-label">Full-Stack, Python & AI Engineering</div>
            </StatCard>
            <StatCard>
              <div className="stat-number">100%</div>
              <div className="stat-label">Code & Digital Asset Ownership</div>
            </StatCard>
          </QuickStatsGrid>
        </HeroSection>

        {/* AEO TARGET CARD (Answer Engine Optimization for Google & LLMs) */}
        <div style={{ padding: '0 1rem' }}>
          <AEOAnswerCard>
            <span className="badge">Full-Service IT & Digital Architecture</span>
            <h2>Why Aman Katiyar is Lucknow's Trusted Full-Stack IT & AI Partner</h2>
            <p>
              <strong>Aman Katiyar (Aman Ktyr)</strong> is a Lucknow-based senior full-stack software engineer,
              AI developer, and technology consultant offering full-spectrum digital solutions. Instead of hiring separate agencies
              for backend engineering, web design, marketing, and automation, you get complete digital solutions under one roof.
            </p>
            <p>
              Whether you need a high-performance <strong>Full-Stack Web Application (Python, Django, React, Next.js)</strong>,
              an autonomous <strong>AI Agent & Workflow Automation system</strong>, a modern <strong>WordPress website</strong>,
              local <strong>SEO & Google Business Profile (GMB)</strong> dominance, or profitable <strong>Google & Meta ad campaigns</strong>,
              Aman delivers dependable, enterprise-grade execution with zero middleman markups.
            </p>
            <ul>
              <li><strong>Full-Stack & Python Architecture:</strong> Scalable backends built with Python, Django, FastAPI, and PostgreSQL paired with modern React/Next.js frontends.</li>
              <li><strong>AI Systems & Automation:</strong> Custom ChatGPT assistants, Claude integrations, autonomous multi-agent workflows, and WhatsApp bots.</li>
              <li><strong>Modern WordPress & E-Commerce:</strong> Fast, lightweight WordPress websites and WooCommerce stores with zero unnecessary template bloat.</li>
              <li><strong>SEO, AEO & GMB Dominance:</strong> Rank #1 on Google Search, Google Maps, and AI answer engines (ChatGPT, Perplexity).</li>
              <li><strong>Targeted Google & Meta Ads:</strong> Data-driven PPC and social media advertising campaigns designed for profitable lead generation.</li>
              <li><strong>Direct Senior Engineer Access:</strong> Deal directly with your lead technical architect with full transparency and 100% source code ownership.</li>
            </ul>
          </AEOAnswerCard>
        </div>

        {/* SERVICES SECTION */}
        <SectionWrapper id="services">
          <SectionHeader>
            <span className="badge">Complete IT & Digital Solutions</span>
            <h2>Comprehensive IT & Growth Services for Your Business</h2>
            <p>
              Everything you need to launch, scale, and automate your business online. Handled with senior-level
              engineering, transparent pricing, and measurable business outcomes.
            </p>
          </SectionHeader>

          <ServicesGrid>
            {services.map((item, idx) => (
              <ServiceCard key={idx}>
                <div className="icon-wrap">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="service-tags">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx}>{tag}</span>
                  ))}
                </div>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </SectionWrapper>

        {/* COMPARISON MATRIX (Full-Service Specialist vs Fragmented Agencies) */}
        <SectionWrapper id="comparison">
          <SectionHeader>
            <span className="badge">The Strategic Advantage</span>
            <h2>Why Choose a Dedicated Full-Stack Partner Over Traditional Agencies</h2>
            <p>
              Compare how working with an end-to-end IT specialist saves you time, money, and operational headaches.
            </p>
          </SectionHeader>

          <ComparisonTableWrapper>
            <ComparisonTable>
              <thead>
                <tr>
                  <th>Feature / Service Scope</th>
                  <th className="highlight-col">Aman Katiyar (Complete IT Partner)</th>
                  <th>Fragmented Traditional Agencies</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="feature-name">Service Scope</td>
                  <td className="freelancer-val">End-to-End: Web, WordPress, SEO, GMB, Ads & AI Automation</td>
                  <td className="agency-val">Requires hiring multiple separate agencies or freelancers</td>
                </tr>
                <tr>
                  <td className="feature-name">Communication</td>
                  <td className="freelancer-val">Direct with the lead engineer building your systems</td>
                  <td className="agency-val">Account managers, sales representatives, and delayed answers</td>
                </tr>
                <tr>
                  <td className="feature-name">Tech Stack & CMS</td>
                  <td className="freelancer-val">Modern React, Next.js, Python, and lightweight WordPress</td>
                  <td className="agency-val">Often bloated, sluggish templates with high maintenance costs</td>
                </tr>
                <tr>
                  <td className="feature-name">Traffic & Conversion</td>
                  <td className="freelancer-val">Built-in Local SEO, AEO, GMB optimization & profitable Ads</td>
                  <td className="agency-val">Often charges high separate retainers with zero technical sync</td>
                </tr>
                <tr>
                  <td className="feature-name">Turnaround Time</td>
                  <td className="freelancer-val">Agile 1–3 week delivery with weekly progress updates</td>
                  <td className="agency-val">Slow 2–3 month timelines filled with bureaucratic delays</td>
                </tr>
                <tr>
                  <td className="feature-name">Asset & Code Ownership</td>
                  <td className="freelancer-val">100% full ownership of source code, ad accounts & assets</td>
                  <td className="agency-val">Often locked into proprietary accounts or recurring lock-in fees</td>
                </tr>
              </tbody>
            </ComparisonTable>
          </ComparisonTableWrapper>
        </SectionWrapper>

        {/* LOCALITIES COVERAGE SECTION */}
        <SectionWrapper id="localities">
          <SectionHeader>
            <span className="badge">Local Lucknow Presence</span>
            <h2>Serving All Major Commercial Hubs in Lucknow & Uttar Pradesh</h2>
            <p>
              Available for in-person consultations, technical strategy sessions, and ongoing support across Lucknow.
            </p>
          </SectionHeader>

          <LocalitiesGrid>
            {localities.map((loc, idx) => (
              <LocalityCard key={idx}>
                <div className="area-name">
                  <FaMapMarkerAlt />
                  {loc.name}
                </div>
                <div className="area-desc">{loc.desc}</div>
              </LocalityCard>
            ))}
          </LocalitiesGrid>
        </SectionWrapper>

        {/* FEATURED WORK SHOWCASE */}
        <SectionWrapper id="projects">
          <SectionHeader>
            <span className="badge">Proof of Execution</span>
            <h2>Selected Production Applications & Case Studies</h2>
            <p>
              Explore battle-tested software applications, SaaS systems, and digital platforms engineered by Aman.
            </p>
          </SectionHeader>

          <ProjectsGrid>
            {projects.map((proj, idx) => (
              <ProjectItemCard key={idx}>
                <div className="card-body">
                  <span className="category">{proj.category}</span>
                  <h3>{proj.title}</h3>
                  <p>{proj.desc}</p>
                  <div className="tech-row">
                    {proj.tech.map((t, tIdx) => (
                      <span key={tIdx}>{t}</span>
                    ))}
                  </div>
                  <div className="links-row">
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${proj.title}`}
                    >
                      Explore Project <FaExternalLinkAlt aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </ProjectItemCard>
            ))}
          </ProjectsGrid>
        </SectionWrapper>

        {/* 4-STEP SPRINT WORKFLOW */}
        <SectionWrapper id="process">
          <SectionHeader>
            <span className="badge">Clear Execution Workflow</span>
            <h2>From Discovery to Launch in 4 Clear Sprints</h2>
            <p>
              A straightforward, transparent delivery methodology ensuring your project finishes on time and within budget.
            </p>
          </SectionHeader>

          <WorkflowGrid>
            <WorkflowStep>
              <div className="step-num">01</div>
              <h4>Discovery & Strategy</h4>
              <p>
                We clarify your business goals, target audience, and required IT stack. I provide a clear roadmap,
                deliverables, and honest pricing.
              </p>
            </WorkflowStep>

            <WorkflowStep>
              <div className="step-num">02</div>
              <h4>Design & Prototype</h4>
              <p>
                Crafting clean, responsive layouts with modern visuals so you can review and approve the user experience
                before development begins.
              </p>
            </WorkflowStep>

            <WorkflowStep>
              <div className="step-num">03</div>
              <h4>Development & Integration</h4>
              <p>
                Building with clean code, whether WordPress or custom full-stack frameworks. Rigorous testing for mobile
                responsiveness, SEO, and security.
              </p>
            </WorkflowStep>

            <WorkflowStep>
              <div className="step-num">04</div>
              <h4>Launch, SEO & Handover</h4>
              <p>
                Speed audit, SSL setup, Google Search Console & GMB configuration, ad campaign launch, and full handover
                of all digital accounts and assets.
              </p>
            </WorkflowStep>
          </WorkflowGrid>
        </SectionWrapper>

        {/* TRANSPARENT PRICING TIERS */}
        <SectionWrapper id="pricing">
          <SectionHeader>
            <span className="badge">Transparent Investment</span>
            <h2>Simple, Milestone-Based Packages for Every Stage</h2>
            <p>
              Straightforward pricing with clear deliverables. Complete source code and asset ownership guaranteed.
            </p>
          </SectionHeader>

          <PricingGrid>
            <PricingCard>
              <h3>Starter Business & WordPress</h3>
              <p className="tier-desc">
                Ideal for local businesses, doctors, consultants, and service professionals in Lucknow.
              </p>
              <div className="price-wrap">
                <span className="inr">₹19,999</span>
                <span className="usd">/ ~$249 USD</span>
              </div>
              <ul>
                <li><FaCheckCircle /> Custom 5-Page Website (WordPress or React)</li>
                <li><FaCheckCircle /> Google My Business (GMB) Optimization</li>
                <li><FaCheckCircle /> On-Page SEO & Schema Markup</li>
                <li><FaCheckCircle /> WhatsApp Direct Chat Integration</li>
                <li><FaCheckCircle /> Fast Loading (Core Web Vitals Optimized)</li>
                <li><FaCheckCircle /> 5–7 Days Fast Delivery</li>
              </ul>
              <PrimaryButton
                href="https://wa.me/916387343245?text=Hi%20Aman,%20I'm%20interested%20in%20the%20Starter%20Business%20%26%20WordPress%20package."
                target="_blank"
                rel="noopener noreferrer"
              >
                Choose Starter
              </PrimaryButton>
            </PricingCard>

            <PricingCard featured>
              <div className="featured-tag">Most Popular</div>
              <h3>Full-Stack App & Growth Suite</h3>
              <p className="tier-desc">
                Designed for growing businesses, startups, online stores, and high-converting lead generation.
              </p>
              <div className="price-wrap">
                <span className="inr">₹49,999</span>
                <span className="usd">/ ~$649 USD</span>
              </div>
              <ul>
                <li><FaCheckCircle /> Custom Web Application or E-Commerce Store</li>
                <li><FaCheckCircle /> Advanced SEO + AEO (AI Engine) Optimization</li>
                <li><FaCheckCircle /> Google Ads & Meta Ads Setup</li>
                <li><FaCheckCircle /> Python/Django or Node.js Backend with Database</li>
                <li><FaCheckCircle /> Secure Payment Gateway (Razorpay / Stripe)</li>
                <li><FaCheckCircle /> 14–21 Days Agile Delivery</li>
              </ul>
              <PrimaryButton
                href="https://wa.me/916387343245?text=Hi%20Aman,%20I'm%20interested%20in%20the%20Full-Stack%20App%20%26%20Growth%20Suite."
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Growth Suite
              </PrimaryButton>
            </PricingCard>

            <PricingCard>
              <h3>Enterprise AI & Custom IT</h3>
              <p className="tier-desc">
                Tailored for enterprises requiring custom AI chatbots, automated business pipelines, or bespoke systems.
              </p>
              <div className="price-wrap">
                <span className="inr">₹89,999+</span>
                <span className="usd">/ ~$1,199+ USD</span>
              </div>
              <ul>
                <li><FaCheckCircle /> Custom AI Chatbots (ChatGPT / Claude APIs)</li>
                <li><FaCheckCircle /> WhatsApp Cloud API & CRM Workflow Automation</li>
                <li><FaCheckCircle /> High-Throughput Cloud Architecture (AWS / Docker)</li>
                <li><FaCheckCircle /> Multi-Channel Ads Management & Scaling</li>
                <li><FaCheckCircle /> 60 Days Priority Support & Maintenance</li>
                <li><FaCheckCircle /> Custom Milestone Delivery Schedule</li>
              </ul>
              <PrimaryButton
                href="https://wa.me/916387343245?text=Hi%20Aman,%20I'm%20interested%20in%20the%20Enterprise%20AI%20%26%20Custom%20IT%20package."
                target="_blank"
                rel="noopener noreferrer"
              >
                Inquire Enterprise
              </PrimaryButton>
            </PricingCard>
          </PricingGrid>
        </SectionWrapper>

        {/* FREQUENTLY ASKED QUESTIONS (FAQ with Schema sync) */}
        <SectionWrapper id="faq">
          <SectionHeader>
            <span className="badge">Frequently Asked Questions</span>
            <h2>Common Queries About Our IT & Web Services in Lucknow</h2>
            <p>
              Clear answers to help you choose the right digital services for your business goals.
            </p>
          </SectionHeader>

          <FAQList>
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} isOpen={openFaq === idx}>
                <FAQQuestion
                  onClick={() => toggleFaq(idx)}
                  isOpen={openFaq === idx}
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.q}</span>
                  <FaChevronDown className="icon" aria-hidden="true" />
                </FAQQuestion>
                {openFaq === idx && <FAQAnswer>{faq.a}</FAQAnswer>}
              </FAQItem>
            ))}
          </FAQList>
        </SectionWrapper>

        {/* FINAL CONVERSION CTA SECTION */}
        <SectionWrapper id="inquiry">
          <FinalCTAContainer>
            <div className="cta-info">
              <h2>Let's Build and Grow Your Digital Presence</h2>
              <p>
                Have a project idea, or need an audit for your current website and marketing campaigns?
                Reach out today for a complimentary 15-minute consultation. We will discuss your
                objectives and provide a clear, practical execution blueprint.
              </p>

              <div className="direct-contacts">
                <a href="https://wa.me/916387343245" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp aria-hidden="true" /> WhatsApp: +91 6387343245 (Instant Reply)
                </a>
                <a href="tel:+916387343245">
                  <FaPhoneAlt aria-hidden="true" /> Phone: +91 6387343245
                </a>
                <a href="mailto:amankatiyar.tech01@gmail.com">
                  <FaEnvelope aria-hidden="true" /> Email: amankatiyar.tech01@gmail.com
                </a>
                <span style={{ color: 'var(--primary-color)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                  📍 Physical Presence: Lucknow, Uttar Pradesh, India
                </span>
              </div>
            </div>

            <QuickInquiryCard onSubmit={handleFormSubmit}>
              <h3>Quick Project Inquiry</h3>
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone / WhatsApp Number *"
                required
                value={formData.phone}
                onChange={handleInputChange}
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
              >
                <option value="Full-Stack Python & Web Application (Django / React / Next.js)">Full-Stack Python & Web Application (Django / React / Next.js)</option>
                <option value="AI Integration & Custom Chatbots (ChatGPT / Claude)">AI Integration & Custom Chatbots (ChatGPT / Claude)</option>
                <option value="AI Workflow & Business Automation (WhatsApp / CRM)">AI Workflow & Business Automation (WhatsApp / CRM)</option>
                <option value="E-Commerce Store & Payment Gateway (Razorpay / Stripe)">E-Commerce Store & Payment Gateway (Razorpay / Stripe)</option>
                <option value="WordPress Website & WooCommerce Development">WordPress Website & WooCommerce Development</option>
                <option value="SEO, AEO & Google My Business (GMB) Growth">SEO, AEO & Google My Business (GMB) Growth</option>
                <option value="Google Ads & Meta Ads Management (High ROI)">Google Ads & Meta Ads Management (High ROI)</option>
                <option value="Complete IT & Digital Growth Package">Complete IT & Digital Growth Package</option>
                <option value="Website Speed & Security Maintenance">Website Speed & Security Maintenance</option>
              </select>
              <textarea
                name="message"
                placeholder="Briefly describe your project goals..."
                required
                value={formData.message}
                onChange={handleInputChange}
              />
              <button type="submit">
                <FaWhatsapp aria-hidden="true" />
                Send Inquiry via WhatsApp
              </button>
            </QuickInquiryCard>
          </FinalCTAContainer>
        </SectionWrapper>
      </PageContainer>

      <Footer />
    </>
  );
};

export default FreelanceLucknow;
