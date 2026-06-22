import Reveal from "../../../01_comps/Reveal.jsx";
import Magnetic from "../../../01_comps/Magnetic.jsx";

const Bar_hero = ({ handlers, t }) => {
  const { scrollToContact } = handlers;

  return (
    <section className="vp-bar-hero">
      <div className="vp-bar-hero__vignette" aria-hidden="true" />

      <div className="vp-bar-hero__frame">
        <span className="vp-bar-hero__corner vp-bar-hero__corner--tl" aria-hidden="true" />
        <span className="vp-bar-hero__corner vp-bar-hero__corner--tr" aria-hidden="true" />
        <span className="vp-bar-hero__corner vp-bar-hero__corner--bl" aria-hidden="true" />
        <span className="vp-bar-hero__corner vp-bar-hero__corner--br" aria-hidden="true" />

        <Reveal y={16}>
          <p className="vp-kicker vp-bar-hero__kicker">{t("bar.hero.kicker")}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="vp-bar-hero__title">{t("bar.hero.title")}</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="vp-sub vp-bar-hero__sub">{t("bar.hero.sub")}</p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="vp-btn-row vp-bar-hero__btns">
            <Magnetic>
              <a className="vp-btn vp-btn--gold" href="#vp-bar-menu">
                {t("bar.hero.cta1")}
              </a>
            </Magnetic>
            <Magnetic>
              <button type="button" className="vp-btn vp-btn--ghost" onClick={scrollToContact}>
                {t("bar.hero.cta2")}
              </button>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Bar_hero;
