import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-bg">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="blob blob-3"></div>
            </div>

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="hero-greeting">Olá, eu sou</h2>
                    <h1 className="hero-name">
                        {resumeData.personalInfo.name}
                    </h1>
                    <h3 className="hero-role">
                        {resumeData.personalInfo.role}
                    </h3>
                    <p className="hero-desc">
                        Transformando ideias em experiências digitais escaláveis e de alta performance.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">Ver Projetos</a>
                        <a href="#contact" className="btn btn-outline">Fale Comigo</a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <a href="#about">
                    <FaArrowDown size={24} />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
