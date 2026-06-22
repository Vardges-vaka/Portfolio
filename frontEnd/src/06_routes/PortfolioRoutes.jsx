import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion as Motion } from "framer-motion";
import PropTypes from "prop-types";
import { isLabsEnabled } from "../02_config/_config.index.js";

// route-level code-splitting — each page is its own chunk, loaded on demand.
// The import thunks are reused below to prefetch the other pages once idle.
const load = {
  home: () => import("../05_pages/home/Home.jsx"),
  tech: () => import("../05_pages/tech/Tech.jsx"),
  bar: () => import("../05_pages/bar/Bar.jsx"),
  lab: () => import("../05_pages/lab/Lab.jsx"),
  notFound: () => import("../05_pages/notFound/NotFound.jsx"),
};

const HomePage = lazy(load.home);
const TechPage = lazy(load.tech);
const BarPage = lazy(load.bar);
const LabPage = lazy(load.lab);
const NotFoundPage = lazy(load.notFound);

// Route-level enter/exit transition.
const PageFade = ({ children }) => (
  <Motion.div
    className="vp-route"
    initial={{ opacity: 0, y: 26 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -14 }}
    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
    {children}
  </Motion.div>
);

PageFade.propTypes = { children: PropTypes.node.isRequired };

// The animated, code-split route table. The /lab route only exists when the
// Lab feature is enabled (otherwise it falls through to the 404).
const PortfolioRoutes = () => {
  const location = useLocation();

  // Once the first page is interactive, prefetch the other route chunks during
  // idle time. This makes subsequent navigations instant — the <Suspense>
  // fallback then almost never shows, so there's no layout flash between pages.
  useEffect(() => {
    const requestIdle = window.requestIdleCallback ?? ((cb) => setTimeout(cb, 400));
    const cancelIdle = window.cancelIdleCallback ?? clearTimeout;
    const id = requestIdle(() => {
      Object.values(load).forEach((fn) => {
        fn().catch(() => {}); // ignore prefetch failures (e.g. offline)
      });
    });
    return () => cancelIdle(id);
  }, []);

  return (
    <Suspense fallback={<div className="vp-route-loading" aria-hidden="true" />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageFade><HomePage /></PageFade>} />
          <Route path="tech" element={<PageFade><TechPage /></PageFade>} />
          <Route path="bar" element={<PageFade><BarPage /></PageFade>} />
          {isLabsEnabled && (
            <Route path="lab" element={<PageFade><LabPage /></PageFade>} />
          )}
          <Route path="*" element={<PageFade><NotFoundPage /></PageFade>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default PortfolioRoutes;
