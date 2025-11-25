import Section from './Section';
import { resumeData } from '../data/resume';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <Section id="experience" className="experience-section">
            <h2 className="section-title">Experiência Profissional</h2>
            <div className="timeline">
                <div className="timeline-line"></div>

                {resumeData.experience.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className={`timeline-item ${index % 2 === 0 ? 'reverse' : ''}`}
                    >
                        <div className="timeline-empty"></div>

                        <div className="timeline-dot"></div>

                        <div className="timeline-content">
                            <div className="timeline-card">
                                <span className="period-badge">
                                    {exp.period}
                                </span>
                                <h3 className="job-role">{exp.role}</h3>
                                <h4 className="company-name">{exp.company}</h4>
                                <ul className="job-desc">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>
                                            <span className="bullet"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
