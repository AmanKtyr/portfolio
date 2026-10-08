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
  FaServer,
  FaRobot,
  FaShoppingCart,
  FaTachometerAlt,
  FaSearch,
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
    service: 'Custom Website Development',
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
      `*FREELANCE LUCKNOW INQUIRY*\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Phone:* ${phone}\n` +
      `*Service:* ${service}\n` +
      `*Project Details:* ${message}`
    );
    window.open(`https://wa.me/916387343245?text=${text}`, '_blank');
  };

  // Structured Data Schemas
  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness'],
    '@id': 'https://aman.ktyr.in/freelance-web-developer-lucknow#service',
    name: 'Aman Katiyar - Freelance Web Developer & AI Engineer in Lucknow',
    alternateName: 'Aman Ktyr Freelance Web Development Services',
    description:
      'Premier freelance web developer and AI engineer in Lucknow. Building high-performance, responsive websites, React/Next.js SaaS applications, and custom AI systems for local businesses and global startups.',
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
      name: 'Freelance Web & AI Development Services Lucknow',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Web Development & Landing Pages',
            description:
              'High-converting, ultra-fast websites built with React, Next.js, and modern CSS with 95+ Google PageSpeed.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Full-Stack Web Applications & SaaS Development',
            description:
              'Scalable web applications built with Python/Django, Node.js, and PostgreSQL for startups and SMEs.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-Commerce Website Development & Payment Integration',
            description:
              'Seamless online shopping stores with Razorpay, Stripe, and automated WhatsApp order notifications.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Agents & Automation Consulting',
            description:
              'Autonomous LLM workflows, custom AI chatbots, and OpenAI/Anthropic API integrations.'
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
        name: 'Who is the best freelance web developer in Lucknow?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Aman Katiyar is widely regarded as one of the best freelance web developers and AI solutions engineers in Lucknow, Uttar Pradesh. With 3+ years of enterprise engineering experience, he has built over 15 production systems including SaaS platforms, AI agent frameworks, and high-performance business websites with guaranteed 95+ Core Web Vitals.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does website development cost with a freelance developer in Lucknow?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Freelance website development in Lucknow typically starts from ₹14,999 to ₹24,999 for a standard business portfolio or landing page, ₹39,999 to ₹79,999 for a custom full-stack web application or SaaS MVP, and ₹99,999+ for enterprise AI platforms. Aman Katiyar offers transparent pricing with no hidden charges and complete source code ownership.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can you meet in person in Gomti Nagar or Hazratganj, Lucknow?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Aman Katiyar is physically based in Lucknow and is available for in-person project discovery sessions across prime hubs including Gomti Nagar, Hazratganj, Indira Nagar, Vibhuti Khand, and Shaheed Path, as well as seamless remote collaboration for global clients.'
        }
      },
      {
        '@type': 'Question',
        name: 'How long does it take to deliver a custom website in Lucknow?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Standard business websites and landing pages are typically delivered within 5 to 10 working days. Custom web applications, e-commerce stores, and SaaS MVPs take between 2 to 4 weeks depending on the required architecture and integrations.'
        }
      },
      {
        '@type': 'Question',
        name: 'Why should I hire a freelance developer instead of an agency in Lucknow?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hiring a dedicated freelance specialist like Aman Katiyar provides direct communication with the actual developer (no sales reps or middlemen), 60% lower costs by cutting out agency overhead, 3x faster delivery sprints, zero dependency lock-in, and cutting-edge tech stacks like React, Next.js, and Python rather than outdated WordPress templates.'
        }
      },
      {
        '@type': 'Question',
        name: 'Will my website be mobile-friendly and optimized for Google SEO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Every website engineered by Aman is 100% mobile-responsive, adheres to WCAG 2.1 AA accessibility guidelines, passes all Core Web Vitals with 95+ PageSpeed scores, and includes clean on-page SEO, schema markup (JSON-LD), and fast indexing setup.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you also integrate AI features and chatbots into websites?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Aman specializes in applied AI and agentic systems. He integrates custom ChatGPT assistants, Claude models, automated WhatsApp bots, vision AI processors, and custom internal workflows tailored for business operations.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do we get started on my project?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can reach out directly via WhatsApp at +91 6387343245 or email amankatiyar.tech01@gmail.com with your project brief. Aman will provide a free 15-minute technical discovery call and a clear architectural roadmap with timeline and milestone pricing.'
        }
      }
    ]
  };

  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'Custom Web Development & Landing Pages',
      desc: 'High-converting, responsive websites built with React and Next.js. Ultra-clean markup, modern UI aesthetics, and instant load times that turn visitors into paying clients.',
      tags: ['React.js', 'Next.js', 'Tailwind CSS', 'Responsive UI']
    },
    {
      icon: <FaServer />,
      title: 'Full-Stack Web Applications & SaaS MVPs',
      desc: 'End-to-end software engineering using Python/Django, Node.js, and PostgreSQL. Multi-tenant databases, secure authentication, and scalable architectures designed for growth.',
      tags: ['Python / Django', 'Node.js', 'PostgreSQL', 'REST APIs']
    },
    {
      icon: <FaShoppingCart />,
      title: 'Modern E-Commerce & Payment Gateways',
      desc: 'Custom online shopping platforms with seamless checkout, inventory tracking, and integrations with Razorpay, Stripe, and automated WhatsApp order alerts.',
      tags: ['E-Commerce', 'Razorpay', 'Stripe', 'WhatsApp API']
    },
    {
      icon: <FaRobot />,
      title: 'AI Systems, Chatbots & Automation',
      desc: 'Supercharge your business with custom AI assistants, automated lead qualifiers, LLM integrations (OpenAI / Anthropic), and autonomous workflow agents.',
      tags: ['LLM APIs', 'Agentic AI', 'Custom Chatbots', 'Workflow Automation']
    },
    {
      icon: <FaTachometerAlt />,
      title: 'Speed Optimization & Core Web Vitals',
      desc: 'Transform slow, bloated websites into lightning-fast powerhouses. Guaranteed 95+ Google PageSpeed score, zero layout shift (CLS 0), and instant LCP.',
      tags: ['99+ PageSpeed', 'Zero CLS', 'LCP Optimization', 'Clean Code']
    },
    {
      icon: <FaSearch />,
      title: 'Local SEO & Google Search Dominance',
      desc: 'Technical on-page SEO, rich JSON-LD schema markup, Google Search Console indexing, and local citation architecture designed to rank #1 in Lucknow.',
      tags: ['Local SEO', 'Schema Markup', 'Google Indexing', 'AEO Optimization']
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
      q: 'Who is the best freelance web developer in Lucknow?',
      a: 'Aman Katiyar (Aman Ktyr) is a top-rated freelance full-stack developer and AI solutions architect based in Lucknow. With 3+ years of professional engineering experience, he specializes in high-converting modern websites, scalable SaaS applications, and custom AI systems that achieve 99+ Core Web Vitals speed scores and top Google search rankings.'
    },
    {
      q: 'How much does it cost to build a website with a freelance developer in Lucknow?',
      a: 'Pricing starts at ₹14,999 to ₹24,999 for high-performance business websites and landing pages. Full-stack applications and SaaS MVPs range between ₹39,999 to ₹79,999, while custom AI platforms and enterprise platforms are ₹99,999+. Aman provides transparent milestone pricing with zero hidden charges and complete source code ownership.'
    },
    {
      q: 'Can you meet in person in Lucknow (Gomti Nagar, Hazratganj, etc.)?',
      a: 'Yes! Aman is physically based in Lucknow and frequently meets local founders, business owners, and startup teams across Gomti Nagar, Hazratganj, Indira Nagar, Vibhuti Khand, and Shaheed Path for project discovery and strategic roadmap sessions.'
    },
    {
      q: 'How long will it take to build and launch my website?',
      a: 'Most standard business websites and landing pages are designed, coded, and launched within 5 to 10 working days. Custom web applications, SaaS MVPs, and complex e-commerce stores take approximately 2 to 4 weeks with weekly sprint demos.'
    },
    {
      q: 'Why should I hire a freelance expert over a web design agency in Lucknow?',
      a: 'Agencies in Lucknow often charge high fees to cover overhead, rely on junior staff or outdated WordPress templates, and have slow turnaround times. When you work with Aman, you communicate directly with a senior full-stack architect, save 50-60% on total project cost, get cutting-edge tech (React, Next.js, Python), and receive 100% clean code that you own forever.'
    },
    {
      q: 'Will my website rank on Google and be mobile-friendly?',
      a: 'Absolutely. Every site is engineered mobile-first with 100% responsiveness, strict WCAG 2.1 AA accessibility, structured JSON-LD schema markup, and guaranteed 95+ Google PageSpeed scores to give you a decisive advantage over competitors.'
    },
    {
      q: 'Do you offer post-launch maintenance and technical support?',
      a: 'Yes, every project includes 30 days of complimentary post-launch support and bug-fixing. Extended maintenance and monthly retainer packages are also available for continuous feature updates, security patches, and SEO monitoring.'
    },
    {
      q: 'How do we get started on my project?',
      a: 'Getting started is simple. Click the WhatsApp button or call +91 6387343245 to discuss your vision. We will outline your requirements, propose the optimal tech stack, and deliver an exact timeline and quote within 24 hours.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Freelance Web Developer in Lucknow | Aman Katiyar</title>
        <meta
          name="title"
          content="Freelance Web Developer in Lucknow | Aman Katiyar"
        />
        <meta
          name="description"
          content="Looking to hire the best freelance web developer in Lucknow? Aman Katiyar builds high-converting, ultra-fast (99+ PageSpeed) websites, React/Next.js apps & custom AI systems."
        />
        <meta
          name="keywords"
          content="Freelance Web Developer in Lucknow, Best Freelancer in Lucknow, Freelance Software Developer Lucknow, Hire Freelance Web Developer Lucknow, Website Designer Freelancer Lucknow, React Developer Lucknow, Next.js Developer Lucknow, Freelance Full Stack Developer Lucknow, Web Development Services Gomti Nagar, Hazratganj Website Designer, AI Engineer Lucknow"
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
          content="Freelance Web Developer in Lucknow | Aman Katiyar"
        />
        <meta
          property="og:description"
          content="Hire the top-rated freelance web developer and AI engineer in Lucknow. Custom websites, React/Next.js SaaS, and guaranteed 99+ Core Web Vitals."
        />
        <meta
          property="og:image"
          content="https://aman.ktyr.in/og-image.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Freelance Web Developer in Lucknow | Aman Katiyar"
        />
        <meta
          name="twitter:description"
          content="Looking to hire a top freelance web developer in Lucknow? Aman Katiyar builds high-performance websites and AI applications with guaranteed speed and SEO ranking."
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
                name: 'Freelance Web Developer in Lucknow',
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
            <span>📍 Lucknow, UP • Accepting Freelance & Contract Projects</span>
          </LocationBadge>

          <HeroTitle>
            Freelance Web Developer & <span className="highlight">AI Engineer</span> in Lucknow
          </HeroTitle>

          <HeroSubtitle>
            Engineering ultra-fast (99+ PageSpeed), high-converting business websites,
            scalable React/Next.js SaaS applications, and custom AI automation. Direct collaboration,
            zero agency fluff, and 100% source code ownership.
          </HeroSubtitle>

          <HeroActions>
            <WhatsAppPill
              href="https://wa.me/916387343245?text=Hi%20Aman,%20I'm%20looking%20for%20a%20freelance%20web%20developer%20in%20Lucknow%20for%20my%20project."
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
              <div className="stat-label">Production Systems Delivered</div>
            </StatCard>
            <StatCard>
              <div className="stat-number">5.0★</div>
              <div className="stat-label">Client Rating & Satisfaction</div>
            </StatCard>
            <StatCard>
              <div className="stat-number">3+ Yrs</div>
              <div className="stat-label">Full-Stack & AI Engineering</div>
            </StatCard>
            <StatCard>
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Code Ownership & Transparency</div>
            </StatCard>
          </QuickStatsGrid>
        </HeroSection>

        {/* AEO TARGET CARD (Answer Engine Optimization for Google & LLMs) */}
        <div style={{ padding: '0 1rem' }}>
          <AEOAnswerCard>
            <span className="badge">Featured Executive Summary</span>
            <h2>Why Aman Katiyar is the Top Freelance Developer in Lucknow</h2>
            <p>
              <strong>Aman Katiyar (Aman Ktyr)</strong> is a Lucknow-based senior full-stack software engineer,
              solutions architect, and applied AI developer. Unlike generic freelance marketplaces or traditional digital
              agencies that outsource work or rely on slow, pre-made templates, Aman delivers custom, high-velocity
              digital ecosystems engineered with <strong>React.js, Next.js, Python/Django, and PostgreSQL</strong>.
            </p>
            <p>
              Whether you are an ambitious business in Gomti Nagar seeking a high-converting website, a startup
              requiring a full-stack SaaS MVP, or an enterprise seeking autonomous AI workflows, you gain direct
              collaboration with a technical specialist dedicated to clean code, search engine dominance, and measurable ROI.
            </p>
            <ul>
              <li><strong>Direct Architecture:</strong> Speak directly to your developer, not an account manager.</li>
              <li><strong>Modern Technology:</strong> Future-proof React, Next.js, TypeScript & Python backends.</li>
              <li><strong>Search & Speed Optimization:</strong> 95-100 Core Web Vitals score on mobile and desktop.</li>
              <li><strong>In-Person or Remote:</strong> Flexible meetings in Lucknow or worldwide agile delivery.</li>
            </ul>
          </AEOAnswerCard>
        </div>

        {/* SERVICES SECTION */}
        <SectionWrapper id="services">
          <SectionHeader>
            <span className="badge">Specialized Engineering Services</span>
            <h2>What I Build for Lucknow Businesses & Global Clients</h2>
            <p>
              From conversion-focused business websites to high-throughput cloud platforms and AI workflows,
              every project is custom-crafted for speed, aesthetics, and revenue generation.
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

        {/* COMPARISON MATRIX (Freelance Specialist vs Slow Agency) */}
        <SectionWrapper id="comparison">
          <SectionHeader>
            <span className="badge">Direct Specialist Advantage</span>
            <h2>Freelance Specialist vs Traditional Agency in Lucknow</h2>
            <p>
              Why modern founders and businesses choose a dedicated senior software engineer over bloated agencies.
            </p>
          </SectionHeader>

          <ComparisonTableWrapper>
            <ComparisonTable>
              <thead>
                <tr>
                  <th>Feature / Criterion</th>
                  <th className="highlight-col">Aman Katiyar (Freelance Expert)</th>
                  <th>Traditional Lucknow Agency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="feature-name">Communication Channel</td>
                  <td className="freelancer-val">Direct with the engineer building your product</td>
                  <td className="agency-val">Middlemen, account managers, delayed answers</td>
                </tr>
                <tr>
                  <td className="feature-name">Technology Stack</td>
                  <td className="freelancer-val">Modern React, Next.js, Python, Django, Tailwind</td>
                  <td className="agency-val">Often outdated WordPress themes & heavy plugins</td>
                </tr>
                <tr>
                  <td className="feature-name">Delivery Speed</td>
                  <td className="freelancer-val">Rapid 1–3 week sprint delivery</td>
                  <td className="agency-val">Sluggish 2–3 months with layers of bureaucracy</td>
                </tr>
                <tr>
                  <td className="feature-name">Performance & Core Web Vitals</td>
                  <td className="freelancer-val">Guaranteed 95–100 Google PageSpeed scores</td>
                  <td className="agency-val">Often fails mobile audits (40–60 scores)</td>
                </tr>
                <tr>
                  <td className="feature-name">Cost Efficiency</td>
                  <td className="freelancer-val">Fair, transparent pricing with zero agency overhead</td>
                  <td className="agency-val">High markups to cover large office and sales teams</td>
                </tr>
                <tr>
                  <td className="feature-name">Source Code Ownership</td>
                  <td className="freelancer-val">100% full code ownership & GitHub repo transfer</td>
                  <td className="agency-val">Often locked into proprietary hosts or monthly fees</td>
                </tr>
              </tbody>
            </ComparisonTable>
          </ComparisonTableWrapper>
        </SectionWrapper>

        {/* LOCALITIES COVERAGE SECTION */}
        <SectionWrapper id="localities">
          <SectionHeader>
            <span className="badge">Local Lucknow Presence</span>
            <h2>Serving All Major Hubs Across Lucknow & Uttar Pradesh</h2>
            <p>
              Available for in-person consultation meetings, technical whiteboarding, and ongoing support across Lucknow.
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
              Inspect battle-tested software systems, SaaS products, and open-source tooling engineered by Aman.
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
            <span className="badge">Predictable Delivery Process</span>
            <h2>From Concept to Live Deployment in 4 Clear Sprints</h2>
            <p>
              A disciplined, transparent agile development methodology ensuring zero surprises and timely launches.
            </p>
          </SectionHeader>

          <WorkflowGrid>
            <WorkflowStep>
              <div className="step-num">01</div>
              <h4>Discovery & Blueprint</h4>
              <p>
                We review your business goals, target audience, and feature scope. I provide a clear architecture plan,
                wireframe recommendations, and exact deliverables.
              </p>
            </WorkflowStep>

            <WorkflowStep>
              <div className="step-num">02</div>
              <h4>Rapid UI & Prototype</h4>
              <p>
                Crafting modern, high-conversion UI layouts with dynamic glassmorphism and responsive design tokens,
                allowing you to test the visual flow before coding.
              </p>
            </WorkflowStep>

            <WorkflowStep>
              <div className="step-num">03</div>
              <h4>Full-Stack Production</h4>
              <p>
                Writing clean, modular code with React, Next.js, and Python. Rigorous mobile responsiveness,
                database security, and WCAG AA accessibility tests.
              </p>
            </WorkflowStep>

            <WorkflowStep>
              <div className="step-num">04</div>
              <h4>Speed Audit & Launch</h4>
              <p>
                Complete Core Web Vitals optimization (95+ score), SSL certificate, Google Search Console indexing,
                sitemap setup, and full code handover.
              </p>
            </WorkflowStep>
          </WorkflowGrid>
        </SectionWrapper>

        {/* TRANSPARENT PRICING TIERS */}
        <SectionWrapper id="pricing">
          <SectionHeader>
            <span className="badge">Transparent Investment</span>
            <h2>Simple, Milestone-Based Pricing for Every Scale</h2>
            <p>
              No hidden agency fees or surprise invoices. Clear milestones with complete source code ownership.
            </p>
          </SectionHeader>

          <PricingGrid>
            <PricingCard>
              <h3>Starter Business Site</h3>
              <p className="tier-desc">
                Ideal for local businesses, doctors, lawyers, and consulting professionals in Lucknow.
              </p>
              <div className="price-wrap">
                <span className="inr">₹19,999</span>
                <span className="usd">/ ~$249 USD</span>
              </div>
              <ul>
                <li><FaCheckCircle /> Up to 5 Responsive Custom Pages</li>
                <li><FaCheckCircle /> React / Next.js Blazing Fast UI</li>
                <li><FaCheckCircle /> 95+ Google PageSpeed Guarantee</li>
                <li><FaCheckCircle /> WhatsApp Direct Chat Integration</li>
                <li><FaCheckCircle /> On-Page SEO & Schema Setup</li>
                <li><FaCheckCircle /> 5–7 Days Fast Delivery</li>
              </ul>
              <PrimaryButton
                href="https://wa.me/916387343245?text=Hi%20Aman,%20I'm%20interested%20in%20the%20Starter%20Business%20Site%20package."
                target="_blank"
                rel="noopener noreferrer"
              >
                Choose Starter
              </PrimaryButton>
            </PricingCard>

            <PricingCard featured>
              <div className="featured-tag">Most Popular</div>
              <h3>Full-Stack SaaS / App</h3>
              <p className="tier-desc">
                Perfect for startups, multi-vendor stores, custom dashboards, and workflow automation.
              </p>
              <div className="price-wrap">
                <span className="inr">₹49,999</span>
                <span className="usd">/ ~$649 USD</span>
              </div>
              <ul>
                <li><FaCheckCircle /> Custom Full-Stack Web Application</li>
                <li><FaCheckCircle /> Python / Django or Node.js Backend</li>
                <li><FaCheckCircle /> PostgreSQL Database & Auth System</li>
                <li><FaCheckCircle /> Payment Gateway (Razorpay / Stripe)</li>
                <li><FaCheckCircle /> Admin Dashboard & Analytics</li>
                <li><FaCheckCircle /> 14–21 Days Agile Delivery</li>
              </ul>
              <PrimaryButton
                href="https://wa.me/916387343245?text=Hi%20Aman,%20I'm%20interested%20in%20the%20Full-Stack%20SaaS%20App%20package."
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Full-Stack App
              </PrimaryButton>
            </PricingCard>

            <PricingCard>
              <h3>Custom AI & Enterprise</h3>
              <p className="tier-desc">
                Tailored for enterprises needing autonomous AI agents, vision pipelines, or bespoke architectures.
              </p>
              <div className="price-wrap">
                <span className="inr">₹99,999+</span>
                <span className="usd">/ ~$1,299+ USD</span>
              </div>
              <ul>
                <li><FaCheckCircle /> Autonomous AI Agent Workflows</li>
                <li><FaCheckCircle /> Model Context Protocol (MCP) Integration</li>
                <li><FaCheckCircle /> Custom Vector Database & RAG Search</li>
                <li><FaCheckCircle /> High Concurrency Cloud Architecture</li>
                <li><FaCheckCircle /> 60 Days Priority Engineering Support</li>
                <li><FaCheckCircle /> Custom Milestone Timeline</li>
              </ul>
              <PrimaryButton
                href="https://wa.me/916387343245?text=Hi%20Aman,%20I'm%20interested%20in%20the%20Custom%20AI%20%26%20Enterprise%20package."
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
            <h2>Common Queries on Freelance Web Development in Lucknow</h2>
            <p>
              Clear answers to help you make an informed decision before hiring your development partner.
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
              <h2>Let's Build Something Exceptional Together</h2>
              <p>
                Have a project idea or need a technical audit for your existing website?
                Reach out today for a complimentary 15-minute consultation. We'll discuss your
                objectives and provide a clear execution blueprint.
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
                <option value="Custom Website Development">Custom Website Development</option>
                <option value="Full-Stack Web App / SaaS">Full-Stack Web App / SaaS</option>
                <option value="E-Commerce Store">E-Commerce Store</option>
                <option value="AI Integration & Chatbot">AI Integration & Chatbot</option>
                <option value="Website Speed Optimization">Website Speed Optimization</option>
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
