import Section from './Section';
import { resumeData } from '../data/resume';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <Section id="contact">
            <h2 className="section-title">Vamos Conversar?</h2>
            <div className="contact-container">
                <div className="contact-grid">
                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Entre em contato</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            Estou sempre aberto a novas oportunidades e desafios. Se você tem um projeto em mente ou quer apenas bater um papo sobre tecnologia, sinta-se à vontade para entrar em contato.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div className="contact-item">
                                <div className="contact-icon-box">
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <p className="contact-label">Email</p>
                                    <a href={`mailto:${resumeData.personalInfo.email}`} className="contact-value">
                                        {resumeData.personalInfo.email}
                                    </a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon-box">
                                    <FaPhone size={20} />
                                </div>
                                <div>
                                    <p className="contact-label">Telefone</p>
                                    <a href={`tel:${resumeData.personalInfo.phone.replace(/\D/g, '')}`} className="contact-value">
                                        {resumeData.personalInfo.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon-box">
                                    <FaWhatsapp size={20} />
                                </div>
                                <div>
                                    <p className="contact-label">WhatsApp</p>
                                    <a
                                        href={`https://wa.me/55${resumeData.personalInfo.phone.replace(/\D/g, '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="contact-value"
                                    >
                                        Conversar no WhatsApp
                                    </a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon-box">
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <div>
                                    <p className="contact-label">Localização</p>
                                    <p className="contact-value">
                                        {resumeData.personalInfo.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div className="social-box">
                            <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Redes Sociais</h4>
                            <div className="social-icons-large">
                                <a
                                    href={resumeData.personalInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-btn"
                                >
                                    <FaLinkedin size={24} />
                                </a>
                                <a
                                    href={resumeData.personalInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-btn"
                                >
                                    <FaGithub size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <p>© {new Date().getFullYear()} {resumeData.personalInfo.name}. Todos os direitos reservados.</p>
            </footer>
        </Section>
    );
};

export default Contact;
