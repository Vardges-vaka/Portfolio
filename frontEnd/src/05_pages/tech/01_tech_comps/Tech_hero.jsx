import Reveal from "../../../01_comps/Reveal.jsx";
import Magnetic from "../../../01_comps/Magnetic.jsx";
import Terminal from "./Terminal.jsx";
import { TECH_TICKER } from "../04__tech_const/_tech_const.index.js";

const Tech_hero = ({ handlers, t }) => {
  const { scrollToContact } = handlers;
  const heroTitle = t("tech.hero.title");

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="vp-tech-hero">
        <div className="vp-tech-hero__floor" aria-hidden="true" />
        <div className="vp-orb vp-orb--a" aria-hidden="true" />
        <div className="vp-orb vp-orb--b" aria-hidden="true" />
        <div className="vp-tech-hero__scrim" aria-hidden="true" />
        <div className="vp-scanlines" aria-hidden="true" />

        <div className="vp-container vp-tech-hero__grid">
          <div className="vp-tech-hero__text">
            <Reveal y={18}>
              <p className="vp-kicker vp-kicker--mono">{t("tech.hero.kicker")}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="vp-h1 vp-glitch" data-text={heroTitle}>
                {heroTitle}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="vp-sub">{t("tech.hero.sub")}</p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="vp-open-badge">
                <span className="vp-open-badge__pulse" aria-hidden="true" />
                {t("tech.hero.open")}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="vp-btn-row">
                <Magnetic>
                  <a className="vp-btn vp-btn--primary" href="#vp-projects">
                    {t("tech.hero.ctaProject")}
                  </a>
                </Magnetic>
                <Magnetic>
                  <button type="button" className="vp-btn vp-btn--ghost" onClick={scrollToContact}>
                    {t("tech.hero.ctaContact")}
                  </button>
                </Magnetic>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.25} className="vp-tech-hero__term">
            <Terminal />
          </Reveal>
        </div>
      </section>

      {/* ============ STACK TICKER ============ */}
      <div className="vp-marquee vp-marquee--tech" aria-hidden="true">
        <div className="vp-marquee__track">
          {[0, 1].map((dup) => (
            <div className="vp-marquee__group" key={dup}>
              {TECH_TICKER.map((item) => (
                <span className="vp-marquee__item" key={`${dup}-${item}`}>
                  {item}
                  <span className="vp-marquee__star">▮</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tech_hero;
