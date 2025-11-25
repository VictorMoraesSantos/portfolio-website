import Section from './Section';
import { resumeData } from '../data/resume';
import { motion } from 'framer-motion';

const Skills = () => {
    const categories = [
        { name: 'Linguagens', items: resumeData.skills.languages },
        { name: 'Frameworks & Libs', items: resumeData.skills.frameworks },
        { name: 'Bancos de Dados', items: resumeData.skills.databases },
        { name: 'Testes', items: resumeData.skills.testing },
        { name: 'Cloud & DevOps', items: resumeData.skills.cloud },
    ];

    return (
        <Section id="skills">
            <h2 className="section-title">Habilidades Técnicas</h2>
            <div className="skills-grid">
                {categories.map((category, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className="skill-card"
                    >
                        <h3 className="skill-category">{category.name}</h3>
                        <div className="skill-tags">
                            {category.items.map((skill, i) => (
                                <span
                                    key={i}
                                    className="skill-tag"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
