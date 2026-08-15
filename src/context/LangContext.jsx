import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const LangContext = createContext(null);

const STORAGE_KEY = 'atlantic_lang';

function getInitialLang() {
  try {
    return localStorage.getItem(STORAGE_KEY) || 'tr';
  } catch {
    return 'tr';
  }
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* localStorage unavailable */
    }
  }, []);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within a LangProvider');
  return ctx;
}
