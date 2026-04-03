import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaSearch, FaPython, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import Meta from '../../components/common/Meta/Meta';
import { ProjectsPageContainer, ProjectsBanner, ProjectsBannerContent, ProjectsGrid, ProjectCard, ProjectImg, ProjectOverlay, ProjectLinks, ProjectLink, ProjectInfo, ProjectTitle, ProjectCategory, ProjectDesc, SearchContainer, SearchInput, SearchButton, ProjectsCategories, CategoryItem, VisualEngine, VisualNode, GridCoordinates, WatermarkText, TechBadge, RotatingRing } from './ProjectsStyles';

import { projectsData } from '../../data/projectsData';
import SectionHeading from '../../components/ui/SectionHeading/SectionHeading';

// Extract unique categories
const categories = ['all', ...new Set(projectsData.map(project => project.category.toLowerCase()))];

const ProjectsPage = () => {
  const { t } = useTranslation();
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
      filtered = filtered.filter(project => project.category.toLowerCase() === category.toLowerCase());
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
      <Meta 
        title="Projects Portfolio" 
        description="Explore a collection of innovative projects by Aman Katiyar, ranging from AI applications and agentic systems to full-stack web architectures." 
        url="https://aman.ktyr.in/projects"
      />
      <Header />

      <ProjectsPageContainer>
        <ProjectsBanner>
          <WatermarkText>PROJECTS</WatermarkText>
          
          <TechBadge style={{ top: '15%', right: '10%' }}>SYSTEM_STATUS: ACTIVE</TechBadge>
          <TechBadge style={{ bottom: '15%', left: '10%' }}>V_BUILD: 2.0.26</TechBadge>
          
          <GridCoordinates style={{ top: '10%', left: '5%' }}>
            <span>LAT: 28.6139</span>
            <span>LON: 77.2090</span>
          </GridCoordinates>
          <GridCoordinates style={{ bottom: '10%', right: '5%' }}>
            <span>SCALE: 1:2500</span>
            <span>UNIT: METERS</span>
          </GridCoordinates>

          <div className="container">
            <ProjectsBannerContent>
              <div className="banner-text">
                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  {t('projects.title').split(' ').map((word, i) => (
                    <span key={i} data-text={word}>{word} </span>
                  ))}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  {t('projects.projectsDescription')}
                </motion.p>
              </div>

              <VisualEngine>
                {/* Compact Orbital System */}
                <RotatingRing size={350} duration={40} />
                <RotatingRing size={270} duration={25} reverse={true} color="rgba(128, 0, 0, 0.2)" />
                <RotatingRing size={190} duration={15} color="rgba(128, 0, 0, 0.3)" />

                <VisualNode style={{ transform: 'translate(110px, -110px)', width: '60px', height: '60px', fontSize: '1.5rem' }} as={motion.div} whileHover={{ scale: 1.2 }}>
                  <FaPython />
                </VisualNode>
                <VisualNode style={{ transform: 'translate(-110px, 110px)', width: '60px', height: '60px', fontSize: '1.5rem' }} as={motion.div} whileHover={{ scale: 1.2 }}>
                  <FaNodeJs />
                </VisualNode>
                <VisualNode style={{ transform: 'translate(110px, 110px)', width: '60px', height: '60px', fontSize: '1.5rem' }} as={motion.div} whileHover={{ scale: 1.2 }}>
                  <FaReact />
                </VisualNode>
                <VisualNode style={{ transform: 'translate(-110px, -110px)', width: '60px', height: '60px', fontSize: '1.5rem' }} as={motion.div} whileHover={{ scale: 1.2 }}>
                  <FaDatabase />
                </VisualNode>
                
                {/* Central Power Core */}
                <motion.div 
                  style={{ width: '80px', height: '80px', background: 'var(--primary-color)', borderRadius: '50%', filter: 'blur(40px)', opacity: 0.2 }}
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </VisualEngine>
            </ProjectsBannerContent>
          </div>
        </ProjectsBanner>

        <div className="container">
          <SectionHeading 
            number="1"
            title="SELECTED"
            accent="WORKS"
            subtitle={t('projects.projectsDescription')}
          />
          <SearchContainer>
            <form onSubmit={handleSearch}>
              <SearchInput
                type="text"
                placeholder={t('projects.searchPlaceholder') || "SEARCH_DATABASE_..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <SearchButton type="submit">
                <FaSearch />
              </SearchButton>
            </form>
          </SearchContainer>

          <ProjectsCategories>
            <h3>{t('projects.filterTitle') || "FILTER_BY_ECOSYSTEM"}</h3>
            <div className="categories-list">
              {categories.map((category, index) => (
                <CategoryItem
                  key={index}
                  active={activeFilter === category ? 'true' : 'false'}
                  onClick={() => handleFilter(category)}
                >
                  {t(`projects.${category}`)}
                </CategoryItem>
              ))}
            </div>
          </ProjectsCategories>

          <ProjectsGrid
            as={motion.div}
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard
                  as={motion.div}
                  key={project.id}
                  featured={project.id === 1 || project.id === 3}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProjectImg className="project-img">
                    <div className="scanning-line" />
                    <span className="card-id">{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                    <img src={project.previewImage} alt={`${project.title} - ${project.category} project by Aman Katiyar`} loading="lazy" />
                    <ProjectOverlay className="project-overlay">
                        <ProjectLink
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} source code on GitHub`}
                        >
                          <FaGithub />
                        </ProjectLink>
                        <ProjectLink
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} live demo`}
                        >
                          <FaExternalLinkAlt />
                        </ProjectLink>

                    </ProjectOverlay>
                  </ProjectImg>
                  <ProjectInfo>
                    <ProjectCategory>{project.category}</ProjectCategory>
                    <ProjectTitle>
                      <Link to={`/project/${project.id}`}>{project.title}</Link>
                    </ProjectTitle>
                    <ProjectDesc>{project.description}</ProjectDesc>
                    <Link to={`/project/${project.id}`} className="btn-text">
                      {t('projects.viewDetails')} <FaArrowRight />
                    </Link>
                  </ProjectInfo>
                </ProjectCard>
              ))
            ) : (
              <div className="no-results">
                <h3>{t('projects.noResults')}</h3>
                <p>{t('projects.noResultsDesc')}</p>
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
