import lovenestImg from '../assets/lovenest_project.jpg';
import mafrooshImg from '../assets/mafroosh_storepilot_mockup.jpg';

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
  }
];
