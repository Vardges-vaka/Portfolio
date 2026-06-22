import Reveal from "../../../01_comps/Reveal.jsx";
import SkillsGraphPanel from "./SkillsGraphPanel.jsx";

const Tech_skills = ({ states, t }) => {
  const { radarData } = states;

  return (
    <section className="vp-section vp-skills-graph" id="vp-skills">
      <div className="vp-container">
        <Reveal>
          <p className="vp-kicker">{t("skills.connect.kicker")}</p>
          <h2 className="vp-h2">{t("skills.connect.title")}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <SkillsGraphPanel variant="tech" radarData={radarData} />
        </Reveal>
      </div>
    </section>
  );
};

export default Tech_skills;
