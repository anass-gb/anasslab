import { useState, useEffect } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { createPortal } from 'react-dom';

import microsoftImg from '../assets/images/certifications/MicrosoftNexus.png';
import awsImg from '../assets/images/certifications/aws.png';
import freeCodeCampImg from '../assets/images/certifications/freeCodeCamp.png';
import googlecloudiaImg from '../assets/images/certifications/googlecloudIA.png';
import googlecloudRImg from '../assets/images/certifications/googlecloudR.png';

const Certifications = ({ lang }) => {
  const [modalCert, setModalCert] = useState(null);

  // 🔥 FIX MODAL SCROLL
  useEffect(() => {
    if (modalCert) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [modalCert]);

  const t = {
    fr: { num:'05.', title:'Certifications', view:'Voir le certificat', noImg:'Image non disponible' },
    en: { num:'05.', title:'Certifications', view:'View certificate', noImg:'Image not available' },
  }[lang];

  const certs = [
    { icon:<FaGraduationCap />, name:'Machine Learning', issuer:'AWS', detailFr:'AWS Certificat ML', detailEn:'AWS ML Certificate', image:awsImg },
    { icon:'🤖', name:'Generative AI', issuer:'Google Cloud', detailFr:'Google cloud certificat introduction à l\'IA', detailEn:'Google Cloud Generative AI Certificate', image:googlecloudiaImg },
    { icon:'📊', name:'Data Analytics', issuer:'Google Cloud', detailFr:'Google cloud certificat Analyse de données(SQL,Tableau,R)', detailEn:'Google Cloud Data Analytics Certificate (SQL, Tableau, R)', image:googlecloudRImg },
    { icon:'📈', name:'Python Data Analysis', issuer:'freeCodeCamp', detailFr:'Certificat d\'Analyse des données Python', detailEn:'Python Data Analysis Certificate', image:freeCodeCampImg },
    { icon:'🏆', name:'Microsoft Data Nexus', issuer:'Microsoft | Ensa fes', detailFr:'Participation événement', detailEn:'Event participation', image:microsoftImg },
  ];

  return (
    <section className="section reveal" id="certifications">
      <div className="sec-header">
        <span className="sec-num">{t.num}</span>
        <h2 className="sec-title">{t.title}</h2>
        <div className="sec-line" />
      </div>

      <div className="certs-grid">
        {certs.map((c, i) => (
          <div className="cert-card" key={i} onClick={() => setModalCert(c)} title={t.view}>
            
            <div className="cert-preview">
              {c.image ? <img src={c.image} alt={c.name} /> : <span>{c.icon}</span>}
            </div>

            <div className="cert-body">
              <div className="cert-name">{c.name}</div>
              <div className="cert-issuer">{c.issuer}</div>
            </div>

            <span className="cert-arrow">↗</span>
          </div>
        ))}
      </div>

      {/* MODAL */}
{modalCert && createPortal(
  <div className="cert-modal-overlay" onClick={() => setModalCert(null)}>
    <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
      <button className="cert-modal-close" onClick={() => setModalCert(null)}>✕</button>

      {modalCert.image
        ? <img src={modalCert.image} alt={modalCert.name} />
        : <p>Image non disponible</p>
      }

      <div className="cert-modal-name">{modalCert.name}</div>
      <div className="cert-modal-issuer">
        {lang === 'fr' ? modalCert.detailFr : modalCert.detailEn}
      </div>
    </div>
  </div>,
  document.body   // 🔥 TRÈS IMPORTANT
)}
    </section>
  );
};

export default Certifications;