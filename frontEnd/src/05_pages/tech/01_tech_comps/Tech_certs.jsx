import Reveal from "../../../01_comps/Reveal.jsx";
import SectionAtmosphere from "../../../01_comps/fx/SectionAtmosphere.jsx";
import CertWall from "../../../01_comps/CertWall.jsx";

const Tech_certs = ({ states, t }) => {
  const { certs, certDesc } = states;

  return (
    <section className="vp-section vp-tech-certs">
      <SectionAtmosphere kind="dots" />
      <div className="vp-container">
        <Reveal>
          <p className="vp-kicker">{t("tech.certs.kicker")}</p>
          <h2 className="vp-h2">{t("tech.certs.title")}</h2>
          <p className="vp-sub">{t("tech.certs.sub")}</p>
        </Reveal>
        <CertWall
          certs={certs}
          viewLabel={t("tech.certs.view")}
          viewPathLabel={t("tech.certs.viewPath")}
          plannedLabel={t("tech.certs.planned")}
          labels={t("certCats")}
          variant="tech"
          step={8}
          showAllLabel={t("tech.certs.showAll")}
          showLessLabel={t("tech.certs.showLess")}
          loadMoreLabel={t("tech.certs.loadMore")}
          descFor={(c) => t(`certInfo.${c.id}.desc`, certDesc[c.id])}
          flipLabel={t("tech.certs.flip")}
          backLabel={t("tech.certs.back")}
        />
      </div>
    </section>
  );
};

export default Tech_certs;
