import { ArrowRight } from "lucide-react";
import Reveal from "../../../01_comps/Reveal.jsx";
import Magnetic from "../../../01_comps/Magnetic.jsx";

const Bar_cta = ({ handlers, t }) => {
  const { scrollToContact } = handlers;

  return (
    <section className="vp-section vp-cta-band vp-cta-band--bar">
      <div className="vp-container vp-cta-band__inner">
        <Reveal>
          <h2 className="vp-cta-band__title">{t("bar.cta.title")}</h2>
          <p className="vp-cta-band__sub">{t("bar.cta.sub")}</p>
        </Reveal>
        <Reveal delay={0.12}>
          <Magnetic strength={0.25}>
            <button type="button" className="vp-btn vp-btn--invert" onClick={scrollToContact}>
              {t("bar.cta.button")}
              <ArrowRight size={16} className="vp-arrow" aria-hidden="true" />
            </button>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
};

export default Bar_cta;
