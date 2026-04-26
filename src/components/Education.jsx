// ══════════════════════════════════════════════════════════════
//  POUR AJOUTER LES VRAIS LOGOS :
//  Copie tes fichiers ici et utilise les chemins comme strings dans logoSrc
// ══════════════════════════════════════════════════════════════
import sorbonneLogo from '../assets/images/education/sorbonne.png';
import fsdmLogo from '../assets/images/education/fsdm.png';
import fstLogo from '../assets/images/education/fst.png';
const EduLogo = ({ src, emoji, label }) => {
  if (src) {
    return (
      <div className="edu-logo-box">
        <img src={src} alt={label} />
      </div>
    );
  }
  return (
    <div className="edu-logo-box edu-logo-fallback">
      <span className="edu-logo-emoji">{emoji}</span>
      <span className="edu-logo-abbr">{label}</span>
    </div>
  );
};

const Education = ({ lang }) => {
  const t = {
    fr: { num: '03.', title: 'Formation', langTitle: 'Langues' },
    en: { num: '03.', title: 'Education', langTitle: 'Languages' },
  }[lang];
  const EduLogo = ({ src, emoji, label }) => {
  if (src) {
    return (
      <div className="edu-logo-box">
        <img src={src} alt={label} />
      </div>
    );
  }
  return (
    <div className="edu-logo-box edu-logo-fallback">
      <span className="edu-logo-emoji">{emoji}</span>
      <span className="edu-logo-abbr">{label}</span>
    </div>
  );
};

  const items = [
    {
      logoSrc: sorbonneLogo,
      logoEmoji: sorbonneLogo,
      logoLabel: 'USPN',
      schoolFr: 'Université Sorbonne Paris Nord',
      schoolEn: 'Université Sorbonne Paris Nord',
      degreeFr: 'Master WISD — Web Intelligence et Science des Données',
      degreeEn: 'Master WISD — Web Intelligence and Data Science',
      year: '2025 – Présent',
      cityFr: 'Paris, France',
      cityEn: 'Paris, France',
    },
    {
      logoSrc: fsdmLogo,
      logoEmoji: fsdmLogo,
      logoLabel: 'FSDM',
      schoolFr: 'Faculté des Sciences Dhar El Mahraz (FSDM), USMBA',
      schoolEn: 'Faculty of Sciences Dhar El Mahraz (FSDM), USMBA',
      degreeFr: 'Master WISD — Web Intelligence et Science des Données',
      degreeEn: 'Master WISD — Web Intelligence and Data Science',
      year: '2025 – Présent',
      cityFr: 'Fès, Maroc',
      cityEn: 'Fès, Morocco',
      doubleFr: 'Double diplomation avec Sorbonne Paris Nord',
      doubleEn: 'Dual degree with Sorbonne Paris Nord',
    },
    {
      logoSrc: fstLogo,
      logoEmoji: fstLogo,
      logoLabel: 'FST',
      schoolFr: 'Faculté des Sciences et Techniques (FST), Fès',
      schoolEn: 'Faculty of Sciences and Techniques (FST), Fès',
      year: '2024 – 2025',
      cityFr: 'Fès, Maroc',
      cityEn: 'Fès, Morocco',
    },
    {
      logoSrc: fstLogo,
      logoEmoji: fstLogo,
      logoLabel: 'FST',
      schoolFr: 'Faculté des Sciences et Techniques (FST), Fès',
      schoolEn: 'Faculty of Sciences and Techniques (FST), Fès',
      degreeFr: 'DEUST — Sciences et Techniques',
      degreeEn: 'DEUST — Science and Technology',
      year: '2021 – 2024',
      cityFr: 'Fès, Maroc',
      cityEn: 'Fès, Morocco',
    },
  ];

  const languages = [
    { flag: '🇲🇦', nameFr: 'Arabe',    nameEn: 'Arabic',   levelFr: 'Natif', levelEn: 'Native' },
    { flag: '🇫🇷', nameFr: 'Français',  nameEn: 'French',   levelFr: <strong>B2</strong>,           levelEn: <strong>B2</strong> },
    { flag: '🇬🇧', nameFr: 'Anglais',   nameEn: 'English',  levelFr: <strong>B2</strong>,           levelEn: <strong>B2</strong> },
  ];

  return (
    <section className="section section-alt reveal" id="education">
      <div className="sec-header">
        <span className="sec-num">{t.num}</span>
        <h2 className="sec-title">{t.title}</h2>
        <div className="sec-line" />
      </div>

      <div className="edu-grid stagger reveal">
        {items.map((item, i) => (
 <div className="edu-card" key={i}>
  <EduLogo
    src={item.logoSrc}
    emoji={item.logoEmoji}
    label={item.logoLabel}
  />

  <div className="edu-body">
    <div className="edu-school">
      {lang === 'fr' ? item.schoolFr : item.schoolEn}
    </div>

    <div className="edu-degree">
      {lang === 'fr' ? item.degreeFr : item.degreeEn}
    </div>

    {item.doubleFr && (
      <div className="edu-double">
        🔗 {lang === 'fr' ? item.doubleFr : item.doubleEn}
      </div>
    )}

    <div className="edu-meta">
      <span className="edu-badge year">📅 {item.year}</span>
      <span className="edu-badge">📍 {lang === 'fr' ? item.cityFr : item.cityEn}</span>
    </div>
  </div>
</div>
        ))}
      </div>

      <div style={{ marginTop: '3.5rem' }}>
        <h3 style={{
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: '.72rem', color: 'var(--text-muted)',
          textTransform: 'uppercase', letterSpacing: '.12em',
          marginBottom: '1.2rem'
        }}>
          {t.langTitle}
        </h3>
        <div className="lang-cards">
          {languages.map((l, i) => (
            <div className="lang-card" key={i}>
              <div className="lang-flag">{l.flag}</div>
              <div className="lang-name">{lang === 'fr' ? l.nameFr : l.nameEn}</div>
              <div className="lang-level">{lang === 'fr' ? l.levelFr : l.levelEn}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;