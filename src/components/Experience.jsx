const Experience = ({ lang }) => {
  const t = {
    fr: { num: '02.', title: 'Expérience', internship: 'Stage', association: 'Vie associative' },
    en: { num: '02.', title: 'Experience', internship: 'Internship', association: 'Student Life' },
  }[lang];

  const items = [
    {
      kind: t.internship,
      badgeFr: '📅 Juil. 2026 – Oct. 2026',
      badgeEn: '📅 Jul. 2026 – Oct. 2026',
      titleFr: 'Stagiaire ingénieur IA générative — OfferScore',
      titleEn: 'Generative AI Engineer Intern — OfferScore',
      org: 'Kinova Tech',
      pointsFr: [
        "Développement d'un pipeline de RAG agentique pour la notation automatisée d'offres B2B, avec bascule multi-fournisseurs LLM (OpenAI → Gemini → Groq) et découpage structuré des documents d'achats.",
        "Extraction guidée par schéma avec Pydantic (modèle Sibling Evidence) : ancrage précis sur caractères, pages et tableaux pour éviter les hallucinations.",
        "Conception d'un moteur de notation hybride : recherche vectorielle (Cohere/Qdrant), reranking et contrôles arithmétiques déterministes (taxes, totaux, règles Go/No-Go).",
        "Architecture FinOps et idempotente : cache SHA-256 supprimant les appels LLM redondants, traçabilité complète sous PostgreSQL (SQLAlchemy 2.0).",
      ],
      pointsEn: [
        'Built an agentic RAG pipeline for automated scoring of B2B offers, with multi-provider LLM failover (OpenAI → Gemini → Groq) and structured chunking of procurement documents.',
        'Schema-guided extraction with Pydantic (Sibling Evidence model): precise anchoring to characters, pages and tables to prevent hallucinations.',
        'Designed a hybrid scoring engine: vector search (Cohere/Qdrant), reranking and deterministic arithmetic checks (taxes, totals, Go/No-Go rules).',
        'FinOps-oriented, idempotent architecture: SHA-256 cache removing redundant LLM calls, full traceability in PostgreSQL (SQLAlchemy 2.0).',
      ],
      tech: ['LangExtract', 'LightRAG', 'Django REST', 'PostgreSQL', 'Qdrant', 'Multi-LLM'],
    },
    {
      kind: t.association,
      badgeFr: '📍 FST Fès',
      badgeEn: '📍 FST Fès',
      titleFr: 'Membre — Club AITech',
      titleEn: 'Member — AITech Club',
      orgFr: "L'un des premiers clubs étudiants créés à la FST de Fès",
      orgEn: 'One of the first student clubs founded at FST Fès',
      pointsFr: [
        'Projets informatiques collaboratifs entre étudiants, axés sur le partage de compétences.',
        "Participation aux sessions techniques animées par des experts, au sein d'un club organisé en cellules (projets, marketing, sponsoring).",
      ],
      pointsEn: [
        'Collaborative student IT projects focused on sharing skills.',
        'Took part in technical sessions led by experts, within a club organized into units (projects, marketing, sponsorship).',
      ],
    },
  ];

  return (
    <section className="section reveal" id="experience">
      <div className="sec-header">
        <span className="sec-num">{t.num}</span>
        <h2 className="sec-title">{t.title}</h2>
        <div className="sec-line" />
      </div>
      <div className="edu-grid stagger reveal">
        {items.map((item, i) => (
          <div className="project-card" key={i}>
            <div className="project-card-top">
              <span className="project-num">{item.kind}</span>
              <span className="edu-badge year">{lang === 'fr' ? item.badgeFr : item.badgeEn}</span>
            </div>
            <h3 className="project-title">{lang === 'fr' ? item.titleFr : item.titleEn}</h3>
            <div className="edu-double">
              {item.org || (lang === 'fr' ? item.orgFr : item.orgEn)}
            </div>
            <div className="project-desc">
              {(lang === 'fr' ? item.pointsFr : item.pointsEn).map((point, j) => (
                <div key={j}>— {point}</div>
              ))}
            </div>
            {item.tech && (
              <div className="project-tech">
                {item.tech.map((tag, j) => <span className="project-tag" key={j}>{tag}</span>)}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
