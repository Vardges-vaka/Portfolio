import { useBar } from "./02_bar_hooks/useBar.js";
import {
  Bar_hero,
  Bar_numbers,
  Bar_menu,
  Bar_craft,
  Bar_tree,
  Bar_labTeaser,
  Bar_vkusno,
  Bar_certs,
  Bar_testimonials,
  Bar_cta,
} from "./01_bar_comps/_bar_comps.index.js";
import ContactSection from "../../01_comps/ContactSection.jsx";
import { isLabsEnabled } from "../../02_config/_config.index.js";

import "./_styles/Bar.css";

const Bar = () => {
  const { childComps } = useBar();
  const { hero, numbers, menu, craft, tree, labTeaser, vkusno, certs, testimonials, cta } =
    childComps;

  return (
    <main className="vp-page vp-page--bar Bar" id="vp-main" tabIndex={-1}>
      <Bar_hero
        states={hero.states}
        handlers={hero.handlers}
        childComps={hero.childComps}
        t={hero.t}
      />
      <Bar_numbers
        states={numbers.states}
        handlers={numbers.handlers}
        childComps={numbers.childComps}
        t={numbers.t}
      />
      <Bar_menu
        states={menu.states}
        handlers={menu.handlers}
        childComps={menu.childComps}
        t={menu.t}
      />
      <Bar_craft
        states={craft.states}
        handlers={craft.handlers}
        childComps={craft.childComps}
        t={craft.t}
      />
      <Bar_tree
        states={tree.states}
        handlers={tree.handlers}
        childComps={tree.childComps}
        t={tree.t}
      />

      {/* lab teaser only renders when the Lab feature is enabled */}
      {isLabsEnabled && (
        <Bar_labTeaser
          states={labTeaser.states}
          handlers={labTeaser.handlers}
          childComps={labTeaser.childComps}
          t={labTeaser.t}
        />
      )}

      <Bar_vkusno
        states={vkusno.states}
        handlers={vkusno.handlers}
        childComps={vkusno.childComps}
        t={vkusno.t}
      />
      <Bar_certs
        states={certs.states}
        handlers={certs.handlers}
        childComps={certs.childComps}
        t={certs.t}
      />
      <Bar_testimonials
        states={testimonials.states}
        handlers={testimonials.handlers}
        childComps={testimonials.childComps}
        t={testimonials.t}
      />
      <Bar_cta
        states={cta.states}
        handlers={cta.handlers}
        childComps={cta.childComps}
        t={cta.t}
      />

      <ContactSection />
    </main>
  );
};

export default Bar;
