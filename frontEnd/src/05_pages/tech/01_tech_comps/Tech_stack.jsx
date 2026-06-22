import { ChevronRight, Code2 } from "lucide-react";
import Reveal from "../../../01_comps/Reveal.jsx";
import TiltCard from "../../../01_comps/TiltCard.jsx";
import { GROUP_ICONS } from "../04__tech_const/_tech_const.index.js";

const Tech_stack = ({ t }) => {
  const groups = t("tech.stack.groups");

  return (
    <section className="vp-section vp-tech-stack">
      <div className="vp-orb vp-orb--c" aria-hidden="true" />
      <div className="vp-container">
        <Reveal>
          <p className="vp-kicker">{t("tech.stack.kicker")}</p>
          <h2 className="vp-h2">{t("tech.stack.title")}</h2>
          <p className="vp-sub">{t("tech.stack.sub")}</p>
        </Reveal>
        <div className="vp-tech-stack__grid">
          {groups.map((g, gi) => {
            const Icon = GROUP_ICONS[gi] ?? Code2;
            return (
              <Reveal key={g.name} delay={gi * 0.08}>
                <TiltCard className="vp-tech-stack__card" max={6}>
                  <div className="vp-tech-stack__head">
                    <span className="vp-icon-pill">
                      <Icon size={17} aria-hidden="true" />
                    </span>
                    <h3>{g.name}</h3>
                  </div>
                  <ul className="vp-tech-stack__list">
                    {g.items.map((item) => (
                      <li key={item}>
                        <ChevronRight size={13} className="vp-arrow" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tech_stack;
