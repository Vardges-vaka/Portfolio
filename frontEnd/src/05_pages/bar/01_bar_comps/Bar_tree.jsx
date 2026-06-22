import { Martini } from "lucide-react";
import Reveal from "../../../01_comps/Reveal.jsx";
import TiltCard from "../../../01_comps/TiltCard.jsx";
import SectionAtmosphere from "../../../01_comps/fx/SectionAtmosphere.jsx";
import { SERVICE_ICONS } from "../04__bar_const/_bar_const.index.js";

const Bar_tree = ({ t }) => {
  const services = t("bar.tree.services");

  return (
    <section className="vp-section vp-bar-tree">
      <SectionAtmosphere kind="glow" />
      <div className="vp-container">
        <Reveal>
          <p className="vp-kicker">{t("bar.tree.kicker")}</p>
          <h2 className="vp-h2 vp-h2--serif">{t("bar.tree.title")}</h2>
          <p className="vp-sub vp-bar-tree__desc">{t("bar.tree.desc")}</p>
        </Reveal>
        <div className="vp-bar-tree__grid">
          {services.map((s, i) => {
            const Icon = SERVICE_ICONS[i] ?? Martini;
            return (
              <Reveal key={s.title} delay={Math.min(i * 0.07, 0.35)}>
                <TiltCard className="vp-bar-tree__card" max={6}>
                  <span className="vp-icon-pill vp-icon-pill--gold">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Bar_tree;
