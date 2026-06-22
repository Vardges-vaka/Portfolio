import { AnimatePresence, motion as Motion } from "framer-motion";
import { Network, ChevronDown, ChevronUp } from "lucide-react";
import Reveal from "../../../01_comps/Reveal.jsx";
import LifeMap from "./LifeMap.jsx";

const Home_map = ({ states, handlers, t }) => {
  const { showMap } = states;
  const { toggleMap } = handlers;

  return (
    <section className="vp-section vp-home-map">
      <div className="vp-container">
        <Reveal>
          <p className="vp-kicker">{t("lifemap.kicker")}</p>
          <h2 className="vp-h2">{t("lifemap.title")}</h2>
          <p className="vp-sub">{t("lifemap.sub")}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <button
            type="button"
            className="vp-btn vp-map-toggle"
            aria-expanded={showMap}
            onClick={toggleMap}
          >
            <Network size={16} aria-hidden="true" />
            {showMap ? t("lifemap.hide") : t("lifemap.show")}
            {showMap ? <ChevronUp size={15} aria-hidden="true" /> : <ChevronDown size={15} aria-hidden="true" />}
          </button>
        </Reveal>
      </div>
      <AnimatePresence initial={false}>
        {showMap && (
          <Motion.div
            key="map"
            className="vp-home-map__reveal"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <LifeMap />
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Home_map;
