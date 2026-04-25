const Skills = ({ lang }) => {
  const t = { fr: { num:'02.', title:'Compétences' }, en: { num:'02.', title:'Skills' } }[lang];

  const skills = [
    { icon:'🧠', titleFr:'Data Science / IA', titleEn:'Data Science / AI',
      tags:['Machine Learning','Deep Learning','NLP','Régression','EDA','Modélisation prédictive'] },
    { icon:'🐍', titleFr:'Langages', titleEn:'Languages',
      tags:['Python','R','Java','JavaScript','PHP'] },
    { icon:'⚙️', titleFr:'Frameworks & Libs', titleEn:'Frameworks & Libs',
      tags:['Scikit-learn','Pandas','NumPy','Matplotlib','Spring Boot','React','JEE'] },
    { icon:'🗄️', titleFr:'Bases de données', titleEn:'Databases',
      tags:['MySQL','Oracle'] },
    { icon:'🛠️', titleFr:'Outils & DevOps', titleEn:'Tools & DevOps',
      tags:['Docker','Git','Postman','LaTeX','Linux Kubuntu'] },
    { icon:'🌐', titleFr:'Web & API', titleEn:'Web & API',
      tags:['REST API','React','HTML','CSS','JavaScript'] },
  ];

  return (
    <section className="section reveal" id="skills">
      <div className="sec-header">
        <span className="sec-num">{t.num}</span>
        <h2 className="sec-title">{t.title}</h2>
        <div className="sec-line" />
      </div>
      <div className="skills-grid stagger reveal">
        {skills.map((s, i) => (
          <div className="skill-card" key={i}>
            <div className="skill-card-head">
              <span className="skill-card-icon">{s.icon}</span>
              <span className="skill-card-title">{lang === 'fr' ? s.titleFr : s.titleEn}</span>
            </div>
            <div className="skill-tags">
              {s.tags.map((tag, j) => <span className="skill-tag" key={j}>{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;