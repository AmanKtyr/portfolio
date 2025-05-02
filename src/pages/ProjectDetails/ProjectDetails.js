import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { ProjectDetailsContainer, ProjectDetailsContent, ProjectImage, ProjectInfo, ProjectTitle, ProjectCategory, ProjectDescription, ProjectMeta, MetaItem, ProjectLinks, ProjectLink, BackButton } from './ProjectDetailsStyles';

// Import project images
import project1 from '../../assets/project1.jpg';
import project2 from '../../assets/project2.jpg';
import project3 from '../../assets/project3.jpg';
import project4 from '../../assets/project4.jpg';
import project5 from '../../assets/project5.jpg';
import project6 from '../../assets/project6.jpg';

const projectsData = [
  {
    id: 1,
    image: project1,
    title: 'E-commerce Website',
    category: 'Web Development',
    description: 'A fully responsive e-commerce website with product filtering, cart functionality, and payment integration. This project was built using React for the frontend, Node.js and Express for the backend, and MongoDB for the database. The website includes features such as user authentication, product search and filtering, shopping cart, checkout process, and payment integration with Stripe.',
    client: 'ABC Company',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    date: 'January 2023',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 2,
    image: project2,
    title: 'Portfolio Website',
    category: 'Web Development',
    description: 'A modern portfolio website for a photographer showcasing their work with a beautiful gallery. The website features a responsive design, smooth animations, image gallery with filtering options, and contact form. It was built using HTML, CSS, and JavaScript with a focus on performance and user experience.',
    client: 'John Doe Photography',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    date: 'March 2023',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 3,
    image: project3,
    title: 'Mobile Banking App',
    category: 'App Development',
    description: 'A mobile banking application with secure authentication, transaction history, and bill payments. The app was developed using React Native for cross-platform compatibility, with a Node.js backend and PostgreSQL database. It includes features such as biometric authentication, real-time transaction updates, bill payments, and fund transfers.',
    client: 'XYZ Bank',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT'],
    date: 'May 2023',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 4,
    image: project4,
    title: 'Task Management Dashboard',
    category: 'Web Development',
    description: 'A task management dashboard with drag-and-drop functionality, task assignments, and progress tracking. This project was built using React for the frontend, with Redux for state management, and Firebase for the backend. It includes features such as user authentication, task creation and assignment, drag-and-drop task management, progress tracking, and notifications.',
    client: 'DEF Organization',
    technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
    date: 'July 2023',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 5,
    image: project5,
    title: 'Food Delivery App',
    category: 'App Development',
    description: 'A food delivery application with restaurant listings, menu browsing, and order tracking. The app was developed using Flutter for cross-platform compatibility, with a Node.js backend and MongoDB database. It includes features such as user authentication, restaurant search and filtering, menu browsing, cart management, order placement, and real-time order tracking.',
    client: 'FoodExpress',
    technologies: ['Flutter', 'Node.js', 'MongoDB', 'Google Maps API'],
    date: 'September 2023',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 6,
    image: project6,
    title: 'Real Estate Website',
    category: 'Web Development',
    description: 'A real estate website with property listings, advanced search filters, and virtual tours. This project was built using Next.js for server-side rendering and improved SEO, with a Node.js backend and MongoDB database. It includes features such as property listings, advanced search and filtering, virtual property tours, appointment scheduling, and user authentication.',
    client: 'HomeFind Realty',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    date: 'November 2023',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));
  
  if (!project) {
    return (
      <>
        <Header />
        <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
          <h2>Project not found</h2>
          <Link to="/" className="btn-primary" style={{ display: 'inline-block', marginTop: '2rem' }}>
            Back to Home
          </Link>
        </div>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Header />
      <ProjectDetailsContainer>
        <div className="container">
          <BackButton to="/">
            <FaArrowLeft /> Back to Projects
          </BackButton>
          
          <ProjectDetailsContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
            </motion.div>
            
            <ProjectInfo>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <ProjectCategory>{project.category}</ProjectCategory>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <ProjectMeta>
                  <MetaItem>
                    <h4>Client:</h4>
                    <p>{project.client}</p>
                  </MetaItem>
                  <MetaItem>
                    <h4>Date:</h4>
                    <p>{project.date}</p>
                  </MetaItem>
                  <MetaItem>
                    <h4>Technologies:</h4>
                    <div className="technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index}>{tech}</span>
                      ))}
                    </div>
                  </MetaItem>
                </ProjectMeta>
                
                <ProjectLinks>
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> View Code
                  </ProjectLink>
                  <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer" primary="true">
                    <FaExternalLinkAlt /> Live Demo
                  </ProjectLink>
                </ProjectLinks>
              </motion.div>
            </ProjectInfo>
          </ProjectDetailsContent>
        </div>
      </ProjectDetailsContainer>
      <Footer />
    </>
  );
};

export default ProjectDetails;
