import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../../../01_comps/Reveal.jsx";
import AsciiField from "../../../01_comps/fx/AsciiField.jsx";

const Home_doors = ({ states, t }) => {
  const { isDark } = states;

  return (
    <section className="vp-section vp-home-doors">
      <AsciiField color={isDark ? "#38e1c8" : "#0b8d7b"} />
      <div className="vp-container">
        <Reveal>
          <p className="vp-kicker">{t("home.doors.kicker")}</p>
          <h2 className="vp-h2">{t("home.doors.title")}</h2>
        </Reveal>
        <div className="vp-home-doors__grid">
          <Reveal delay={0.08}>
            <Link to="/tech" className="vp-bigdoor vp-bigdoor--tech">
              <span className="vp-bigdoor__num">01</span>
              <h3 className="vp-bigdoor__title">{t("home.doors.tech.title")}</h3>
              <p className="vp-bigdoor__sub">{t("home.doors.tech.sub")}</p>
              <span className="vp-bigdoor__cta">
                {t("home.doors.tech.cta")}
                <ArrowRight size={16} className="vp-arrow" aria-hidden="true" />
              </span>
            </Link>
          </Reveal>
          <Reveal delay={0.16}>
            <Link to="/bar" className="vp-bigdoor vp-bigdoor--bar">
              <span className="vp-bigdoor__num">02</span>
              <h3 className="vp-bigdoor__title">{t("home.doors.bar.title")}</h3>
              <p className="vp-bigdoor__sub">{t("home.doors.bar.sub")}</p>
              <span className="vp-bigdoor__cta">
                {t("home.doors.bar.cta")}
                <ArrowRight size={16} className="vp-arrow" aria-hidden="true" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Home_doors;
