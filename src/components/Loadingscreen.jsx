import { useState, useEffect } from 'react';
export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const hide = () => {
      setFading(true);
      setTimeout(() => setVisible(false), 600);
    };

    if (document.readyState === 'complete') {
      // Page already loaded
      setTimeout(hide, 400);
    } else {
      window.addEventListener('load', () => setTimeout(hide, 400));
    }

    // Fallback : disparaît après 5s max quoi qu'il arrive
    const fallback = setTimeout(hide, 5000);
    return () => clearTimeout(fallback);
  }, []);

  if (!visible) return null;

  return (
    <div className={`ls-overlay${fading ? ' ls-fade-out' : ''}`}>
      <div className="ls-box">
        <div className="ls-spinner">
          <span /><span /><span />
        </div>
        <p className="ls-text">Chargement en cours…</p>
      </div>
    </div>
  );
}