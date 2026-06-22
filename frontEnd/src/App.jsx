import { useEffect, useRef } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import { MotionConfig } from "framer-motion";

// base design system first — page stylesheets must be able to override it
import "./07_styles/portfolio.css";
import "./07_styles/fx.css";
import "./07_styles/responsive.css";

import {
  ThemeProvider,
  LanguageProvider,
  ModeProvider,
  DeviceProvider,
  useTheme,
  useLang,
  useMode,
  useDevice,
} from "./03_context/_context.index.js";

import Navbar from "./01_comps/Navbar.jsx";
import Footer from "./01_comps/Footer.jsx";
import SkipLink from "./01_comps/SkipLink.jsx";
import SceneBackground from "./01_comps/fx/SceneBackground.jsx";
import ScrollProgress from "./01_comps/fx/ScrollProgress.jsx";
import { PortfolioRoutes } from "./06_routes/_routes.index.js";
import { useSeo } from "./04_hlprs/seo.js";

const variantForPath = (pathname) => {
  if (pathname.startsWith("/tech") || pathname.startsWith("/lab")) return "tech";
  if (pathname.startsWith("/bar")) return "bar";
  return "home";
};

// The app shell: theme/lang/mode/device wiring, fixed scene + chrome, the route
// table, and the per-route SEO + a11y behaviour. Lives inside the providers.
const Shell = () => {
  const { theme } = useTheme();
  const { lang, dir } = useLang();
  const { mode } = useMode();
  const { device } = useDevice();
  const location = useLocation();
  const variant = variantForPath(location.pathname);
  const liveRef = useRef(null);
  const firstRender = useRef(true);

  // sync <html lang/dir> so assistive tech and the browser read the page right
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  // SEO layer — updates title/meta/canonical per route; returns the active record
  const seo = useSeo(location.pathname);

  // per-route shell behaviour: scroll up, move focus to main, announce the page
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (firstRender.current) {
      firstRender.current = false; // don't steal focus / announce on initial load
      return;
    }
    document.getElementById("vp-main")?.focus?.({ preventScroll: true });
    if (liveRef.current) liveRef.current.textContent = seo.title;
  }, [location.pathname, seo.title]);

  return (
    <MotionConfig reducedMotion="user">
      <div
        className="vp-root"
        data-theme={theme}
        data-mode={mode}
        data-device={device}
        dir={dir}
        lang={lang}>
        <SkipLink />
        <SceneBackground variant={variant} />
        <ScrollProgress />
        <div className="vp-grain" aria-hidden="true" />
        <Navbar />
        <PortfolioRoutes />
        <Footer />
        <div ref={liveRef} className="vp-sr-only" role="status" aria-live="polite" />
      </div>
    </MotionConfig>
  );
};

const App = () => (
  <BrowserRouter>
    <ThemeProvider>
      <LanguageProvider>
        <ModeProvider>
          <DeviceProvider>
            <Shell />
          </DeviceProvider>
        </ModeProvider>
      </LanguageProvider>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
