import { useTech } from "./02_tech_hooks/useTech.js";
import {
  Tech_hero,
  Tech_about,
  Tech_stack,
  Tech_skills,
  Tech_projects,
  Tech_certs,
  Tech_security,
  Tech_labTeaser,
  Tech_cta,
} from "./01_tech_comps/_tech_comps.index.js";
import ContactSection from "../../01_comps/ContactSection.jsx";
import { isLabsEnabled } from "../../02_config/_config.index.js";

import "./_styles/Tech.css";

const Tech = () => {
  const { childComps } = useTech();
  const { hero, about, stack, skills, projects, certs, security, labTeaser, cta } =
    childComps;

  return (
    <main className="vp-page vp-page--tech Tech" id="vp-main" tabIndex={-1}>
      <Tech_hero
        states={hero.states}
        handlers={hero.handlers}
        childComps={hero.childComps}
        t={hero.t}
      />
      <Tech_about
        states={about.states}
        handlers={about.handlers}
        childComps={about.childComps}
        t={about.t}
      />
      <Tech_stack
        states={stack.states}
        handlers={stack.handlers}
        childComps={stack.childComps}
        t={stack.t}
      />
      <Tech_skills
        states={skills.states}
        handlers={skills.handlers}
        childComps={skills.childComps}
        t={skills.t}
      />
      <Tech_projects
        states={projects.states}
        handlers={projects.handlers}
        childComps={projects.childComps}
        t={projects.t}
      />
      <Tech_certs
        states={certs.states}
        handlers={certs.handlers}
        childComps={certs.childComps}
        t={certs.t}
      />
      <Tech_security
        states={security.states}
        handlers={security.handlers}
        childComps={security.childComps}
        t={security.t}
      />

      {/* lab teaser only renders when the Lab feature is enabled */}
      {isLabsEnabled && (
        <Tech_labTeaser
          states={labTeaser.states}
          handlers={labTeaser.handlers}
          childComps={labTeaser.childComps}
          t={labTeaser.t}
        />
      )}

      <Tech_cta
        states={cta.states}
        handlers={cta.handlers}
        childComps={cta.childComps}
        t={cta.t}
      />

      <ContactSection />
    </main>
  );
};

export default Tech;
