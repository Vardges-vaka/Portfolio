import { ArrowLeft, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../../../01_comps/Reveal.jsx";
import Magnetic from "../../../01_comps/Magnetic.jsx";
import SectionAtmosphere from "../../../01_comps/fx/SectionAtmosphere.jsx";

const Lab_hero = ({ t }) => (
  <section className="vp-lab-hero">
    <SectionAtmosphere kind="grid" />
    <div className="vp-orb vp-orb--a" aria-hidden="true" />
    <div className="vp-orb vp-orb--b" aria-hidden="true" />
    <div className="vp-container vp-lab-hero__inner">
      <Reveal y={18}>
        <p className="vp-kicker vp-kicker--mono">
          <FlaskConical size={14} aria-hidden="true" /> {t("lab.hero.kicker")}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h1 className="vp-h1">{t("lab.hero.title")}</h1>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="vp-sub vp-lab-hero__sub">{t("lab.hero.sub")}</p>
      </Reveal>
      <Reveal delay={0.24}>
        <Magnetic>
          <Link className="vp-btn vp-btn--ghost" to="/tech">
            <ArrowLeft size={15} aria-hidden="true" /> {t("lab.back")}
          </Link>
        </Magnetic>
      </Reveal>
    </div>
  </section>
);

export default Lab_hero;
