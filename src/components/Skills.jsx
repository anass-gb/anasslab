const Skills = ({ lang }) => {
  const t = { fr: { num:'03.', title:'Compétences' }, en: { num:'03.', title:'Skills' } }[lang];

  const skills = [
    { icon:'🧠', titleFr:'Data Science / IA', titleEn:'Data Science / AI',
      tags:['Machine Learning','Deep Learning','NLP','Régression','EDA','Modélisation prédictive'] },
    { icon:'🤖', titleFr:'IA générative & LLM', titleEn:'Generative AI & LLM',
      tags:['RAG','Agentic RAG','Qdrant','LightRAG','Pydantic','Reranking','LLM Eval'] },
    { icon:'🐍', titleFr:'Langages', titleEn:'Languages',
      tags:['Python','R','Java','JavaScript','PHP'] },
    { icon:'⚙️', titleFr:'Frameworks & Libs', titleEn:'Frameworks & Libs',
      tags:['Scikit-learn','Pandas','NumPy','Matplotlib','Django REST','Spring Boot','React','JEE'] },
    { icon:'🗄️', titleFr:'Bases de données', titleEn:'Databases',
      tags:['MySQL','Oracle','PostgreSQL'] },
    { icon:'🛠️', titleFr:'Outils & DevOps', titleEn:'Tools & DevOps',
      tags:['Docker','Git','Postman','LaTeX','Excel','Linux Kubuntu'] },
    { icon:'🌐', titleFr:'Web & API', titleEn:'Web & API',
      tags:['REST API','React','HTML','CSS','JavaScript'] },
    { icon:'🌱', titleFr:'Qualités & centres d\'intérêt', titleEn:'Soft Skills & Interests',
      tags:['Esprit critique et analyse','Résolution de problèmes','Travail d\'équipe','Apprentissage rapide','Sport','Technologie','Lecture','IA'],
      tagsEn:['Critical thinking & analysis','Problem solving','Teamwork','Fast learner','Sport','Technology','Reading','AI'] },
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
              {((lang === 'en' && s.tagsEn) || s.tags).map((tag, j) => <span className="skill-tag" key={j}>{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;