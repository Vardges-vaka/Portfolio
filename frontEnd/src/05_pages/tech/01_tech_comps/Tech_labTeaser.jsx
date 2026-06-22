import { Link } from "react-router-dom";
import { FlaskConical, ArrowRight } from "lucide-react";
import Reveal from "../../../01_comps/Reveal.jsx";

const Tech_labTeaser = ({ t }) => (
  <section className="vp-section vp-lab-teaser-sec">
    <div className="vp-container">
      <Reveal>
        <Link to="/lab" className="vp-lab-teaser">
          <span className="vp-lab-teaser__icon" aria-hidden="true">
            <FlaskConical size={24} />
          </span>
          <div className="vp-lab-teaser__text">
            <p className="vp-kicker">{t("tech.lab.kicker")}</p>
            <h2 className="vp-lab-teaser__title">{t("tech.lab.title")}</h2>
            <p className="vp-sub">{t("tech.lab.sub")}</p>
          </div>
          <span className="vp-lab-teaser__cta">
            {t("tech.lab.cta")}
            <ArrowRight size={16} className="vp-arrow" aria-hidden="true" />
          </span>
        </Link>
      </Reveal>
    </div>
  </section>
);

export default Tech_labTeaser;
