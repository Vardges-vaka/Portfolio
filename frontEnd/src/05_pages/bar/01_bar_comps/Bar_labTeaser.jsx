import { Link } from "react-router-dom";
import { Martini, ArrowRight } from "lucide-react";
import Reveal from "../../../01_comps/Reveal.jsx";

const Bar_labTeaser = ({ t }) => (
  <section className="vp-section vp-lab-teaser-sec">
    <div className="vp-container">
      <Reveal>
        <Link to="/lab" className="vp-lab-teaser vp-lab-teaser--bar">
          <span className="vp-lab-teaser__icon" aria-hidden="true">
            <Martini size={24} />
          </span>
          <div className="vp-lab-teaser__text">
            <p className="vp-kicker">{t("bar.lab.kicker")}</p>
            <h2 className="vp-lab-teaser__title">{t("bar.lab.title")}</h2>
            <p className="vp-sub">{t("bar.lab.sub")}</p>
          </div>
          <span className="vp-lab-teaser__cta">
            {t("bar.lab.cta")}
            <ArrowRight size={16} className="vp-arrow" aria-hidden="true" />
          </span>
        </Link>
      </Reveal>
    </div>
  </section>
);

export default Bar_labTeaser;
