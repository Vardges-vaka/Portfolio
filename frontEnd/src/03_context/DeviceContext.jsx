import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { DeviceContext } from "./contexts.js";

// width breakpoints (px). < 768 phone · 768–1023 tablet · >= 1024 desktop.
const MOBILE_MAX = 767;
const TABLET_MAX = 1023;

const read = () => {
  const width = typeof window !== "undefined" ? window.innerWidth : 1280;
  const height = typeof window !== "undefined" ? window.innerHeight : 800;
  const device = width <= MOBILE_MAX ? "mobile" : width <= TABLET_MAX ? "tablet" : "desktop";
  return { width, height, device };
};

/**
 * Viewport / device context. Tracks width/height (rAF-throttled) and exposes a
 * coarse device class so the UI can adapt — e.g. the shell sets data-device on
 * the root, which the stylesheet uses to zoom the whole page out a touch on
 * phones.
 */
export const DeviceProvider = ({ children }) => {
  const [state, setState] = useState(read);

  useEffect(() => {
    let raf = 0;
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setState(read()));
    };
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onResize);
    onResize(); // sync after mount (covers SSR-default / first paint)
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);

  const value = useMemo(
    () => ({
      ...state,
      isMobile: state.device === "mobile",
      isTablet: state.device === "tablet",
      isDesktop: state.device === "desktop",
    }),
    [state],
  );

  return <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>;
};

DeviceProvider.propTypes = { children: PropTypes.node.isRequired };
