import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { resumeData } from '../data/resume';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Início', href: '#hero' },
        { name: 'Sobre', href: '#about' },
        { name: 'Experiência', href: '#experience' },
        { name: 'Projetos', href: '#projects' },
        { name: 'Habilidades', href: '#skills' },
        { name: 'Contato', href: '#contact' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`header ${scrolled ? 'scrolled' : ''}`}
        >
            <div className="container nav-container">
                <a href="#" className="logo">
                    VM.
                </a>

                <nav className="nav-links">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-link"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="social-links">
                    <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaGithub />
                    </a>
                    <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
