import Reveal from "../../../01_comps/Reveal.jsx";

const Bar_menu = ({ t }) => {
  const courses = t("bar.menu.courses");

  return (
    <section className="vp-section vp-bar-menu" id="vp-bar-menu">
      <div className="vp-container">
        <Reveal>
          <p className="vp-kicker">{t("bar.menu.kicker")}</p>
          <h2 className="vp-h2 vp-h2--serif">{t("bar.menu.title")}</h2>
          <p className="vp-sub">{t("bar.menu.sub")}</p>
        </Reveal>

        <div className="vp-menu">
          {courses.map((c, i) => (
            <Reveal key={`${c.course}-${c.year}`} delay={Math.min(i * 0.05, 0.25)}>
              <article className="vp-menu__row">
                <div className="vp-menu__head">
                  <span className="vp-menu__course">
                    {String(i + 1).padStart(2, "0")} · {c.course}
                  </span>
                  <span className="vp-menu__leader" aria-hidden="true" />
                  <span className="vp-menu__year">{c.year}</span>
                </div>
                <h3 className="vp-menu__role">{c.role}</h3>
                <p className="vp-menu__venue">
                  {c.venue} — <span>{c.city}</span>
                </p>
                <p className="vp-menu__text">{c.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bar_menu;
