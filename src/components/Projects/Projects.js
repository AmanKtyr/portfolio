import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { ProjectsContainer, ProjectsFilter, FilterBtn, ProjectsGrid, ProjectCard, ProjectImg, ProjectOverlay, ProjectLinks, ProjectLink, ProjectInfo, ProjectTitle, ProjectCategory, ProjectDesc } from './ProjectsStyles';

// Import project images (you'll need to add these)
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
    category: 'web',
    description: 'A fully responsive e-commerce website with product filtering, cart functionality, and payment integration.',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 2,
    image: project2,
    title: 'Portfolio Website',
    category: 'web',
    description: 'A modern portfolio website for a photographer showcasing their work with a beautiful gallery.',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 3,
    image: project3,
    title: 'Mobile Banking App',
    category: 'app',
    description: 'A mobile banking application with secure authentication, transaction history, and bill payments.',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 4,
    image: project4,
    title: 'Task Management Dashboard',
    category: 'web',
    description: 'A task management dashboard with drag-and-drop functionality, task assignments, and progress tracking.',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 5,
    image: project5,
    title: 'Food Delivery App',
    category: 'app',
    description: 'A food delivery application with restaurant listings, menu browsing, and order tracking.',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 6,
    image: project6,
    title: 'Real Estate Website',
    category: 'web',
    description: 'A real estate website with property listings, advanced search filters, and virtual tours.',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const handleFilter = (category) => {
    setActiveFilter(category);

    if (category === 'all') {
      setFilteredProjects(projectsData);
    } else {
      const filtered = projectsData.filter(project => project.category === category);
      setFilteredProjects(filtered);
    }
  };

  return (
    <ProjectsContainer id="projects">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>My Projects</h2>
          <p>Recent work I've done</p>
        </motion.div>

        <ProjectsFilter>
          <FilterBtn
            active={activeFilter === 'all' ? 'true' : 'false'}
            onClick={() => handleFilter('all')}
          >
            All
          </FilterBtn>
          <FilterBtn
            active={activeFilter === 'web' ? 'true' : 'false'}
            onClick={() => handleFilter('web')}
          >
            Web
          </FilterBtn>
          <FilterBtn
            active={activeFilter === 'app' ? 'true' : 'false'}
            onClick={() => handleFilter('app')}
          >
            App
          </FilterBtn>
        </ProjectsFilter>

        <ProjectsGrid>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard className="project-card">
                <ProjectImg className="project-img">
                  <img src={project.image} alt={project.title} />
                  <ProjectOverlay>
                    <ProjectLinks>
                      <ProjectLink
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-text="GitHub"
                        data-cursor-variant="text"
                      >
                        <FaGithub />
                      </ProjectLink>
                      <ProjectLink
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-text="Live Demo"
                        data-cursor-variant="text"
                      >
                        <FaExternalLinkAlt />
                      </ProjectLink>
                    </ProjectLinks>
                  </ProjectOverlay>
                </ProjectImg>
                <ProjectInfo className="project-content">
                  <ProjectCategory>{project.category === 'web' ? 'Web Development' : 'App Development'}</ProjectCategory>
                  <ProjectTitle>
                    <Link to={`/project/${project.id}`}>{project.title}</Link>
                  </ProjectTitle>
                  <ProjectDesc>{project.description}</ProjectDesc>
                  <Link to={`/project/${project.id}`} className="btn-text" data-cursor-text="View Details" data-cursor-variant="link">
                    View Details <FaArrowRight />
                  </Link>
                </ProjectInfo>
              </ProjectCard>
            </motion.div>
          ))}
        </ProjectsGrid>
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
