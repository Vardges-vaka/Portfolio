import Reveal from "../../../01_comps/Reveal.jsx";
import TiltCard from "../../../01_comps/TiltCard.jsx";
import Media from "../../../01_comps/Media.jsx";

const Home_intro = ({ t }) => {
  const badges = t("home.intro.badges");

  return (
    <section className="vp-section vp-home-intro">
      <div className="vp-container vp-home-intro__grid">
        <div className="vp-home-intro__text">
          <Reveal>
            <p className="vp-kicker">{t("home.intro.kicker")}</p>
            <h2 className="vp-h2">{t("home.intro.title")}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="vp-sub">{t("home.intro.p1")}</p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="vp-sub">{t("home.intro.p2")}</p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="vp-sub vp-home-intro__punch">{t("home.intro.p3")}</p>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="vp-home-intro__badges">
              {badges.map((b) => (
                <span className="vp-chip" key={b}>
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="vp-home-intro__visual-wrap">
          <TiltCard className="vp-home-intro__visual" max={10}>
            <div className="vp-monogram">
              <div className="vp-monogram__ring" aria-hidden="true" />
              <div className="vp-monogram__ring vp-monogram__ring--2" aria-hidden="true" />
              <Media
                assetId="ASSET-H1"
                type="image"
                label="Portrait — Vardges Petrosyan"
                aspect="4 / 5"
                className="vp-monogram__portrait"
              />
              <span className="vp-monogram__caption">{t("meta.role")}</span>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
};

export default Home_intro;
