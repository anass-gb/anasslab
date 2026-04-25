import { useState } from 'react';
import emailjs from "@emailjs/browser";
import githubIcon from '../assets/images/icons/github.svg';

const Contact = ({ lang }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const t = {
    fr: {
      num: '06.', title: 'Me Contacter',
      formTitle: '✉️ Envoyez-moi un message',
      formSub: "Répondrai dans les 24h. N'hésitez pas !",
      namePh: 'Votre nom',
      emailPh: 'Votre email',
      phonePh: 'Téléphone (optionnel)',
      msgPh: 'Votre message...',
      send: 'Envoyer ➤',
      sending: 'Envoi...',
      sentMsg: ' Merci ! Je vous réponds très bientôt.',
      invalidEmail: 'L\'adresse email semble incorrecte.',
      disposableEmail: 'Les emails jetables (temp) sont bloqués.',
    },
    en: {
      num: '06.', title: 'Get In Touch',
      formTitle: '✉️ Send me a message',
      formSub: "I'll reply within 24h. Don't hesitate!",
      namePh: 'Your name',
      emailPh: 'Your email',
      phonePh: 'Phone (optional)',
      msgPh: 'Your message...',
      send: 'Send ➤',
      sending: 'Sending...',
      sentMsg: ' Thanks! I will get back to you very soon.',
      invalidEmail: 'The email address seems incorrect.',
      disposableEmail: 'Disposable emails are blocked.',
    },
  }[lang];

  const validateEmail = (email) => {
    const emailLower = email.toLowerCase().trim();
    const DISPOSABLE_DOMAINS = ['yopmail.com', 'tempmail.com', '10minutemail.com'];
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!re.test(emailLower)) return { valid: false, msg: t.invalidEmail };
    const domain = emailLower.split('@')[1];
    if (DISPOSABLE_DOMAINS.includes(domain)) return { valid: false, msg: t.disposableEmail };
    
    return { valid: true };
  };

  const handleChange = (e) => {
    if (error) setError('');
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;

    const check = validateEmail(form.email);
    if (!check.valid) {
      setError(check.msg);
      return;
    }

    setLoading(true);
    setError('');

    try {
      await emailjs.send(
        "service_m5ohnkm",
        "template_1oz5twj",
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
        },
        "9R2lNn-mQ4B-L5JpM"
      );

      setSent(true);
      setForm({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      console.error("Emailjs Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    { icon: '💼', label: 'LinkedIn', val: 'anass-ighachouten', href: 'https://www.linkedin.com/in/anass-ighachouten-a2251034a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
    { icon: <img src={githubIcon} alt="GitHub" />, label: 'GitHub', val: 'github.com/anass-gb', href: 'https://github.com/anass-gb' },
    { icon: '📧', label: 'Email', val: 'anassighachouten@gmail.com', href: 'mailto:anassighachouten@gmail.com' },
    { icon: '📱', label: 'Phone', val: '+212 658 119 186', href: 'tel:+212658119186' },
    { icon: '📍', label: 'Location', val: 'Rue Boughafer, Fès, Maroc', href: 'https://maps.app.goo.gl/KdMsptbvqq6s3Sju8' },
  ];

  return (
    <section className="section reveal" id="contact">
      <div className="sec-header">
        <span className="sec-num">{t.num}</span>
        <h2 className="sec-title">{t.title}</h2>
        <div className="sec-line" />
      </div>

      <div className="contact-grid">
        <div className="contact-links">
          {socials.map((s, i) => (
            <a className="contact-link" href={s.href} key={i} target="_blank" rel="noreferrer">
              <span className="contact-link-icon">{s.icon}</span>
              <div>
                <div className="contact-link-label">{s.label}</div>
                <div className="contact-link-val">{s.val}</div>
              </div>
              <span className="contact-link-arrow">→</span>
            </a>
          ))}
        </div>

        <div className="contact-form-wrap">
          <div className="contact-form-title">{t.formTitle}</div>
          <p className="contact-form-sub">{t.formSub}</p>

          <div className="contact-status-container">
            {sent && <div className="contact-sent">{t.sentMsg}</div>}
            {error && <div className="contact-error">{error}</div>}
          </div>

          <div className="contact-field">
            <span className="contact-field-icon">👤</span>
            <input name="name" type="text" placeholder={t.namePh} value={form.name} onChange={handleChange} className="contact-input" />
          </div>

          <div className={`contact-field ${error ? 'field-error' : ''}`}>
            <span className="contact-field-icon">✉️</span>
            <input name="email" type="email" placeholder={t.emailPh} value={form.email} onChange={handleChange} className="contact-input" />
          </div>

          <div className="contact-field">
            <span className="contact-field-icon">📱</span>
            <input name="phone" type="tel" placeholder={t.phonePh} value={form.phone} onChange={handleChange} className="contact-input" />
          </div>

          <div className="contact-field contact-field-textarea">
            <span className="contact-field-icon" style={{ paddingTop: '.15rem' }}>💬</span>
            <textarea name="message" placeholder={t.msgPh} value={form.message} onChange={handleChange} className="contact-input contact-textarea" rows={4} />
          </div>

          <div className="contact-submit-row">
            <span className="contact-submit-hint"></span>
            <button className="btn-send" onClick={handleSubmit} disabled={loading}>
              {loading ? t.sending : t.send}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;