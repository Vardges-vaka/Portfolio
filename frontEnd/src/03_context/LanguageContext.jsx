import { useCallback, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { LanguageContext } from "./contexts.js";
import { DICTIONARIES, LANGUAGES, DEFAULT_LANG } from "../i18n/dictionaries.js";

const STORAGE_KEY = "vp-portfolio-lang";

// Arabic (Cairo) + Armenian (Noto Sans Armenian) fonts are kept out of the
// static <head> and injected only when their locale is active, so en/ru
// visitors never download them. Idempotent — fetched at most once.
const SCRIPT_FONTS = {
  ar: "https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap",
  hy: "https://fonts.googleapis.com/css2?family=Noto+Sans+Armenian:wght@400;600;700&display=swap",
};
const ensureScriptFont = (code) => {
  const href = SCRIPT_FONTS[code];
  if (!href) return;
  const id = `vp-font-${code}`;
  if (document.getElementById(id)) return;
  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
};

const resolve = (dict, path) =>
  path.split(".").reduce((node, key) => (node == null ? node : node[key]), dict);

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return DICTIONARIES[saved] ? saved : DEFAULT_LANG;
  });

  const setLang = useCallback((code) => {
    if (!DICTIONARIES[code]) return;
    setLangState(code);
    localStorage.setItem(STORAGE_KEY, code);
  }, []);

  // fetch the script-specific font for ar/hy on first use of that locale
  useEffect(() => {
    ensureScriptFont(lang);
  }, [lang]);

  // t() resolves dot-paths; falls back to English, then to `fallback` (if given),
  // then to the path itself. The `fallback` arg lets components keep canonical
  // English prose in data files and translate it by id (e.g. project / cert text).
  const t = useCallback(
    (path, fallback) => {
      const value = resolve(DICTIONARIES[lang], path);
      if (value !== undefined) return value;
      const enValue = resolve(DICTIONARIES[DEFAULT_LANG], path);
      if (enValue !== undefined) return enValue;
      return fallback !== undefined ? fallback : path;
    },
    [lang],
  );

  const value = useMemo(() => {
    const meta = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];
    return { lang, setLang, t, dir: meta.dir, languages: LANGUAGES };
  }, [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

LanguageProvider.propTypes = { children: PropTypes.node.isRequired };
