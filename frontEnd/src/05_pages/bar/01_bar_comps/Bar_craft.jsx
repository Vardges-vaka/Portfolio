import Reveal from "../../../01_comps/Reveal.jsx";
import SkillsRadar from "../../../01_comps/SkillsRadar.jsx";
import KnowledgeGraph from "../../../01_comps/interactive/KnowledgeGraph.jsx";

const Bar_craft = ({ states, t }) => {
  const { skills } = states;

  return (
    <section className="vp-section vp-skills-graph vp-skills-graph--bar" id="vp-bar-craft">
      <div className="vp-container">
        <Reveal>
          <p className="vp-kicker">{t("bar.craft.kicker")}</p>
          <h2 className="vp-h2 vp-h2--serif">{t("bar.craft.title")}</h2>
          <p className="vp-sub">{t("bar.craft.sub")}</p>
        </Reveal>

        <div className="vp-skills-graph__top">
          <Reveal delay={0.1} className="vp-skills-graph__radar">
            <SkillsRadar data={skills.bar} variant="bar" />
          </Reveal>
          <Reveal delay={0.16} className="vp-skills-graph__aside">
            <h3 className="vp-skills-graph__aside-title">{t("bar.craft.radarTitle")}</h3>
            <p className="vp-sub">{t("bar.craft.radarNote")}</p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1} className="vp-graph-sec__wrap">
        <div className="vp-container vp-graph-sec__intro">
          <p className="vp-kicker">{t("graph.kicker")}</p>
          <h3 className="vp-graph-sec__title">{t("graph.title")}</h3>
          <p className="vp-sub">{t("bar.craft.graphSub")}</p>
        </div>
        <KnowledgeGraph variant="bar" />
      </Reveal>
    </section>
  );
};

export default Bar_craft;
