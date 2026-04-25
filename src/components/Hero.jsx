import { useState, useEffect } from "react";
import profilePhoto from '../assets/images/profile/anass.jpg';
import wisdpdf from '../assets/images/education/WISD.pdf';

// ── Termes animés ──────────────────────────────────────────
const TERMS = {
  fr: [
    "Machine Learning",
    "Deep Learning",
    "Traitement du langage naturel",
    "Vision par ordinateur",
    "Science des données",
    "Réseaux de neurones",
    "Transformers",
    "Développement web",
    "MLOps",
    "Apprentissage par renforcement",
    "Web Mining",
    "Data Warehouse",
  ],
  en: [
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Computer Vision",
    "Data Science",
    "Neural Networks",
    "Transformers",
    "Web Development",
    "MLOps",
    "Reinforcement Learning",
    "Web Mining",
    "Data Warehouse",
  ],
};

// ── Hook typewriter ────────────────────────────────────────
function useTypewriter(words = [], typingSpeed = 90, deletingSpeed = 55, pauseMs = 1400) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const word = words[index] || "";
    let delay;

    if (!deleting) {
      delay = typingSpeed;

      if (charIdx < word.length) {
        const t = setTimeout(() => setCharIdx(c => c + 1), delay);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setDeleting(true), pauseMs);
        return () => clearTimeout(t);
      }

    } else {
      delay = deletingSpeed;

      if (charIdx > 0) {
        const t = setTimeout(() => setCharIdx(c => c - 1), delay);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setIndex(i => (i + 1) % words.length);
      }
    }
  }, [charIdx, deleting, index, words, typingSpeed, deletingSpeed, pauseMs]);

  useEffect(() => {
    if (!words.length) return;
    setDisplayed(words[index].slice(0, charIdx));
  }, [charIdx, index, words]);

  return displayed;
}

// ── Composant Hero ─────────────────────────────────────────
const Hero = ({ lang = "fr" }) => {

  const t = {
    fr: {
      tag: "Disponible pour un stage",
      greeting: "Bonjour, je suis",
      role: "Data Science & Intelligence Artificielle",
      passionLabel: "Intéressé par",
      cta1: "Voir mes projets",
      cta2: "Me contacter",
      info: [
        { icon: "🎓", label: "Formation", val: "Master WISD — FSDM + Sorbonne", href: wisdpdf },
        { icon: "✉️", label: "Email", val: "anassighachouten@gmail.com", href: "mailto:anassighachouten@gmail.com" },
        { icon: "📍", label: "Localisation", val: "Rue Boughafer, Fès, Maroc", href: "https://maps.app.goo.gl/KdMsptbvqq6s3Sju8" },

      ],
    },
    en: {
      tag: "Available for internship",
      greeting: "Hi, I'm",
      role: "Data Science & Artificial Intelligence",
      passionLabel: "interested in",
      cta1: "View projects",
      cta2: "Contact me",
      info: [
        { icon: "🎓", label: "Degree", val: "Master WISD — FSDM + Sorbonne", href: wisdpdf },
        { icon: "✉️", label: "Email", val: "anassighachouten@gmail.com", href: "mailto:anassighachouten@gmail.com" },
        { icon: "📍", label: "Location", val: "Rue Boughafer, Fès, Morocco", href: "https://maps.app.goo.gl/KdMsptbvqq6s3Sju8" },

      ],
    },
  }[lang];

  const typedTerm = useTypewriter(TERMS[lang] || []);

  return (
    <section className="hero" id="hero">

      <div className="hero-left">

        <div className="hero-tag">
          <span className="hero-tag-dot" />
          {t.tag}
        </div>

        <p className="hero-greeting">{t.greeting}</p>

        <h1 className="hero-name">
          Anass <span className="hero-name-shine">Ighachouten</span>
        </h1>

        <p className="hero-role">{t.role}</p>

        {/* ✅ TYPEWRITER PROPRE */}
        <div className="hero-typewriter">
          <span className="hero-typewriter-label">{t.passionLabel}</span>
          <span className="hero-typewriter-pill">
            <span className="hero-typewriter-text">{typedTerm}</span>
            <span className="hero-typewriter-cursor" />
          </span>
        </div>

        <div className="hero-btns">
          <a href="#projects" className="btn-main">▶ {t.cta1}</a>
          <a href="#contact" className="btn-outline">→ {t.cta2}</a>
        </div>

      </div>

      <div className="hero-right">

        <div className="hero-photo-wrapper">
          <div className="hero-photo-ring" />
          <div className="hero-photo">
            <img src={profilePhoto} alt="Anass" />
          </div>
        </div>

        <div className="hero-info-cards">
          {t.info.map((item, i) => {
            const card = (
              <div className="hero-info-card">
                <span className="hero-info-card-icon">{item.icon}</span>
                <div>
                  <div className="hero-info-card-label">{item.label}</div>
                  <div className="hero-info-card-val">{item.val}</div>
                </div>
              </div>
            );

            return item.href ? (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                 style={{ textDecoration: "none", color: "inherit" }}>
                {card}
              </a>
            ) : (
              <div key={i}>{card}</div>
            );
          })}
        </div>

      </div>

    </section>
  );
};

export default Hero;