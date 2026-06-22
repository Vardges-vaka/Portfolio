import { ArrowRight } from "lucide-react";
import Reveal from "../../../01_comps/Reveal.jsx";
import Magnetic from "../../../01_comps/Magnetic.jsx";

const Tech_cta = ({ handlers, t }) => {
  const { scrollToContact } = handlers;

  return (
    <section className="vp-section vp-cta-band vp-cta-band--tech">
      <div className="vp-container vp-cta-band__inner">
        <Reveal>
          <h2 className="vp-cta-band__title">{t("tech.cta.title")}</h2>
          <p className="vp-cta-band__sub">{t("tech.cta.sub")}</p>
        </Reveal>
        <Reveal delay={0.12}>
          <Magnetic strength={0.25}>
            <button type="button" className="vp-btn vp-btn--invert" onClick={scrollToContact}>
              {t("tech.cta.button")}
              <ArrowRight size={16} className="vp-arrow" aria-hidden="true" />
            </button>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
};

export default Tech_cta;
