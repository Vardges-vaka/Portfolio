import Reveal from "../../../01_comps/Reveal.jsx";
import { FLOAT_ICONS } from "../04__tech_const/_tech_const.index.js";

const Tech_about = ({ t }) => (
  <section className="vp-section vp-tech-about">
    <div className="vp-float-field" aria-hidden="true">
      {FLOAT_ICONS.map((f, i) => (
        <span
          key={i}
          className="vp-float-ico"
          style={{ "--fx": f.x, "--fy": f.y, "--fd": f.d, "--ft": f.t }}
        >
          <f.Icon size={22} />
        </span>
      ))}
    </div>
    <div className="vp-container vp-tech-about__grid">
      <Reveal>
        <p className="vp-kicker">{t("tech.about.kicker")}</p>
        <h2 className="vp-h2">{t("tech.about.title")}</h2>
      </Reveal>
      <div className="vp-tech-about__paras">
        {["p1", "p2", "p3"].map((k, i) => (
          <Reveal key={k} delay={0.08 + i * 0.08}>
            <p className="vp-sub vp-tech-about__para">
              <span className="vp-tech-about__index">0{i + 1}</span>
              {t(`tech.about.${k}`)}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Tech_about;
