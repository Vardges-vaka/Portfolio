import { useLang } from "../03_context/_context.index.js";

// Keyboard-only "skip to content" link — first focusable element on the page.
const SkipLink = () => {
  const { t } = useLang();
  return (
    <a href="#vp-main" className="vp-skip">
      {t("a11y.skip")}
    </a>
  );
};

export default SkipLink;
