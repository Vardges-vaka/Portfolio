import Reveal from "../../../01_comps/Reveal.jsx";
import AsciiField from "../../../01_comps/fx/AsciiField.jsx";
import ProjectsGrid from "./ProjectsGrid.jsx";

const Tech_projects = ({ states, t }) => {
  const { isDark, projects } = states;

  return (
    <section className="vp-section vp-tech-projects" id="vp-projects">
      <AsciiField color={isDark ? "#38e1c8" : "#0b8d7b"} className="vp-ascii--top" />
      <div className="vp-container">
        <Reveal>
          <p className="vp-kicker">{t("tech.projects.kicker")}</p>
          <h2 className="vp-h2">{t("tech.projects.title")}</h2>
          <p className="vp-sub">{t("tech.projects.sub")}</p>
          <p className="vp-sample-note">
            <span className="vp-sample-note__dot" aria-hidden="true" />
            {t("tech.projects.sampleNote")}
          </p>
        </Reveal>
        <ProjectsGrid projects={projects} step={3} />
      </div>
    </section>
  );
};

export default Tech_projects;
