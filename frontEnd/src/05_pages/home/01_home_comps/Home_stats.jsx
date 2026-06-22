import Reveal from "../../../01_comps/Reveal.jsx";
import Counter from "../../../01_comps/Counter.jsx";

const Home_stats = ({ t }) => {
  const stats = t("home.stats.items");

  return (
    <section className="vp-section vp-home-stats">
      <div className="vp-container">
        <Reveal>
          <p className="vp-kicker">{t("home.stats.kicker")}</p>
          <h2 className="vp-h2">{t("home.stats.title")}</h2>
        </Reveal>
        <div className="vp-stats">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07} className="vp-stats__cell">
              <span className="vp-stats__value">
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <span className="vp-stats__label">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home_stats;
