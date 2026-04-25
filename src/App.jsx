import { useState, useEffect } from 'react';
import ReactGA from 'react-ga4';
import { FaGithub, FaLinkedin, FaEnvelope,} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Particles from './components/Particles';

// ── GA INIT ──
ReactGA.initialize("G-RGTJBCZ4ZK");

const footerLinks = [
  { fr: 'Accueil', en: 'Home', href: '#hero' },
  { fr: 'À propos', en: 'About', href: '#about' },
  { fr: 'Compétences', en: 'Skills', href: '#skills' },
  { fr: 'Éducation', en: 'Education', href: '#education' },
  { fr: 'Projets', en: 'Projects', href: '#projects' },
  { fr: 'Certifications', en: 'Certifications', href: '#certifications' },
  { fr: 'Contact', en: 'Contact', href: '#contact' },
];

const footerSocials = [
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/anass-ighachouten-a2251034a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { icon: <FaGithub />, href: 'https://github.com/anass-gb' },
  { icon: <FaEnvelope />, href: 'mailto:anassinfo05@gmail.com' },
  { icon: <FaXTwitter />, href: 'https://twitter.com/anass_igh' },
];

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';
  return localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light';
}

function App() {
  const [lang, setLang] = useState('fr');
  const [theme, setTheme] = useState(getInitialTheme);

  // ── PAGE VIEW ONLY (PRO CLEAN) ──
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname
    });
  }, []);

  // ── THEME SYSTEM ──
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    document.title = 'AnassDataLab';
  }, [theme]);

  // ── SCROLL ANIMATION (NO TRACKING) ──
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // observe once only
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    document
      .querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger')
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Particles />
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />

      <main>
        <section id="hero"><Hero lang={lang} /></section>
        <section id="about"><About lang={lang} /></section>
        <section id="skills"><Skills lang={lang} /></section>
        <section id="education"><Education lang={lang} /></section>
        <section id="projects"><Projects lang={lang} /></section>
        <section id="certifications"><Certifications lang={lang} /></section>
        <section id="contact"><Contact lang={lang} /></section>
      </main>

      {/* ── FOOTER PRO ── */}
      <footer className="site-footer">
        <div className="footer-grid">

          <div className="footer-brand">
            <div className="footer-logo">
              {lang === 'fr'
                ? "Merci de visiter mon portfolio."
                : "Thanks for visiting my portfolio."}
            </div>

            <p className="footer-brand-desc">
              {lang === 'fr'
                ? "N'hésitez pas à me contacter pour toute opportunité."
                : "Feel free to reach out for any opportunity."}
            </p>

            <div className="footer-socials">
              {footerSocials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="footer-social-btn">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-nav">
            <div className="footer-divider" />
            <div className="footer-nav-title">
              {lang === 'fr' ? 'Accès rapide' : 'Quick Links'}
            </div>

            <ul className="footer-nav-list">
              {footerLinks.map((l, i) => (
                <li key={i}>
                  <a href={l.href}>{lang === 'fr' ? l.fr : l.en}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-nav">
            <div className="footer-divider" />
            <div className="footer-nav-title">Contact</div>

            <ul className="footer-contact-list">
              <li><a href="tel:+212658119186">📱 +212 658 119 186</a></li>
              <li><a href="mailto:anassighachouten@gmail.com">✉️ anassighachouten@gmail.com</a></li>
              <li>
                <a href="https://maps.google.com/?q=Fes,Morocco" target="_blank" rel="noreferrer">
                  📍 Fès, Maroc
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <h3>
            <a href="https://www.linkedin.com/in/anass-ighachouten-a2251034a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
              Anass Ighachouten
            </a>
          </h3>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}

export default App;