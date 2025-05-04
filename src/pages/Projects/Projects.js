import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaSearch } from 'react-icons/fa';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { ProjectsPageContainer, ProjectsBanner, ProjectsBannerContent, ProjectsFilter, FilterBtn, ProjectsGrid, ProjectCard, ProjectImg, ProjectOverlay, ProjectLinks, ProjectLink, ProjectInfo, ProjectTitle, ProjectCategory, ProjectDesc, SearchContainer, SearchInput, SearchButton, ProjectsCategories, CategoryItem } from './ProjectsStyles';

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
  {
    id: 7,
    image: project1,
    title: 'Social Media Dashboard',
    category: 'web',
    description: 'A social media dashboard for managing multiple accounts and tracking engagement metrics.',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 8,
    image: project2,
    title: 'Weather App',
    category: 'app',
    description: 'A weather application with real-time forecasts, location-based weather data, and interactive maps.',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 9,
    image: project3,
    title: 'Fitness Tracker',
    category: 'app',
    description: 'A fitness tracking application for monitoring workouts, nutrition, and progress over time.',
    github: 'https://github.com',
    demo: 'https://example.com',
  }
];

// Extract unique categories
const categories = ['all', ...new Set(projectsData.map(project => project.category))];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilter = (category) => {
    setActiveFilter(category);
    filterProjects(category, searchTerm);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    filterProjects(activeFilter, searchTerm);
  };

  const filterProjects = (category, term) => {
    let filtered = projectsData;

    // Filter by category
    if (category !== 'all') {
      filtered = filtered.filter(project => project.category === category);
    }

    // Filter by search term
    if (term) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(term.toLowerCase()) ||
        project.description.toLowerCase().includes(term.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  };

  return (
    <>
      <Header />

      <ProjectsPageContainer>
        <ProjectsBanner>
          {/* Grid overlay for cyberpunk/tech feel */}
          <div className="grid-overlay"></div>

          <div className="container">
            <ProjectsBannerContent>
              {/* Floating elements for visual interest */}
              <motion.div
                className="floating-element element-1"
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="floating-element element-2"
                animate={{
                  y: [0, 20, 0],
                  x: [0, -15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
              >
                My Projects
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 50
                }}
              >
                Recent work I've done
              </motion.p>

              {/* Animated code particles */}
              <motion.div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "5%",
                  color: "rgba(56, 189, 248, 0.4)",
                  fontSize: "1.2rem",
                  fontFamily: "monospace",
                  zIndex: 5
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  y: [0, -30, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                &lt;projects&gt;
              </motion.div>

              <motion.div
                style={{
                  position: "absolute",
                  bottom: "30%",
                  right: "10%",
                  color: "rgba(147, 51, 234, 0.4)",
                  fontSize: "1.2rem",
                  fontFamily: "monospace",
                  zIndex: 5
                }}
                animate={{
                  opacity: [0.2, 0.7, 0.2],
                  y: [0, 20, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                &lt;/projects&gt;
              </motion.div>
            </ProjectsBannerContent>
          </div>
        </ProjectsBanner>

        <div className="container">
          <SearchContainer>
            <form onSubmit={handleSearch}>
              <SearchInput
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <SearchButton type="submit">
                <FaSearch />
              </SearchButton>
            </form>
          </SearchContainer>

          <ProjectsCategories>
            <h3>Categories</h3>
            <div className="categories-list">
              {categories.map((category, index) => (
                <CategoryItem
                  key={index}
                  active={activeFilter === category ? 'true' : 'false'}
                  onClick={() => handleFilter(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </CategoryItem>
              ))}
            </div>
          </ProjectsCategories>

          <ProjectsGrid>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard>
                    <ProjectImg>
                      <img src={project.image} alt={project.title} />
                      <ProjectOverlay>
                        <ProjectLinks>
                          <ProjectLink
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGithub />
                          </ProjectLink>
                          <ProjectLink
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaExternalLinkAlt />
                          </ProjectLink>
                        </ProjectLinks>
                      </ProjectOverlay>
                    </ProjectImg>
                    <ProjectInfo>
                      <ProjectCategory>{project.category === 'web' ? 'Web Development' : 'App Development'}</ProjectCategory>
                      <ProjectTitle>
                        <Link to={`/project/${project.id}`}>{project.title}</Link>
                      </ProjectTitle>
                      <ProjectDesc>{project.description}</ProjectDesc>
                      <Link to={`/project/${project.id}`} className="btn-text">
                        View Details <FaArrowRight />
                      </Link>
                    </ProjectInfo>
                  </ProjectCard>
                </motion.div>
              ))
            ) : (
              <div className="no-results">
                <h3>No projects found</h3>
                <p>Try changing your search criteria or filter selection.</p>
              </div>
            )}
          </ProjectsGrid>
        </div>
      </ProjectsPageContainer>

      <Footer />
    </>
  );
};

export default ProjectsPage;
