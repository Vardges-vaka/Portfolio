import Reveal from "../../../01_comps/Reveal.jsx";
import KnowledgeGraph from "../../../01_comps/interactive/LazyKnowledgeGraph.jsx";

const Home_universe = ({ t }) => (
  <section className="vp-section vp-home-universe">
    <div className="vp-container">
      <Reveal>
        <p className="vp-kicker">{t("home.universe.kicker")}</p>
        <h2 className="vp-h2">{t("home.universe.title")}</h2>
        <p className="vp-sub vp-home-universe__sub">{t("home.universe.sub")}</p>
      </Reveal>
      <Reveal delay={0.1}>
        <KnowledgeGraph variant="universe" />
      </Reveal>
      <p className="vp-home-universe__hint">{t("home.universe.hint")}</p>
    </div>
  </section>
);

export default Home_universe;
