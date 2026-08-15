import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import { nav } from '../i18n/nav';
import logo from '../assets/images/logo.png';
import './Footer.css';

export default function Footer({ logoHeight = 240, logoSquare = false, email, phone, legal, rights }) {
  const { lang } = useLang();
  const t = nav[lang];
  const linksTitle = lang === 'tr' ? 'Hızlı Bağlantılar' : 'Quick Links';
  const contactTitle = lang === 'tr' ? 'İletişim' : 'Contact';

  return (
    <footer className="site-footer">
      <div className={`footer-logo${logoSquare ? ' footer-logo-square' : ''}`}>
        <img
          src={logo}
          alt="Moose Education and Immigration Consulting"
          style={logoSquare ? { height: logoHeight, width: logoHeight, objectFit: 'fill' } : { height: logoHeight, width: 'auto' }}
        />
      </div>

      <div />

      <div>
        <div className="footer-col-title">{linksTitle}</div>
        <div className="footer-links">
          <Link to="/services">{t.services}</Link>
          <Link to="/about">{t.about}</Link>
          <Link to="/contact">{t.contact}</Link>
        </div>
      </div>

      <div>
        <div className="footer-col-title">{contactTitle}</div>
        <div className="footer-contact">
          <a href={`mailto:${email.href}`} className="footer-email">
            {email.display}
          </a>
          <a href={`tel:${phone.href}`}>{phone.display}</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-legal">{legal}</p>
        {rights && <p className="footer-rights">{rights}</p>}
      </div>
    </footer>
  );
}
