import { useState } from 'react';
import logoGold from '../assets/images/profile/greenoi.png';

const Navbar = ({ lang, setLang, theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false); // État pour le menu mobile

  const t = {
    fr: ['À propos','Compétences','Formation','Projets','Certifications','Contact'],
    en: ['About','Skills','Education','Projects','Certifications','Contact'],
  }[lang];
  
  const anchors = ['#about','#skills','#education','#projects','#certifications','#contact'];

  // Fonction pour fermer le menu quand on clique sur un lien (mobile)
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      {/* Lien unique pour le logo */}
      <a className="nav-logo" href="#hero">
        <div className="logo-image-container">
          <img 
            src={logoGold} 
            alt="Logo Anass" 
            className="logo-gold-img"
          />
        </div>
        <div className="logo-text-modern">
          <span className="name-bold">Anass</span>
          <span className="name-accent">Igh</span>
        </div>
      </a>

      {/* Liens avec classe dynamique pour le mobile */}
      <ul className={`nav-links ${isOpen ? 'mobile-open' : ''}`}>
        {t.map((label, i) => (
          <li key={i}>
            <a href={anchors[i]} onClick={closeMenu}>{label}</a>
          </li>
        ))}
      </ul>

      <div className="nav-controls">
        <button
          className="theme-btn"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          title="Changer de thème"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        
        <button className={`nav-btn ${lang === 'fr' ? 'active' : ''}`} onClick={() => setLang('fr')}>FR</button>
        <button className={`nav-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>

        {/* Bouton Hamburger pour le responsive */}
        <button 
          className="nav-hamburger" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;