import { motion as Motion } from "framer-motion";
import Reveal from "../../../01_comps/Reveal.jsx";
import SectionAtmosphere from "../../../01_comps/fx/SectionAtmosphere.jsx";

const Home_timeline = ({ t }) => {
  const timeline = t("home.timeline.items");
  const legend = t("home.timeline.legend");

  return (
    <section className="vp-section vp-home-timeline">
      <SectionAtmosphere kind="topo" />
      <div className="vp-container">
        <Reveal>
          <p className="vp-kicker">{t("home.timeline.kicker")}</p>
          <h2 className="vp-h2">{t("home.timeline.title")}</h2>
          <p className="vp-sub">{t("home.timeline.sub")}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="vp-tl-legend">
            <span className="vp-tl-legend__item vp-tl-legend__item--bar">{legend.bar}</span>
            <span className="vp-tl-legend__item vp-tl-legend__item--tech">{legend.tech}</span>
            <span className="vp-tl-legend__item vp-tl-legend__item--hybrid">{legend.hybrid}</span>
          </div>
        </Reveal>

        <div className="vp-recipe">
          <div className="vp-recipe__rail" aria-hidden="true" />
          {timeline.map((item, i) => (
            <Motion.div
              key={`${item.year}-${item.title}`}
              className={`vp-recipe__layer vp-recipe__layer--${item.type}`}
              initial={{ opacity: 0, y: 26, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="vp-recipe__tab">
                <span className="vp-recipe__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="vp-recipe__year">{item.year}</span>
                <span className="vp-recipe__flow" aria-hidden="true" />
              </div>
              <div className="vp-recipe__body">
                <h3 className="vp-recipe__title">{item.title}</h3>
                <p className="vp-recipe__place">{item.place}</p>
                <p className="vp-recipe__text">{item.text}</p>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home_timeline;
