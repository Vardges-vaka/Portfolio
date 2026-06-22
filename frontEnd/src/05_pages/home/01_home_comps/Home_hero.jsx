import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { ArrowRight, Code2, Martini, ChevronDown } from "lucide-react";
import Prism3D from "./Prism3D.jsx";
import NowPanel from "./NowPanel.jsx";

const Home_hero = ({ t }) => {
  const name = t("home.hero.name");
  const words = name.split(" ");
  const marquee = t("home.marquee");

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="vp-home-hero">
        <div className="vp-home-hero__glow vp-home-hero__glow--a" aria-hidden="true" />
        <div className="vp-home-hero__glow vp-home-hero__glow--b" aria-hidden="true" />

        <div className="vp-home-hero__content">
          <Motion.div
            initial={{ opacity: 0, y: 18, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Prism3D techLabel={t("home.hero.techWord")} barLabel={t("home.hero.barWord")} />
          </Motion.div>

          <Motion.p
            className="vp-kicker vp-home-hero__kicker"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            {t("home.hero.kicker")}
          </Motion.p>

          <h1 className="vp-home-hero__name" aria-label={name}>
            {words.map((word, wi) => (
              <span className="vp-home-hero__word-wrap" key={`${word}-${wi}`}>
                <Motion.span
                  className="vp-home-hero__word"
                  initial={{ y: "110%", rotate: 4 }}
                  animate={{ y: "0%", rotate: 0 }}
                  transition={{ delay: 0.25 + wi * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </Motion.span>
              </span>
            ))}
          </h1>

          <Motion.p
            className="vp-home-hero__tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.8 }}
          >
            {t("home.hero.tagline")}
          </Motion.p>

          <div className="vp-home-hero__doors">
            <Motion.div
              className="vp-door-wrap vp-door-wrap--tech"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to="/tech" className="vp-door vp-door--tech">
                <span className="vp-door__icon">
                  <Code2 size={22} aria-hidden="true" />
                </span>
                <span className="vp-door__word">{t("home.hero.techWord")}</span>
                <span className="vp-door__sub">{t("home.hero.techSub")}</span>
                <span className="vp-door__cta">
                  {t("home.hero.enterTech")}
                  <ArrowRight size={15} className="vp-arrow" aria-hidden="true" />
                </span>
              </Link>
            </Motion.div>

            <Motion.div
              className="vp-door-wrap vp-door-wrap--bar"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to="/bar" className="vp-door vp-door--bar">
                <span className="vp-door__icon">
                  <Martini size={22} aria-hidden="true" />
                </span>
                <span className="vp-door__word">{t("home.hero.barWord")}</span>
                <span className="vp-door__sub">{t("home.hero.barSub")}</span>
                <span className="vp-door__cta">
                  {t("home.hero.enterBar")}
                  <ArrowRight size={15} className="vp-arrow" aria-hidden="true" />
                </span>
              </Link>
            </Motion.div>
          </div>
        </div>

        <Motion.div
          className="vp-home-hero__bottom"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.45, duration: 0.9 }}
        >
          <NowPanel />
          <div className="vp-home-hero__scroll">
            <span>{t("home.hero.scroll")}</span>
            <ChevronDown size={16} aria-hidden="true" />
          </div>
        </Motion.div>
      </section>

      {/* ============ MARQUEE ============ */}
      <div className="vp-marquee" aria-hidden="true">
        <div className="vp-marquee__track">
          {[0, 1].map((dup) => (
            <div className="vp-marquee__group" key={dup}>
              {marquee.map((item) => (
                <span className="vp-marquee__item" key={`${dup}-${item}`}>
                  {item}
                  <span className="vp-marquee__star">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home_hero;
