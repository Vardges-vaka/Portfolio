import Reveal from "../../../01_comps/Reveal.jsx";
import Counter from "../../../01_comps/Counter.jsx";
import WireGlobe from "./WireGlobe.jsx";

const Bar_numbers = ({ states, t }) => {
  const { isDark } = states;
  const numbers = t("bar.numbers.items");

  return (
    <section className="vp-section vp-bar-numbers">
      <div className="vp-container vp-bar-numbers__grid">
        <div>
          <Reveal>
            <p className="vp-kicker">{t("bar.numbers.kicker")}</p>
            <h2 className="vp-h2">{t("bar.numbers.title")}</h2>
          </Reveal>
          <div className="vp-stats vp-stats--bar">
            {numbers.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.07} className="vp-stats__cell">
                <span className="vp-stats__value">
                  <Counter value={s.value} suffix={s.suffix} />
                </span>
                <span className="vp-stats__label">{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={0.2} className="vp-bar-numbers__globe-wrap">
          <div className="vp-bar-numbers__globe">
            <WireGlobe
              dotRGB={isDark ? "214,200,170" : "90,80,60"}
              accent={isDark ? "#e9a23b" : "#a4650e"}
            />
          </div>
          <p className="vp-bar-numbers__note">{t("bar.numbers.globeNote")}</p>
        </Reveal>
      </div>
    </section>
  );
};

export default Bar_numbers;
