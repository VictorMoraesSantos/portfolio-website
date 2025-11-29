import Section from './Section';
import { resumeData } from '../data/resume';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <Section id="projects" className="projects-section">
            <h2 className="section-title">Projetos Realizados</h2>
            <div className="projects-grid">
                {resumeData.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -10 }}
                        className="project-card"
                    >
                        <div
                            className="project-image"
                            style={project.image ? { backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
                        >
                            <div className="project-overlay" style={project.image ? { opacity: 0.6, backgroundColor: 'rgba(0,0,0,0.7)' } : {}}></div>
                            <h3 className="project-title">{project.title}</h3>
                        </div>
                        <div className="project-content">
                            <p className="project-desc">
                                {project.description}
                            </p>
                            <div className="project-tech">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="project-links">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        <FaGithub /> Código
                                    </a>
                                )}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    <FaExternalLinkAlt /> Demo
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="view-all-projects">
                <a
                    href={resumeData.personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                >
                    <FaGithub /> Ver todos os projetos no GitHub
                </a>
            </div>
        </Section>
    );
};

export default Projects;
