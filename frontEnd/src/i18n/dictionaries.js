// Translations are split into per-page / per-shared-area JSON files under
// i18n/<lang>/ (home, tech, bar, lab, header, footer, contact, common,
// notFound). Each file keeps full key paths, and we deep-merge every file for a
// language into one dictionary — so t("home.hero.name") still resolves against
// the whole dictionary regardless of which file the key lives in.

const isObj = (v) => v && typeof v === "object" && !Array.isArray(v);
const deepMerge = (base, extra) => {
  if (!isObj(base) || !isObj(extra)) return extra === undefined ? base : extra;
  const out = { ...base };
  for (const key of Object.keys(extra)) {
    out[key] = isObj(base[key]) && isObj(extra[key]) ? deepMerge(base[key], extra[key]) : extra[key];
  }
  return out;
};

// Eager glob: every language JSON is bundled at build time. Each top-level key
// lives in exactly one file, so merge order never matters.
const modules = import.meta.glob("./{en,ru,hy,ar}/*.json", { eager: true });

const buildDictionaries = () => {
  const dicts = { en: {}, ru: {}, hy: {}, ar: {} };
  for (const [path, mod] of Object.entries(modules)) {
    const lang = path.split("/")[1]; // "./en/home.json" -> "en"
    if (dicts[lang]) dicts[lang] = deepMerge(dicts[lang], mod.default ?? mod);
  }
  return dicts;
};

export const DICTIONARIES = buildDictionaries();

export const LANGUAGES = [
  { code: "en", label: "English", short: "EN", dir: "ltr" },
  { code: "ru", label: "Русский", short: "RU", dir: "ltr" },
  { code: "hy", label: "Հայերեն", short: "HY", dir: "ltr" },
  { code: "ar", label: "العربية", short: "AR", dir: "rtl" },
];

export const DEFAULT_LANG = "en";
