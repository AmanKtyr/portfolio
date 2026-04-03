import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { projectsData } from '../../../data/projectsData';
import { ProjectsContainer, ProjectsFilter, FilterBtn, ProjectsGrid, ProjectCard, ProjectImg, ProjectOverlay, ProjectLinks, ProjectLink, ProjectInfo, ProjectTitle, ProjectCategory, ProjectDesc } from './ProjectsStyles';
import SectionHeading from '../../ui/SectionHeading/SectionHeading';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const handleFilter = (category) => {
    setActiveFilter(category);

    if (category === 'all') {
      setFilteredProjects(projectsData);
    } else {
      const filtered = projectsData.filter(project => project.category.toLowerCase().includes(category.toLowerCase()));
      setFilteredProjects(filtered);
    }
  };

  return (
    <ProjectsContainer id="projects">
      <div className="container">
        <SectionHeading 
          number="4"
          title="SELECTED"
          accent="WORKS"
          subtitle="A curated collection of digital experiences, ranging from AI-powered automation tools to high-performance web architectures. Each project reflects a commitment to clean code and user-centric design."
        />

        <ProjectsFilter>
          <FilterBtn
            active={activeFilter === 'all' ? 'true' : 'false'}
            onClick={() => handleFilter('all')}
          >
            All
          </FilterBtn>
          <FilterBtn
            active={activeFilter === 'full stack' ? 'true' : 'false'}
            onClick={() => handleFilter('full stack')}
          >
            Full Stack
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
                  <img src={project.previewImage} alt={project.title} />
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
                  <ProjectCategory>{project.category}</ProjectCategory>
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

