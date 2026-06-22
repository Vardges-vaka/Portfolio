import Reveal from "../../../01_comps/Reveal.jsx";
import CertWall from "../../../01_comps/CertWall.jsx";

const Bar_certs = ({ states, t }) => {
  const { certs } = states;

  return (
    <section className="vp-section vp-bar-certs">
      <div className="vp-container">
        <Reveal>
          <p className="vp-kicker">{t("bar.certs.kicker")}</p>
          <h2 className="vp-h2 vp-h2--serif">{t("bar.certs.title")}</h2>
        </Reveal>
        <CertWall
          certs={certs}
          viewLabel={t("bar.certs.view")}
          labels={t("certCats")}
          variant="bar"
        />
      </div>
    </section>
  );
};

export default Bar_certs;
