import React from "react";
import aboutPhoto from "../assets/images/profile/anass.jpg";
import wisdpdf from "../assets/images/education/WISD.pdf";

const About = ({ lang = "fr" }) => {
  const t = {
    fr: {
      num: "01.",
      title: "À propos",
      p1: "Je suis <strong>Anass Ighachouten</strong>, étudiant en Master WISD (Web Intelligence & Science des Données) à la Faculté des Science Dhar el Mahraz de Fès, en double diplomation avec l'Université Sorbonne Paris Nord.",
      p2: "Passionné par l’exploitation des <strong>données brutes</strong> pour en extraire des insights exploitables, en combinant data science et intelligence artificielle.",
      cvBtn: "Consulter mon CV",
      facts: [
        { label: "Nom", val: "Anass Ighachouten" },
        { label: "Ville", val: "Fès, Maroc", href: "https://www.google.com/maps/search/Fès+Maroc" },
        { label: "Email", val: "anassighachouten@gmail.com", href: "mailto:anassighachouten@gmail.com" },
        { label: "GitHub", val: "anass-gb", href: "https://github.com/anass-gb" },
        { label: "LinkedIn", val: "anass-ighachouten", href: "https://www.linkedin.com/in/anass-ighachouten-a2251034a" },
        { label: "Statut", val: "Étudiant Master", href: wisdpdf },
      ],
    },
    en: {
      num: "01.",
      title: "About Me",
      p1: "I am <strong>Anass Ighachouten</strong>, a student in the WISD Master's program (Web Intelligence & Data Science) at Faculty of Science Dhar el Mahraz in Fès, in dual degree with Université Sorbonne Paris Nord.",
      p2: "Passionate about leveraging <strong>raw data</strong> to extract actionable insights by combining data science and artificial intelligence.",
      cvBtn: "View CV",
      facts: [
        { label: "Name", val: "Anass Ighachouten" },
        { label: "City", val: "Fès, Morocco", href: "https://www.google.com/maps/search/Fes+Morocco" },
        { label: "Email", val: "anassighachouten@gmail.com", href: "mailto:anassighachouten@gmail.com" },
        { label: "GitHub", val: "anass-gb", href: "https://github.com/anass-gb" },
        { label: "LinkedIn", val: "anass-ighachouten", href: "https://www.linkedin.com/in/anass-ighachouten-a2251034a" },
        { label: "Status", val: "Master Student", href: wisdpdf },
      ],
    },
  }[lang];

  return (
    <section className="about-section reveal" id="about">
      <div className="sec-header">
        <span className="sec-num">{t.num}</span>
        <h2 className="sec-title">{t.title}</h2>
        <div className="sec-line" />
      </div>

      <div className="about-grid">
        <div className="about-content">
          
          <div className="about-text">
            <p className="description-text first-p" dangerouslySetInnerHTML={{ __html: t.p1 }} />
            <p className="description-text second-p" dangerouslySetInnerHTML={{ __html: t.p2 }} />
          </div>

          <div className="about-facts">
            {t.facts.map((f, i) => {
              const content = (
                <>
                  <div className="about-fact-label">{f.label}</div>
                  <div className="about-fact-val">{f.val}</div>
                </>
              );

              return f.href ? (
                <a
                  key={i}
                  href={f.href}
                  className="about-fact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={i} className="about-fact no-link">
                  {content}
                </div>
              );
            })}
          </div>

          <div className="cv-container">
            <a
              href="https://drive.google.com/file/d/1_-phTeHXps0ijm2j6OgawHU8JM6JiQke/view"
              className="btn-cv-large"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="cv-icon">📄</span> {t.cvBtn}
            </a>
          </div>

        </div>

        <div className="about-wrapper">
          <div className="about-photo">
            <div className="deco-tl"></div>
            <div className="deco-br"></div>
            <img src={aboutPhoto} alt="Anass Ighachouten" className="about-img" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;