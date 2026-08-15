import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import { nav } from '../i18n/nav';
import logo from '../assets/images/logo.png';
import headerLogo from '../assets/images/header_logo.png';

import './Header.css';

const navLinkClass = ({ isActive }) => (isActive ? 'active' : undefined);

export default function Header({ showCta = true }) {
  const { lang, setLang } = useLang();
  const t = nav[lang];
  const [open, setOpen] = useState(false);

  return (
    <header className={`site-header${open ? ' mm-open' : ''}`}>
      <div className="site-header-bar">
        <Link to="/" className="site-logo-link">
          <img src={headerLogo} alt="Moose Education and Immigration Consulting" className="site-logo" />
        </Link>

        <button id="mm-toggle" type="button" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          <span className="mm-bars">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <div className="site-header-right">
          <nav className="site-nav">
            <NavLink to="/" end className={navLinkClass}>
              {t.home}
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              {t.services}
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              {t.about}
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              {t.contact}
            </NavLink>
          </nav>

          <div className="lang-switch">
            <button type="button" className={lang === 'tr' ? 'active' : ''} onClick={() => setLang('tr')}>
              TR
            </button>
            <button type="button" className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>
              EN
            </button>
          </div>

          {showCta && (
            <Link to="/contact" className="btn btn-primary">
              {t.cta}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
