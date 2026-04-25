const Projects = ({ lang }) => {
  const t = {
    fr: { num:'04.', title:'Projets', github:'GitHub' },
    en: { num:'04.', title:'Projects', github:'GitHub' },
  }[lang];

  const projects = [
    {
      titleFr: 'Analyse et prédiction du churn (Télécom)',
      titleEn: 'Telecom Churn Analysis & Prediction',
      descFr: 'Régression logistique pour prédire le désabonnement. Analyse exploratoire (EDA) complète, identification des facteurs de risque et stratégies de fidélisation basées sur les probabilités prédites.',
      descEn: 'Logistic regression to predict customer churn. Full EDA, risk factor identification and retention strategies based on predicted probabilities.',
      tech: ['R', 'Tidyverse', 'Caret', 'EDA', 'Logistic Regression'],
      link: 'https://github.com/anass-gb/Churn_Analysis',
    },
    {
      titleFr: 'Plateforme E-commerce Full-Stack',
      titleEn: 'Full-Stack E-commerce Platform',
      descFr: 'Architecture robuste avec API REST, authentification JWT, gestion du catalogue et cycle de commande complet. Tests Postman et versioning Git.',
      descEn: 'Robust architecture with REST API, JWT authentication, catalog management and full order lifecycle. Postman testing and Git versioning.',
      tech: ['Spring Boot', 'React', 'MySQL', 'REST API', 'JWT'],
      link: 'https://github.com/anass-gb/Plateforme-E-commerce-Full-Stack',
    },
    {
      titleFr: 'Traducteur EN → Darija (LLM Gemini)',
      titleEn: 'EN → Darija Translator (Gemini LLM)',
      descFr: 'Intégration du LLM Gemini pour la traduction contextuelle de l\'anglais vers le dialecte marocain Darija. Backend JEE modulaire et interface React réactive.',
      descEn: 'Gemini LLM integration for contextual translation from English to Moroccan Darija dialect. Modular JEE backend and responsive React frontend.',
      tech: ['JEE', 'Gemini API', 'React', 'LLM', 'NLP'],
      link: 'https://github.com/anass-gb/Darija-translate',
    },
    {
      titleFr: 'Portfolio Web Personnel',
      titleEn: 'Personal Web Portfolio',
      descFr: 'Vitrine numérique moderne avec dark/light mode, bilingue FR/EN, animations et scroll reveal. Design sobre et lisible pour les recruteurs.',
      descEn: 'Modern digital showcase with dark/light mode, bilingual FR/EN, animations and scroll reveal. Clean design optimized for recruiters.',
      tech: ['React', 'CSS', 'Vite', 'Responsive'],
      link: 'https://github.com/anass-gb/Portfolio',
    },
  ];

  return (
    <section className="section reveal" id="projects">
      <div className="sec-header">
        <span className="sec-num">{t.num}</span>
        <h2 className="sec-title">{t.title}</h2>
        <div className="sec-line" />
      </div>
      <div className="projects-grid stagger reveal">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <div className="project-card-top">
              <span className="project-num">0{i + 1}</span>
              {p.link && (
                <a href={p.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  ↗ {t.github}
                </a>
              )}
            </div>
            <h3 className="project-title">{lang === 'fr' ? p.titleFr : p.titleEn}</h3>
            <p className="project-desc">{lang === 'fr' ? p.descFr : p.descEn}</p>
            <div className="project-tech">
              {p.tech.map((tag, j) => <span className="project-tag" key={j}>{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;