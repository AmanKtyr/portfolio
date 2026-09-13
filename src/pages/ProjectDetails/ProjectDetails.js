import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheck, FaServer } from 'react-icons/fa';
import { SiNpm } from 'react-icons/si';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import Meta from '../../components/common/Meta/Meta';
import { projectsData } from '../../data/projectsData';
import { 
  ProjectDetailsContainer, 
  BackButton, 
  ProjectHeader, 
  ProjectCategory, 
  ProjectTitle, 
  ImageGallery, 
  ProjectDetailsContent, 
  ProjectInfo, 
  ProjectDescription, 
  FeatureList, 
  ProjectMeta, 
  MetaItem, 
  ProjectLinks, 
  ProjectLink,
  SectionContainer,
  WatermarkText,
  TechBadge
} from './ProjectDetailsStyles';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(
    p => p.slug === id || p.id.toString() === id
  );

  // Scroll to top and redirect numeric ID to SEO slug
  useEffect(() => {
    window.scrollTo(0, 0);
    if (project && project.slug && id !== project.slug) {
      navigate(`/project/${project.slug}`, { replace: true });
    }
  }, [id, project, navigate]);
  
  if (!project) {
    return (
      <>
        <Header />
        <SectionContainer>
          <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
            <h2>Project not found</h2>
            <Link to="/projects" className="btn-primary" style={{ display: 'inline-block', marginTop: '2rem' }}>
              Back to Projects
            </Link>
          </div>
        </SectionContainer>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Meta 
        title={project.title} 
        description={project.description} 
        keywords={`${project.title}, ${project.category}, ${project.technologies ? project.technologies.join(', ') : ''}, Aman Katiyar project, Aman Ktyr`}
        image={typeof project.previewImage === 'string' ? project.previewImage : undefined}
        url={`https://aman.ktyr.in/project/${project.slug || project.id}`}
      />

      <Header />
      <SectionContainer>
        <ProjectDetailsContainer>
          <WatermarkText>PROJECT_SPEC</WatermarkText>
          <TechBadge style={{ top: '15%', right: '5%' }}>
            STATUS: ARCHIVED
          </TechBadge>
          <TechBadge style={{ top: '20%', right: '5%' }}>
            BUILD: {project.id}.0.8
          </TechBadge>

          <div className="container">
            <BackButton to="/projects">
              <FaArrowLeft /> BACK_TO_PROJECT_INDEX
            </BackButton>

            <ProjectHeader>
              <ProjectCategory>{project.category}</ProjectCategory>
              <ProjectTitle>{project.title}</ProjectTitle>
            </ProjectHeader>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ImageGallery>
                <img src={project.previewImage} alt={project.title} />
              </ImageGallery>
            </motion.div>
            
            <ProjectDetailsContent>
              <ProjectInfo>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3>About the Project</h3>
                  <ProjectDescription>{project.fullDescription || project.description}</ProjectDescription>
                  
                  {project.features && (
                    <FeatureList>
                      <h3>Key Features</h3>
                      <ul>
                        {project.features.map((feature, index) => (
                          <li key={index}><FaCheck /> {feature}</li>
                        ))}
                      </ul>
                    </FeatureList>
                  )}
                </motion.div>
              </ProjectInfo>

              <ProjectMeta>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <MetaItem>
                    <h4>Project Type</h4>
                    <p>{project.category}</p>
                  </MetaItem>
                  <MetaItem>
                    <h4>Client / Context</h4>
                    <p>{project.client}</p>
                  </MetaItem>
                  <MetaItem>
                    <h4>Year</h4>
                    <p>{project.date}</p>
                  </MetaItem>
                  <MetaItem>
                    <h4>[FRAMEWORK_UNIT]</h4>
                    <div className="technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index}>{tech.toUpperCase()}</span>
                      ))}
                    </div>
                  </MetaItem>
                  
                  <ProjectLinks>
                    {project.npm ? (
                      <ProjectLink href={project.npm} target="_blank" rel="noopener noreferrer" primary="true">
                        <SiNpm /> NPM Package
                      </ProjectLink>
                    ) : (
                      project.demo && project.demo !== '#' && (
                        <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer" primary="true">
                          <FaExternalLinkAlt /> Live Preview
                        </ProjectLink>
                      )
                    )}
                    {project.mcp && (
                      <ProjectLink href={project.mcp} target="_blank" rel="noopener noreferrer">
                        <FaServer /> Glama MCP
                      </ProjectLink>
                    )}
                    {project.github && project.github !== '#' && (
                      <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub /> GitHub Source
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </motion.div>
              </ProjectMeta>
            </ProjectDetailsContent>
          </div>
        </ProjectDetailsContainer>
      </SectionContainer>
      <Footer />
    </>
  );
};

export default ProjectDetails;

