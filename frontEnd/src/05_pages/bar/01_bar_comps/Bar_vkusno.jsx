import { Check } from "lucide-react";
import Reveal from "../../../01_comps/Reveal.jsx";
import { AGGREGATORS } from "../04__bar_const/_bar_const.index.js";

const Bar_vkusno = ({ t }) => {
  const vkusnoPoints = t("bar.vkusno.points");

  return (
    <section className="vp-section vp-bar-vkusno">
      <div className="vp-container vp-bar-vkusno__panel">
        <div>
          <Reveal>
            <p className="vp-kicker">{t("bar.vkusno.kicker")}</p>
            <h2 className="vp-h2">{t("bar.vkusno.title")}</h2>
            <p className="vp-bar-vkusno__role">{t("bar.vkusno.role")}</p>
            <p className="vp-sub">{t("bar.vkusno.desc")}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="vp-bar-vkusno__chips">
              {AGGREGATORS.map((a) => (
                <span className="vp-chip vp-chip--gold" key={a}>
                  {a}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="vp-bar-vkusno__points">
          {vkusnoPoints.map((p, i) => (
            <Reveal key={p} delay={0.08 + i * 0.06}>
              <p className="vp-bar-vkusno__point">
                <Check size={15} aria-hidden="true" />
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bar_vkusno;
