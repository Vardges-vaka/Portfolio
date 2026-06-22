import { ShieldCheck } from "lucide-react";
import Reveal from "../../../01_comps/Reveal.jsx";
import TiltCard from "../../../01_comps/TiltCard.jsx";
import SectionAtmosphere from "../../../01_comps/fx/SectionAtmosphere.jsx";
import { SECURITY_ICONS } from "../04__tech_const/_tech_const.index.js";

const Tech_security = ({ t }) => {
  const securityCards = t("tech.security.cards");

  return (
    <section className="vp-section vp-tech-security">
      <SectionAtmosphere kind="grid" />
      <div className="vp-container">
        <Reveal>
          <p className="vp-kicker">{t("tech.security.kicker")}</p>
          <h2 className="vp-h2">{t("tech.security.title")}</h2>
          <p className="vp-sub">{t("tech.security.sub")}</p>
        </Reveal>
        <div className="vp-tech-security__grid">
          {securityCards.map((c, i) => {
            const Icon = SECURITY_ICONS[i] ?? ShieldCheck;
            return (
              <Reveal key={c.title} delay={i * 0.08}>
                <TiltCard className="vp-tech-security__card" max={6}>
                  <span className="vp-icon-pill vp-icon-pill--lg">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tech_security;
