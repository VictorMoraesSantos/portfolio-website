import Section from './Section';
import { resumeData } from '../data/resume';

const About = () => {
    return (
        <Section id="about">
            <h2 className="section-title">Sobre Mim</h2>
            <div className="about-grid">
                <div className="card">
                    <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                        {resumeData.summary}
                    </p>
                    <div className="about-info">
                        <div>
                            <h4 className="info-label">Localização</h4>
                            <p className="info-value">{resumeData.personalInfo.location}</p>
                        </div>
                        <div>
                            <h4 className="info-label">Educação</h4>
                            <p className="info-value">{resumeData.education[0].degree}</p>
                            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', opacity: 0.7 }}>{resumeData.education[0].institution}</p>
                        </div>
                    </div>
                </div>
                <div className="card" style={{ position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--accent-color), var(--accent-secondary))', opacity: 0.05, zIndex: 0 }}></div>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Idiomas</h3>
                        <div className="languages-list">
                            {resumeData.languages.map((lang, index) => (
                                <div key={index} className="language-item">
                                    <span style={{ fontWeight: 500 }}>{lang.language}</span>
                                    <span style={{ color: 'var(--accent-color)' }}>{lang.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
