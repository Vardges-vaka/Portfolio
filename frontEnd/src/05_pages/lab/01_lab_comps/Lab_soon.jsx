import { Sparkles } from "lucide-react";
import Reveal from "../../../01_comps/Reveal.jsx";

const Lab_soon = ({ t }) => (
  <section className="vp-section vp-lab-soon">
    <div className="vp-container">
      <Reveal>
        <div className="vp-lab-soon__card">
          <span className="vp-icon-pill vp-icon-pill--lg">
            <Sparkles size={20} aria-hidden="true" />
          </span>
          <h2 className="vp-h2">{t("lab.soon.title")}</h2>
          <p className="vp-sub">{t("lab.soon.sub")}</p>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Lab_soon;
