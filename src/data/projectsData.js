import lovenestImg from '../assets/lovenest_project.jpg';
import mafrooshImg from '../assets/mafroosh_storepilot_mockup.jpg';
import captionBrainImg from '../assets/captionbrainaiproject.jpeg';
import gurukulSetuImg from '../assets/gurukulsetuproject.png';
import bhattSquareImg from '../assets/bhattsquareproject.png';
import sipherWebTechImg from '../assets/sipherwebtechproject.png';
import sipherWebAcademyImg from '../assets/sipherwebacademyproject.png';

export const projectsData = [
  {
    id: 1,
    title: 'FitStack - Gym Management SaaS',
    category: 'Full Stack',
    previewImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop',
    description: 'A comprehensive Gym Management SaaS platform built to streamline fitness business operations with automated management and communication tools.',
    fullDescription: 'FitStack is a robust Gym Management SaaS project designed to simplify the complexities of running a fitness center. Developed using Python and Django, it offers a suite of tools for business owners to manage members, trainers, and finances efficiently. The project stands out with its automated WhatsApp messaging system, ensuring seamless communication with clients.',
    features: [
      'Interactive Dashboard with key metrics',
      'Enquiry Management for leads',
      'Member & Trainer Management',
      'Attendance Tracking System',
      'Automated Billing & Invoicing',
      'Expense & Inventory Tracking',
      'Event Management',
      'Comprehensive Business Reports',
      'System Settings & Role-based Management',
      'Automatic WhatsApp Notifications'
    ],
    technologies: ['Python', 'Django', 'PostgreSQL', 'HTML5', 'CSS3', 'JavaScript', 'WhatsApp API'],
    date: '2024',
    client: 'SaaS Product',
    github: '#',
    demo: 'http://fitstack.nextgenapplication.com/',
  },
  {
    id: 2,
    title: "LoveNest - Private Couple Sanctuary",
    category: "Full Stack",
    previewImage: lovenestImg,
    description: "An intimate, AI-powered digital space for couples to nurture their relationships through private memory management and emotional intelligent assistance.",
    fullDescription: "LoveNest is a 'Privacy-First' relationship management platform designed for modern couples. Unlike public social media, LoveNest offers a dedicated, encrypted space where your private life stays private. Integrated with a custom AI Relationship Assistant, the platform helps couples prioritize their connection with personalized date ideas, gift suggestions, and mood tracking.",
    features: [
      "AI Relationship Assistant (GPT Integration) for personalized advice",
      "End-to-End Encrypted (E2EE) private room for absolute privacy",
      "Memory Crypt: A timeline-based gallery for shared moments",
      "SyncTasks: Shared to-do lists and financial goal tracking",
      "MoodSense: Relationship health monitoring and mood journal",
      "Daily Q&A: Interactive journals to deepen connection"
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "GPT-API", "WebSockets"],
    date: "2026",
    client: "Helyonex Proprietary",
    github: "https://github.com",
    demo: "https://lovenest.helyonex.com/"
  },
  {
    id: 3,
    title: "Mafroosh & Storepilot",
    category: "Full Stack",
    previewImage: mafrooshImg,
    description: "A premium e-commerce ecosystem featuring a luxury home decor storefront and a robust integrated administrative dashboard for real-time management.",
    fullDescription: "Mafroosh.in is an high-end e-commerce platform specializing in luxury rugs and home decor, powered by Storepilot—a custom-engineered administrative dashboard. The ecosystem provides a seamless shopping experience for customers while offering business owners deep analytical insights and precise inventory control through a technical, data-driven interface.",
    features: [
      "Luxury Storefront with High-Resolution Product Curations",
      "Storepilot Admin Panel: Real-time Sales & Inventory Tracking",
      "Secure Authentication with Google OAuth Integration",
      "Dynamic Pricing & Product Variant Management",
      "Next.js Server-Side Rendering (SSR) for SEO Optimization",
      "Responsive Design using Tailwind CSS for all devices"
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "PostgreSQL", "Google Auth"],
    date: "2025",
    client: "Mafroosh Luxury Decor",
    github: "https://github.com",
    demo: "https://mafroosh.in/"
  },
  {
    id: 4,
    title: "Caption Brain AI",
    category: "Full Stack",
    previewImage: captionBrainImg,
    description: "A next-gen Multimodal AI platform that transforms any image into high-engagement social media content across 25+ networks.",
    fullDescription: "Caption Brain AI is a cutting-edge multimodal Vision AI platform designed to automate social media content creation. By analyzing images with deep context awareness, it generates platform-perfect captions, viral hashtags, and SEO-optimized ALT text. Built for creators and enterprises alike, it supports over 25 social networks and allows for custom brand voice tailoring, ensuring every post aligns with the user's unique identity.",
    features: [
      "Advanced Multimodal Vision AI for deep image analysis",
      "25+ Social Media Platform Support (Instagram, LinkedIn, X, etc.)",
      "Viral-Ready Hashtag & SEO ALT Text Generation",
      "Custom Brand Voice & Tone Selection (Professional, Casual, Creative)",
      "Instant Processing with High-Performance Next.js Architecture",
      "Industry-Specific Presets for E-commerce, Real Estate, and SaaS"
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Vision AI", "Node.js", "Vercel"],
    date: "2026",
    client: "Helyonex AI Solutions",
    github: "https://github.com",
    demo: "https://captionbrainai.helyonex.com/"
  },
  {
    id: 5,
    title: "GurukulSetu - School Management Ecosystem",
    category: "Full Stack",
    previewImage: gurukulSetuImg,
    description: "A comprehensive digital infrastructure designed to modernize educational institutions with automated administration and real-time academic tracking.",
    fullDescription: "GurukulSetu is an enterprise-grade School Management System engineered using Python and Django. It provides a unified platform for administrators, teachers, students, and parents to interact seamlessly. From complex fee management and examination scheduling to attendance tracking and automated report card generation, GurukulSetu streamlines every aspect of institutional operations with security and scalability at its core.",
    features: [
      "Dynamic Student & Staff Information Management",
      "Automated Fee Structure & Payment Tracking",
      "Academic Examination & Result Management",
      "Real-time Attendance Monitoring System",
      "Library & Inventory Management",
      "Integrated Communication Portal for Parents & Teachers"
    ],
    technologies: ["Python", "Django", "PostgreSQL", "Bootstrap", "JavaScript", "AJAX"],
    date: "2025",
    client: "Educational Institutions",
    github: "https://github.com",
    demo: "#"
  },
  {
    id: 6,
    title: "Bhatt Square - Premium IT Solutions",
    category: "Web",
    previewImage: bhattSquareImg,
    description: "Official corporate ecosystem for Bhatt Square Private Limited, showcasing elite software engineering and strategic digital transformation services.",
    fullDescription: "The Bhatt Square corporate platform is a high-performance digital ecosystem built with Next.js and TypeScript. It serves as the primary touchpoint for a premium IT services firm, highlighting their expertise in custom enterprise software, mobile app development, and UI/UX design. The platform features a modular architecture, seamless animations with Framer Motion, and a 'design-first' philosophy that reflects the company's commitment to aesthetic and technical excellence.",
    features: [
      "High-Performance Next.js Architecture with SSR & ISR",
      "Dynamic Service & Portfolio Management System",
      "Interactive UI/UX with Advanced Framer Motion Animations",
      "SEO-Optimized Content Structure for Global Reach",
      "Secure Lead Generation & Strategic Inquiry Portal",
      "Fully Responsive Professional Design Language"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "Vercel"],
    date: "2024",
    client: "Bhatt Square Pvt. Ltd.",
    github: "#",
    demo: "https://www.bhattsquare.com/"
  },
  {
    id: 7,
    title: "Sipher Web Tech - Digital Excellence",
    category: "Web",
    previewImage: sipherWebTechImg,
    description: "An innovative digital excellence partner building cutting-edge, scalable web applications with a focus on ISO-certified quality and security.",
    fullDescription: "Sipher Web Pvt. Ltd. is a digital solutions provider specialized in high-performance React.js applications. This corporate platform showcases their extensive service portfolio, ranging from custom software development to ROI-focused digital marketing strategies. The project emphasizes clean code, modern UI engineering, and robust architecture to deliver enterprise-grade digital experiences for a global clientele.",
    features: [
      "Modern React.js Application with Modular Architecture",
      "Comprehensive Digital Service Showcase (Web, Mobile, Custom Software)",
      "ISO 27001 Certified Security Standards & High Performance",
      "Dynamic ROI-Focused Digital Marketing Integration",
      "Cross-Browser Compatibility & Seamless Mobile Responsiveness",
      "Global Client Portfolio & Strategic Technology Consultations"
    ],
    technologies: ["React.js", "JavaScript", "Bootstrap", "Framer Motion", "ISO Standards", "Netlify"],
    date: "2024",
    client: "Sipher Web Pvt. Ltd.",
    github: "#",
    demo: "https://sipherwebtech.com/"
  },
  {
    id: 8,
    title: "Sipher Web Academy - ERP/CRM Ecosystem",
    category: "Full Stack",
    previewImage: sipherWebAcademyImg,
    description: "A comprehensive, data-driven educational management platform integrating a full ERP and CRM system for modern training institutes.",
    fullDescription: "Sipher Web Academy is a high-end educational infrastructure built with Python and Django. It integrates a sophisticated ERP and CRM ecosystem to manage the entire student lifecycle—from initial lead inquiry to graduation. The platform provides real-time analytics for financial tracking, automated academic operations, and a centralized management portal designed to optimize institutional efficiency and student success.",
    features: [
      "Full Student Lifecycle Management (CRM-to-Enrollment)",
      "Automated Fee Management & Financial Invoicing System",
      "Integrated Batch Scheduling & Attendance Monitoring",
      "Advanced Enquiry & Lead Management Pipeline",
      "Faculty Performance & Staff Administrative Controls",
      "Real-time Analytical Dashboards & Performance Reports"
    ],
    technologies: ["Python", "Django", "PostgreSQL", "JavaScript", "CRM Integration", "ERP Logic"],
    date: "2024",
    client: "Educational Institutions",
    github: "#",
    demo: "https://sipherweb.com/"
  }
];
